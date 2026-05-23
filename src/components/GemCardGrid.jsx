import { useCallback, useEffect, useState } from 'react';
import GemDetailPopover from './GemDetailPopover';
import GemEducationCard from './GemEducationCard';
import ScrollRevealItem from './ScrollRevealItem';

function getPopoverSide(event) {
  const target = event?.currentTarget;
  if (!target?.getBoundingClientRect) return 'left';

  const rect = target.getBoundingClientRect();
  const x =
    event.type === 'click' && typeof event.clientX === 'number'
      ? event.clientX
      : rect.left + rect.width / 2;

  if (window.innerWidth < 768) return 'center';

  const ratio = x / window.innerWidth;
  if (ratio < 0.34) return 'left';
  if (ratio > 0.66) return 'right';
  return 'center';
}

export default function GemCardGrid({
  items,
  staggerReveal = false,
  revealIndexStart = 0,
}) {
  const [activeGem, setActiveGem] = useState(null);
  const [popoverSide, setPopoverSide] = useState('left');

  const openGem = useCallback((gem, event) => {
    setPopoverSide(getPopoverSide(event));
    setActiveGem(gem);
  }, []);

  const closePanel = useCallback(() => {
    setActiveGem(null);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closePanel]);

  return (
    <div className="gem-card-grid relative">
      {activeGem && (
        <div className="gem-detail-backdrop" aria-hidden="true" />
      )}

      {activeGem && (
        <GemDetailPopover
          gem={activeGem}
          side={popoverSide}
          onClose={closePanel}
        />
      )}

      <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {items.map((gem, i) =>
          staggerReveal ? (
            <ScrollRevealItem
              key={gem.name}
              index={revealIndexStart + i}
              className="scroll-reveal-item--card"
            >
              <GemEducationCard
                gem={gem}
                isActive={activeGem?.name === gem.name}
                onOpen={(event) => openGem(gem, event)}
              />
            </ScrollRevealItem>
          ) : (
            <div key={gem.name}>
              <GemEducationCard
                gem={gem}
                isActive={activeGem?.name === gem.name}
                onOpen={(event) => openGem(gem, event)}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
