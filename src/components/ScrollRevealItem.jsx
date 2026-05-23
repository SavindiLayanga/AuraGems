/** Stagger step between sibling reveal items (seconds). */
export const REVEAL_STAGGER = 0.07;

/**
 * Animated block inside a parent with `useScrollReveal` + `scroll-reveal` class.
 * Replays when the section scrolls in/out of view.
 */
export default function ScrollRevealItem({
  children,
  className = '',
  index = 0,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={['scroll-reveal-item', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${index * REVEAL_STAGGER}s` }}
      {...props}
    >
      {children}
    </Component>
  );
}
