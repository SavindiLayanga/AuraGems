import {
  ChevronRight,
  Gem,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from 'lucide-react';
import Button from './Button';

const shopLinks = [
  { label: 'All Collections', href: '#collection' },
  { label: 'Rings', href: '/rings' },
  { label: 'Earrings', href: '/earrings' },
  { label: 'Necklaces', href: '/necklaces' },
  { label: 'Loose Stones', href: '#collection' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Story', href: '#about' },
  { label: 'Artisans', href: '#about' },
  { label: 'Sustainability', href: '#about' },
  { label: 'Careers', href: '#' },
];

const supportLinks = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'Shipping & Delivery', href: '#' },
  { label: 'Returns & Exchanges', href: '#' },
  { label: 'Gem Certification', href: '#' },
  { label: 'FAQ', href: '#faq' },
];

const partners = [
  { name: 'GemTrust', label: 'GEMTRUST' },
  { name: 'StoneCraft', label: 'STONECRAFT' },
  { name: 'LuxeSet', label: 'LUXESET' },
  { name: 'PureCut', label: 'PURECUT' },
  { name: 'AuraLab', label: 'AURALAB' },
];

const socials = [
  { label: 'Share', icon: Share2, href: '#' },
  { label: 'Message', icon: MessageCircle, href: '#' },
  { label: 'Website', icon: Globe, href: '#' },
];

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mocha">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-1 text-sm font-light text-warm-gray transition hover:text-mocha"
            >
              {link.label}
              <ChevronRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-mocha text-cream">
      {/* Partner marquee — scrolls left continuously */}
      <div
        className="footer-partners section-x border-b border-white/10 bg-beige py-8 md:py-10"
        aria-label="Partner brands"
      >
        <div className="footer-partners__viewport">
          <div className="footer-partners__track">
            {[...partners, ...partners].map(({ name, label }, index) => (
              <span
                key={`${name}-${index}`}
                className="footer-partners__item font-serif tracking-[0.25em] text-mocha/45"
                aria-hidden={index >= partners.length}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-x py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a
                href="#home"
                className="inline-flex items-center gap-2 font-serif text-2xl font-semibold tracking-wide text-cream"
              >
                <Gem
                  className="h-5 w-5 fill-cream/15 stroke-cream"
                  strokeWidth={1.5}
                />
                AuraGems
              </a>
              <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-cream/70">
                Curating ethically sourced gemstones and fine jewelry since
                1987. Every piece certified, every story worth telling.
              </p>

              <div className="mt-6 space-y-3 text-sm font-light text-cream/70">
                <a
                  href="mailto:hello@auragems.com"
                  className="flex items-center gap-3 transition hover:text-cream"
                >
                  <Mail className="h-4 w-4 shrink-0 text-tan" />
                  hello@auragems.com
                </a>
                <a
                  href="tel:+18005554236"
                  className="flex items-center gap-3 transition hover:text-cream"
                >
                  <Phone className="h-4 w-4 shrink-0 text-tan" />
                  +1 (800) 555-GEMS
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tan" />
                  42 Gemstone Avenue, Suite 100
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                {socials.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
              <FooterLinkGroup title="Shop" links={shopLinks} />
              <FooterLinkGroup title="Company" links={companyLinks} />
              <FooterLinkGroup title="Support" links={supportLinks} />
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                Stay In Touch
              </h3>
              <p className="text-sm font-light leading-relaxed text-cream/70">
                Subscribe for new arrivals, exclusive offers, and gem care tips.
              </p>
              <form
                className="mt-5"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition focus:border-tan focus:ring-1 focus:ring-tan"
                  />
                  <Button
                    type="submit"
                    variant="light"
                    className="shrink-0 !border-cream !bg-cream !text-mocha hover:!bg-cream/90"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
              <p className="mt-4 text-xs font-light text-cream/50">
                By subscribing you agree to our Privacy Policy. Unsubscribe
                anytime.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {['GIA Certified', 'Ethically Sourced', 'Insured Shipping'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-cream/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cream/60"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
            <p className="text-center text-xs font-light text-cream/50 md:text-left">
              © {new Date().getFullYear()} AuraGems. All rights reserved.
              Ethically sourced gemstones, crafted with care.
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-6"
              aria-label="Legal"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs font-light text-cream/50 transition hover:text-cream"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-cream/40 md:justify-end">
              <span className="w-full text-center md:w-auto md:text-left">
                We accept
              </span>
              <span className="rounded border border-cream/15 px-2 py-0.5 font-medium tracking-wide">
                VISA
              </span>
              <span className="rounded border border-cream/15 px-2 py-0.5 font-medium tracking-wide">
                MC
              </span>
              <span className="rounded border border-cream/15 px-2 py-0.5 font-medium tracking-wide">
                AMEX
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
