# Step 05 Tasks — Accessibility Menu Engineering

1. Build the accessibility trigger button with icon/text, ensuring it is the last interactive item in the header tab order.
2. Implement the dropdown menu structure with list items or buttons for each toggle and correct ARIA attributes (`role="menu"`, `aria-expanded`, etc.).
3. Add keyboard interactions: Enter/Space to toggle, arrow keys to navigate, Esc to close and return focus to trigger.
4. Wire each control to CSS class or data attribute changes (e.g., `data-contrast="high"`, `data-font="dyslexia"`, etc.).
5. Persist user preferences in `localStorage` and hydrate on page load, respecting system defaults for colour scheme and reduced motion.
6. Ensure toggles update live regions or visually confirm when state changes (e.g., `aria-pressed`).
7. Write or update automated unit/interaction tests if applicable (or document manual test steps in `Specs/DevelopmentPlan/step-05-review.md`).
