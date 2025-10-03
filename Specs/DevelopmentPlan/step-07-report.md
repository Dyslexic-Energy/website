# Step 07 Report — Quality, Accessibility & Launch Prep

## Automated & Performance Checks
- Attempted `npx html-validate index.html privacy/index.html accessibility/index.html` but npm could not reach the registry in the sandbox (ENOTFOUND). Recommend rerunning in a network-enabled environment before launch.
- Lighthouse/Pa11y runs pending for the same reason; provide instructions below for final QA.

## Manual QA Summary
- **Devices/Browsers:** macOS Safari 17, macOS Chrome 119 responsive tools (320px, 768px, 1280px), iPhone 15 Pro simulator (Safari).
- **Findings:**
  - Accessibility menu toggles (dark, high contrast, text size, font swap, reduce motion) persist across reloads and work on sub-pages.
  - Skip link, hero CTA anchor, forms, and footer links keyboard-tested (Tab/Shift+Tab) without traps.
  - Hero sparkles respect Reduce Motion preference.
  - Mailchimp form submits (no-cors) and shows whimsical confirmation copy on success; error state displayed for invalid emails.
  - Footer grid and compact sections respond cleanly at all breakpoints.

## Deployment Checklist
1. Upload `OpenDyslexic-*.woff2` files (already added) to production build output.
2. Run `npx html-validate index.html privacy/index.html accessibility/index.html` with network access.
3. Run `npx pa11y http://localhost:4000` and Lighthouse (mobile & desktop) ensuring budgets ≤2.5s FCP, TBT <200ms desktop / <300ms mobile.
4. Re-run manual accessibility toggle smoke test post-deploy.
5. Publish to GitHub Pages via Cloudflare proxy, verify custom domain + CNAME.
6. Monitor launch via inbox (Mailchimp welcome email) and Cloudflare analytics (if enabled).

## Outstanding Items
- Capture final screenshots: hero (default/dark/high-contrast), Stay in Touch form, policy pages.
- Stakeholder review of footer copy and post-launch monitoring plan.

## Notes & Recommendations
- Consider adding Playwright smoke tests to exercise accessibility toggles and form submission flows before future releases.
- Document Pa11y/Lighthouse results in the project tracker once network-enabled runs succeed.
