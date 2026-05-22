import { useCallback, useLayoutEffect, useRef, useState } from 'react';

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

function Hexagon({ empty = false }) {
  return (
    <div
      className={`hex-gem${empty ? ' hex-gem--empty' : ''}`}
      style={empty ? undefined : { clipPath: HEX_CLIP }}
    >
      {!empty && <div className="hex-gem__slice" aria-hidden="true" />}
    </div>
  );
}

export default function LuxuryHexagonGallery() {
  const galleryRef = useRef(null);
  const [ready, setReady] = useState(false);

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

    setReady(true);
  }, []);

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

  return (
    <div
      ref={galleryRef}
      className={`hex-gallery w-fit py-2${ready ? ' hex-gallery--ready' : ''}`}
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
          {Array.from({ length: count }, (_, i) => (
            <Hexagon key={i} empty={HIDDEN_HEX[rowIndex]?.includes(i)} />
          ))}
        </div>
      ))}
    </div>
  );
}
