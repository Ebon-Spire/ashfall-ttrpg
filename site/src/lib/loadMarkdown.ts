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

/** Game terms with definitions for tooltips and links to full pages. */
const TERM_DATA: Record<string, { href: string; tip: string }> = {
  // Conditions
  'Blinded': { href: '/rules/conditions/', tip: 'Cannot see. Auto-fail sight checks. Attacks have disadvantage, attacks against you have advantage.' },
  'Bleeding': { href: '/rules/conditions/', tip: 'Take 1d4 damage at the start of each turn. Ends on successful DC 12 Medicine check or magical healing.' },
  'Charmed': { href: '/rules/conditions/', tip: 'Cannot attack the charmer. Charmer has advantage on social checks against you.' },
  'Confused': { href: '/rules/conditions/', tip: 'Roll d4 each turn: 1 = do nothing, 2 = move randomly, 3 = attack nearest, 4 = act normally.' },
  'Dazed': { href: '/rules/conditions/', tip: 'Can take actions OR move (not both). No reactions. Disadvantage on attacks.' },
  'Deafened': { href: '/rules/conditions/', tip: 'Cannot hear. Auto-fail hearing checks. -10 Passive Perception.' },
  'Exhaustion': { href: '/rules/conditions/', tip: '6 levels. L1: disadvantage on checks. L3: max HP reduced 25%. L6: death. Short rest removes L1-2 only.' },
  'Flat-Footed': { href: '/rules/conditions/', tip: '-2 to DV. Cannot use reactions. Ends at the start of your next turn.' },
  'Frightened': { href: '/rules/conditions/', tip: 'Disadvantage on checks/attacks while source is visible. Cannot willingly move closer to the source.' },
  'Grappled': { href: '/rules/conditions/', tip: 'Speed is 0. Can escape with MIG or AGI check vs grappler\'s MIG check.' },
  'Incapacitated': { href: '/rules/conditions/', tip: 'Cannot take actions or reactions. Automatically fail MIG and AGI saves.' },
  'Incorporeal': { href: '/rules/conditions/', tip: 'Can move through solid objects. Resistance to non-magical physical damage.' },
  'Invisible': { href: '/rules/conditions/', tip: 'Cannot be seen without special senses. Attacks against you have disadvantage, your attacks have advantage.' },
  'Paralyzed': { href: '/rules/conditions/', tip: 'Incapacitated. Auto-fail MIG/AGI saves. Attacks have advantage. Melee hits within 5 ft auto-crit.' },
  'Petrified': { href: '/rules/conditions/', tip: 'Turned to stone. Weight x10. Immune to poison/disease. Resistance to all damage.' },
  'Poisoned': { href: '/rules/conditions/', tip: 'Disadvantage on attack rolls and ability checks.' },
  'Prone': { href: '/rules/conditions/', tip: 'Melee attacks against you have advantage. Ranged attacks have disadvantage. Standing costs half your movement.' },
  'Restrained': { href: '/rules/conditions/', tip: 'Speed is 0. Attacks against you have advantage. Your attacks and AGI saves have disadvantage.' },
  'Slowed': { href: '/rules/conditions/', tip: 'Speed halved. Disadvantage on AGI saves. No reactions.' },
  'Stunned': { href: '/rules/conditions/', tip: 'Incapacitated. Cannot move. Can only speak falteringly. Auto-fail MIG/AGI saves.' },
  'Unconscious': { href: '/rules/conditions/', tip: 'Incapacitated, drop what you\'re holding, fall prone. Auto-fail MIG/AGI saves. Melee auto-crits.' },
  'Weakened': { href: '/rules/conditions/', tip: 'Deal half damage with weapon attacks. Disadvantage on MIG checks and saves.' },
  // Core mechanics
  'Burnout': { href: '/rules/magic/#burnout-mechanics', tip: 'Accumulated magical strain. At 9+ BP: Exhaustion. At 12+: unconscious + reset. At 20+: permanent consequences.' },
  'Twilight Event': { href: '/rules/magic/#twilight-events-critical-overcasting-failures', tip: 'Catastrophic magical failure. Reality warps. Roll d10: wild surge, backlash, reality tear, or worse.' },
  'Sigil System': { href: '/rules/magic/#the-sigil-system--modular-spell-crafting', tip: 'Modular spell crafting: Cantrip + Form + Metamagic = Spell Level. Build any spell from components.' },
  'Bounded Accuracy': { href: '/rules/introduction/', tip: 'Max bonus cap of +18. Threats remain dangerous at every level.' },
  'Defense Value': { href: '/rules/combat/', tip: 'DV = 10 + AGI mod + armor bonus + shield bonus. The target number to hit a creature.' },
  'Multiple Attack Penalty': { href: '/rules/combat/', tip: 'Each additional Strike in a turn: -3 cumulative. 1st +0, 2nd -3, 3rd -6.' },
  'Advantage': { href: '/rules/introduction/', tip: 'Roll d20 twice, take the higher result. Worth roughly +3.33 on average.' },
  'Disadvantage': { href: '/rules/introduction/', tip: 'Roll d20 twice, take the lower result. Worth roughly -3.33 on average.' },
  'Temporary HP': { href: '/rules/combat/', tip: 'Absorbs damage before real HP. Doesn\'t stack — take the higher value. Lost first, then real HP.' },
  'Concentration': { href: '/rules/magic/#concentration', tip: 'Only one concentration spell at a time. Taking damage requires Will save (DC 10 or half damage).' },
  'Lingering Injury': { href: '/rules/exploration/', tip: 'Permanent wound from dropping to 0 HP. Roll d100 with severity modifier. Half-recovery at half time.' },
  'Overcasting': { href: '/rules/magic/#overcasting-procedure', tip: 'Casting without a spell slot. Gain Burnout = spell level, then make a casting check or face consequences.' },
  // Resources
  'Spell Slots': { href: '/rules/magic/', tip: 'Limited magical energy. Recovered on long rest (1 week). Power cantrips or cast leveled spells.' },
  'Hit Dice': { href: '/rules/exploration/', tip: 'Recover half your level in HD on a short rest. Roll to heal during rest.' },
  'Advancement Points': { href: '/rules/progression/', tip: 'AP spent on skill tree features. 15 at L1, +10 per level. Cross-training costs 1.5x.' },
  // Rest economy
  'Short Rest': { href: '/rules/exploration/', tip: '8 hours. Recover half-level Hit Dice, per-short-rest abilities, remove Exhaustion 1-2.' },
  'Long Rest': { href: '/rules/exploration/', tip: '1 week in a safe settlement. Full recovery. 5 downtime activity days included.' },
  // Equipment
  'Augmentation': { href: '/rules/equipment/#augmentations', tip: 'Cybernetic enhancement. Costs Humanity (reduces magic potential). Synthetics install free.' },
  'Humanity': { href: '/rules/equipment/#humanity-threshold-effects', tip: 'Starts at 10. Each augmentation reduces it. Low Humanity = social penalties + reduced magic. Synthetics = 0.' },
};

