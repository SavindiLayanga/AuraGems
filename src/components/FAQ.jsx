import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ScrollRevealItem from './ScrollRevealItem';

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

function buildRows(items, columnCount) {
  const rows = [];
  for (let i = 0; i < items.length; i += columnCount) {
    const slice = items.slice(i, i + columnCount);
    rows.push(
      slice.map((item, offset) => ({
        ...item,
        index: i + offset,
      })),
    );
  }
  return rows;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [columns, setColumns] = useState(2);
  const revealRef = useScrollReveal();

  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');

    const updateColumns = () => {
      setColumns(media.matches ? 2 : 1);
    };

    updateColumns();
    media.addEventListener('change', updateColumns);
    return () => media.removeEventListener('change', updateColumns);
  }, []);

  const rows = buildRows(faqs, columns);

  return (
    <section
      ref={revealRef}
      id="faq"
      className="section-x bg-cream py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-lg text-center">
          <ScrollRevealItem index={0} className="scroll-reveal-item--text">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-warm-gray">
              FAQ
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem index={1} className="scroll-reveal-item--text">
            <h2 className="mt-3 font-serif text-3xl font-medium text-mocha md:text-4xl">
              Questions & Answers
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem index={2} className="scroll-reveal-item--text">
            <p className="mt-4 text-sm font-light leading-relaxed text-warm-gray">
              Everything you need to know about certification, shipping, care, and
              our commitment to ethical gemstones.
            </p>
          </ScrollRevealItem>
        </div>

        <ul className="faq-list mt-10 flex flex-col gap-3 md:mt-12 lg:gap-4">
          {rows.map((row, rowIndex) => {
            const openInRow = row.find((item) => item.index === openIndex);
            const panelId = openInRow ? `faq-panel-${openInRow.index}` : undefined;
            const buttonId = openInRow ? `faq-button-${openInRow.index}` : undefined;

            return (
              <li key={`faq-row-${rowIndex}`} className="faq-row list-none">
                <div
                  className={`grid gap-3 ${
                    columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {row.map(({ question, index }) => {
                    const isOpen = openIndex === index;

                    return (
                      <ScrollRevealItem
                        key={question}
                        index={3 + index}
                        className={`scroll-reveal-item--card faq-item group card-shadow overflow-hidden rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? 'faq-item--open'
                            : 'faq-item--closed hover:-translate-y-0.5 hover:card-shadow-hover'
                        }`}
                      >
                        <button
                          type="button"
                          id={`faq-button-${index}`}
                          className="faq-item__trigger flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 md:px-6 md:py-5"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${index}`}
                          onClick={() =>
                            setOpenIndex((current) =>
                              current === index ? -1 : index,
                            )
                          }
                        >
                          <span className="faq-item__question text-sm tracking-wide transition-colors duration-300 md:text-base">
                            {question}
                          </span>
                          <ChevronDown
                            className={`faq-item__chevron h-5 w-5 shrink-0 transition-all duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            strokeWidth={isOpen ? 2 : 1.5}
                            aria-hidden
                          />
                        </button>
                      </ScrollRevealItem>
                    );
                  })}
                </div>

                {openInRow && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-answer mt-3"
                  >
                    <div className="card-shadow rounded-2xl border border-tan/80 bg-white px-5 py-5 md:px-6 md:py-6">
                      <p className="text-sm font-light leading-relaxed text-warm-gray">
                        {openInRow.answer}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
