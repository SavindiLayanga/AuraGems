const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=520&h=520&q=85`;

export const GEM_CATALOG = [
  {
    name: 'Chrysocolla',
    price: '$185.00',
    tagline: 'A calming teal stone prized for its earthy, ocean-like hues.',
    image: '/gems/chrysocolla.png',
    imageAlt: 'Peruvian Chrysocolla palm stone on white background',
    callouts: ['SOOTHING BLUE-GREEN TONES', 'ORGANIC BANDING PATTERNS'],
    benefits: [
      {
        title: 'COMMUNICATION',
        text: 'Encourages honest expression and emotional clarity in daily life.',
      },
      {
        title: 'CALM',
        text: 'Associated with tranquility, balance, and gentle feminine energy.',
      },
    ],
    uses: 'USED IN PENDANTS, BEADS, AND STATEMENT RINGS',
  },
  {
    name: 'Rhodochrosite',
    price: '$240.00',
    tagline: 'A romantic pink gem with soft bands and a warm, radiant glow.',
    image: '/gems/rhodochrosite.png',
    imageAlt: 'Polished Rhodochrosite cabochon with pink and white banding',
    callouts: ['BLUSH PINK COLORATION', 'DELICATE LAYERED BANDS'],
    benefits: [
      {
        title: 'COMPASSION',
        text: 'Linked to self-love, empathy, and heartfelt connection.',
      },
      {
        title: 'VITALITY',
        text: 'Believed to uplift mood and inspire creative confidence.',
      },
    ],
    uses: 'FEATURED IN EARRINGS, CABOCHONS, AND COLLECTOR DISPLAYS',
  },
  {
    name: 'Jade',
    price: '$420.00',
    tagline: 'A timeless green treasure symbolizing harmony and refinement.',
    image: '/gems/jade.png',
    imageAlt: 'Polished green Jade stone on white background',
    callouts: ['CLASSIC JADE GREEN', 'POLISHED LUSTROUS FINISH'],
    benefits: [
      {
        title: 'HARMONY',
        text: 'Valued for balance, prosperity, and enduring elegance.',
      },
      {
        title: 'PROTECTION',
        text: 'Historically worn as a talisman of good fortune.',
      },
    ],
    uses: 'CARVED INTO BANGLES, PENDANTS, AND HEIRLOOM PIECES',
  },
  {
    name: 'Malachite',
    price: '$195.00',
    tagline: 'A bold green stone with dramatic concentric banding.',
    image: '/gems/malachite.png',
    imageAlt: 'Polished Malachite stone with concentric green banding',
    callouts: ['VIVID GREEN COLOR WITH BANDING', 'STRIKING NATURAL PATTERNS'],
    benefits: [
      {
        title: 'PROTECTION',
        text: 'Thought to guard against negative energy and emotional stress.',
      },
      {
        title: 'TRANSFORMATION',
        text: 'Represents growth, change, and renewed purpose.',
      },
    ],
    uses: 'USED IN RINGS, PENDANTS, AND DECORATIVE OBJECTS',
  },
  {
    name: 'Carnelian',
    price: '$165.00',
    tagline: 'A fiery orange gem that radiates warmth and confidence.',
    image: '/gems/carnelian.png',
    imageAlt: 'Polished banded Carnelian cabochon on white background',
    callouts: ['WARM SUNSET ORANGE HUE', 'SMOOTH POLISHED SURFACE'],
    benefits: [
      {
        title: 'MOTIVATION',
        text: 'Associated with courage, drive, and creative momentum.',
      },
      {
        title: 'VITALITY',
        text: 'Believed to stimulate energy and personal power.',
      },
    ],
    uses: 'POPULAR IN BEADED NECKLACES AND SIGNET RINGS',
  },
  {
    name: 'Smoky Quartz',
    price: '$150.00',
    tagline: 'A smoky translucent crystal with grounding, earthy depth.',
    image: '/gems/smoky-quartz.png',
    imageAlt: 'Faceted pear-cut Smoky Quartz teardrop on white background',
    callouts: ['SMOKY TRANSLUCENT BODY', 'NATURAL FACETED FORM'],
    benefits: [
      {
        title: 'GROUNDING',
        text: 'Helps anchor scattered thoughts and promote stability.',
      },
      {
        title: 'CLARITY',
        text: 'Supports focus and calm decision-making.',
      },
    ],
    uses: 'SET IN RINGS, PENDANTS, AND MINIMALIST JEWELRY',
  },
  {
    name: 'Celestite',
    price: '$175.00',
    tagline: 'A pale blue cluster reminiscent of soft morning skies.',
    image: '/gems/celestite.png',
    imageAlt: 'Pale sky-blue Celestite crystal cluster on neutral studio background',
    callouts: ['SOFT SKY-BLUE CRYSTALS', 'DELICATE CLUSTER FORMATION'],
    benefits: [
      {
        title: 'SERENITY',
        text: 'Connected to peace, restful sleep, and gentle awareness.',
      },
      {
        title: 'INSPIRATION',
        text: 'Encourages spiritual reflection and inner stillness.',
      },
    ],
    uses: 'DISPLAYED IN COLLECTIONS AND SPIRITUAL SPACES',
  },
  {
    name: 'Aquamarine',
    price: '$385.00',
    tagline: 'A sea-blue gem evoking clarity, flow, and coastal light.',
    image: '/gems/aquamarine.png',
    imageAlt: 'Cushion-cut Aquamarine gemstone with brilliant cyan-blue clarity on white background',
    callouts: ['CLEAR SEA-BLUE COLOR', 'BRILLIANT FACETED CUT'],
    benefits: [
      {
        title: 'CLARITY',
        text: 'Symbolizes clear communication and emotional openness.',
      },
      {
        title: 'COURAGE',
        text: 'Said to soothe fears and support calm travel.',
      },
    ],
    uses: 'FEATURED IN ENGAGEMENT RINGS AND DROP EARRINGS',
  },
  {
    name: 'Sunstone',
    price: '$210.00',
    tagline: 'A shimmering peach stone that catches light like golden hour.',
    image: '/gems/sunstone.png',
    imageAlt: 'Polished honey-orange Sunstone tumbled gem on white background',
    callouts: ['WARM PEACH SHIMMER', 'SPARKLING AVENTURESCENCE'],
    benefits: [
      {
        title: 'JOY',
        text: 'Linked to optimism, warmth, and personal radiance.',
      },
      {
        title: 'LEADERSHIP',
        text: 'Inspires confidence and independent spirit.',
      },
    ],
    uses: 'USED IN RINGS, BRACELETS, AND SUN-THEMED DESIGNS',
  },
  {
    name: 'Apatite',
    price: '$260.00',
    tagline: 'A vivid blue gem prized for its electric, oceanic saturation.',
    image: '/gems/apatite.png',
    imageAlt: 'Raw electric blue Apatite crystal specimen on white background',
    callouts: ['ELECTRIC BLUE SATURATION', 'GLASSY TRANSPARENT DEPTH'],
    benefits: [
      {
        title: 'FOCUS',
        text: 'Believed to sharpen concentration and learning.',
      },
      {
        title: 'EXPRESSION',
        text: 'Supports authentic voice and creative ideas.',
      },
    ],
    uses: 'SET IN PENDANTS, STUDS, AND ARTISAN JEWELRY',
  },
  {
    name: 'Hematite',
    price: '$140.00',
    tagline: 'A metallic grey-black stone with mirror-like polish.',
    image: '/gems/hematite.png',
    imageAlt: 'Polished metallic gray Hematite tumbled stone on white background',
    callouts: ['MIRROR-LIKE METALLIC SHEEN', 'DEEP GUNMETAL TONE'],
    benefits: [
      {
        title: 'STRENGTH',
        text: 'Associated with resilience, discipline, and resolve.',
      },
      {
        title: 'BALANCE',
        text: 'Thought to harmonize mind and body energies.',
      },
    ],
    uses: 'POPULAR IN BEADED BRACELETS AND MODERN RINGS',
  },
  {
    name: 'Amazonite',
    price: '$198.00',
    tagline: 'A bright turquoise crystal with fresh, tropical character.',
    image: '/gems/amazonite.png',
    imageAlt: 'Raw teal Amazonite crystal with white veining on white background',
    callouts: ['VIBRANT TURQUOISE GREEN', 'NATURAL CRYSTAL TEXTURE'],
    benefits: [
      {
        title: 'TRUTH',
        text: 'Encourages honest dialogue and peaceful boundaries.',
      },
      {
        title: 'SOOTHING',
        text: 'Believed to ease stress and emotional turbulence.',
      },
    ],
    uses: 'USED IN NECKLACES, RINGS, AND BOHEMIAN STYLES',
  },
];