/** Build a regex that matches any game term (longest first to avoid partial matches). */
const termPattern = Object.keys(TERM_DATA)
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
      const data = TERM_DATA[term];
      if (data) {
        const escapedTip = data.tip.replace(/"/g, '&quot;');
        return `<span class="term-tooltip" data-tooltip="${escapedTip}"><a href="${data.href}" class="term-link">${term}</a></span>`;
      }
      return term;
    });
  });

  // 4. Ability card wrapping: wrap <p> with action badge + following <ul>/<ol> into a card div
  // Split HTML into segments and only wrap <p> that are NOT inside <li>
  const lines = html.split('\n');
  let insideLi = 0;
  const result: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Track li nesting depth
    const liOpens = (line.match(/<li/g) || []).length;
    const liCloses = (line.match(/<\/li/g) || []).length;
    insideLi += liOpens - liCloses;

    if (insideLi > 0 || !line.includes('action-badge') || !line.match(/^<p><strong>/)) {
      result.push(line);
      continue;
    }

    // This is a standalone <p> with an action badge — wrap it
    // Check if next line is a <ul> to include it in the card
    const nextLine = lines[i + 1] || '';
    if (nextLine.match(/^<ul>/)) {
      // Find the end of the <ul>
      let ulEnd = i + 1;
      let depth = 1;
      while (ulEnd < lines.length - 1 && depth > 0) {
        ulEnd++;
        depth += (lines[ulEnd].match(/<ul/g) || []).length;
        depth -= (lines[ulEnd].match(/<\/ul/g) || []).length;
      }
      // Wrap the <p> and entire <ul> block
      result.push(`<div class="ability-card">${line}`);
      for (let j = i + 1; j <= ulEnd; j++) {
        result.push(lines[j]);
      }
      result.push('</div>');
      i = ulEnd; // skip the lines we just consumed
    } else {
      result.push(`<div class="ability-card">${line}</div>`);
    }
  }
  html = result.join('\n');

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
