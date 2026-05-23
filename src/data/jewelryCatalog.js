/** Jewelry by category — used on Rings, Earrings, and Necklaces pages. */

export const JEWELRY_CATEGORIES = {
  rings: {
    slug: 'rings',
    path: '/rings',
    label: 'Rings',
    eyebrow: 'Stone-set rings',
    title: 'Rings Crafted',
    titleAccent: 'From Natural Gems',
    description:
      'Solitaires, halos, and bands set with certified stones — each ring highlights the color and character of the gem at its center.',
    backLabel: 'Back to Choose The Type',
    backHref: '/#categories',
  },
  earrings: {
    slug: 'earrings',
    path: '/earrings',
    label: 'Earrings',
    eyebrow: 'Gemstone earrings',
    title: 'Earrings With',
    titleAccent: 'Brilliant Stones',
    description:
      'Studs, drops, and hoops featuring ethically sourced gems — designed to catch light with every movement.',
    backLabel: 'Back to Choose The Type',
    backHref: '/#categories',
  },
  necklaces: {
    slug: 'necklaces',
    path: '/necklaces',
    label: 'Necklaces',
    eyebrow: 'Necklaces & pendants',
    title: 'Necklaces That',
    titleAccent: 'Showcase Each Stone',
    description:
      'Pendants, chains, and layered pieces set with singular gems — from soft pastels to vivid statement hues.',
    backLabel: 'Back to Choose The Type',
    backHref: '/#categories',
  },
};

