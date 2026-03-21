import type { APIRoute } from 'astro';
import { discoverRulePages } from '../lib/loadMarkdown';

const SITE = 'https://ashfallrpg.com';

const staticPages = [
  '',
  'getting-started/',
  'gm-guide/',
  'community/',
  'character-builder/',
  'downloads/',
  'feedback/',
  'rules/',
];

export const GET: APIRoute = () => {
  const rulesSlugs = discoverRulePages().map(page => `rules/${page.slug}/`);

  const allPages = [...staticPages, ...rulesSlugs];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE}/${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('rules/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
