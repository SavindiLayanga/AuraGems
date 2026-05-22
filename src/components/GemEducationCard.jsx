export default function GemEducationCard({
  gem,
  isActive = false,
  onOpen,
}) {
  const { name, price, image, imageAlt } = gem;

  return (
    <article
      className={`gem-edu-card card-shadow${isActive ? ' is-active' : ''}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(e);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${name}, ${price}. Click for details`}
      aria-expanded={isActive}
    >
      <div className="gem-edu-card__visual">
        <img
          src={image}
          alt={imageAlt}
          className="gem-edu-card__image warm-photo"
          loading="lazy"
        />
      </div>
      <h2 className="gem-edu-card__title font-serif">{name}</h2>
      <p className="gem-edu-card__price">{price}</p>
      <p className="gem-edu-card__hint">Click for details</p>
    </article>
  );
}
