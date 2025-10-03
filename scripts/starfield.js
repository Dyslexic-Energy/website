(() => {
  const host = document.querySelector('[data-starfield]');
  if (!host) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STAR_COUNT = prefersReducedMotion ? 14 : 32;
  const MIN_SIZE = 18;
  const MAX_SIZE = 48;
  const MIN_DISTANCE = 30;
  const MAX_ATTEMPTS = 40;

  const randomInRange = (min, max) => Math.random() * (max - min) + min;
  const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

  const chooseHorizontal = () => {
    const zone = randomChoice(['left', 'left', 'right', 'right']);
    const min = zone === 'left' ? 2 : 75;
    const max = zone === 'left' ? 25 : 98;
    return randomInRange(min, max);
  };

  const chooseVertical = () => {
    const zone = randomChoice(['top', 'top', 'bottom', 'bottom']);
    const min = zone === 'top' ? 2 : 80;
    const max = zone === 'top' ? 20 : 98;
    return randomInRange(min, max);
  };

  const generate = () => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      requestAnimationFrame(generate);
      return;
    }

    const fragment = document.createDocumentFragment();
    const placed = [];

    for (let i = 0; i < STAR_COUNT; i += 1) {
      const star = document.createElement('span');
      star.className = 'star-field__star';

      const size = randomInRange(MIN_SIZE, MAX_SIZE);
      let top;
      let left;
      let topPx;
      let leftPx;
      let attempts = 0;

      while (attempts < MAX_ATTEMPTS) {
        top = chooseVertical();
        left = chooseHorizontal();
        topPx = (top / 100) * rect.height;
        leftPx = (left / 100) * rect.width;

        const tooClose = placed.some(existing => {
          const distance = Math.hypot(existing.x - leftPx, existing.y - topPx);
          return distance < MIN_DISTANCE;
        });

        if (!tooClose) {
          placed.push({ x: leftPx, y: topPx, size });
          break;
        }
        attempts += 1;
      }

      if (attempts === MAX_ATTEMPTS) {
        continue;
      }

      star.style.setProperty('--size', `${size.toFixed(1)}px`);
      star.style.setProperty('--top', `${top.toFixed(2)}%`);
      star.style.setProperty('--left', `${left.toFixed(2)}%`);
      star.style.setProperty('--glow-scale', randomInRange(0.65, 0.9).toFixed(2));

      const depthRoll = Math.random();
      if (depthRoll < 0.33) {
        star.classList.add('star-field__star--far');
        star.style.setProperty('--depth', '-120px');
      } else if (depthRoll < 0.66) {
        star.classList.add('star-field__star--mid');
        star.style.setProperty('--depth', '-60px');
      } else {
        star.classList.add('star-field__star--near');
        star.style.setProperty('--depth', '0px');
      }

      if (!prefersReducedMotion) {
        const twinkleDuration = randomInRange(12, 22);
        const twinkleDelay = randomInRange(-8, 8);

        star.style.setProperty('--twinkle-duration', `${twinkleDuration.toFixed(2)}s`);
        star.style.setProperty('--twinkle-delay', `${twinkleDelay.toFixed(2)}s`);

        const floatMagnitude = randomInRange(4, 12);
        star.classList.add('is-floating');
        star.style.setProperty('--float-x', `${floatMagnitude * (Math.random() < 0.5 ? -1 : 1)}px`);
        star.style.setProperty('--float-y', `${floatMagnitude * (Math.random() < 0.5 ? -1 : 1)}px`);
        star.style.setProperty('--float-duration', `${randomInRange(26, 38).toFixed(2)}s`);
        star.style.setProperty('--float-delay', `${randomInRange(0, 18).toFixed(2)}s`);
      }

      fragment.appendChild(star);
    }

    host.replaceChildren(fragment);

    if (prefersReducedMotion) {
      host.classList.add('star-field--static');
    }
  };

  requestAnimationFrame(generate);
})();
