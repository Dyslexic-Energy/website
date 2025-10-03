# Repository Guidelines

## Project Structure & Module Organization
GitHub Pages serves the site directly from this repository root, so keep `index.html` as the single entry point and break additions into semantic `<section>` blocks. Shared styles live in `css/styles.css`; add a new sheet only when a feature truly needs isolation. All interactive behaviour belongs in self-contained modules under `scripts/` so accessibility toggles remain testable. Place imagery or downloads in `media/` and reference them with relative URLs. Preserve the existing `CNAME`; it keeps the custom domain mapped.

## Specs & Visual Assets
Before changing markup or behaviour, review `Specs/website_spec.txt` and treat it as the canonical requirements list; update it alongside your code when scope shifts. Analyse any mocks in `Designs/`, noting responsive breakpoints, colour tokens, and typography choices before you begin. Call out deliberate deviations from the spec or design set in your pull request so reviewers can confirm intent.

## Build, Test, and Development Commands
- `python3 -m http.server 4000` — Lightweight preview server with live reload on refresh.
- `npx serve .` — Production-like static preview with gzip headers for final checks.
- `npx html-validate index.html` — Structural lint to catch missing landmarks and duplicate IDs.

## Coding Style & Naming Conventions
Use two-space indentation in HTML and JavaScript, and keep CSS declarations compact (`selector{property:value;}`) to match `styles.css`. Class names stay lowercase with hyphen separators and should describe the component role (`.donation`, `.cards`). Prefer CSS custom properties for colour, spacing, and radius so new sections inherit the design tokens. Wrap JavaScript in IIFEs, guard every DOM query, and bail early (`if(!node){ return; }`) when a component is absent.

## Testing Guidelines
- Preview in a Chromium-based browser and Safari before pushing.
- Run `npx pa11y http://localhost:4000` against your preview to catch heading, contrast, and focus regressions.
- For layout changes, capture screenshots at 320px, 768px, and 1280px and attach any issues to the PR.
- When you add scripts, include an interaction checklist (keyboard flow, ARIA state updates) in the PR notes.

## Commit & Pull Request Guidelines
Write imperative, sentence-case commit subjects under 60 characters (e.g., `Split out JS and CSS`) and squash trivial fixups before opening the PR. Each PR should summarise the problem solved, list verification steps, and mention impacted specs or designs. Link tracking issues with `Fixes #123` when appropriate. Provide before/after screenshots for visual updates so reviewers can assess changes quickly.
