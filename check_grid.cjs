const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('http://localhost:5173/product/agent-traffic', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: `[data-reveal] { opacity: 1 !important; transform: none !important; filter: none !important; } .mobile-drawer { transform: translateX(100%) !important; opacity: 0 !important; }` });
  await page.waitForTimeout(400);
  // Steps grid
  await page.evaluate(() => document.querySelector('.steps-grid')?.scrollIntoView({ behavior: 'instant', block: 'center' }));
  await page.waitForTimeout(200);
  await page.screenshot({ path: '/tmp/steps_grid.png' });
  console.log('saved steps_grid.png');
  // Feature mini row (home)
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: `[data-reveal] { opacity: 1 !important; transform: none !important; filter: none !important; } .mobile-drawer { transform: translateX(100%) !important; opacity: 0 !important; }` });
  await page.waitForTimeout(400);
  await page.evaluate(() => document.querySelector('.feature-mini-row')?.scrollIntoView({ behavior: 'instant', block: 'center' }));
  await page.waitForTimeout(200);
  await page.screenshot({ path: '/tmp/mini_row.png' });
  console.log('saved mini_row.png');
  await browser.close();
})();
