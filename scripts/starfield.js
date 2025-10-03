(() => {
  const host = document.querySelector('[data-starfield]');
  if (!host) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STAR_COUNT = prefersReducedMotion ? 14 : 32;
  const MIN_SIZE = 18;
  const MAX_SIZE = 48;

  const randomInRange = (min, max) => Math.random() * (max - min) + min;
  const randomSign = () => (Math.random() < 0.5 ? -1 : 1);

  const fragment = document.createDocumentFragment();

  const chooseHorizontal = () => {
    const zone = Math.random() < 0.5 ? 'left' : 'right';
    const min = zone === 'left' ? 2 : 75;
    const max = zone === 'left' ? 25 : 98;
    return randomInRange(min, max);
  };

  const chooseVertical = () => {
    const zone = Math.random() < 0.5 ? 'top' : 'bottom';
    const min = zone === 'top' ? 2 : 80;
    const max = zone === 'top' ? 20 : 98;
    return randomInRange(min, max);
  };

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const star = document.createElement('span');
    star.className = 'star-field__star';

    const size = randomInRange(MIN_SIZE, MAX_SIZE);
    const top = chooseVertical();
    const left = chooseHorizontal();

    star.style.setProperty('--size', `${size.toFixed(1)}px`);
    star.style.setProperty('--top', `${top.toFixed(2)}%`);
    star.style.setProperty('--left', `${left.toFixed(2)}%`);
    star.style.setProperty('--glow-scale', randomInRange(0.65, 0.9).toFixed(2));

    if (!prefersReducedMotion) {
      const twinkleDuration = randomInRange(12, 22);
      const twinkleDelay = randomInRange(0, 8) * (Math.random() < 0.5 ? -1 : 1);

      star.style.setProperty('--twinkle-duration', `${twinkleDuration.toFixed(2)}s`);
      star.style.setProperty('--twinkle-delay', `${twinkleDelay.toFixed(2)}s`);

      const floatMagnitude = randomInRange(4, 12);
      star.classList.add('is-floating');
      star.style.setProperty('--float-x', `${floatMagnitude * randomSign()}px`);
      star.style.setProperty('--float-y', `${floatMagnitude * randomSign()}px`);
      star.style.setProperty('--float-duration', `${randomInRange(26, 38).toFixed(2)}s`);
      star.style.setProperty('--float-delay', `${randomInRange(0, 18).toFixed(2)}s`);
    }

    fragment.appendChild(star);
  }

  host.replaceChildren(fragment);

  if (prefersReducedMotion) {
    host.classList.add('star-field--static');
  }
})();
