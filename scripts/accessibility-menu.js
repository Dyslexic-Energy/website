'use strict';

// Placeholder module; full accessibility menu implementation arrives in Step 05.
// Provides basic focus trap handling to avoid unexpected behaviour before controls exist.

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('accessibilityButton');
  const menu = document.getElementById('accessibilityMenu');

  if(!trigger || !menu){
    return;
  }

  trigger.addEventListener('click', () => {
    trigger.setAttribute('aria-expanded', 'false');
  });
});
