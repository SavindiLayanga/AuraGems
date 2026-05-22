import { X } from 'lucide-react';

export default function GemDetailPopover({ gem, side = 'left', onClose }) {
  if (!gem) return null;

  const { name, price, tagline, image, imageAlt, callouts, benefits, uses } =
    gem;

  return (
    <div
      className={`gem-detail-popover gem-detail-popover--${side}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gem-detail-title"
    >
      <button
        type="button"
        className="gem-detail-popover__close"
        onClick={onClose}
        aria-label="Close gem details"
      >
        <X className="h-4 w-4" strokeWidth={1.5} />
      </button>

      <div
        className="gem-detail-popover__glass"
        style={{ '--gem-popover-bg': `url(${image})` }}
      >
        <div className="gem-detail-popover__bokeh" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <img
          src={image}
          alt={imageAlt}
          className="gem-detail-popover__image warm-photo"
        />
        <h2 id="gem-detail-title" className="gem-detail-popover__title font-serif">
          {name}
        </h2>
        <p className="gem-detail-popover__price">{price}</p>
      </div>

      <div className="gem-detail-popover__details">
        <p className="gem-detail-popover__tagline">{tagline}</p>

        {callouts?.length > 0 && (
          <ul className="gem-detail-popover__callouts">
            {callouts.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}

        <div className="gem-detail-popover__benefits">
          <p className="gem-detail-popover__benefits-label">Benefits</p>
          <ul className="space-y-2.5">
            {(benefits ?? []).map(({ title, text }) => (
              <li key={title}>
                <p className="gem-detail-popover__benefit-title">{title}</p>
                <p className="gem-detail-popover__benefit-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="gem-detail-popover__uses">{uses}</p>
      </div>
    </div>
  );
}
