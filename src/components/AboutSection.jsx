import { ArrowRight, Award, Gem, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';
import LuxuryHexagonGallery from './LuxuryHexagonGallery';

const highlights = [
  {
    icon: Award,
    title: 'GIA Certified',
    detail: 'Graded for brilliance & clarity',
  },
  {
    icon: Gem,
    title: 'Ethically Sourced',
    detail: 'Traceable, conflict-free stones',
  },
  {
    icon: Star,
    title: '5.0 Client Rating',
    detail: 'Trusted by collectors worldwide',
  },
];

export default function AboutSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      id="about"
      className="about-section relative overflow-x-clip py-20 md:py-28 lg:py-32"
    >
      <div className="about-section__backdrop" aria-hidden="true" />

      <div className="section-x relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-16 xl:grid-cols-[1fr_32rem] xl:gap-20">
          {/* Copy — first on mobile */}
          <div className="scroll-reveal-item about-section__content order-1 w-full lg:order-2">
            <p className="about-section__eyebrow">About AuraGems</p>

            <h2 className="about-section__title font-serif text-mocha">
              The Art of
              <span className="about-section__title-accent">
                Radiant Refinement
              </span>
            </h2>

            <div className="about-section__rule" aria-hidden="true" />

            <p className="about-section__body">
              At AuraGems, we believe every gemstone tells a story millions of
              years in the making. Our master artisans cut and set each piece to
              reveal its inner fire — transforming raw earth into wearable light
              for generations to cherish.
            </p>
            <p className="about-section__body mt-4">
              From ethical sourcing to GIA-certified grading, every stone is
              selected for brilliance, clarity, and character — so your jewelry
              shines as beautifully as the moment you first wear it.
            </p>

            <ul className="about-section__highlights mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:gap-4">
              {highlights.map(({ icon: Icon, title, detail }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-beige/50 bg-champagne/40 px-4 py-4 transition hover:border-tan/60 hover:bg-champagne/70"
                >
                  <Icon
                    className="mb-2.5 h-5 w-5 stroke-mocha"
                    strokeWidth={1.35}
                  />
                  <p className="text-xs font-semibold tracking-wide text-mocha">
                    {title}
                  </p>
                  <p className="mt-1 text-[0.6875rem] font-light leading-snug text-warm-gray">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="solid" className="!px-8">
                Explore Our Story
              </Button>
              <a
                href="#collection"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-mocha transition hover:text-warm-gray"
              >
                View Collection
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Honeycomb mosaic */}
          <div className="scroll-reveal-item about-section__gallery order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="hex-gallery-wrap">
              <LuxuryHexagonGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
