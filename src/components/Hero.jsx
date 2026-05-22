import { ArrowRight } from 'lucide-react';
import Button from './Button';
import TypewriterHeading from './TypewriterHeading';

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-enter relative min-h-[min(92vh,900px)] overflow-x-hidden rounded-b-[1.5rem] sm:min-h-[92vh] sm:rounded-b-[2rem] md:rounded-b-[2.5rem]"
    >
      <img
        src="/hero-bg.png"
        alt="Assorted polished gemstones and crystal clusters on warm stone"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] sm:object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/20 to-cream/5 sm:bg-gradient-to-r sm:from-cream/50 sm:via-cream/15 sm:to-transparent" />

      <div className="section-x relative z-10 mx-auto flex min-h-[min(92vh,900px)] max-w-7xl flex-col justify-center pb-24 pt-24 sm:min-h-[92vh] sm:pb-28 sm:pt-28 md:pb-32 lg:pb-36">
        <div className="grid items-end gap-8 sm:gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <TypewriterHeading />

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="solid" className="!px-8">
                Let&apos;s Get Started
              </Button>
              <button
                type="button"
                aria-label="Explore collections"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-mocha/25 bg-white/60 text-mocha shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-warm-gray">
              Discover hand-selected sapphires, emeralds, and diamonds crafted
              into timeless pieces — where natural brilliance meets refined
              artistry.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-5 sm:items-end sm:gap-6 lg:gap-8">
            <div className="flex w-full max-w-xs items-center gap-4 self-center rounded-2xl bg-white/70 px-4 py-3 shadow-md backdrop-blur-md sm:max-w-none sm:self-end">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: avatars.length - i }}
                  />
                ))}
              </div>
              <div className="text-left text-mocha">
                <p className="font-serif text-lg font-semibold leading-none">
                  230K
                </p>
                <p className="text-xs font-light text-warm-gray">Happy Clients</p>
              </div>
            </div>

            <article className="w-full max-w-md rounded-3xl bg-white p-4 shadow-xl sm:max-w-xs md:max-w-sm sm:self-end">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80"
                alt="Sapphire and gold bracelet"
                className="h-36 w-full rounded-2xl object-cover warm-photo md:h-40"
              />
              <h3 className="mt-4 font-serif text-lg text-mocha">
                Beautiful In Every Detail
              </h3>
              <a
                href="#collection"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-warm-gray transition hover:text-mocha"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
