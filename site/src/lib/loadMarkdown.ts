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

/**
 * Load and render a markdown file from the repo root.
 * Returns HTML string (strips frontmatter before rendering).
 */
export function loadRule(relativePath: string): string {
  const filePath = repoPath(relativePath);
  const raw = readFileSync(filePath, 'utf-8');
  const { body } = splitFrontmatter(raw);
  return marked.parse(body) as string;
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
  const html = marked.parse(body) as string;
  return { data, html };
}
