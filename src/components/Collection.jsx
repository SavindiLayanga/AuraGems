import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';
import GemCardGrid from './GemCardGrid';
import { FEATURED_PRODUCTS } from '../data/featuredProducts';

export default function Collection() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      id="collection"
      className="section-x bg-cream py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal-item mb-12 max-w-md">
          <h2 className="font-serif text-3xl font-medium text-mocha md:text-4xl">
            Our Collection
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-warm-gray">
            Curated gemstones set in 18k gold and platinum — from everyday
            elegance to statement heirlooms.
          </p>
          <Link to="/gem-collection" className="mt-6 inline-block">
            <Button variant="outline" className="mt-0">
              See More
            </Button>
          </Link>
        </div>

        <GemCardGrid items={FEATURED_PRODUCTS} staggerReveal />
      </div>
    </section>
  );
}
