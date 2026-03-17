import type { APIRoute } from 'astro';
import { discoverRulePages } from '../lib/loadMarkdown';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Strip markdown/HTML to plain text for indexing. */
function toPlainText(md: string): string {
  return md
    // Remove frontmatter
    .replace(/^---[\s\S]*?---\n/, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove markdown images
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // Remove markdown links but keep text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Remove heading markers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
    // Remove inline code
    .replace(/`([^`]*)`/g, '$1')
    // Remove blockquote markers
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove table formatting
    .replace(/\|/g, ' ')
    .replace(/^[-:]+$/gm, '')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = () => {
  const root = resolve(process.cwd(), '..');
  const pages = discoverRulePages();

  const index = pages.map((page) => {
    const raw = readFileSync(resolve(root, page.mdPath), 'utf-8');
    const text = toPlainText(raw);

    // Extract section headings for better context
    const headings: string[] = [];
    for (const m of raw.matchAll(/^#{2,3}\s+(.+)$/gm)) {
      headings.push(m[1].trim());
    }

    return {
      slug: page.slug,
      title: page.title,
      headings,
      text: text.slice(0, 3000), // cap per page to keep index reasonable
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
