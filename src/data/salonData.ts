import { SalonService, ServiceCategoryInfo, GalleryItem, CustomerReview, WhyChoosePillar } from '../types';

export const SALON_INFO = {
  name: "Athenian Salon Mumbai",
  brandName: "Athenian Professional",
  tagline: "Your Beauty, Elevated.",
  subTagline: "Premium hair, beauty, skincare, makeup and grooming rituals in Ghatkopar East, Mumbai.",
  phone: "+91 9321016619",
  phoneRaw: "919321016619",
  whatsappUrl: "https://wa.me/919321016619?text=Hello%20Athenian%20Salon%20Mumbai%2C%20I%20would%20like%20to%20book%20an%20appointment%20or%20inquire%20about%20services.",
  address: "Shop No.2, Jayant Villa, Hingwala Ln, opp. Food Spot, Ghatkopar East, Mumbai, Maharashtra 400077",
  landmark: "Opp. Food Spot, Near Hingwala Lane",
  cityArea: "Ghatkopar East, Mumbai",
  instagramUrl: "https://www.instagram.com/atheniansalon_mumbai?igsi=czZ5bWt2MTZkbHls",
  instagramHandle: "@atheniansalon_mumbai",
  googleMapsUrl: "https://maps.app.goo.gl/kJexwuMhFu1g4aHW6?g_st=ac",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835925435973!2d72.90680197587784!3d19.083315952136063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c9f80f1e1%3A0xb3551db8b9195ff0!2sAthenian%20Salon!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin",
  rating: 4.9,
  reviewCount: 1596,
  operatingHours: "10:00 AM – 9:00 PM",
  operatingDays: "Open All 7 Days (Mon - Sun)"
};

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'hair',
    name: 'Hair Care & Styling',
    tagline: 'Artistry in cut, colour, texture & renewal',
    description: 'Precision haircuts, dimensional balayage, keratin smoothing, and rejuvenating deep conditioning therapies tailored to your hair profile.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    iconName: 'Scissors'
  },
  {
    id: 'skin',
    name: 'Skin & Facial',
    tagline: 'Luminous skin rituals & clinical therapies',
    description: 'Advanced HydraFacials, radiance therapies, clarifying treatments, and bespoke D-Tan rituals designed to revive your skin’s natural barrier.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    iconName: 'Sparkles'
  },
  {
    id: 'makeup',
    name: 'Makeup & Draping',
    tagline: 'Redefining elegance for celebrations & bridal',
    description: 'Flawless HD makeup, bespoke hairstyling, precision contouring, and traditional saree/dupatta draping for weddings and festive functions.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    iconName: 'Palette'
  },
  {
    id: 'nails',
    name: 'Nails & Beauty',
    tagline: 'Meticulous nail couture & grooming',
    description: 'Gel overlays, sculpted acrylic extensions, custom designer nail art, painless wax rituals, and precision eyebrow threading.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    iconName: 'HeartHandshake'
  },
  {
    id: 'bridal',
    name: 'Bridal & Event',
    tagline: 'Complete wedding & celebration packages',
    description: 'Comprehensive pre-bridal rituals, bridal day luxury transformations, groom grooming, engagement makeovers, and photoshoot styling.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    iconName: 'Crown'
  }
];

