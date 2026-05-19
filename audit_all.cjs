const { chromium } = require('playwright');

async function scrollTo(page, sel) {
  await page.evaluate(s => {
    const el = document.querySelector(s);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, sel);
  await page.waitForTimeout(300);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 768, height: 1024 });
  const css = `[data-reveal]{opacity:1!important;transform:none!important;filter:none!important;}.mobile-drawer{transform:translateX(100%)!important;}`;

  const go = async (url) => {
    await page.goto(`http://localhost:5173${url}`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: css });
    await page.waitForTimeout(400);
  };

  // Home page
  await go('/');
  await page.screenshot({ path: '/tmp/h_hero.png' }); console.log('h_hero');

  await scrollTo(page, '.features-grid');
  await page.screenshot({ path: '/tmp/h_features.png' }); console.log('h_features');

  await scrollTo(page, '.enterprise');
  await page.screenshot({ path: '/tmp/h_enterprise.png' }); console.log('h_enterprise');

  await scrollTo(page, 'footer');
  await page.screenshot({ path: '/tmp/h_footer.png' }); console.log('h_footer');

  // Product page
  await go('/product/agent-traffic');
  await page.screenshot({ path: '/tmp/p_top.png' }); console.log('p_top');
  await scrollTo(page, '.feature-mini-row');
  await page.screenshot({ path: '/tmp/p_mini.png' }); console.log('p_mini');

  // Pricing
  await go('/pricing');
  await page.screenshot({ path: '/tmp/pricing.png' }); console.log('pricing');

  // Solutions
  await go('/solutions/b2b-saas');
  await page.screenshot({ path: '/tmp/sol_b2b.png' }); console.log('sol_b2b');

  await go('/solutions/ecommerce');
  await page.screenshot({ path: '/tmp/sol_ecom.png' }); console.log('sol_ecom');

  await go('/solutions/agencies');
  await page.screenshot({ path: '/tmp/sol_agencies.png' }); console.log('sol_agencies');

  await browser.close();
})();
