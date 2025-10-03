# Star Field Demo Implementation Guide

This guide walks through building the animated "stars" hero demo used in the Dyslexic Energy site. It covers the HTML scaffold, shared CSS, and the JavaScript module that randomises the stars on every load. Each section highlights the exact source and the touchpoints you can customise for bespoke layouts, colours, and motion.

---

## 1. Project Layout

```
/
├── css/
│   └── stars.css
├── media/
│   └── star-burst.svg
├── scripts/
│   └── starfield.js
└── stars.html
```

- `stars.html` — semantic page shell and structured data.
- `css/stars.css` — shared tokens, layout rules, and animation keyframes.
- `media/star-burst.svg` — reusable burst glyph for each star.
- `scripts/starfield.js` — generates and animates stars with randomised attributes.

You can embed these assets into an existing site by copying the files (or merging the snippets) and updating paths to match your structure.

---

## 2. HTML Markup (`stars.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Animated Star Field</title>
  <meta name="description" content="Animated star field demo for Dyslexic Energy.">
  <link rel="stylesheet" href="css/stars.css">
</head>
<body>
  <main class="star-demo" aria-labelledby="star-demo-title">
    <section class="star-demo__hero" aria-describedby="star-demo-summary">
      <div class="star-demo__copy">
        <h1 id="star-demo-title">Animated Star Field</h1>
        <p id="star-demo-summary">A lightweight CSS-only illustration that renders a calming, twinkling sky for hero sections, landing pages, or ambient storytelling moments.</p>
        <p>Use the markup as a drop-in pattern or extend it with JavaScript for interactive constellations. All stars are accessible, with purely decorative motion marked as hidden from assistive tech.</p>
      </div>
      <figure class="star-field" role="img" aria-label="Animated night sky with twinkling stars">
        <div class="parallax" aria-hidden="true">
          <div class="layer layer--far"></div>
          <div class="layer layer--mid"></div>
          <div class="layer layer--near"></div>
        </div>
        <div class="star-field__stars" aria-hidden="true"></div>
        <div class="twinkling" aria-hidden="true"></div>
      </figure>
    </section>
  </main>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dyslexicenergy.com/#website",
        "name": "Dyslexic Energy",
        "url": "https://dyslexicenergy.com/",
        "publisher": {
          "@id": "https://dyslexicenergy.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://dyslexicenergy.com/#organization",
        "name": "Dyslexic Energy",
        "url": "https://dyslexicenergy.com/",
        "contactPoint": [
          {
            "@id": "https://dyslexicenergy.com/#newsletter"
          }
        ]
      },
      {
        "@type": "ContactPoint",
        "@id": "https://dyslexicenergy.com/#newsletter",
        "contactType": "newsletter",
        "email": "newsletter@dyslexicenergy.com",
        "url": "https://dyslexicenergy.com/newsletter"
      }
    ]
  }
  </script>
  <script src="scripts/starfield.js" defer></script>
