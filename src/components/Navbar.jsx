import { ChevronDown, Gem, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

const links = [
  { label: 'Home', hash: 'home' },
  { label: 'About Us', hash: 'about' },
  { label: 'Collections', hash: 'collection' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Contact', hash: 'contact' },
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeHash = hash.replace('#', '') || (pathname === '/' ? 'home' : '');

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${header.offsetHeight}px`,
      );
    };

    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
    return () => window.removeEventListener('resize', syncHeaderHeight);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function goToSection(targetHash, e) {
    e?.preventDefault();
    setMenuOpen(false);

    if (pathname !== '/') {
      navigate(`/#${targetHash}`);
      return;
    }

    navigate(`/#${targetHash}`, { replace: targetHash === activeHash });
    scrollToSection(targetHash);
  }

  const linkClass = (isActive) =>
    `block rounded-xl px-4 py-3 text-sm tracking-wide transition md:inline-block md:rounded-none md:px-0 md:py-0 ${
      isActive
        ? 'bg-champagne/80 font-medium text-mocha md:bg-transparent'
        : 'font-light text-mocha/80 hover:bg-champagne/50 hover:text-mocha md:hover:bg-transparent'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-beige/50 bg-cream/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-10 lg:px-16"
        aria-label="Main"
      >
        <Link
          to="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              navigate('/', { replace: true });
              scrollToSection('home');
            }
            setMenuOpen(false);
          }}
          className="flex min-w-0 shrink items-center gap-2 font-serif text-lg font-semibold tracking-wide text-mocha sm:text-xl md:text-2xl"
        >
          <Gem
            className="h-5 w-5 shrink-0 fill-mocha/15 stroke-mocha"
            strokeWidth={1.5}
          />
          <span className="truncate">AuraGems</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === '/' && activeHash === link.hash;

            return (
              <li key={link.label}>
                <a
                  href={`/#${link.hash}`}
                  className={`flex items-center gap-1 text-sm tracking-wide transition ${
                    isActive
                      ? 'font-medium text-mocha'
                      : 'font-light text-mocha/80 hover:text-mocha'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => goToSection(link.hash, e)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="/#contact"
            className="hidden min-h-11 items-center justify-center rounded-full border border-mocha bg-mocha px-5 py-2.5 text-xs font-medium tracking-wide text-white shadow-sm transition hover:bg-mocha/90 sm:inline-flex sm:px-6 sm:text-sm"
            onClick={(e) => goToSection('contact', e)}
          >
            Contact Us
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-beige/80 bg-white/80 text-mocha transition hover:border-tan hover:bg-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-beige/60 bg-cream/98 px-4 pb-5 pt-3 shadow-lg backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen
            ? 'visible max-h-[min(32rem,calc(100dvh-var(--header-height)))] opacity-100'
            : 'pointer-events-none invisible max-h-0 overflow-hidden opacity-0 pb-0 pt-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === '/' && activeHash === link.hash;

            return (
              <li key={link.label}>
                <a
                  href={`/#${link.hash}`}
                  className={linkClass(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => goToSection(link.hash, e)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2 border-t border-beige/60 pt-3">
            <a
              href="/#contact"
              className="flex min-h-11 items-center justify-center rounded-full border border-mocha bg-mocha text-sm font-medium tracking-wide text-white"
              onClick={(e) => goToSection('contact', e)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
