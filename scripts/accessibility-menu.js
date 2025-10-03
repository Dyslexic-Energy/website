'use strict';

(() => {
  const root = document.documentElement;
  const PREF_KEY = 'dex_prefs_v1';

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const defaultPrefs = {
    themeDark: prefersDark,
    contrastHigh: false,
    textSize: 'base',
    fontDyslexic: false,
    reduceMotion: prefersReducedMotion
  };

  let prefs = loadPreferences();
  applyPreferences();

  const trigger = document.getElementById('accessibilityButton');
  const menu = document.getElementById('accessibilityMenu');

  if(!trigger || !menu){
    return;
  }

  const prefItems = Array.from(menu.querySelectorAll('[data-pref]'));
  const resetButton = menu.querySelector('[data-reset]');

  trigger.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });

  trigger.addEventListener('keydown', event => {
    if(event.key === 'ArrowDown' && menu.hidden){
      event.preventDefault();
      openMenu(true);
    }
  });

  menu.addEventListener('click', event => {
    event.stopPropagation();
  });

  document.addEventListener('click', event => {
    if(menu.hidden){
      return;
    }
    if(!menu.contains(event.target) && event.target !== trigger){
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && !menu.hidden){
      closeMenu();
    }
  });

  menu.addEventListener('keydown', event => {
    const focusable = getFocusableItems();
    if(focusable.length === 0){
      return;
    }

    const currentIndex = focusable.indexOf(document.activeElement);

    if(event.key === 'ArrowDown'){
      event.preventDefault();
      const next = focusable[(currentIndex + 1) % focusable.length];
      next.focus();
    } else if(event.key === 'ArrowUp'){
      event.preventDefault();
      const next = focusable[(currentIndex - 1 + focusable.length) % focusable.length];
      next.focus();
    } else if(event.key === 'Home'){
      event.preventDefault();
      focusable[0].focus();
    } else if(event.key === 'End'){
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    } else if(event.key === 'Tab'){
      if(event.shiftKey && document.activeElement === focusable[0]){
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if(!event.shiftKey && document.activeElement === focusable[focusable.length - 1]){
        event.preventDefault();
        focusable[0].focus();
      }
    }
  });

  prefItems.forEach(item => {
    item.addEventListener('click', () => {
      const pref = item.dataset.pref;
      const type = item.dataset.itemType;
      const value = item.dataset.value;

      if(type === 'toggle'){
        prefs[pref] = !prefs[pref];
      } else if(type === 'radio' && value){
        prefs[pref] = value;
      }

      applyPreferences();
      savePreferences();
    });
  });

  if(resetButton){
    resetButton.addEventListener('click', () => {
      prefs = { ...defaultPrefs };
      applyPreferences();
      savePreferences();
      const focusable = getFocusableItems();
      if(focusable.length){
        focusable[0].focus();
      }
    });
  }

  function toggleMenu(){
    menu.hidden ? openMenu(true) : closeMenu();
  }

  function openMenu(focusFirst = false){
    trigger.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    menu.setAttribute('data-open', 'true');
    if(focusFirst){
      const focusable = getFocusableItems();
      if(focusable.length){
        window.requestAnimationFrame(() => focusable[0].focus());
      }
    }
  }

  function closeMenu(){
    trigger.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    menu.removeAttribute('data-open');
    trigger.focus();
  }

  function getFocusableItems(){
    return Array.from(menu.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && !el.hidden);
  }

  function loadPreferences(){
    try {
      const stored = window.localStorage.getItem(PREF_KEY);
      if(!stored){
        return { ...defaultPrefs };
      }
      const parsed = JSON.parse(stored);
      return { ...defaultPrefs, ...parsed };
    } catch (error){
      return { ...defaultPrefs };
    }
  }

  function savePreferences(){
    try {
      window.localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    } catch (error){
      // localStorage may be disabled; ignore.
    }
  }

  function applyPreferences(){
    if(prefs.themeDark){
      root.dataset.theme = 'dark';
    } else {
      delete root.dataset.theme;
    }

    if(prefs.contrastHigh){
      root.dataset.contrast = 'high';
    } else {
      delete root.dataset.contrast;
    }

    if(prefs.fontDyslexic){
      root.dataset.font = 'dyslexic';
    } else {
      delete root.dataset.font;
    }

    if(prefs.textSize && prefs.textSize !== 'base'){
      root.dataset.textSize = prefs.textSize;
    } else {
      delete root.dataset.textSize;
    }

    if(prefs.reduceMotion){
      root.dataset.reduceMotion = 'true';
    } else {
      delete root.dataset.reduceMotion;
    }

    updateControlState();
  }

  function updateControlState(){
    prefItems.forEach(item => {
      const pref = item.dataset.pref;
      const type = item.dataset.itemType;
      const value = item.dataset.value;

      if(type === 'toggle'){
        item.setAttribute('aria-checked', String(Boolean(prefs[pref])));
      } else if(type === 'radio'){
        const isActive = prefs[pref] === value;
        item.setAttribute('aria-checked', String(isActive));
      }
    });
  }
})();
