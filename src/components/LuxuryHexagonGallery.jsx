import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const HEX_CLIP =
  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

const ROW_COUNTS = [3, 4, 5, 4, 4, 2];
/** Row index → hex indices with no image (0-based). */
const HIDDEN_HEX = { 1: [0], 3: [0] };
const MOSAIC_IMAGE = '/gem-mosaic.png';
const MOSAIC_ALT =
  'Balanced stack of colorful polished gemstones on a rocky shore at golden sunset';

const rows = ROW_COUNTS.map((count, rowIndex) => ({
  count,
  rowIndex,
}));

function Hexagon({ empty = false, assembleIndex = 0 }) {
  return (
    <div
      className={`hex-gem${empty ? ' hex-gem--empty' : ' hex-gem--filled'}`}
      style={
        empty
          ? undefined
          : {
              clipPath: HEX_CLIP,
              '--hex-delay': `${assembleIndex * 0.048}s`,
            }
      }
    >
      {!empty && <div className="hex-gem__slice" aria-hidden="true" />}
    </div>
  );
}

export default function LuxuryHexagonGallery() {
  const galleryRef = useRef(null);
  const mosaicTimeoutRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [assembled, setAssembled] = useState(false);

  const setHexOrigins = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const bounds = gallery.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    gallery.querySelectorAll('.hex-gem--filled').forEach((hex) => {
      const rect = hex.getBoundingClientRect();
      const hexX = rect.left + rect.width / 2;
      const hexY = rect.top + rect.height / 2;
      let dx = hexX - centerX;
      let dy = hexY - centerY;
      const distance = Math.hypot(dx, dy) || 1;
      const push = 1.65;

      dx = (dx / distance) * 78 * push;
      dy = (dy / distance) * 70 * push + 14;

      hex.style.setProperty('--hex-from-x', `${dx}px`);
      hex.style.setProperty('--hex-from-y', `${dy}px`);
    });
  }, []);

  const syncMosaic = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const width = gallery.offsetWidth;
    const height = gallery.offsetHeight;
    if (!width || !height) return;

    gallery.style.setProperty('--mosaic-w', `${width}px`);
    gallery.style.setProperty('--mosaic-h', `${height}px`);

    gallery.querySelectorAll('.hex-gem').forEach((hex) => {
      hex.style.setProperty('--mosaic-x', `${-hex.offsetLeft}px`);
      hex.style.setProperty('--mosaic-y', `${-hex.offsetTop}px`);
    });

    setHexOrigins();
    setReady(true);
  }, [setHexOrigins]);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    syncMosaic();

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(syncMosaic);
    });
    observer.observe(gallery);

    const onLoad = () => syncMosaic();
    window.addEventListener('resize', onLoad);

    const img = new Image();
    img.src = MOSAIC_IMAGE;
    img.onload = onLoad;

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onLoad);
    };
  }, [syncMosaic]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) {
      setAssembled(true);
      return;
    }

    const playAssembly = () => {
      if (mosaicTimeoutRef.current) {
        window.clearTimeout(mosaicTimeoutRef.current);
      }
      setAssembled(false);
      setHexOrigins();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAssembled(true);
          mosaicTimeoutRef.current = window.setTimeout(() => syncMosaic(), 900);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playAssembly();
        } else {
          setAssembled(false);
          if (mosaicTimeoutRef.current) {
            window.clearTimeout(mosaicTimeoutRef.current);
            mosaicTimeoutRef.current = null;
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(gallery);
    return () => {
      observer.disconnect();
      if (mosaicTimeoutRef.current) {
        window.clearTimeout(mosaicTimeoutRef.current);
      }
    };
  }, [setHexOrigins, syncMosaic]);

  let filledIndex = 0;

  return (
    <div
      ref={galleryRef}
      className={`hex-gallery w-fit py-2${ready ? ' hex-gallery--ready' : ''}${
        assembled ? ' hex-gallery--assembled' : ''
      }`}
      role="img"
      aria-label={MOSAIC_ALT}
      style={{ '--hex-mosaic-image': `url(${MOSAIC_IMAGE})` }}
    >
      <img className="sr-only" src={MOSAIC_IMAGE} alt={MOSAIC_ALT} />
      <div className="hex-gallery__sheen" aria-hidden="true" />
      {rows.map(({ count, rowIndex }) => (
        <div
          key={rowIndex}
          className={`hex-row ${rowIndex % 2 === 0 ? 'hex-row--odd' : 'hex-row--even'}`}
        >
          {Array.from({ length: count }, (_, i) => {
            const empty = HIDDEN_HEX[rowIndex]?.includes(i);
            const assembleIndex = empty ? 0 : filledIndex++;

            return (
              <Hexagon key={i} empty={empty} assembleIndex={assembleIndex} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
