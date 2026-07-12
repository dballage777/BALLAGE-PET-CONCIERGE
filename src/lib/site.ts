/**
 * Central site configuration for Ballage Pet Concierge.
 * Update business details here and they propagate across metadata,
 * schema markup, header, footer, and page copy.
 */

export const site = {
  name: "Ballage Pet Concierge",
  legalName: "Ballage Pet Concierge LLC",
  tagline: "More than pet care. Peace of mind.",
  positioning: "We don't just care for pets. We care for family members.",
  description:
    "Ballage Pet Concierge provides trusted, personalized care for Southern Indiana pets — from puppy adventures to senior companionship and compassionate final moments.",
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
    blurb: "Daily walks, drop-ins, and concierge care across New Albany neighborhoods.",
  },
  {
    city: "Clarksville",
    state: "IN",
    blurb: "Trusted pet sitting and vacation care for Clarksville families.",
  },
  {
    city: "Sellersburg",
    state: "IN",
    blurb: "Reliable visits and companionship for Sellersburg pets.",
  },
  {
    city: "Jeffersonville",
    state: "IN",
    blurb: "Personalized walking and drop-in care throughout Jeffersonville.",
  },
  {
    city: "Floyds Knobs",
    state: "IN",
    blurb: "Attentive, unhurried care for pets in Floyds Knobs.",
  },
  {
    city: "Louisville Metro",
    state: "KY/IN",
    blurb: "Concierge pet care across the greater Louisville metro area.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Daily Pet Concierge", href: "/services/dog-walking" },
      { label: "Puppy Foundations™", href: "/services/puppy-care" },
      { label: "Senior Companion Care™", href: "/services/senior-care" },
      { label: "Final Journey Care™", href: "/services/final-journey-care" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
