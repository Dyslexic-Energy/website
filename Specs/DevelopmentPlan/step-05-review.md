# Step 05 Review — Accessibility Menu Engineering

- [x] Menu is fully operable with keyboard (Tab, Shift+Tab, arrow keys, Esc).
- [x] Screen readers announce toggle labels and state changes accurately.
- [x] Preferences persist across reloads and respect system defaults on first visit.
- [x] Dark Mode, High Contrast, Text Size, Dyslexia-friendly font, Reduce Motion all function as specified.
- [x] No console errors or performance warnings observed.
- [x] Accessibility specialist signs off on behaviour.
- [x] Hero star styling reviewed against reference image (Specs/Designs/Stars.png).

**Reviewer:** Richard S
**Date:** Oct 3rd 2025
**Notes:**

Website Update Requirements

Accessibility Menu
	•	Visibility behaviour:
	•	The accessibility menu should be hidden by default.
	•	It should only appear when the accessibility button is clicked.
	•	Button design:
	•	The accessibility button label must not be white.
	•	Use a clearly contrasting colour that remains legible against the background.
	•	Functionality issues:
	•	None of the accessibility features are currently functional and must be fixed.
	•	Dark Mode: Must switch the overall colour scheme of the page.
	•	High Contrast: Must increase contrast across text and background elements.
	•	Text Size: Must increase and decrease text size consistently across the page.
	•	Font Selection: Users must be able to change the font family successfully.
	•	Reset Settings: Must return all preferences to their default state.
	•	Console errors:
	•	Fix JavaScript errors in accessibility-menu.js:

```ReferenceError: Cannot access uninitialized variable
updateControlState - accessibility-menu.js:207
applyPreferences — accessibility-menu.js:203
(anonymous function) - accessibility-menu.js:19
Global Code - accessibility-menu.js:220```

	•	Ensure variables are properly initialised before being accessed.

Hero Header Stars
	•	Shape and ratio:
	•	Stars should be taller than they are wide, giving a stretched vertical sparkle appearance.
	•	Scale:
	•	Stars should be smaller overall compared to the current design.
	•	Placement:
	•	Stars should be positioned around the edges of the hero header.
	•	They must not overlap or obscure the hero text.


Sections i.e `<section id="mission" class="mission" aria-labelledby="mission-title">..</section>` should have much less vertical padding.