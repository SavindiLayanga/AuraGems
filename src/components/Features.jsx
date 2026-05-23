import { Award, Diamond, Package, Truck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ScrollRevealItem from './ScrollRevealItem';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description:
      'Complimentary insured delivery on every order above $150, worldwide.',
  },
  {
    icon: Diamond,
    title: 'Certified Gems',
    description:
      'Each stone is ethically sourced and accompanied by GIA certification.',
  },
  {
    icon: Package,
    title: 'Gift Packaging',
    description:
      'Luxury presentation boxes designed for gifting and heirloom keepsakes.',
  },
  {
    icon: Award,
    title: 'Lifetime Care',
    description:
      'Complimentary cleaning, resizing, and restoration for all AuraGems pieces.',
  },
];

export default function Features() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="section-x relative z-20 -mt-10 pb-8 sm:-mt-12 md:-mt-16 md:pb-12 lg:-mt-20"
    >
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {features.map(({ icon: Icon, title, description }, i) => (
          <ScrollRevealItem
            key={title}
            as="article"
            index={i}
            className="scroll-reveal-item--card card-shadow rounded-3xl border border-beige/60 bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-tan/80 hover:card-shadow-hover lg:text-left"
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-beige/60 bg-champagne/50 lg:mx-0">
              <Icon className="h-6 w-6 stroke-mocha" strokeWidth={1.25} />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-mocha">
              {title}
            </h3>
            <p className="text-xs font-light leading-relaxed text-warm-gray">
              {description}
            </p>
          </ScrollRevealItem>
        ))}
      </div>
    </section>
  );
}
