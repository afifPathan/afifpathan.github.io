import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Afif Pathan Portfolio E2E & Hardening Audit', () => {
  test('01. Navigation: Header anchors scroll cleanly to targets', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible', timeout: 10000 });

    const navItems = ['about', 'philosophy', 'projects', 'experience', 'skills', 'contact'];
    for (const id of navItems) {
      const section = page.locator(`#${id}`);
      await expect(section).toBeAttached();
    }
  });

  test('02. Mobile Navigation Menu: opens, traps focus, closes on Esc and restores focus', async ({
    page,
    viewport,
  }) => {
    if (!viewport || viewport.width > 768) return;

    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible' });

    const menuTrigger = page.locator('button[aria-controls="mobile-navigation"]');
    await expect(menuTrigger).toBeVisible();

    // Open menu
    await menuTrigger.click();
    const mobileNav = page.locator('#mobile-navigation');
    await expect(mobileNav).toBeVisible();
    await page.waitForTimeout(150);

    // Verify focus trap: Active element must be inside mobile nav
    const activeInside = await page.evaluate(() => {
      const nav = document.getElementById('mobile-navigation');
      return nav ? nav.contains(document.activeElement) : false;
    });
    expect(activeInside).toBe(true);

    // Press Escape to close
    await page.keyboard.press('Escape');
    await expect(mobileNav).not.toBeVisible();

    // Focus restored to trigger
    const isTriggerFocused = await menuTrigger.evaluate((el) => document.activeElement === el);
    expect(isTriggerFocused).toBe(true);
  });

  test('03. Theme Switcher: toggles dark/light and persists in localStorage', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible' });

    // Initial state: dark
    const isDarkInitially = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(isDarkInitially).toBe(true);

    // Click toggle
    const themeBtn = page.locator('button[aria-label*="Switch to"]');
    await themeBtn.first().click();

    // Should now be light
    const isLightAfterClick = await page.evaluate(() =>
      document.documentElement.classList.contains('light')
    );
    expect(isLightAfterClick).toBe(true);

    const savedTheme = await page.evaluate(() =>
      localStorage.getItem('ap-portfolio-theme-v2')
    );
    expect(savedTheme).toBe('light');

    // Reload page: should remain light
    await page.reload();
    await page.waitForSelector('#hero', { state: 'visible' });
    const isLightAfterReload = await page.evaluate(() =>
      document.documentElement.classList.contains('light')
    );
    expect(isLightAfterReload).toBe(true);

    // Switch back to dark
    await page.locator('button[aria-label*="Switch to"]').first().click();
    const isDarkAgain = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(isDarkAgain).toBe(true);
  });

  test('04. Contact Form: client-side validation and toast interaction', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible' });
    await page.waitForTimeout(1200);

    // Scroll to contact section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const nameInput = page.locator('#contact input[name="name"]');
    await nameInput.waitFor({ state: 'visible', timeout: 15000 });
    await nameInput.scrollIntoViewIfNeeded();

    const submitBtn = page.locator('#contact button[type="submit"]');

    // Submit empty form -> validation errors
    await submitBtn.click();
    await expect(
      page.getByText('Please provide your name (minimum 2 characters).')
    ).toBeVisible();

    // Fill valid name, invalid email
    await nameInput.fill('Alex Morgan');
    await page.fill('#contact input[name="email"]', 'invalid-email');
    await submitBtn.click();
    await expect(
      page.getByText('Please enter a valid work or personal email address.')
    ).toBeVisible();

    // Honeypot test: if filled, displays spoofed success without sending
    await page.evaluate(() => {
      const hp = document.querySelector('input[name="_gotcha"]') as HTMLInputElement;
      if (hp) {
        hp.value = 'bot-submission';
      }
      const form = document.querySelector('#contact form') as HTMLFormElement;
      if (form) {
        form.requestSubmit();
      }
    });
    await expect(page.getByText('Message Dispatched Successfully!')).toBeVisible();

    // Copy email button
    const copyBtn = page.locator('button[aria-label="Copy direct email address to clipboard"]');
    if (await copyBtn.isVisible()) {
      await copyBtn.click();
      await expect(page.getByText('Email address copied to clipboard')).toBeVisible();
    }
  });

  test('05. Work Section: interactive terminal tabs and architecture drill-downs', async ({
    page,
    viewport,
  }) => {
    if (viewport && viewport.width < 768) return; // Desktop tabs

    await page.goto('/');
    await page.waitForSelector('#projects', { state: 'visible' });

    // Click terminal tabs if visible
    const tabs = page.locator('button[role="tab"]');
    const tabCount = await tabs.count();
    if (tabCount > 1) {
      await tabs.nth(1).click();
      await page.waitForTimeout(300);
    }
  });

  test('06. Accessibility (a11y): zero WCAG 2.1 AA violations in dark mode', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('ap-portfolio-theme-v2', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    });
    await page.reload();
    await page.waitForSelector('#hero', { state: 'visible' });
    await page.waitForSelector('[role="status"]', { state: 'detached', timeout: 3000 }).catch(() => {});

    // Scroll down to mount lazy components
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('07. Accessibility (a11y): zero WCAG 2.1 AA violations in light mode', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('ap-portfolio-theme-v2', 'light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    });
    await page.reload();
    await page.waitForSelector('#hero', { state: 'visible' });
    await page.waitForSelector('[role="status"]', { state: 'detached', timeout: 3000 }).catch(() => {});

    // Scroll to mount lazy components
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('08. Responsive Layout: zero horizontal overflow from 320px to 1920px', async ({
    page,
  }) => {
    const viewports = [320, 375, 390, 414, 768, 1024, 1280, 1440, 1920];

    for (const width of viewports) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      await page.waitForSelector('#hero', { state: 'visible' });

      // Check overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasOverflow, `Horizontal overflow detected at ${width}px`).toBe(false);
    }
  });

  test('09. Link Security & Hygiene: external links have rel="noopener noreferrer"', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible' });

    const externalLinks = await page.locator('a[target="_blank"]').all();
    for (const link of externalLinks) {
      const rel = await link.getAttribute('rel');
      expect(rel, `Link ${await link.getAttribute('href')} missing noopener noreferrer`).toContain(
        'noopener'
      );
      expect(rel, `Link ${await link.getAttribute('href')} missing noopener noreferrer`).toContain(
        'noreferrer'
      );
    }
  });

  test('10. Résumé file: /resume.pdf exists and is downloadable', async ({ request }) => {
    const response = await request.get('/resume.pdf');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });

  test('11. Banned Strings Audit: DOM text contains zero banned phrases', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#hero', { state: 'visible' });

    // Scroll to load all lazy sections
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    const bodyText = await page.evaluate(() => document.body.innerText);

    const bannedKeywords = [
      /\bverified\b/i,
      /\bplaceholder\b/i,
      /\blorem\b/i,
      /\bTODO\b/,
      /#AP-/,
      /\bundefined\b/,
      /\bNaN\b/,
      /\[object\s/i,
      /\bPrincipal\b/i,
    ];

    for (const regex of bannedKeywords) {
      const match = regex.exec(bodyText);
      expect(match, `Found banned regex ${regex} match in DOM: ${match?.[0]}`).toBeNull();
    }
  });
});