export const SALON_SERVICES: SalonService[] = [
  // Hair Category
  {
    id: 'hair-1',
    name: 'Haircut & Styling',
    category: 'hair',
    shortDescription: 'Customized consultation, precision cut, scalp wash & signature blow-dry styling.',
    fullDescription: 'Our master stylists begin with an in-depth texture, face shape, and lifestyle consultation. Includes professional clarifying wash, nourishing conditioning, precision scissor work, and editorial blow-dry finish.',
    idealFor: 'Men & women desiring an updated silhouette or healthy maintenance.',
    duration: '45 - 60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    highlights: ['Bespoke face framing', 'Styling consultation', 'Relaxing scalp wash']
  },
  {
    id: 'hair-2',
    name: 'Nanoplastia Treatment',
    category: 'hair',
    shortDescription: 'Organic amino acid hair restoration for silky, frizz-free, ultra-glossy locks.',
    fullDescription: 'A breakthrough formaldehyde-free capillary treatment infused with essential amino acids, plant collagen, and silk proteins. Rebuilds internal hair bonds, straightens stubborn curl patterns, and seals the cuticle with mirror-like shine.',
    idealFor: 'Frizzy, unmanageable, or chemically stressed hair seeking long-lasting smoothness.',
    duration: '2.5 - 3.5 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Formaldehyde-free', 'Deep cellular hydration', 'Lasts up to 6 months']
  },
  {
    id: 'hair-3',
    name: 'Balayage & Dimensional Highlights',
    category: 'hair',
    shortDescription: 'Hand-painted sun-kissed gradients and bespoke tonal highlights.',
    fullDescription: 'Custom freehand placement of tones that seamlessly melt from deep roots to luminous ends. Includes pre-lightening protection, custom toner formulation, gloss glaze, and post-colour sealing mask.',
    idealFor: 'Anyone wanting natural dimension, caramel melts, hazelnut blonde, or honey hues without harsh line regrowth.',
    duration: '3 - 4 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Multi-tonal depth', 'Bond-building protection', 'Seamless root blend']
  },
  {
    id: 'hair-4',
    name: 'Keratin Smoothing Therapy',
    category: 'hair',
    shortDescription: 'Intensive protein infusion eliminating 90% frizz while retaining natural movement.',
    fullDescription: 'Premium hydrolysed keratin is thermally infused into the hair shaft, eliminating humidity-induced frizz, restoring elasticity, and significantly reducing daily blow-drying time.',
    idealFor: 'Wavy, curly, or coarse hair affected by Mumbai humidity.',
    duration: '2 - 3 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Anti-humidity shield', 'Enhanced shine', 'Manageable styling']
  },
  {
    id: 'hair-5',
    name: 'Global Hair Colour & Root Retouch',
    category: 'hair',
    shortDescription: 'Rich monochromatic hues, 100% grey coverage, and luminous shine formulas.',
    fullDescription: 'Ammonia-free or low-ammonia premium formulations by leading European houses. Delivers rich, uniform color saturation with intense conditioning agents that lock in brilliance.',
    idealFor: 'Grey coverage, rich espresso/mocha makeovers, or tonal refreshes.',
    duration: '1.5 - 2 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    highlights: ['100% seamless coverage', 'Conditioning base', 'Long-lasting vibrancy']
  },
  {
    id: 'hair-6',
    name: 'Hair Straightening & Smoothening',
    category: 'hair',
    shortDescription: 'Permanent straight finish with sleek, silky flow and mirror radiance.',
    fullDescription: 'Professional structural realignment service using salon-grade thermal conditioning agents for pinpoint straightness and effortless comb-through.',
    idealFor: 'Coarse, curly, or dense hair seeking permanent sleekness.',
    duration: '3 - 4 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    highlights: ['Pin-straight finish', 'Silky feel', 'Tangle-free texture']
  },
  {
    id: 'hair-7',
    name: 'Luxury Hair Spa & Deep Detox',
    category: 'hair',
    shortDescription: 'Therapeutic scalp massage, botanical steam, and intensive hair mask therapy.',
    fullDescription: 'A multi-step sensory experience combining scalp exfoliation, acupressure stimulation, warm ozone steam, and concentrated reconstructive hair butter.',
    idealFor: 'Tired, dry, dandruff-prone, or pollution-exposed hair needing replenishment.',
    duration: '60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    highlights: ['Acupressure relaxation', 'Scalp micro-circulation', 'Intense moisture']
  },

  // Skin & Facial Category
  {
    id: 'skin-1',
    name: 'HydraFacial MD Therapy',
    category: 'skin',
    shortDescription: 'Vortex-fusion medical grade hydro-dermabrasion, deep pore extraction & serum infusion.',
    fullDescription: 'The gold standard multi-step facial that cleanses, exfoliates, extracts impurities via vortex suction, and saturates the skin with antioxidants, peptides, and hyaluronic acid.',
    idealFor: 'Congested pores, dullness, fine dehydration lines, and instant radiant glow.',
    duration: '60 - 75 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Instant glow with zero downtime', 'Painless blackhead extraction', 'Deep hydration']
  },
  {
    id: 'skin-2',
    name: 'Instant Radiance & Glow Facial',
    category: 'skin',
    shortDescription: 'Botanical brightening massage, fruit enzyme peel, and illuminating peel-off mask.',
    fullDescription: 'Specially curated for pre-party or festive luminosity. Infuses pure vitamin C, licorice extract, and cellular oxygen boosters for refreshed, luminous skin.',
    idealFor: 'Pre-wedding events, weekend occasions, and dull, fatigued complexions.',
    duration: '60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b9e07584?q=80&w=800&auto=format&fit=crop',
    highlights: ['Visible brightness', 'Lymphatic drainage massage', 'Luminous skin tone']
  },
  {
    id: 'skin-3',
    name: 'Advanced D-Tan & Brightening Ritual',
    category: 'skin',
    shortDescription: 'Melanin suppression treatment reversing sun damage, tan, and hyperpigmentation.',
    fullDescription: 'Formulated with lactic acid, kojic extracts, and cooling aloe vera. Gently dissolves oxidized dead surface layers while restoring natural skin clarity on face, neck, and arms.',
    idealFor: 'Post-vacation skin, sun tan, uneven patches, and pigmentation.',
    duration: '45 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    highlights: ['Soothes sun damage', 'Non-drying formulation', 'Instant evenness']
  },
  {
    id: 'skin-4',
    name: 'Deep Pore Cleansing & Clarifying Facial',
    category: 'skin',
    shortDescription: 'Targeted antibacterial treatment clearing blackheads, excess sebum, and breakouts.',
    fullDescription: 'Customized for oily, acne-prone, or urban-stressed skin. Includes gentle AHA/BHA chemical exfoliation, high-frequency antibacterial calming, and tea tree clay pack.',
    idealFor: 'Acne-prone skin, enlarged pores, and recurring t-zone congestion.',
    duration: '60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
    highlights: ['Reduces excess oil', 'Calms inflammation', 'Refines pore texture']
  },

  // Makeup Category
  {
    id: 'makeup-1',
    name: 'Signature Bridal Makeup',
    category: 'makeup',
    shortDescription: 'High-definition bridal transformation, luxury lashes, and bespoke contouring.',
    fullDescription: 'Our bridal specialists create personalized, long-wearing, humidity-resistant makeup that looks breathtaking in real life and high-resolution photography. Uses premium brands (MAC, Dior, Huda Beauty, NARS, Charlotte Tilbury).',
    idealFor: 'The discerning bride wanting an ethereal, regal, and timeless look.',
    duration: '2.5 - 3 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['24-hr transfer resistant', 'Skin-like HD finish', 'Includes false lashes & prep']
  },
  {
    id: 'makeup-2',
    name: 'Party & Occasion HD Makeup',
    category: 'makeup',
    shortDescription: 'Subtle glam, soft smokey eyes, illuminated complexion, and defined lips.',
    fullDescription: 'Tailored makeup designed for cocktail parties, sangeets, engagements, and festive gatherings. Enhances natural beauty with seamless blending and customized lash application.',
    idealFor: 'Bridesmaids, family members, or evening gala attendees.',
    duration: '1.5 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    highlights: ['Custom color harmony', 'Camera-ready finish', 'Includes touch-up advice']
  },
  {
    id: 'makeup-3',
    name: 'Editorial Hairstyling & Extensions',
    category: 'makeup',
    shortDescription: 'Textured messy buns, Hollywood waves, floral braids, and volume setting.',
    fullDescription: 'Precision thermal styling, teasing, padding, and accessory placement that holds effortlessly through hours of dancing and celebration.',
    idealFor: 'Weddings, receptions, baby showers, and formal events.',
    duration: '60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1522337094346-290f26a0b58a?q=80&w=800&auto=format&fit=crop',
    highlights: ['All-night hold', 'Real floral pinning', 'Accessory placement']
  },
  {
    id: 'makeup-4',
    name: 'Traditional Saree & Dupatta Draping',
    category: 'makeup',
    shortDescription: 'Flawless pleating for Kanjeevarams, Nauvaris, Lehengas, and Gujarati drapes.',
    fullDescription: 'Expert draping that accentuates your posture while ensuring total comfort and secure pin work for heavy silks and embellished bridal wear.',
    idealFor: 'Brides, wedding guests, and traditional celebration drapes.',
    duration: '30 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    highlights: ['Crisp uniform pleats', 'Zero sag guarantee', 'Weight distribution pins']
  },

  // Nails & Beauty Category
  {
    id: 'nails-1',
    name: 'Gel & Acrylic Nail Extensions',
    category: 'nails',
    shortDescription: 'Full-set sculpting, french tips, ombre babyboomer, and long-lasting length.',
    fullDescription: 'Premium tips or form-sculpted extensions with builder gel or high-grade acrylic polymers. Finished with cuticle care, buffing, and high-shine gel seal.',
    idealFor: 'Short, brittle nails, or anyone wanting elegant length and durable shapes (Almond, Coffin, Stiletto).',
    duration: '90 - 120 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Chip-resistant for 3-4 weeks', 'Natural arch sculpting', 'Zero damage removal process']
  },
  {
    id: 'nails-2',
    name: 'Custom Nail Art Couture',
    category: 'nails',
    shortDescription: 'Chrome finishes, foil inlays, minimalist lines, Swarovski crystals, and 3D accents.',
    fullDescription: 'Intricate hand-painted nail artistry created by our certified nail technicians. Tailored to match your outfit or aesthetic moodboard.',
    idealFor: 'Brides, festive occasions, holidays, and fashion-forward nail lovers.',
    duration: '45 - 60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    highlights: ['Handcrafted precision', 'Korean chrome & foils', 'Customizable per nail']
  },
  {
    id: 'nails-3',
    name: 'Lash Lifting & Brow Sculpting',
    category: 'nails',
    shortDescription: 'Semi-permanent lash curl, deep black tint, and golden ratio eyebrow threading.',
    fullDescription: 'Lifts and curls natural eyelashes from the root for an instant wide-eyed mascara effect without extensions. Paired with precise brow mapping and soothing gel application.',
    idealFor: 'Natural beauty routine looking for low-maintenance daily polish.',
    duration: '45 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=800&auto=format&fit=crop',
    highlights: ['Lasts 6 to 8 weeks', 'No mascara needed', 'Painless threading']
  },
  {
    id: 'nails-4',
    name: 'Liposoluble & Rica Waxing Rituals',
    category: 'nails',
    shortDescription: 'Colophony-free Italian wax for sensitive skin with soothing post-wax oils.',
    fullDescription: 'Ultra-hygienic single-use cartridge and strip system that pulls hair from the follicle without pulling delicate skin layers.',
    idealFor: 'Sensitive skin prone to redness or ingrown hair.',
    duration: '30 - 60 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    highlights: ['Single-use hygiene', 'Reduces redness', 'Longer hair-free cycle']
  },

  // Bridal & Event Category
  {
    id: 'bridal-1',
    name: 'The Complete Pre-Bridal Ritual',
    category: 'bridal',
    shortDescription: 'Head-to-toe bridal countdown: Skin brightening, body polish, hair botox, and nail sets.',
    fullDescription: 'Structured 3 to 4 session bridal journey scheduled 1-2 weeks prior to the wedding. Includes full body organic scrub & pack, signature HydraFacial, hair restorative therapy, mani-pedi spa, and painless Brazilian waxing.',
    idealFor: 'Brides seeking comprehensive relaxation and immaculate head-to-toe glow.',
    duration: 'Multi-session program',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    highlights: ['Personalized schedule', 'Head-to-toe exfoliation', 'Skin barrier strengthening']
  },
  {
    id: 'bridal-2',
    name: 'Engagement & Sangeet Makeover',
    category: 'bridal',
    shortDescription: 'Playful shimmers, soft curls, sculpted cheeks, and contemporary styling.',
    fullDescription: 'Customized look created to complement your evening lehenga or gown. Includes skin prep, luminous base, jewel-toned eye makeup, and heat-proof hair hold.',
    idealFor: 'Brides, grooms & sister-of-the-bride attending pre-wedding functions.',
    duration: '2 hrs',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    highlights: ['Luminous shimmer base', 'Sweat-resistant hold', 'Bespoke eye designs']
  },
  {
    id: 'bridal-3',
    name: 'Groom Premium Grooming & Styling',
    category: 'bridal',
    shortDescription: 'Precision beard sculpting, facial detox, hair texturizing, and subtle matte skin prep.',
    fullDescription: 'Discreet, high-end grooming package for grooms. Cleanses pores, refines beard lines, styles hair, and eliminates unwanted camera shine.',
    idealFor: 'Grooms wanting crisp, sophisticated wedding day confidence.',
    duration: '90 mins',
    priceNote: 'Price on consultation',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    highlights: ['Sharp beard geometry', 'Anti-shine matte skin prep', 'Volumizing hair style']
  }
];

