import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@auragems.com',
    href: 'mailto:hello@auragems.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 555-GEMS',
    href: 'tel:+18005554236',
  },
  {
    icon: MapPin,
    label: 'Showroom',
    value: '42 Gemstone Avenue, Suite 100\nNew York, NY 10001',
    href: 'https://maps.google.com/?q=42+Gemstone+Avenue+New+York',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri 10am–7pm EST\nSat 11am–5pm · By appointment Sun',
  },
];

const inquiryTypes = [
  'General inquiry',
  'Custom setting',
  'Gem certification',
  'Order & shipping',
  'Wholesale',
];

const inputClass =
  'w-full rounded-xl border border-beige/80 bg-white/90 px-4 py-3 text-sm text-mocha outline-none transition placeholder:text-warm-gray/60 focus:border-tan focus:ring-1 focus:ring-tan';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const revealRef = useScrollReveal();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={revealRef}
      id="contact"
      className="section-x bg-cream py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal-item mx-auto max-w-lg text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-warm-gray">
            Contact Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-mocha md:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-warm-gray">
            Questions about a stone, a bespoke setting, or your order? Our gem
            specialists respond within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-10 xl:grid-cols-[1.15fr_minmax(0,22rem)]">
          <div className="scroll-reveal-item card-shadow rounded-2xl border border-beige/70 bg-white/90 p-6 md:p-8 lg:p-10">
            {submitted ? (
              <div
                className="flex min-h-[20rem] flex-col items-center justify-center text-center"
                role="status"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne">
                  <Send
                    className="h-6 w-6 stroke-mocha"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-mocha">
                  Message received
                </h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-warm-gray">
                  Thank you for reaching out. A member of our team will reply to
                  your email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium tracking-wide text-mocha underline-offset-4 transition hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Contact form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-mocha/80"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-mocha/80"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-mocha/80"
                  >
                    Topic
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    className={`${inputClass} cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-mocha/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about the gem, piece, or question you have in mind..."
                    className={`${inputClass} resize-y min-h-[8rem]`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="solid"
                  className="w-full sm:w-auto !px-8"
                >
                  <Send className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <aside className="scroll-reveal-item flex flex-col gap-4">
            <ul className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="card-shadow rounded-2xl border border-beige/70 bg-white/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-tan/80 hover:card-shadow-hover"
                >
                  {href ? (
                    <a
                      href={href}
                      className="group flex gap-4"
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne">
                        <Icon
                          className="h-5 w-5 stroke-mocha"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <span>
                        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-warm-gray">
                          {label}
                        </span>
                        <span className="mt-1 block whitespace-pre-line text-sm font-light leading-relaxed text-mocha transition group-hover:text-mocha/80">
                          {value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne">
                        <Icon
                          className="h-5 w-5 stroke-mocha"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <span>
                        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-warm-gray">
                          {label}
                        </span>
                        <span className="mt-1 block whitespace-pre-line text-sm font-light leading-relaxed text-mocha">
                          {value}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <p className="rounded-2xl border border-beige/60 bg-champagne/50 px-5 py-4 text-xs font-light leading-relaxed text-warm-gray">
              Prefer a private consultation? Mention your preferred date and
              time — we&apos;ll arrange a virtual or in-showroom appointment.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