export const RINGS = [
  {
    name: 'Carnelian Cabochon Ring',
    price: '$485.00',
    tagline: 'Warm carnelian cabochon in a minimalist polished gold bezel band.',
    image: '/jewelry/carnelian-cabochon-ring.png',
    imagePosition: '50% 55%',
    imageAlt:
      'Oval carnelian cabochon ring in gold bezel on natural stone surface',
    callouts: ['RICH CARNELIAN CABOCHON', 'MINIMAL GOLD BEZEL BAND'],
    benefits: [
      {
        title: 'WARMTH',
        text: 'Carnelian is prized for courage, creativity, and confident energy.',
      },
      {
        title: 'CRAFT',
        text: 'Hand-finished bezel holds the cabochon securely while maximizing color.',
      },
    ],
    uses: 'EVERYDAY WEAR, GIFTING, AND STATEMENT STACKS',
  },
  {
    name: 'Ruby Solitaire Ring',
    price: '$520.00',
    tagline:
      'Oval ruby solitaire in a nature-inspired rose gold leaf and vine setting.',
    image: '/jewelry/ruby-solitaire-ring.png',
    imagePosition: '50% 48%',
    imageAlt:
      'Oval ruby floral solitaire ring in rose gold with green accents in velvet box',
    callouts: ['OVAL RUBY CENTER', 'FLORAL ROSE GOLD SETTING'],
    benefits: [
      {
        title: 'PASSION',
        text: 'Ruby symbolizes love, devotion, and lasting commitment.',
      },
      {
        title: 'PRESENCE',
        text: 'Ideal for engagements, anniversaries, and heirloom collections.',
      },
    ],
    uses: 'ENGAGEMENT, ANNIVERSARY, AND COCKTAIL RINGS',
  },
  {
    name: 'Aquamarine Cushion Ring',
    price: '$445.00',
    tagline:
      'Sea-blue aquamarine cushion in an organic gold vine prong setting.',
    image: '/jewelry/aquamarine-cushion-ring.png',
    imagePosition: '50% 52%',
    imageAlt:
      'Cushion-cut aquamarine ring in sculptural gold vine setting on marble',
    callouts: ['CLEAR SEA-BLUE CUSHION', 'SCULPTURAL GOLD VINE SETTING'],
    benefits: [
      {
        title: 'CLARITY',
        text: 'Aquamarine evokes calm seas, clear communication, and ease.',
      },
      {
        title: 'LIGHT',
        text: 'High transparency lets the stone glow in natural daylight.',
      },
    ],
    uses: 'DAILY ELEGANCE AND COASTAL-INSPIRED LOOKS',
  },
  {
    name: 'Smoky Quartz Teardrop Ring',
    price: '$395.00',
    tagline:
      'Faceted smoky quartz pear in a diamond halo on a polished silver band.',
    image: '/jewelry/smoky-quartz-teardrop-ring.png',
    imagePosition: '50% 50%',
    imageAlt:
      'Smoky quartz teardrop ring with diamond halo in sterling silver',
    callouts: ['SMOKY QUARTZ PEAR', 'DIAMOND HALO SETTING'],
    benefits: [
      {
        title: 'GROUNDING',
        text: 'Smoky quartz supports stability, focus, and quiet strength.',
      },
      {
        title: 'VERSATILE',
        text: 'Neutral hue pairs with both warm and cool wardrobe palettes.',
      },
    ],
    uses: 'MINIMALIST STACKS AND EVENING WEAR',
  },
  {
    name: 'Malachite Signet Ring',
    price: '$410.00',
    tagline:
      'Faceted green malachite in a geometric gold signet with architectural band.',
    image: '/jewelry/malachite-signet-ring.png',
    imagePosition: '50% 50%',
    imageAlt:
      'Faceted green malachite signet ring in polished geometric gold band',
    callouts: ['VIVID GREEN MALACHITE', 'GEOMETRIC GOLD SIGNET'],
    benefits: [
      {
        title: 'TRANSFORMATION',
        text: 'Malachite is linked to growth, protection, and renewal.',
      },
      {
        title: 'TEXTURE',
        text: 'Natural banding makes every ring face one of a kind.',
      },
    ],
    uses: 'SIGNET STYLES AND ARTISAN COLLECTIONS',
  },
  {
    name: 'Sunstone Band Ring',
    price: '$365.00',
    tagline:
      'Freeform sunstone in an organic gold band with tree-bark texture.',
    image: '/jewelry/sunstone-band-ring.png',
    imagePosition: '50% 50%',
    imageAlt:
      'Freeform sunstone ring in textured organic gold tree-bark band',
    callouts: ['FIERY SUNSTONE CABOCHON', 'ORGANIC GOLD BARK BAND'],
    benefits: [
      {
        title: 'JOY',
        text: 'Sunstone carries warmth, optimism, and personal radiance.',
      },
      {
        title: 'WEARABILITY',
        text: 'Low-profile band suited for daily stacking.',
      },
    ],
    uses: 'STACKABLE BANDS AND LAYERED LOOKS',
  },
];