export const WHY_CHOOSE_US: WhyChoosePillar[] = [
  {
    id: 'pillar-1',
    title: 'Personalized Consultation',
    description: 'Every appointment begins with an in-depth assessment of your hair texture, skin tone, facial geometry, and lifestyle before any scissor touches your hair.',
    iconName: 'Compass'
  },
  {
    id: 'pillar-2',
    title: 'Master Colorists & Artists',
    description: 'Our team comprises certified balayage masters, licensed skin therapists, and bridal artists trained in contemporary international techniques.',
    iconName: 'Award'
  },
  {
    id: 'pillar-3',
    title: 'Strict Medical-Grade Hygiene',
    description: '100% autoclaved stainless tools, sealed single-use consumables, sanitized stations, and pristine linen after every single guest.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'pillar-4',
    title: 'Premium Global Formulations',
    description: 'We exclusively formulate with genuine salon products from L\'Oréal Professionnel, Olaplex, Casmara, Rica, and top-tier luxury cosmetics.',
    iconName: 'Sparkles'
  },
  {
    id: 'pillar-5',
    title: 'Boutique Comfort & Privacy',
    description: 'Thoughtfully designed private wash stations, ambient mood lighting, soothing aromatherapeutic notes, and unhurried personalized attention.',
    iconName: 'Coffee'
  },
  {
    id: 'pillar-6',
    title: 'All Beauty Rituals Under One Roof',
    description: 'Seamlessly coordinate your hair color, nail extensions, HydraFacial, and party styling in a single, relaxed session in Ghatkopar East.',
    iconName: 'CheckCircle2'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Caramel Balayage & Root Melt',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
    alt: 'Caramel balayage hair color on client at Athenian Salon',
    description: 'Multi-dimensional warm caramel ribbons with seamless root blend.',
    tag: 'Hair Color'
  },
  {
    id: 'gal-2',
    title: 'Royal Mumbai Bridal Artistry',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    alt: 'Traditional Indian bride makeup and jewelry styling',
    description: 'Regal bridal makeup with soft champagne shimmer and traditional floral jada.',
    tag: 'Bridal'
  },
  {
    id: 'gal-3',
    title: 'The Athenian Salon Studio Interior',
    category: 'salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    alt: 'Clean modern luxury salon interior in Ghatkopar East',
    description: 'Minimalist warm tones, ergonomic styling chairs, and ambient lighting.',
    tag: 'Ambience'
  },
  {
    id: 'gal-4',
    title: 'HydraFacial Glow & Skin Refinement',
    category: 'skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    alt: 'HydraFacial treatment session on client',
    description: 'Vortex deep pore purification delivering dewy, lit-from-within glow.',
    tag: 'Skin Therapy'
  },
  {
    id: 'gal-5',
    title: 'French Ombre Gel Nail Extensions',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    alt: 'Gel nail extensions with babyboomer French ombre finish',
    description: 'Sculpted almond shape with delicate French ombre fade.',
    tag: 'Nail Couture'
  },
  {
    id: 'gal-6',
    title: 'Nanoplastia Gloss Transformation',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    alt: 'Silk smooth straight hair after Nanoplastia therapy',
    description: 'Formaldehyde-free hair realignment with mirror-like shine and bounce.',
    tag: 'Hair Texture'
  },
  {
    id: 'gal-7',
    title: 'Evening Cocktail HD Makeup & Curls',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    alt: 'Subtle evening party makeup and textured waves',
    description: 'Sculpted skin base paired with soft brown smokey eye and nude lips.',
    tag: 'Occasion Glam'
  },
  {
    id: 'gal-8',
    title: 'Luxury Hair Wash & Scalp Spa Bar',
    category: 'salon',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    alt: 'Salon hair wash station with reclining leather massage chair',
    description: 'Private shampoo station with restorative scalp massage treatments.',
    tag: 'Ambience'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop',
    caption: 'Soft caramel balayage in natural daylight. Crafted by our master colorists.',
    likes: '342'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
    caption: 'A regal bride ready for her big day. Thank you for choosing Athenian Salon.',
    likes: '519'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
    caption: 'That post-HydraFacial glow is unmatched! No filter needed.',
    likes: '287'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop',
    caption: 'Nail couture details. Gel extensions that last through the festive season.',
    likes: '410'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    caption: 'Taming Mumbai humidity with our signature Nanoplastia ritual.',
    likes: '365'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
    caption: 'Clean, radiant party glam for an engagement soirée.',
    likes: '492'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Pooja Mehta',
    location: 'Ghatkopar East, Mumbai',
    rating: 5,
    date: '2 weeks ago',
    serviceCategory: 'Balayage & Hair Spa',
    text: 'I got my balayage and hair spa done at Athenian Salon and the results are stunning. The colorist spent 15 minutes explaining which tones would suit my warm undertone and didn\'t rush at all. My hair feels incredibly soft and the salon hygiene is top notch!',
    verified: true,
    avatarText: 'PM'
  },
  {
    id: 'rev-2',
    name: 'Rohan Shah',
    location: 'Tilak Nagar, Mumbai',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'Haircut & Beard Styling',
    text: 'Hands down the most professional salon experience in Ghatkopar. The attention to detail during the haircut and beard trimming is remarkable. Clean stations, very courteous staff, and very pleasant atmosphere.',
    verified: true,
    avatarText: 'RS'
  },
  {
    id: 'rev-3',
    name: 'Sneha Kulkarni',
    location: 'Ghatkopar, Mumbai',
    rating: 5,
    date: '3 weeks ago',
    serviceCategory: 'HydraFacial MD',
    text: 'Tried the HydraFacial before my cousin\'s sangeet. My skin was glowing for over two weeks! No irritation, zero redness, and the extraction was completely painless. Athenian Professional is definitely my go-to now.',
    verified: true,
    avatarText: 'SK'
  },
  {
    id: 'rev-4',
    name: 'Drishti Vora',
    location: 'Vidyavihar, Mumbai',
    rating: 5,
    date: '2 months ago',
    serviceCategory: 'Bridal Makeup & Saree Draping',
    text: 'Booked Athenian for my engagement makeup and saree draping. The team made me feel so comfortable and the makeup stayed completely intact through 6 hours of photos and dancing. Received countless compliments!',
    verified: true,
    avatarText: 'DV'
  },
  {
    id: 'rev-5',
    name: 'Ankita Joshi',
    location: 'Ghatkopar East, Mumbai',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'Nanoplastia Treatment',
    text: 'I was very hesitant about chemical treatments, but their stylist explained the amino acid formula of Nanoplastia in detail. 3 months in and my hair is still frizz-free and shiny even in Mumbai humidity. Worth every penny.',
    verified: true,
    avatarText: 'AJ'
  },
  {
    id: 'rev-6',
    name: 'Kavita Patel',
    location: 'Chheda Nagar, Mumbai',
    rating: 5,
    date: 'Recent visit',
    serviceCategory: 'Gel Nail Extensions',
    text: 'The nail artist here is an absolute perfectionist. My French ombre gel extensions look so natural and durable. Jayant Villa location is very easy to find right opposite Food Spot.',
    verified: true,
    avatarText: 'KP'
  }
];

export const SALON_FAQ = [
  {
    q: 'Where is Athenian Salon located in Ghatkopar East?',
    a: 'We are located at Shop No.2, Jayant Villa, Hingwala Lane, directly opposite Food Spot, in Ghatkopar East, Mumbai (PIN: 400077).'
  },
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'While we accommodate walk-in guests based on chair availability, we strongly recommend pre-booking your appointment via WhatsApp (+91 9321016619) or phone to guarantee your preferred stylist and zero wait time.'
  },
  {
    q: 'What is the difference between Keratin and Nanoplastia?',
    a: 'Keratin coats and seals the outer cuticle to eliminate frizz while keeping natural body. Nanoplastia uses natural amino acids to penetrate deep into the hair cortex, providing superior straightening, internal repair, and gloss without harsh formaldehyde fumes.'
  },
  {
    q: 'Do you offer custom bridal and pre-bridal packages?',
    a: 'Yes, we provide personalized bridal consultations with bespoke packages encompassing pre-bridal skin prep, HydraFacials, luxury hair therapies, HD bridal makeup, hair styling, and saree/dupatta draping.'
  }
];
