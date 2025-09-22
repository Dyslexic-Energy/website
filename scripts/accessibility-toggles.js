(() => {
  const body = document.body;

  const fontToggle = document.getElementById('fontToggle');
  const contrastToggle = document.getElementById('contrastToggle');
  const motionToggle = document.getElementById('motionToggle');
  const fontSizeToggle = document.getElementById('fontSizeToggle');

  if(!fontToggle || !contrastToggle || !motionToggle || !fontSizeToggle){
    return;
  }

  const enableOpenDyslexic = on => {
    // lightweight, local fallback: try to load from CDN only when toggled
    if(on){
      if(!document.getElementById('odf')) {
        const link = document.createElement('link');
        link.id = 'odf';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/stylesheet.css';
        link.onload = () => {
          document.documentElement.style.setProperty('--font','"OpenDyslexic3", "OpenDyslexic", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial');
        };
        document.head.appendChild(link);
      } else {
        document.documentElement.style.setProperty('--font','"OpenDyslexic3", "OpenDyslexic", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial');
      }
    } else {
      document.documentElement.style.setProperty('--font','ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial');
    }
  };

  const save = () => {
    const prefs = {
      font: fontToggle.checked ? 'opendyslexic' : 'system',
      contrast: contrastToggle.checked ? 'high' : 'normal',
      motion: motionToggle.checked ? 'reduced' : 'full',
      size: fontSizeToggle.checked ? 'large' : 'normal'
    };
    localStorage.setItem('de_prefs', JSON.stringify(prefs));
  };

  // Apply saved settings
  const state = JSON.parse(localStorage.getItem('de_prefs') || '{}');
  if(state.font === 'opendyslexic') { enableOpenDyslexic(true); fontToggle.checked = true; }
  if(state.contrast === 'high') { body.setAttribute('data-contrast','high'); contrastToggle.checked = true; }
  if(state.motion === 'reduced') { body.setAttribute('data-reduced-motion','true'); motionToggle.checked = true; }
  if(state.size === 'large') { document.documentElement.style.fontSize = '18px'; fontSizeToggle.checked = true; }

  fontToggle.addEventListener('change', event => {
    enableOpenDyslexic(event.target.checked);
    save();
  });

  contrastToggle.addEventListener('change', event => {
    body.setAttribute('data-contrast', event.target.checked ? 'high' : 'normal');
    save();
  });

  motionToggle.addEventListener('change', event => {
    body.setAttribute('data-reduced-motion', event.target.checked ? 'true' : 'false');
    save();
  });

  fontSizeToggle.addEventListener('change', event => {
    document.documentElement.style.fontSize = event.target.checked ? '18px' : '16px';
    save();
  });
})();
