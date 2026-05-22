import { ChevronDown } from 'lucide-react';

export default function CategoryCard({ name, image, imageAlt }) {
  return (
    <button
      type="button"
      className="scroll-reveal-item flex w-full flex-col items-center rounded-[1.75rem] border border-beige/80 bg-champagne/60 px-4 py-6 transition hover:border-tan hover:bg-white/60 min-[420px]:rounded-[2.5rem] min-[420px]:px-5 min-[420px]:py-7 sm:px-6 sm:py-8"
    >
      <img
        src={image}
        alt={imageAlt}
        className="h-16 w-16 rounded-full object-cover warm-photo shadow-sm ring-2 ring-white min-[420px]:h-20 min-[420px]:w-20"
      />
      <span className="mt-4 text-sm font-medium text-mocha">{name}</span>
      <ChevronDown className="mt-3 h-4 w-4 text-warm-gray" />
    </button>
  );
}
