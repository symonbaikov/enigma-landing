const { chromium } = require('playwright');
const css = `[data-reveal]{opacity:1!important;transform:none!important;filter:none!important;}.mobile-drawer{transform:translateX(100%)!important;}`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 768, height: 1024 });

  const go = async (url) => {
    await page.goto(`http://localhost:5173${url}`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: css });
    await page.waitForTimeout(400);
  };

  const scrollTo = async (sel) => {
    await page.evaluate(s => {
      const el = document.querySelector(s);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, sel);
    await page.waitForTimeout(300);
  };

  // Features grid on product page
  await go('/product/agent-traffic');
  await scrollTo('.features-grid');
  await page.screenshot({ path: '/tmp/prod_feat.png' }); console.log('prod_feat');

  // Logo bar on solution page
  await go('/solutions/b2b-saas');
  await scrollTo('.logo-bar');
  await page.screenshot({ path: '/tmp/sol_logobar.png' }); console.log('sol_logobar');

  await browser.close();
})();
