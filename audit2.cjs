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

  // Features grid on home
  await go('/');
  await scrollTo('.features-grid');
  await page.screenshot({ path: '/tmp/feat_grid.png' }); console.log('feat_grid');

  // Logo bar on solution page close-up
  await go('/solutions/b2b-saas');
  await scrollTo('.logo-bar, .proof-logos, [class*="logo"]');
  await page.screenshot({ path: '/tmp/sol_logos.png' }); console.log('sol_logos');

  await browser.close();
})();
