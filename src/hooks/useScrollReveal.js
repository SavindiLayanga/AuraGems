import { useEffect, useRef } from 'react';

/**
 * Toggles `is-visible` when the section enters/leaves the viewport
 * so scroll animations replay on scroll down and scroll up.
 */
export function useScrollReveal({
  instant = false,
  threshold = 0.1,
  once = false,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    el.classList.add('scroll-reveal');

    if (prefersReduced || instant) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [instant, threshold, once]);

  return ref;
}
