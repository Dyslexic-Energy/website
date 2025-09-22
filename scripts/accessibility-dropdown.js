(() => {
  const accessibilityButton = document.getElementById('accessibilityButton');
  const accessibilityMenu = document.getElementById('accessibilityMenu');
  const accessibilityDropdown = accessibilityMenu ? accessibilityMenu.closest('[data-dropdown]') : null;

  if(!accessibilityButton || !accessibilityMenu || !accessibilityDropdown){
    return;
  }

  const focusSelectors = 'input, button, [href], select, textarea';

  const closeMenu = () => {
    accessibilityButton.setAttribute('aria-expanded', 'false');
    accessibilityMenu.hidden = true;
    accessibilityDropdown.setAttribute('data-open', 'false');
  };

  const openMenu = () => {
    accessibilityButton.setAttribute('aria-expanded', 'true');
    accessibilityMenu.hidden = false;
    accessibilityDropdown.setAttribute('data-open', 'true');
    const firstFocusable = accessibilityMenu.querySelector(focusSelectors);
    if(firstFocusable){
      firstFocusable.focus();
    }
  };

  const toggleMenu = () => {
    const expanded = accessibilityButton.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  };

  accessibilityButton.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });

  accessibilityMenu.addEventListener('click', event => {
    event.stopPropagation();
  });

  document.addEventListener('click', event => {
    if(!accessibilityDropdown.contains(event.target)){
      closeMenu();
    }
  });

  document.addEventListener('focusin', event => {
    if(accessibilityButton.getAttribute('aria-expanded') === 'true' && !accessibilityDropdown.contains(event.target)){
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && accessibilityButton.getAttribute('aria-expanded') === 'true'){
      closeMenu();
      accessibilityButton.focus();
    }
  });

  closeMenu();
})();
