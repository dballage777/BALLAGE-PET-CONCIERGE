/**
 * Central site configuration for Ballage Pet Concierge.
 * Update business details here and they propagate across metadata,
 * schema markup, header, footer, and page copy.
 */

export const site = {
  name: "Ballage Pet Concierge",
  legalName: "Ballage Pet Concierge LLC",
  tagline: "More than dog care. Peace of mind.",
  positioning: "We don't just care for dogs. We care for family members.",
  description:
    "Ballage Pet Concierge provides trusted, personalized care for Southern Indiana dogs — from playful puppies to adventurous adults and gentle seniors. Every walk, every wag, every stage.",
  // Update to your production domain before launch.
  url: "https://ballagepetconcierge.com",
  email: "hello@ballagepetconcierge.com",
  phone: "(812) 555-0147",
  phoneHref: "tel:+18125550147",
  priceRange: "$$",
  founded: "2024",
  areaLabel: "Southern Indiana & the Louisville Metro Area",
  social: {
    facebook: "https://facebook.com/ballagepetconcierge",
    instagram: "https://instagram.com/ballagepetconcierge",
  },
} as const;

export const serviceAreas = [
  {
    city: "New Albany",
    state: "IN",
    blurb: "Daily walks, drop-ins, and adventure outings across New Albany neighborhoods.",
  },
  {
    city: "Clarksville",
    state: "IN",
    blurb: "Trusted dog walking and vacation care for Clarksville families.",
  },
  {
    city: "Sellersburg",
    state: "IN",
    blurb: "Reliable visits and companionship for Sellersburg dogs.",
  },
  {
    city: "Jeffersonville",
    state: "IN",
    blurb: "Personalized walking and drop-in care throughout Jeffersonville.",
  },
  {
    city: "Floyds Knobs",
    state: "IN",
    blurb: "Attentive, unhurried care for dogs in Floyds Knobs.",
  },
  {
    city: "Louisville Metro",
    state: "KY/IN",
    blurb: "Trusted dog care across the greater Louisville metro area.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Daily Dog Care", href: "/services/dog-walking" },
      { label: "Puppy Foundations™", href: "/services/puppy-care" },
      { label: "Adventure Outings™", href: "/services/adventure-outings" },
      { label: "Senior Companion Care™", href: "/services/senior-care" },
      { label: "Vet Visit Rides", href: "/services/vet-rides" },
      { label: "Final Journey Care™", href: "/services/final-journey-care" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
