import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  absoluteUrl,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildRouteInventory,
  extractFaqItems,
  plainText,
} from './seo.js';

test('absoluteUrl normalizes canonical paths against the site origin', () => {
  assert.equal(absoluteUrl('/pricing'), 'https://enigmavisibility.com/pricing');
  assert.equal(absoluteUrl('blog/geo-aeo-vs-seo'), 'https://enigmavisibility.com/blog/geo-aeo-vs-seo');
  assert.equal(absoluteUrl('https://example.com/x'), 'https://example.com/x');
});

test('plainText removes inline source markers and collapses whitespace', () => {
  assert.equal(
    plainText('Теза [Джерело 65, 68]\n  з доказом.'),
    'Теза з доказом.',
  );
});

test('extractFaqItems maps only visible FAQ list sections', () => {
  const items = extractFaqItems([
    { type: 'heading', text: 'Джерела' },
    { type: 'list', items: [{ title: '65 · Google', desc: 'source' }] },
    { type: 'heading', text: 'Часті питання' },
    {
      type: 'list',
      items: [
        { title: 'Що таке GEO?', desc: 'GEO — оптимізація видимості в генеративних відповідях.' },
        { title: 'Чи є гарантія?', desc: 'Ні, inclusion залишається ймовірнісним.' },
      ],
    },
  ]);

  assert.deepEqual(items, [
    { question: 'Що таке GEO?', answer: 'GEO — оптимізація видимості в генеративних відповідях.' },
    { question: 'Чи є гарантія?', answer: 'Ні, inclusion залишається ймовірнісним.' },
  ]);
});

test('schema builders include canonical ids and visible FAQ content', () => {
  const organization = buildOrganizationSchema();
  const article = buildArticleSchema({
    path: '/blog/geo-aeo-vs-seo',
    title: 'GEO / AEO vs SEO',
    description: 'Definitions and boundaries.',
    lang: 'uk',
    datePublished: '2026-05-01',
    dateModified: '2026-06-26',
  });
  const faq = buildFaqSchema([
    { question: 'Що таке GEO?', answer: 'GEO — оптимізація видимості в генеративних відповідях.' },
  ]);
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'GEO / AEO vs SEO', path: '/blog/geo-aeo-vs-seo' },
  ], 'uk');

  assert.equal(organization['@id'], 'https://enigmavisibility.com/#organization');
  assert.equal(organization.legalName, 'Enigma Labs Inc.');
  assert.ok(organization.knowsAbout.includes('Generative Engine Optimization'));
  // Non-default languages live under a path prefix, so their schema URLs must too.
  assert.equal(article['@id'], 'https://enigmavisibility.com/uk/blog/geo-aeo-vs-seo#article');
  assert.equal(article.mainEntityOfPage['@id'], 'https://enigmavisibility.com/uk/blog/geo-aeo-vs-seo');
  assert.equal(article.inLanguage, 'uk');
  assert.equal(faq.mainEntity[0].name, 'Що таке GEO?');
  const enArticle = buildArticleSchema({ path: '/blog/geo-aeo-vs-seo', lang: 'en' });
  assert.equal(enArticle['@id'], 'https://enigmavisibility.com/blog/geo-aeo-vs-seo#article');
  assert.equal(breadcrumb.itemListElement[2].item, 'https://enigmavisibility.com/uk/blog/geo-aeo-vs-seo');
});

test('buildRouteInventory includes product, solution, resource, chapter, article, and blog routes', () => {
  const routes = buildRouteInventory({
    products: [{ path: '/product/axp' }],
    solutions: [{ path: '/solutions/b2b-saas' }],
    resources: [{ path: '/resources/geo-playbook' }],
    chapters: [{ slug: 'geo-aeo-vs-seo' }],
    articles: [{ slug: 'ai-bots-robots-txt' }],
    blogPosts: [{ slug: 'zero-click-business-risk' }],
  });

  assert.deepEqual(routes.map((route) => route.path), [
    '/',
    '/pricing',
    '/blog',
    '/product/axp',
    '/solutions/b2b-saas',
    '/resources/geo-playbook',
    '/resources/geo-playbook/geo-aeo-vs-seo',
    '/resources/research-lab/ai-bots-robots-txt',
    '/blog/zero-click-business-risk',
  ]);
});