</body>
</html>
```

### Customisation Notes
- **Copy Deck**: Update the `<h1>` and paragraphs to suit your product story.
- **Structured Data**: Swap the URLs, organisation name, and contact info for your production domain. Keep the JSON-LD format intact.
- **Figure Label**: Adjust `aria-label` to describe whatever visual treatment you render.
- **Asset Paths**: If your build pipeline fingerprints files, remember to update the `href`/`src` references accordingly.

---

## 3. Shared Styles (`css/stars.css`)

```css
:root{color-scheme:dark;}
*{box-sizing:border-box;}
body{margin:0;font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#02021a;color:#f1f6ff;}
main{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:4rem 1.5rem;}
.star-demo__hero{display:grid;gap:2rem;max-width:1100px;width:100%;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));align-items:center;}
.star-demo__copy{max-width:480px;}
.star-demo__copy h1{margin:0 0 1rem;font-size:2.5rem;line-height:1.1;}
.star-demo__copy p{margin:0 0 1rem;font-size:1.0625rem;line-height:1.6;color:rgba(241,246,255,0.82);}
.star-demo__copy p:last-of-type{margin-bottom:0;}
.star-field{position:relative;width:100%;aspect-ratio:16/9;background:radial-gradient(circle at top,#11163b,#02021a 65%);border:1px solid rgba(255,255,255,0.1);border-radius:18px;overflow:hidden;box-shadow:0 20px 45px rgba(5,5,30,0.55);perspective:1000px;transform-style:preserve-3d;}
.parallax{position:absolute;inset:-15%;pointer-events:none;transform-style:preserve-3d;}
.layer{position:absolute;inset:0;background-repeat:repeat;mix-blend-mode:screen;opacity:0.32;}
.layer--far{background-image:radial-gradient(circle,rgba(120,154,255,0.18)0 2px,transparent 3px);background-size:160px 160px;animation:driftFar 110s linear infinite;}
.layer--mid{background-image:radial-gradient(circle,rgba(147,197,255,0.28)0 1.5px,transparent 3px);background-size:120px 120px;animation:driftMid 70s linear infinite;}
.layer--near{background-image:radial-gradient(circle,rgba(255,255,255,0.4)0 1px,transparent 2px);background-size:90px 90px;animation:driftNear 45s linear infinite;}
.star-field__stars{position:absolute;inset:0;}
.star{position:absolute;top:var(--pos-top,50%);left:var(--pos-left,50%);transform-origin:center;width:var(--size,18px);aspect-ratio:548/718;background:url('../media/star-burst.svg') center/contain no-repeat;opacity:0.88;filter:drop-shadow(0 0 6px rgba(255,255,255,0.36));isolation:isolate;animation:twinkle var(--twinkle-duration,3s) ease-in-out var(--twinkle-delay,0s) infinite alternate,star-drift var(--drift-duration,28s) ease-in-out var(--drift-delay,0s) infinite alternate;}
.star::after{content:"";position:absolute;inset:calc(var(--size,18px)*-0.45);border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.44)0 35%,rgba(120,170,255,0.2)55%,transparent 75%);filter:blur(8px);opacity:0.6;pointer-events:none;z-index:-1;transform:scale(var(--glow-scale,0.7));transform-origin:center;}
.star--large{--size:clamp(28px,2.6vw,40px);}
.star--medium{--size:clamp(19px,2.1vw,28px);}
.star--small{--size:clamp(13px,1.5vw,20px);}
.twinkling{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 20% 20%,rgba(255,255,255,0.12)0 2px,transparent 3px),radial-gradient(circle at 70% 40%,rgba(255,255,255,0.08)0 2px,transparent 3px),radial-gradient(circle at 40% 80%,rgba(255,255,255,0.1)0 1px,transparent 2px);background-size:120px 120px,200px 200px,160px 160px;opacity:0.4;animation:moveOverlay 140s linear infinite;mix-blend-mode:screen;}
@keyframes twinkle{from{opacity:0.55;}to{opacity:1;}}
@keyframes star-drift{0%{transform:translate3d(0,0,0);}50%{transform:translate3d(calc(var(--drift-x,12px)*0.6),calc(var(--drift-y,12px)*0.6),0);}100%{transform:translate3d(var(--drift-x,12px),var(--drift-y,12px),0);}}
@keyframes moveOverlay{from{background-position:0 0,0 0,0 0;}to{background-position:-5000px 3000px,-2000px 1200px,-1200px 600px;}}
@keyframes driftFar{from{transform:translateZ(-260px) translate3d(0,0,0) scale(1.3);}to{transform:translateZ(-260px) translate3d(-200px,-80px,0) scale(1.3);}}
@keyframes driftMid{from{transform:translateZ(-140px) translate3d(0,0,0) scale(1.15);}to{transform:translateZ(-140px) translate3d(-140px,-40px,0) scale(1.15);}}
@keyframes driftNear{from{transform:translateZ(-60px) translate3d(0,0,0) scale(1.05);}to{transform:translateZ(-60px) translate3d(-110px,-20px,0) scale(1.05);}}
@media(max-width:599px){main{padding:2.5rem 1.25rem;}.star-demo__copy h1{font-size:2rem;}}
```

### Customisation Notes
- **Colour Palette**: swap the `radial-gradient` stops or define CSS custom properties for brand tokens.
- **Parallax Overlays**: the `.layer--*` backgrounds use radial repeats—change `background-image` to textures or noise for different atmospheres.
- **Glow Strength**: tweak `filter: drop-shadow`, `opacity`, or `transform: scale(var(--glow-scale))` for brighter or softer halos.
- **Motion Feel**: the keyframes reference CSS variables; you can hard-code durations for a uniform animation or expose more tokens.
- **Responsive Layout**: adjust `main` padding or add breakpoints to reposition the copy vs. canvas.

---

## 4. Star Glyph (`media/star-burst.svg`)

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548 718">
  <path d="M0.405029034,359 C133.18744,308.809408 209.99847,262.639649 230.838121,220.490722 C251.677771,178.341796 267.565064,104.844889 278.5,0 C292.691755,106.814832 309.720459,180.311739 329.586112,220.490722 C349.451765,260.669705 422.256395,306.839465 548,359 C422.256395,411.160535 349.451765,457.330295 329.586112,497.509278 C309.720459,537.688261 292.691755,611.185168 278.5,718 C267.565064,613.155111 251.677771,539.658204 230.838121,497.509278 C209.99847,455.360351 133.262091,409.190592 0.628983327,359 L0.405029034,359 Z" fill="#FFFFFF"/>
</svg>
```

