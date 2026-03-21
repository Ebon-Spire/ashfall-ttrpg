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
  'Blinded': { href: '/rules/conditions/', tip: 'Cannot see. Auto-fail sight-based checks. Attacks have disadvantage, attacks against you have advantage. -10 to Passive Perception.' },
  'Bleeding': { href: '/rules/conditions/', tip: 'Take 1d4 damage at the start of each turn. Ends on successful DC 12 Medicine check or magical healing.' },
  'Charmed': { href: '/rules/conditions/', tip: 'Cannot attack or target charmer with harmful effects. Charmer has advantage on social checks. Ends if charmer\'s side harms you, or after 24 hrs.' },
  'Confused': { href: '/rules/conditions/', tip: 'Roll d4 each turn: 1 = move randomly, 2 = do nothing, 3 = attack nearest, 4 = act normally. Cannot take reactions.' },
  'Dazed': { href: '/rules/conditions/', tip: 'Can take actions OR move (not both). No reactions. Disadvantage on attacks.' },
  'Deafened': { href: '/rules/conditions/', tip: 'Cannot hear. Auto-fail hearing checks. -10 Passive Perception.' },
  'Exhaustion': { href: '/rules/conditions/', tip: '6 cumulative levels. L1: disadvantage on checks, -5 ft speed. L2: +disadvantage on attacks. L3: +disadvantage on saves, max HP -25%. L4: movement halved, no reactions, max HP -50%. L5: speed 5 ft, no concentration, max HP -75%. L6: death. Short rest removes L1-2 only.' },
  'Flat-Footed': { href: '/rules/conditions/', tip: 'Lose AGI bonus to DV. Cannot use reactions.' },
  'Frightened': { href: '/rules/conditions/', tip: 'Disadvantage on checks/attacks while source is visible. -2 to DV. Cannot willingly move closer to source.' },
  'Grappled': { href: '/rules/conditions/', tip: 'Speed is 0. Escape: 1 action, Athletics or Acrobatics vs grappler\'s Athletics.' },
  'Incapacitated': { href: '/rules/conditions/', tip: 'Cannot take actions or reactions. Lose concentration on spells.' },
  'Incorporeal': { href: '/rules/conditions/', tip: 'Immunity to non-magical physical damage. Can move through solid objects (treated as difficult terrain). Cannot interact with physical objects. End turn inside a solid object: 1d10 force damage. Magical/force damage affects normally.' },
  'Invisible': { href: '/rules/conditions/', tip: 'Cannot be seen without special senses. Attacks against you have disadvantage, your attacks have advantage.' },
  'Paralyzed': { href: '/rules/conditions/', tip: 'Incapacitated. Auto-fail MIG/AGI saves. Attacks have advantage. Melee hits within 5 ft auto-crit.' },
  'Petrified': { href: '/rules/conditions/', tip: 'Turned to stone. Incapacitated, can\'t move or speak. Unaware of surroundings. Resistance to all damage. Immune to poison/disease. Weight x10.' },
  'Poisoned': { href: '/rules/conditions/', tip: 'Disadvantage on attack rolls and ability checks.' },
  'Prone': { href: '/rules/conditions/', tip: 'Can only crawl (half speed) or stand (1 action). Disadvantage on attacks. Melee attacks against you have advantage, ranged have disadvantage.' },
  'Restrained': { href: '/rules/conditions/', tip: 'Speed is 0. Attacks against you have advantage. Your attacks and AGI saves have disadvantage.' },
  'Slowed': { href: '/rules/conditions/', tip: 'Speed halved. Disadvantage on AGI saves. No reactions.' },
  'Stunned': { href: '/rules/conditions/', tip: 'Incapacitated. Cannot move. Can only speak falteringly. Auto-fail MIG/AGI saves. Attacks against you have advantage.' },
  'Unconscious': { href: '/rules/conditions/', tip: 'Incapacitated, drop what you\'re holding, fall prone. Auto-fail MIG/AGI saves. Attacks have advantage. Melee hits within 5 ft auto-crit.' },
  'Weakened': { href: '/rules/conditions/', tip: 'Disadvantage on all attack rolls. Disadvantage on MIG checks and saves. Carrying capacity halved.' },
  'Addicted': { href: '/rules/conditions/', tip: 'Disadvantage on all ability checks until you consume the substance (once per 24 hrs). Cured by Detox item or 1 week abstinence + Fortitude save DC 18.' },
  'Burning': { href: '/rules/conditions/', tip: 'Take 1d6 fire damage at turn start. Fortitude save at turn end (or 1 action) to extinguish. Doesn\'t stack — use higher damage/DC from overlapping sources.' },
  'Buried': { href: '/rules/conditions/', tip: 'Restrained, blinded, deafened, can\'t breathe; 1d6 bludgeoning damage/turn. 2 actions + Athletics DC 15 to escape. Leads to Suffocating when breath runs out.' },
  'Diseased': { href: '/rules/conditions/', tip: 'Variable effects by disease severity (Mild/Moderate/Severe). Fortitude save each long rest: 3 consecutive successes cure; failures worsen severity.' },
  'Dying': { href: '/rules/conditions/', tip: '0 HP, Unconscious. Death saves each turn: 3 successes = Stabilized, 3 failures = death. Any healing ends Dying immediately.' },
  'Shaken': { href: '/rules/conditions/', tip: 'Minor fear. Disadvantage on Will saves; cannot move closer to source. Removed by any effect that removes Frightened.' },
  'Stabilized': { href: '/rules/conditions/', tip: 'Unconscious at 0 HP; no longer making death saves. Regain 1 HP after 1d4 hours; wake with the Wounded condition.' },
  'Traumatized': { href: '/rules/conditions/', tip: 'Gained at Stress 5. Will save DC 12 near trauma trigger: failure = Frightened 1 round + lose 1 action. Requires narrative resolution or downtime to remove.' },
  'Suffocating': { href: '/rules/conditions/', tip: 'Fortitude saves (DC 12, +2 per failure): 1d8 damage + Dazed on fail. Third failure = Drowning (in water) or Unconscious. Ends when you can breathe.' },
  'Wounded': { href: '/rules/conditions/', tip: '-2 to all attack rolls, -1 DV, disadvantage on MIG/AGI checks. Gained when dropping to 0 HP. Removed by Medicine check DC 15 on a short rest.' },
  'Drowning': { href: '/rules/conditions/', tip: 'Incapacitated, speed 0, sink 10 ft/turn; 2d6 unresistable damage/turn. At 0 HP, automatically fail a death save each turn. Ends when you can breathe.' },
  'Irradiated': { href: '/rules/conditions/', tip: '4-level radiation exposure. L1: disadvantage on END checks/saves. L2: max HP −10%, disadvantage on all ability checks. L3: max HP −25%, disadvantage on attacks, 1 Exhaustion/day. L4: max HP −50%, 1d6 necrotic/hour, death in 72 hrs without treatment.' },
  // Core mechanics
  'Burnout': { href: '/rules/magic/#burnout-mechanics', tip: 'Accumulated magical strain. At 9+ BP: cantrips only, gain 1 Exhaustion. At 12+: unconscious 1d4 hrs, gain 2 Exhaustion, BP reset to 0. At 20+: risk of permanent magic loss.' },
  'Twilight Event': { href: '/rules/magic/#twilight-events-critical-overcasting-failures', tip: 'Catastrophic magical failure. Reality warps. Roll d10: wild surge, backlash, reality tear, or worse.' },
  'Sigil System': { href: '/rules/magic/#the-sigil-system--modular-spell-crafting', tip: 'Modular spell crafting: Cantrip + Form + Metamagic = Spell Level. Build any spell from components.' },
  'Bounded Accuracy': { href: '/rules/introduction/', tip: 'Max bonus cap of +14 (core), +18 at mythic tier. Threats remain dangerous at every level.' },
  'Defense Value': { href: '/rules/combat/', tip: 'DV = 10 + AGI mod + armor bonus + shield + misc. The target number to hit a creature.' },
  'Multiple Attack Penalty': { href: '/rules/combat/', tip: 'Each additional Strike in a turn: -3 cumulative. 1st +0, 2nd -3, 3rd -6.' },
  'Advantage': { href: '/rules/introduction/', tip: 'Roll d20 twice, take the higher result. Worth roughly +3.33 on average.' },
  'Disadvantage': { href: '/rules/introduction/', tip: 'Roll d20 twice, take the lower result. Worth roughly -3.33 on average.' },
  'Temporary HP': { href: '/rules/combat/', tip: 'Absorbs damage before real HP. Doesn\'t stack — take the higher value. Can\'t be healed, only refreshed. Exception: Arcane Ward stacks with itself.' },
  'Concentration': { href: '/rules/magic/#concentration', tip: 'Only one concentration spell at a time. Taking damage requires Will save (DC 10 or half damage, whichever is higher).' },
  'Free Action': { href: '/rules/combat/', tip: 'Does not consume any of your 3 actions. Minor, instant activities (speak, drop item, fall prone) at GM discretion. Not part of the action economy.' },
  'Lingering Injury': { href: '/rules/exploration/', tip: 'Wound from dropping to 0 HP or taking ≥50% max HP in one hit. Roll d100 with severity modifier. Recovery times vary by injury.' },
  'Overcasting': { href: '/rules/magic/#overcasting-procedure', tip: 'Casting without a spell slot. Gain Burnout = spell level, then make a casting check or face consequences.' },
  // Resources
  'Spell Slots': { href: '/rules/magic/', tip: 'Limited magical energy. Recovered on long rest (1 week). Power cantrips or cast leveled spells.' },
  'Hit Dice': { href: '/rules/exploration/', tip: 'Recover half your level in HD on a short rest. Roll to heal during rest.' },
  'Character Points': { href: '/rules/character-points/', tip: 'CP spent on skill tree features. 15 at L1, +10 per level. Spend on any shared skill tree from Level 1.' },
  // Rest economy
  'Short Rest': { href: '/rules/exploration/', tip: '8 hours. Recover half-level Hit Dice, 1 spell slot (3rd or lower), per-short-rest abilities. Remove 1 Burnout Point. Remove Exhaustion 1-2 only.' },
  'Long Rest': { href: '/rules/exploration/', tip: '1 week in a safe settlement. Full recovery. 5 downtime activity days included.' },
  // Equipment
  'Augmentation': { href: '/rules/equipment/#augmentations', tip: 'Cybernetic enhancement. Costs Humanity (social penalties scale; lose spellcasting at 0). Synthetics install free.' },
  'Humanity': { href: '/rules/equipment/#humanity-threshold-effects', tip: 'Starts at 10. Each augmentation reduces it. Low Humanity = scaling PRE penalties. At 0: no spellcasting. Synthetics = 0.' },
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

  // 3. Auto-link game terms only in paragraph text — skip inside <a> or <h1>–<h6> elements
  // Split on HTML tags to track element context and avoid modifying tag attributes
  let insideLink = false;
  let insideHeading = false;
  html = html.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) {
      if (/^<a[\s>]/i.test(tag)) insideLink = true;
      else if (/^<\/a>/i.test(tag)) insideLink = false;
      else if (/^<h[1-6][\s>]/i.test(tag)) insideHeading = true;
      else if (/^<\/h[1-6]>/i.test(tag)) insideHeading = false;
      return tag;
    }
    if (!text) return match;
    if (insideLink || insideHeading) return text;
    return text.replace(termRegex, (term: string) => {
      const data = TERM_DATA[term];
      if (data) {
        const escapedTip = data.tip.replace(/"/g, '&quot;');
        return `<span class="term-tooltip" data-tooltip="${escapedTip}"><a href="${data.href}" class="term-link">${term}</a></span>`;
      }
      return term;
    });
  });

  // 4. Ability card wrapping — unified approach
  // Convert ALL ability entries (both <li> and <p> with action badges) into
  // <div class="ability-card"> blocks. This guarantees consistent styling
  // regardless of markdown source formatting.

  // 4a. Convert <li> entries with action badges OR action-meta into ability-card divs
  // Matches: <li><p><strong>Name <badge>...</strong>...</p></li>
  // or:      <li><strong>Name <badge>...</strong>...</li>
  html = html.replace(
    /<li>\s*(<p>)?\s*(<strong>(?:(?!<\/li>).)*?(?:action-badge|action-meta)[\s\S]*?)<\/li>/g,
    (match, pTag) => {
      // Extract the inner content, stripping the outer <li> tags
      let inner = match.replace(/^<li>\s*/, '').replace(/<\/li>$/, '');
      return `<div class="ability-card">${inner}</div>`;
    }
  );

  // Clean up: <ul> that now contain only ability-card divs (and maybe whitespace/other divs) should become plain containers
  html = html.replace(/<ul>\s*((?:<div class="ability-card">[\s\S]*?<\/div>\s*)+)<\/ul>/g,
    '<div class="ability-list">$1</div>'
  );

  // 4b. Wrap standalone <p> with action badge + optional following <ul>
  const lines = html.split('\n');
  const result: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip if already inside an ability-card or ability-list
    if (line.includes('ability-card') || line.includes('ability-list')) {
      result.push(line);
      continue;
    }

    if ((!line.includes('action-badge') && !line.includes('action-meta')) || !line.match(/^<p><strong>/)) {
      result.push(line);
      continue;
    }

    // Standalone <p> with badge — check if next line is a <ul>
    const nextLine = lines[i + 1] || '';
    if (nextLine.match(/^<ul>/)) {
      let ulEnd = i + 1;
      let depth = 1;
      while (ulEnd < lines.length - 1 && depth > 0) {
        ulEnd++;
        depth += (lines[ulEnd].match(/<ul/g) || []).length;
        depth -= (lines[ulEnd].match(/<\/ul/g) || []).length;
      }
      result.push(`<div class="ability-card">${line}`);
      for (let j = i + 1; j <= ulEnd; j++) {
        result.push(lines[j]);
      }
      result.push('</div>');
      i = ulEnd;
    } else {
      result.push(`<div class="ability-card">${line}</div>`);
    }
  }
  html = result.join('\n');

  return html;
}

