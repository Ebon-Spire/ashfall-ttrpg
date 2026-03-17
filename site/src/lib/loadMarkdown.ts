import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import { marked } from 'marked';
import { parse as parseYaml } from './yaml-lite';

/** Resolve a repo-root-relative path to an absolute path. */
function repoPath(relativePath: string): string {
  const root = resolve(process.cwd(), '..');
  return resolve(root, relativePath);
}

/** Split raw markdown into { frontmatter, body }. */
function splitFrontmatter(raw: string): { frontmatter: string | null; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (match) {
    return { frontmatter: match[1], body: match[2] };
  }
  return { frontmatter: null, body: raw };
}

/** Game terms that should auto-link to their definition pages. */
const TERM_LINKS: Record<string, string> = {
  // Conditions
  'Blinded': '/rules/conditions/',
  'Bleeding': '/rules/conditions/',
  'Charmed': '/rules/conditions/',
  'Confused': '/rules/conditions/',
  'Dazed': '/rules/conditions/',
  'Deafened': '/rules/conditions/',
  'Exhaustion': '/rules/conditions/',
  'Flat-Footed': '/rules/conditions/',
  'Frightened': '/rules/conditions/',
  'Grappled': '/rules/conditions/',
  'Incapacitated': '/rules/conditions/',
  'Incorporeal': '/rules/conditions/',
  'Invisible': '/rules/conditions/',
  'Paralyzed': '/rules/conditions/',
  'Petrified': '/rules/conditions/',
  'Poisoned': '/rules/conditions/',
  'Prone': '/rules/conditions/',
  'Restrained': '/rules/conditions/',
  'Slowed': '/rules/conditions/',
  'Stunned': '/rules/conditions/',
  'Unconscious': '/rules/conditions/',
  'Weakened': '/rules/conditions/',
  // Core mechanics
  'Burnout': '/rules/magic/#burnout-mechanics',
  'Twilight Event': '/rules/magic/#twilight-events-critical-overcasting-failures',
  'Sigil System': '/rules/magic/#the-sigil-system--modular-spell-crafting',
  'Bounded Accuracy': '/rules/introduction/',
  'Defense Value': '/rules/combat/',
  'Multiple Attack Penalty': '/rules/combat/',
  'Advantage': '/rules/introduction/',
  'Disadvantage': '/rules/introduction/',
  'Temporary HP': '/rules/combat/',
  'Concentration': '/rules/magic/#concentration',
  'Lingering Injury': '/rules/exploration/',
  'Overcasting': '/rules/magic/#overcasting-procedure',
  // Resources
  'Spell Slots': '/rules/magic/',
  'Hit Dice': '/rules/exploration/',
  'Advancement Points': '/rules/progression/',
  // Rest economy
  'Short Rest': '/rules/exploration/',
  'Long Rest': '/rules/exploration/',
  // Equipment
  'Augmentation': '/rules/equipment/#augmentations',
  'Humanity': '/rules/equipment/#humanity-threshold-effects',
};

/** Build a regex that matches any game term (longest first to avoid partial matches). */
const termPattern = Object.keys(TERM_LINKS)
  .sort((a, b) => b.length - a.length)
  .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  .join('|');
const termRegex = new RegExp(`\\b(${termPattern})\\b`, 'g');

/**
 * Post-process rendered HTML:
 * 1. Add callout classes to blockquotes based on content
 * 2. Convert action cost text to styled badges
 * 3. Auto-link game terms to their definition pages
 */
