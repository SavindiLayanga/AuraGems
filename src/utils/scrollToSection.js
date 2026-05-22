const HEADER_GAP = 16;
const SCROLL_DURATION_MS = 900;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateScrollTo(targetY) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();
  let frameId = 0;

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    }
  };

  frameId = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frameId);
}

export function getHeaderOffset() {
  const header = document.querySelector('header');
  return (header?.offsetHeight ?? 72) + HEADER_GAP;
}

export function scrollToSection(id) {
  const targetTop =
    !id || id === 'home'
      ? 0
      : (() => {
          const el = document.getElementById(id);
          if (!el) return null;
          return (
            el.getBoundingClientRect().top +
            window.scrollY -
            getHeaderOffset()
          );
        })();

  if (targetTop === null) return;

  const top = Math.max(0, targetTop);

  if (prefersReducedMotion()) {
    window.scrollTo({ top, behavior: 'auto' });
    return;
  }

  animateScrollTo(top);
}