/**
 * Rewrite relative .md hrefs in rendered HTML to absolute site URLs.
 * e.g., href="crafting.md"          → href="/rules/crafting/"
 *       href="../chassis.md"         → href="/rules/chassis/"
 *       href="hacking.md#combat"     → href="/rules/hacking/#combat"
 *       href="../classes/technician.md" → href="/rules/classes/technician/"
 */
function rewriteMdLinks(html: string, mdPath: string): string {
  // Determine the subdirectory of this file within rules/
  // mdPath examples: 'rules/crafting.md', 'rules/classes/warrior.md'
  const rulesIdx = mdPath.indexOf('rules/');
  const withinRules = rulesIdx >= 0 ? mdPath.slice(rulesIdx + 'rules/'.length) : mdPath;
  const lastSlash = withinRules.lastIndexOf('/');
  const fileSubdir = lastSlash >= 0 ? withinRules.slice(0, lastSlash + 1) : '';
  // fileSubdir: '' for top-level rules files, 'classes/' for class files, etc.

  return html.replace(/href="([^"]*\.md(?:#[^"]*)?)"/g, (_, href) => {
    const hashIdx = href.indexOf('#');
    const pathPart = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
    const fragment = hashIdx >= 0 ? href.slice(hashIdx) : '';

    // Resolve the relative path against the file's subdirectory within rules/
    const parts = (fileSubdir + pathPart).split('/');
    const resolved: string[] = [];
    for (const part of parts) {
      if (part === '..') {
        if (resolved.length > 0) resolved.pop();
      } else if (part !== '.' && part !== '') {
        resolved.push(part);
      }
    }
    const slug = resolved.join('/').replace(/\.md$/, '');
    return `href="/rules/${slug}/${fragment}"`;
  });
}

/**
 * Load and render a markdown file from the repo root.
 * Returns HTML string (strips frontmatter before rendering).
 * Applies post-processing: callout boxes, action badges, term auto-linking,
 * and rewriting of relative .md cross-reference links to site URLs.
 */
export function loadRule(relativePath: string): string {
  const filePath = repoPath(relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const { body } = splitFrontmatter(raw);
  const html = marked.parse(body) as string;
  return rewriteMdLinks(postProcessHtml(html), relativePath);
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
  const html = rewriteMdLinks(postProcessHtml(marked.parse(body) as string), relativePath);
  return { data, html };
}
