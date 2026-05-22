export default function Button({
  children,
  variant = 'solid',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer border';

  const variants = {
    solid:
      'bg-mocha text-white border-mocha hover:bg-mocha/90 shadow-sm',
    outline:
      'bg-transparent text-mocha border-mocha/40 hover:border-mocha hover:bg-white/50',
    light:
      'bg-white text-mocha border-white hover:bg-white/90 shadow-md',
    ghost:
      'bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30',
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