export const EARRINGS = [
  {
    name: 'Sapphire Drop Earrings',
    price: '$340.00',
    tagline: 'Elongated drops with vivid blue sapphire and 18k gold hooks.',
    image: '/jewelry/sapphire-drop-earrings.png',
    imagePosition: '50% 55%',
    imageAlt:
      'Pear-cut blue sapphire drop earrings in gold hooks with diamond accents',
    callouts: ['DEEP SAPPHIRE BLUE', '18K GOLD HOOKS'],
    benefits: [
      {
        title: 'ELEGANCE',
        text: 'Perfect movement for evening light and formal occasions.',
      },
      {
        title: 'BALANCE',
        text: 'Matched pair graded for color consistency.',
      },
    ],
    uses: 'GALAS, WEDDINGS, AND GIFT SETS',
  },
  {
    name: 'Celestite Stud Earrings',
    price: '$285.00',
    tagline: 'Pale sky-blue celestite crystals in delicate silver bezels.',
    image: '/jewelry/celestite-stud-earrings.png',
    imagePosition: '50% 52%',
    imageAlt:
      'Sky-blue faceted celestite stud earrings in silver prong settings',
    callouts: ['SOFT SKY-BLUE CRYSTALS', 'STERLING SILVER BEZELS'],
    benefits: [
      {
        title: 'SERENITY',
        text: 'Celestite supports peace, rest, and gentle awareness.',
      },
      {
        title: 'LIGHTWEIGHT',
        text: 'Comfortable for all-day wear.',
      },
    ],
    uses: 'DAILY STUDS AND MINDFUL GIFTING',
  },
  {
    name: 'Apatite Hoop Charms',
    price: '$310.00',
    tagline: 'Electric blue apatite charms on hinged gold hoops.',
    image: '/jewelry/apatite-hoop-charms.png',
    imagePosition: '50% 50%',
    imageAlt:
      'Teardrop apatite hoop charms in gold prong settings on white marble',
    callouts: ['VIVID APATITE BLUE', 'HINGED GOLD HOOPS'],
    benefits: [
      {
        title: 'FOCUS',
        text: 'Apatite is associated with clarity and inspired learning.',
      },
      {
        title: 'MODULAR',
        text: 'Charms can be worn on hoops or converted to pendants.',
      },
    ],
    uses: 'DAY-TO-NIGHT AND MIX-AND-MATCH STYLING',
  },
  {
    name: 'Amazonite Leaf Drops',
    price: '$295.00',
    tagline: 'Teal amazonite drops with organic leaf-motif gold frames.',
    image: '/jewelry/amazonite-leaf-drops.png',
    imagePosition: '50% 52%',
    imageAlt:
      'Teal amazonite teardrop leaf cluster stud earrings in gold bezels',
    callouts: ['TURQUOISE AMAZONITE', 'LEAF-MOTIF FRAMES'],
    benefits: [
      {
        title: 'TRUTH',
        text: 'Amazonite encourages honest expression and calm boundaries.',
      },
      {
        title: 'ARTISAN',
        text: 'Hand-textured frames highlight natural stone veining.',
      },
    ],
    uses: 'BOHO-CHIC AND RESORT COLLECTIONS',
  },
  {
    name: 'Hematite Disc Studs',
    price: '$220.00',
    tagline: 'Mirror-polished hematite discs in minimalist gold mounts.',
    image: '/jewelry/hematite-disc-studs.png',
    imagePosition: '55% 48%',
    imageAlt:
      'Faceted hematite disc stud earring in gold bezel on ear',
    callouts: ['METALLIC HEMATITE SHEEN', 'MINIMAL GOLD MOUNTS'],
    benefits: [
      {
        title: 'STRENGTH',
        text: 'Hematite is linked to grounding, discipline, and resolve.',
      },
      {
        title: 'MODERN',
        text: 'Sleek profile for professional and urban looks.',
      },
    ],
    uses: 'OFFICE WEAR AND CONTEMPORARY STACKS',
  },
];

