import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CHOOSE_TYPE_CARDS } from '../data/jewelryCatalog';
import CategoryCard from './CategoryCard';

/** Gemstone close-up — Mixkit #2568 “Gems and stones”. Replace public/category-video.mp4 anytime. */
const CATEGORY_VIDEO_SRC = '/category-video.mp4';

const CATEGORY_VIDEO_POSTER =
  'https://images.unsplash.com/photo-1611278996508-06efe8ee7c04?w=900&q=80';

export default function Categories() {
  const revealRef = useScrollReveal();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playLive = () => {
      video.play().catch(() => {});
    };

    playLive();
    video.addEventListener('canplay', playLive);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playLive();
        else video.pause();
      },
      { threshold: 0.25 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('canplay', playLive);
    };
  }, []);

  return (
    <section
      ref={revealRef}
      id="categories"
      className="section-x bg-cream py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="scroll-reveal-item categories-video">
          <video
            ref={videoRef}
            src={CATEGORY_VIDEO_SRC}
            className="categories-video__media"
            poster={CATEGORY_VIDEO_POSTER}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Hands holding gemstones in natural light"
          />
        </div>

        <div>
          <h2 className="scroll-reveal-item font-serif text-3xl font-medium text-mocha md:text-4xl">
            Choose The Type!
          </h2>
          <p className="scroll-reveal-item mt-4 max-w-md text-sm font-light leading-relaxed text-warm-gray">
            Browse rings, earrings, and necklaces — each opens its own
            collection of stone-set pieces crafted for your style.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-10 sm:gap-4">
            {CHOOSE_TYPE_CARDS.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
