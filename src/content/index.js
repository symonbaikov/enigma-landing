// Static fallback content — returns translated strings via t(), override via Directus (slug = key name)

export function getProducts(t) {
  const p = (key) => t(`content.products.${key}`, { returnObjects: true });
  return {
    axp: {
      slug: 'product-axp',
      eyebrow:    p('axp.eyebrow'),
      hero_title: p('axp.heroTitle'),
      hero_desc:  p('axp.heroDesc'),
      context:    p('axp.context'),
      steps:      p('axp.steps'),
      features:   p('axp.features'),
      eeat:       p('axp.eeat'),
      faq:        p('axp.faq'),
      cta_title:  p('axp.ctaTitle'),
      cta_desc:   p('axp.ctaDesc'),
    },
    'agent-traffic': {
      slug: 'product-agent-traffic',
      eyebrow:    p('agentTraffic.eyebrow'),
      hero_title: p('agentTraffic.heroTitle'),
      hero_desc:  p('agentTraffic.heroDesc'),
      context:    p('agentTraffic.context'),
      steps:      p('agentTraffic.steps'),
      features:   p('agentTraffic.features'),
      eeat:       p('agentTraffic.eeat'),
      faq:        p('agentTraffic.faq'),
      cta_title:  p('agentTraffic.ctaTitle'),
      cta_desc:   p('agentTraffic.ctaDesc'),
    },
    'site-maps': {
      slug: 'product-site-maps',
      eyebrow:    p('siteMaps.eyebrow'),
      hero_title: p('siteMaps.heroTitle'),
      hero_desc:  p('siteMaps.heroDesc'),
      context:    p('siteMaps.context'),
      steps:      p('siteMaps.steps'),
      features:   p('siteMaps.features'),
      eeat:       p('siteMaps.eeat'),
      faq:        p('siteMaps.faq'),
      cta_title:  p('siteMaps.ctaTitle'),
      cta_desc:   p('siteMaps.ctaDesc'),
    },
    monitoring: {
      slug: 'product-monitoring',
      eyebrow:    p('monitoring.eyebrow'),
      hero_title: p('monitoring.heroTitle'),
      hero_desc:  p('monitoring.heroDesc'),
      context:    p('monitoring.context'),
      steps:      p('monitoring.steps'),
      features:   p('monitoring.features'),
      eeat:       p('monitoring.eeat'),
      faq:        p('monitoring.faq'),
      cta_title:  p('monitoring.ctaTitle'),
      cta_desc:   p('monitoring.ctaDesc'),
    },
    insights: {
      slug: 'product-insights',
      eyebrow:    p('insights.eyebrow'),
      hero_title: p('insights.heroTitle'),
      hero_desc:  p('insights.heroDesc'),
      context:    p('insights.context'),
      steps:      p('insights.steps'),
      features:   p('insights.features'),
      eeat:       p('insights.eeat'),
      faq:        p('insights.faq'),
      cta_title:  p('insights.ctaTitle'),
      cta_desc:   p('insights.ctaDesc'),
    },
  };
}

export function getSolutions(t) {
  const s = (key) => t(`content.solutions.${key}`, { returnObjects: true });
  return {
    'b2b-saas': {
      slug: 'solution-b2b-saas',
      eyebrow:      s('b2bSaas.eyebrow'),
      hero_title:   s('b2bSaas.heroTitle'),
      hero_desc:    s('b2bSaas.heroDesc'),
      pain_points:  s('b2bSaas.painPoints'),
      benefits:     s('b2bSaas.benefits'),
      eeat:         s('b2bSaas.eeat'),
      faq:          s('b2bSaas.faq'),
      cta_title:    s('b2bSaas.ctaTitle'),
      cta_desc:     s('b2bSaas.ctaDesc'),
    },
    ecommerce: {
      slug: 'solution-ecommerce',
      eyebrow:      s('ecommerce.eyebrow'),
      hero_title:   s('ecommerce.heroTitle'),
      hero_desc:    s('ecommerce.heroDesc'),
      pain_points:  s('ecommerce.painPoints'),
      benefits:     s('ecommerce.benefits'),
      eeat:         s('ecommerce.eeat'),
      faq:          s('ecommerce.faq'),
      cta_title:    s('ecommerce.ctaTitle'),
      cta_desc:     s('ecommerce.ctaDesc'),
    },
    agencies: {
      slug: 'solution-agencies',
      eyebrow:      s('agencies.eyebrow'),
      hero_title:   s('agencies.heroTitle'),
      hero_desc:    s('agencies.heroDesc'),
      pain_points:  s('agencies.painPoints'),
      benefits:     s('agencies.benefits'),
      eeat:         s('agencies.eeat'),
      faq:          s('agencies.faq'),
      cta_title:    s('agencies.ctaTitle'),
      cta_desc:     s('agencies.ctaDesc'),
    },
  };
}

export function getResources(t) {
  const r = (key) => t(`content.resources.${key}`, { returnObjects: true });
  return {
    'geo-playbook': {
      slug: 'resource-geo-playbook',
      eyebrow:   r('geoPlaybook.eyebrow'),
      hero_title: r('geoPlaybook.heroTitle'),
      hero_desc:  r('geoPlaybook.heroDesc'),
      chapters:   r('geoPlaybook.chapters'),
      cta_title:  r('geoPlaybook.ctaTitle'),
      cta_desc:   r('geoPlaybook.ctaDesc'),
    },
    'research-lab': {
      slug: 'resource-research-lab',
      eyebrow:   r('researchLab.eyebrow'),
      hero_title: r('researchLab.heroTitle'),
      hero_desc:  r('researchLab.heroDesc'),
      articles:   r('researchLab.articles'),
      cta_title:  r('researchLab.ctaTitle'),
      cta_desc:   r('researchLab.ctaDesc'),
    },
    'aeo-faq': {
      slug: 'resource-aeo-faq',
      eyebrow:   r('aeoFaq.eyebrow'),
      hero_title: r('aeoFaq.heroTitle'),
      hero_desc:  r('aeoFaq.heroDesc'),
      glossary:   r('aeoFaq.glossary'),
      faq:        r('aeoFaq.faq'),
      eeat:       r('aeoFaq.eeat'),
      cta_title:  r('aeoFaq.ctaTitle'),
      cta_desc:   r('aeoFaq.ctaDesc'),
    },
    changelog: {
      slug: 'resource-changelog',
      eyebrow:   r('changelog.eyebrow'),
      hero_title: r('changelog.heroTitle'),
      hero_desc:  r('changelog.heroDesc'),
      updates:    r('changelog.updates'),
      cta_title:  r('changelog.ctaTitle'),
      cta_desc:   r('changelog.ctaDesc'),
    },
  };
}

const PLAN_META = [
  { price_monthly: 0,    price_annual: 0,   cta_style: 'outline', highlight: false },
  { price_monthly: 299,  price_annual: 249, cta_style: 'cobalt',  highlight: true  },
  { price_monthly: null, price_annual: null, cta_style: 'dark',   highlight: false },
];

export function getPricing(t) {
  const plans = t('content.pricing.plans', { returnObjects: true }).map((p, i) => ({
    ...PLAN_META[i],
    name:     p.name,
    desc:     p.desc,
    cta:      p.cta,
    features: p.features,
  }));
  return {
    slug:       'pricing',
    hero_title: t('content.pricing.heroTitle'),
    hero_desc:  t('content.pricing.heroDesc'),
    plans,
    faqs: t('content.pricing.faqs', { returnObjects: true }),
  };
}