export const NECKLACES = [
  {
    name: 'Emerald Pendant Necklace',
    price: '$425.00',
    tagline: 'Rich emerald on a fine 18k chain with adjustable length.',
    image: '/jewelry/emerald-pendant-necklace.png',
    imagePosition: '50% 72%',
    imageAlt:
      'Emerald and diamond pendant necklace on gold satin with pear-cut center stone',
    callouts: ['VIVID EMERALD GREEN', 'ADJUSTABLE CHAIN'],
    benefits: [
      {
        title: 'HARMONY',
        text: 'Emerald represents renewal, compassion, and balance.',
      },
      {
        title: 'HERITAGE',
        text: 'A timeless silhouette for heirloom gifting.',
      },
    ],
    uses: 'SIGNATURE PENDANTS AND LAYERED NECK STACKS',
  },
  {
    name: 'Rhodochrosite Heart Pendant',
    price: '$395.00',
    tagline: 'Soft pink rhodochrosite heart on a rose-gold cable chain.',
    image: '/jewelry/rhodochrosite-heart-pendant.png',
    imageAlt:
      'Rose gold rhodochrosite heart pendant with pavé accents on blush satin',
    callouts: ['BLUSH PINK STONE', 'ROSE-GOLD CHAIN'],
    benefits: [
      {
        title: 'COMPASSION',
        text: 'Rhodochrosite supports self-love and emotional healing.',
      },
      {
        title: 'ROMANTIC',
        text: 'Heart cut designed for meaningful gifting.',
      },
    ],
    uses: 'VALENTINES, ANNIVERSARIES, AND SENTIMENTAL GIFTS',
  },
  {
    name: 'Chrysocolla Layered Necklace',
    price: '$360.00',
    tagline: 'Chrysocolla focal stone on a double-layer champagne chain.',
    image: '/jewelry/chrysocolla-layered-necklace.png',
    imagePosition: '50% 58%',
    imageAlt:
      'Chrysocolla cabochon pendant in organic gold vine setting on cable chain',
    callouts: ['EARTHY CHRYSOCOLLA HUE', 'DOUBLE-LAYER CHAIN'],
    benefits: [
      {
        title: 'EXPRESSION',
        text: 'Chrysocolla aids communication and creative flow.',
      },
      {
        title: 'DEPTH',
        text: 'Layered chains add dimension without heavy weight.',
      },
    ],
    uses: 'LAYERED LOOKS AND ARTISAN COLLECTIONS',
  },
  {
    name: 'Jade Barrel Pendant',
    price: '$380.00',
    tagline: 'Polished jade barrel on a silk cord with gold clasp detail.',
    image: '/jewelry/jade-barrel-pendant.png',
    imageAlt:
      'Carved seafoam jade barrel pendant on fine silver chain against dark stone',
    callouts: ['CLASSIC JADE GREEN', 'SILK CORD WITH GOLD CLASP'],
    benefits: [
      {
        title: 'PROSPERITY',
        text: 'Jade is treasured for luck, harmony, and longevity.',
      },
      {
        title: 'COMFORT',
        text: 'Soft cord sits lightly against the skin.',
      },
    ],
    uses: 'EASTERN-INSPIRED AND WELLNESS-FOCUSED STYLING',
  },
  {
    name: 'Carnelian Sunburst Pendant',
    price: '$340.00',
    tagline: 'Banded carnelian in a sunburst gold frame on a box chain.',
    image: '/jewelry/carnelian-sunburst-pendant.png',
    imageAlt:
      'Gold sunburst carnelian cabochon pendant on cable chain with stone backdrop',
    callouts: ['WARM CARNELIAN BANDS', 'SUNBURST GOLD FRAME'],
    benefits: [
      {
        title: 'VITALITY',
        text: 'Carnelian fuels motivation, warmth, and creative drive.',
      },
      {
        title: 'STATEMENT',
        text: 'Sunburst frame draws the eye to natural banding.',
      },
    ],
    uses: 'EVERYDAY PENDANTS AND SUN-THEMED GIFTS',
  },
];

const PRODUCTS_BY_SLUG = {
  rings: RINGS,
  earrings: EARRINGS,
  necklaces: NECKLACES,
};

export function getJewelryCategory(slug) {
  const meta = JEWELRY_CATEGORIES[slug];
  if (!meta) return null;
  return {
    ...meta,
    products: PRODUCTS_BY_SLUG[slug] ?? [],
  };
}

export const CHOOSE_TYPE_CARDS = [
  {
    name: 'Rings',
    slug: 'rings',
    path: '/rings',
    image: '/categories/ring.png',
    imageAlt: 'Gold floral ring with ruby center and diamond-set petals',
  },
  {
    name: 'Earrings',
    slug: 'earrings',
    path: '/earrings',
    image:
      'https://images.unsplash.com/photo-1617038220307-41d2c2d44b66?auto=format&fit=crop&w=400&h=400&q=80',
    imageAlt: 'Gold drop earrings with gemstones',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    path: '/necklaces',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&h=400&q=80',
    imageAlt: 'Gemstone pendant necklace',
  },
];
