import playwright from 'playwright';
import fs from 'fs';

async function main() {
  const browser = await playwright.chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const verificationDir = '/home/jules/verification';

  // Ensure verification directory exists
  if (!fs.existsSync(verificationDir)) {
    fs.mkdirSync(verificationDir, { recursive: true });
  }

  const pages = [
    { name: 'dashboard', url: 'http://localhost:3000/' },
    { name: 'content_generation', url: 'http://localhost:3000/content-generation' },
    { name: 'editor', url: 'http://localhost:3000/editor' },
    { name: 'file_manager', url: 'http://localhost:3000/files' },
    { name: 'settings', url: 'http://localhost:3000/settings' },
  ];

  console.log('Starting frontend verification...');

  for (const pageInfo of pages) {
    try {
      console.log(`Navigating to ${pageInfo.url}`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle' });
      const screenshotPath = `${verificationDir}/${pageInfo.name}.png`;
      await page.screenshot({ path: screenshotPath });
      console.log(`Screenshot saved to ${screenshotPath}`);
    } catch (error) {
      console.error(`Failed to capture screenshot for ${pageInfo.name}:`, error);
    }
  }

  await browser.close();
  console.log('Frontend verification complete.');
}

main();
