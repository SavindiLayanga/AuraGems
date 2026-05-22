import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ name, price, image, imageAlt }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-3xl bg-champagne">
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[4/5] w-full object-cover warm-photo transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label={`Add ${name} to bag`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-mocha shadow-md transition hover:bg-white"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-4 flex items-baseline justify-between px-1">
        <h3 className="text-sm font-medium text-mocha">{name}</h3>
        <p className="text-sm font-semibold text-mocha">{price}</p>
      </div>
    </article>
  );
}
