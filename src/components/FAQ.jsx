import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'Are AuraGems stones certified?',
    answer:
      'Yes. Every featured gemstone is graded for cut, color, clarity, and carat weight. GIA or equivalent documentation is provided with fine jewelry pieces, and certificates are available on request for loose stones.',
  },
  {
    question: 'How does shipping and insurance work?',
    answer:
      'Orders above $150 ship free with fully insured delivery worldwide. Each parcel is discreetly packaged, tracked end to end, and requires a signature on arrival for added security.',
  },
  {
    question: 'Can I request a custom setting or resize?',
    answer:
      'Absolutely. Our artisans offer bespoke settings in 18k gold and platinum, plus complimentary resizing on eligible rings within the first year. Contact us with your stone dimensions or design references to begin.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Unworn pieces in original condition may be returned within 30 days for a full refund or exchange. Custom and engraved items are final sale unless there is a craftsmanship defect covered by our lifetime care promise.',
  },
  {
    question: 'How do I care for my gemstones at home?',
    answer:
      'Clean gently with lukewarm water, mild soap, and a soft brush. Avoid harsh chemicals, ultrasonic cleaners on softer stones, and prolonged sun exposure. Visit us anytime for professional cleaning and inspection.',
  },
  {
    question: 'Do you source gems ethically?',
    answer:
      'We partner only with traceable, conflict-free suppliers and publish origin details whenever available. Transparency in sourcing is central to every piece we curate and sell.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      id="faq"
      className="section-x bg-cream py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal-item mx-auto max-w-lg text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-warm-gray">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-mocha md:text-4xl">
            Questions & Answers
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-warm-gray">
            Everything you need to know about certification, shipping, care, and
            our commitment to ethical gemstones.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 lg:gap-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li
                key={question}
                className={`scroll-reveal-item group card-shadow overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:border-tan/80 hover:card-shadow-hover ${
                  isOpen
                    ? 'border-tan/80 bg-white'
                    : 'border-beige/70 bg-white/80 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-champagne/30 md:px-6 md:py-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? -1 : index,
                    )
                  }
                >
                  <span className="text-sm font-medium tracking-wide text-mocha transition-colors duration-200 group-hover:text-mocha/90 md:text-base">
                    {question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 stroke-mocha transition-transform duration-300 group-hover:stroke-warm-gray ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-beige/60 px-5 pb-5 pt-0 md:px-6 md:pb-6"
                >
                  <p className="pt-4 text-sm font-light leading-relaxed text-warm-gray">
                    {answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