function postProcessHtml(html: string): string {
  // 1. Callout boxes: detect blockquotes starting with bold keywords
  html = html.replace(
    /<blockquote>\s*<p><strong>(Example|GM Note|Rule|Advanced|Warning|Important)[:.]?<\/strong>/gi,
    (match, type) => {
      const cls = type.toLowerCase().replace(/\s+/g, '-');
      const mapped = cls === 'important' ? 'rule' : cls === 'gm-note' ? 'gm' : cls;
      return `<blockquote class="callout-${mapped}"><p><strong>${type}:</strong>`;
    }
  );

  // 2. Action cost badges: flexible detection of action costs in parentheticals
  // Matches (1 Action), (1 Action, 1/Short Rest), (At-Will, 1 Action), etc.
  // Extracts the action type and renders a badge, preserving other info as text
  html = html.replace(
    /\(([^)]*?\b(?:1 [Aa]ction|2 [Aa]ctions?|3 [Aa]ctions?|[Rr]eaction|[Ff]ree(?: [Aa]ction)?|[Pp]assive|[Aa]t-[Ww]ill)\b[^)]*?)\)/g,
    (match, inner) => {
      let badge = '';
      const rest: string[] = [];

      // Extract the action type
      if (/\b1 [Aa]ction/i.test(inner)) {
        badge = '<span class="action-badge action-badge-1">1 Action</span>';
      } else if (/\b2 [Aa]ctions?/i.test(inner)) {
        badge = '<span class="action-badge action-badge-2">2 Actions</span>';
      } else if (/\b3 [Aa]ctions?/i.test(inner)) {
        badge = '<span class="action-badge action-badge-3">3 Actions</span>';
      } else if (/\b[Rr]eaction\b/i.test(inner)) {
        badge = '<span class="action-badge action-badge-reaction">Reaction</span>';
      } else if (/\b[Aa]t-[Ww]ill\b/i.test(inner)) {
        badge = '<span class="action-badge action-badge-free">At-Will</span>';
      } else if (/\b[Ff]ree/i.test(inner)) {
        badge = '<span class="action-badge action-badge-free">Free</span>';
      } else if (/\b[Pp]assive/i.test(inner)) {
        badge = '<span class="action-badge action-badge-passive">Passive</span>';
      }

      // Collect remaining text (frequency, conditions, etc.)
      const remaining = inner
        .replace(/\b1 [Aa]ction\b/i, '')
        .replace(/\b2 [Aa]ctions?\b/i, '')
        .replace(/\b3 [Aa]ctions?\b/i, '')
        .replace(/\b[Rr]eaction\b/i, '')
        .replace(/\b[Aa]t-[Ww]ill\b/i, '')
        .replace(/\b[Ff]ree(?: [Aa]ction)?\b/i, '')
        .replace(/\b[Pp]assive(?: [Tt]rigger| [Oo]ption| [Ff]eature| [Ee]nhancement| [Dd]amage [Bb]oost| & [Ii]nitiative [Bb]onus)?\b/i, '')
        .replace(/^[\s,]+|[\s,]+$/g, '')
        .trim();

      if (remaining) {
        return `${badge} <span class="action-meta">(${remaining})</span>`;
      }
      return badge;
    }
  );

  // Also catch standalone non-standard badges that didn't match above
  // (1/Short Rest), (1/Long Rest), (Daily Ability), etc. — render as muted meta text
  html = html.replace(
    /\((1\/(?:Short|Long) Rest[^)]*)\)/gi,
    '<span class="action-meta">($1)</span>'
  );

  // 2b. Convert "Action Cost:" labeled lines into inline badges
  // Matches: <strong>Action Cost:</strong> 1 action / Reaction / Free action / etc.
  html = html.replace(
    /<strong>Action Cost:<\/strong>\s*(.*?)(?:<\/p>|<br>)/gi,
    (match, cost) => {
      const cleaned = cost.trim().replace(/<\/?[^>]+>/g, '');
      let badge = '';
      if (/1 action/i.test(cleaned)) badge = '<span class="action-badge action-badge-1">1 Action</span>';
      else if (/2 action/i.test(cleaned)) badge = '<span class="action-badge action-badge-2">2 Actions</span>';
      else if (/reaction/i.test(cleaned)) badge = '<span class="action-badge action-badge-reaction">Reaction</span>';
      else if (/free/i.test(cleaned)) badge = '<span class="action-badge action-badge-free">Free</span>';
      else if (/passive/i.test(cleaned)) badge = '<span class="action-badge action-badge-passive">Passive</span>';
      else badge = `<span class="action-meta">(${cleaned})</span>`;
      return badge + '</p>';
    }
  );

  // 2c. Convert "As 1 action" / "As a reaction" in descriptions to badges
  html = html.replace(/\bAs 1 action\b/gi, '<span class="action-badge action-badge-1">1 Action</span>');
  html = html.replace(/\bAs 2 actions?\b/gi, '<span class="action-badge action-badge-2">2 Actions</span>');
  html = html.replace(/\bAs a reaction\b/gi, '<span class="action-badge action-badge-reaction">Reaction</span>');

  // 3. Auto-link game terms (only in paragraph text, not in headings or links)
  // Split on HTML tags to avoid modifying tag attributes or existing links
  html = html.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) return tag; // Don't modify HTML tags
    if (!text) return match;
    // Don't link inside headings (already processed) or if surrounded by link tags
    return text.replace(termRegex, (term: string) => {
      const href = TERM_LINKS[term];
      if (href) {
        return `<a href="${href}" class="term-link">${term}</a>`;
      }
      return term;
    });
  });

  return html;
}

/**
 * Load and render a markdown file from the repo root.
 * Returns HTML string (strips frontmatter before rendering).
 * Applies post-processing: callout boxes, action badges, and term auto-linking.
 */
export function loadRule(relativePath: string): string {
  const filePath = repoPath(relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const { body } = splitFrontmatter(raw);
  const html = marked.parse(body) as string;
  return postProcessHtml(html);
}

/**
 * Extract the title from a markdown file's first # heading.
 */
export function extractTitle(relativePath: string): string {
  const filePath = repoPath(relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const { body } = splitFrontmatter(raw);
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : relativePath;
}

export interface RulePage {
  /** URL slug relative to /rules/ (e.g., 'combat', 'classes/warrior') */
  slug: string;
  /** Title extracted from first # heading */
  title: string;
  /** Path to load with loadRule() (e.g., 'rules/combat.md') */
  mdPath: string;
}

/**
 * Discover all rule markdown files and return page metadata.
 * Used by the catch-all route to auto-generate pages.
 */
export function discoverRulePages(): RulePage[] {
  const rulesDir = repoPath('rules');
  const pages: RulePage[] = [];

  function walk(dir: string) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (entry.endsWith('.md')) {
        const relPath = relative(repoPath(''), fullPath);
        // Compute slug: strip 'rules/' prefix and '.md' suffix
        let slug = relative(rulesDir, fullPath).replace(/\.md$/, '');
        // Convert 'foo/index' to 'foo'
        slug = slug.replace(/\/index$/, '').replace(/^index$/, '');
        // Skip empty slug (rules/index.md is handled by index.astro)
        if (!slug) continue;

        const title = extractTitle(relPath);
        pages.push({ slug, title, mdPath: relPath });
      }
    }
  }

  walk(rulesDir);
  return pages;
}

/**
 * Load a markdown file and return both parsed frontmatter data and HTML.
 */
export function loadRuleData<T = Record<string, unknown>>(relativePath: string): { data: T; html: string } {
  const filePath = repoPath(relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = splitFrontmatter(raw);
  const data = frontmatter ? (parseYaml(frontmatter) as T) : ({} as T);
  const html = postProcessHtml(marked.parse(body) as string);
  return { data, html };
}