Swap `fill="#FFFFFF"` for warm hues or use SVG filters for chromatic aberration. Because the CSS scales each star via `aspect-ratio`, keep the original viewBox to avoid distortion.

---

## 5. JavaScript Module (`scripts/starfield.js`)

```javascript
(() => {
  const host = document.querySelector('.star-field__stars');
  if (!host) {
    return;
  }

  const MIN_DISTANCE = 20;
  const MAX_ATTEMPTS = 200;
  const ZONES = ['top','bottom','left','right','top','bottom','left','right','top','bottom'];
  const SIZE_CONFIG = [
    { label: 'large', count: 3, sizeRange: [34, 48], driftRange: [26, 40], twinkleRange: [2.1, 3.0] },
    { label: 'medium', count: 3, sizeRange: [22, 32], driftRange: [20, 32], twinkleRange: [1.9, 2.7] },
    { label: 'small', count: 4, sizeRange: [14, 24], driftRange: [14, 26], twinkleRange: [1.6, 2.4] }
  ];

  const pick = (min, max) => Math.random() * (max - min) + min;
  const pickInt = (min, max) => Math.floor(pick(min, max));
  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const toPercent = value => `${value.toFixed(2)}%`;

  const zonePosition = zone => {
    switch (zone) {
      case 'top':
        return { top: pick(2, 16.5), left: pick(18, 82) };
      case 'bottom':
        return { top: pick(83.5, 98), left: pick(18, 82) };
      case 'left':
        return { top: pick(18, 82), left: pick(2, 16.5) };
      case 'right':
      default:
        return { top: pick(18, 82), left: pick(83.5, 98) };
    }
  };

  const fallbackPosition = (rect, radius, placed) => {
    const sampleZones = ['top','bottom','left','right'];
    const ranges = {
      top: { top: [2, 16.5], left: [18, 82], topStep: 1.2, leftStep: 2 },
      bottom: { top: [83.5, 98], left: [18, 82], topStep: 1.2, leftStep: 2 },
      left: { top: [18, 82], left: [2, 16.5], topStep: 2, leftStep: 1.2 },
      right: { top: [18, 82], left: [83.5, 98], topStep: 2, leftStep: 1.2 }
    };

    for (const zone of sampleZones) {
      const { top, left, topStep, leftStep } = ranges[zone];
      for (let t = top[0]; t <= top[1]; t += topStep) {
        for (let l = left[0]; l <= left[1]; l += leftStep) {
          const topPx = (t / 100) * rect.height;
          const leftPx = (l / 100) * rect.width;
          const candidate = { x: leftPx, y: topPx, radius };
          if (placed.every(existing => {
            const distance = Math.hypot(candidate.x - existing.x, candidate.y - existing.y);
            return distance >= MIN_DISTANCE + candidate.radius + existing.radius;
          })) {
            return {
              topPercent: toPercent(t),
              leftPercent: toPercent(l),
              topPx,
              leftPx
            };
          }
        }
      }
    }
    return null;
  };

  const vector = magnitude => {
    const angle = pick(0, Math.PI * 2);
    const intensity = pick(0.75, 1.15);
    return {
      x: parseFloat((Math.cos(angle) * magnitude * intensity).toFixed(1)),
      y: parseFloat((Math.sin(angle) * magnitude * intensity).toFixed(1))
    };
  };

  const buildStar = (initialZone, config, rect, placed) => {
    const star = document.createElement('div');
    star.className = `star star--${config.label}`;

    const sizePx = pick(config.sizeRange[0], config.sizeRange[1]);
    const radius = sizePx / 2;
    const candidateZones = [initialZone, 'top', 'bottom', 'left', 'right'];
    let position = null;

    for (let attempt = 0; attempt < MAX_ATTEMPTS && !position; attempt += 1) {
      const zone = candidateZones[attempt % candidateZones.length];
      const coords = zonePosition(zone);
      const topPx = (coords.top / 100) * rect.height;
      const leftPx = (coords.left / 100) * rect.width;
      const candidate = { x: leftPx, y: topPx, radius };
      if (placed.every(existing => {
        const distance = Math.hypot(candidate.x - existing.x, candidate.y - existing.y);
        return distance >= MIN_DISTANCE + candidate.radius + existing.radius;
      })) {
        position = {
          topPercent: toPercent(coords.top),
          leftPercent: toPercent(coords.left),
          topPx,
          leftPx
        };
        placed.push(candidate);
        break;
      }
    }

    if (!position) {
      const fallback = fallbackPosition(rect, radius, placed);
      if (fallback) {
        position = fallback;
        placed.push({ x: fallback.leftPx, y: fallback.topPx, radius });
      } else {
        console.warn('Star placement fallback failed; skipping star to preserve spacing.');
        return null;
      }
    }

    star.style.setProperty('--pos-top', position.topPercent);
    star.style.setProperty('--pos-left', position.leftPercent);
    star.style.setProperty('--size', `${sizePx.toFixed(1)}px`);

    const driftMagnitude = pick(config.driftRange[0], config.driftRange[1]);
    const driftVector = vector(driftMagnitude);
    star.style.setProperty('--drift-x', `${driftVector.x}px`);
    star.style.setProperty('--drift-y', `${driftVector.y}px`);
    star.style.setProperty('--drift-duration', `${pick(24, 44).toFixed(1)}s`);
    star.style.setProperty('--drift-delay', `-${pick(0, 24).toFixed(1)}s`);

    star.style.setProperty('--twinkle-duration', `${pick(config.twinkleRange[0], config.twinkleRange[1]).toFixed(2)}s`);
    star.style.setProperty('--twinkle-delay', `-${pick(0, 4).toFixed(2)}s`);

    star.style.setProperty('--glow-scale', pick(0.6, 0.9).toFixed(2));

    return star;
  };

  const generate = () => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      requestAnimationFrame(generate);
      return;
    }

    const zones = shuffle([...ZONES]);
    const placed = [];
    const fragment = document.createDocumentFragment();

    SIZE_CONFIG.forEach(config => {
      for (let i = 0; i < config.count; i += 1) {
        const zone = zones.length ? zones.shift() : ['top','bottom','left','right'][pickInt(0, 4)];
        const star = buildStar(zone, config, rect, placed);
        if (star) {
          fragment.appendChild(star);
        }
      }
    });

    host.replaceChildren(fragment);
  };

  requestAnimationFrame(generate);
})();
```

