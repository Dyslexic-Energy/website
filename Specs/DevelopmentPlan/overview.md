# Development Plan Overview

This guide breaks the build into seven discrete steps so each milestone can be reviewed before the next begins. For every step you will find three companion files:

- `step-XX-precheck.md` — Inputs to confirm before work starts.
- `step-XX-tasks.md` — Detailed implementation actions for the step.
- `step-XX-review.md` — Verification checklist after work completes.

Follow the steps in order. Do not advance until reviewers sign off on the current step’s `review` checklist.

## Step Summary

1. **Requirements Alignment** — Consolidate spec details, review `Designs/`, document open questions, and agree on success criteria.
2. **Semantic Layout Skeleton** — Build the accessible HTML structure (header, hero, main sections, footer) with placeholder content and skip link.
3. **Hero & Branding Implementation** — Apply gradients, typography, stars, and overall branding tokens across the hero.
4. **Content & Forms** — Implement both sign-up forms, mission copy, and the “Dyslexia in Plain English” section with validation scaffolding.
5. **Accessibility Menu Engineering** — Deliver the accessibility controls, preference persistence, and keyboard/ARIA compliance.
6. **Footer & Global Polish** — Finalise footer visuals, legal links, shared utilities, and ensure global styles support responsiveness.
7. **Quality, Accessibility & Launch Prep** — Run automated/manual audits, performance passes, analytics integration, and deployment readiness.

Each step references `Specs/website_spec.txt` and assets in `Specs/Designs/`. Update the clarifying questions file as answers arrive so future contributors remain aligned.
