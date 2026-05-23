import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import GemCardGrid from '../components/GemCardGrid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollRevealItem from '../components/ScrollRevealItem';
import { GEM_CATALOG } from '../data/gemCatalog';

export default function GemCollectionPage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Navbar />
      <div className="page-stage min-h-screen overflow-x-hidden bg-cream">
        <main ref={revealRef} className="gem-catalog-page">
          <div className="section-x mx-auto max-w-7xl pb-16 pt-24 sm:pb-20 sm:pt-28 md:pt-32">
            <ScrollRevealItem index={0} className="scroll-reveal-item--text">
              <Link
                to="/#collection"
                className="gem-catalog-page__back group mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-warm-gray transition hover:text-mocha"
              >
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                Back to Collection
              </Link>
            </ScrollRevealItem>

            <header className="gem-catalog-page__header mb-12 max-w-2xl md:mb-16">
              <ScrollRevealItem index={1} className="scroll-reveal-item--text">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-warm-gray">
                  Gem Encyclopedia
                </p>
              </ScrollRevealItem>
              <ScrollRevealItem index={2} className="scroll-reveal-item--text">
                <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-mocha md:text-5xl">
                  Discover Our
                  <span className="block font-serif italic font-normal text-warm-gray">
                    Signature Stones
                  </span>
                </h1>
              </ScrollRevealItem>
              <ScrollRevealItem index={3} className="scroll-reveal-item--text">
                <p className="mt-5 text-sm font-light leading-relaxed text-warm-gray md:text-base">
                  Explore the character, benefits, and craftsmanship behind each gem
                  in the AuraGems collection — curated for collectors, gifters, and
                  lifelong jewelry lovers.
                </p>
              </ScrollRevealItem>
            </header>

            <GemCardGrid
              items={GEM_CATALOG}
              staggerReveal
              revealIndexStart={4}
            />

            <ScrollRevealItem index={4 + GEM_CATALOG.length} className="mt-14 flex justify-center">
              <Link to="/#collection">
                <Button variant="outline">Return to Shop Highlights</Button>
              </Link>
            </ScrollRevealItem>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