### Customisation Notes
- **Star Counts**: Change the `count` values in `SIZE_CONFIG` to control how many stars render per size tier.
- **Spacing**: The `MIN_DISTANCE` constant enforces a collision buffer. Raise it for sparse skies or lower it for denser clusters.
- **Zones**: Adjust `ZONES`. Repeating entries weights a zone; e.g., more `'top'` entries biases placement to the top bank.
- **Motion**: Modify `driftRange`, `twinkleRange`, and the `vector()` intensity multiplier to slow or exaggerate movement.
- **Fallback Strategy**: `fallbackPosition` currently scans deterministic grids along each edge. Replace or expand this search if your layout changes.
- **Glow & Opacity**: The script sets `--glow-scale` per star. Pair with CSS to clamp halos or experiment with additive blending.
- **Progressive Enhancement**: Because the stars are decorative, we mark the container `aria-hidden`. If you need static fallback stars for no-JS contexts, include a few `<div class="star">` nodes directly in the HTML.

---

## 6. Running the Demo

1. Serve the directory with `python3 -m http.server 4000` and open `http://localhost:4000/stars.html`.
2. Reload a few times to see different star layouts—each refresh reshuffles the zones, sizes, animation delays, and drift vectors.
3. Validate structure with `npx html-validate stars.html` to ensure there are no landmark or duplicate ID issues.
4. For accessibility and QA, run `npx pa11y http://localhost:4000/stars.html` to confirm the decorative layers remain hidden and colour contrast stays acceptable.

---

## 7. Extending the Pattern

- **Theme Variants**: Introduce CSS custom properties (`--bg-hue`, `--glow-color`) and drive them from a parent class when switching between day/night modes.
- **Interactive Constellations**: Replace the random generator with a data set that maps named constellations, exposing a dropdown so users can pick formations.
- **Performance**: For heavier use (e.g., dozens of stars), consider throttling the animation via `prefers-reduced-motion` checks or using CSS `will-change` hints.
- **Framework Ports**: Wrap `generate()` in a custom element or React hook if you need to slot this into a component-driven stack.
- **Testing**: Capture screenshots at 320 px, 768 px, and 1280 px to ensure the parallax frame and stars scale gracefully across breakpoints.

---

With these building blocks, you can adapt the star field to match any branded hero, from calm meditative skies to high-energy cosmic backdrops. Tweak the asset, colour system, and animation ranges as needed to suit your narrative.
