/**
 * Client policies / service agreement. Reflecting professional pet-sitting
 * standards (PSI / NAPPS): clear booking, cancellation, key, vaccination, and
 * payment terms build trust and protect the business. Edit freely to match how
 * you actually operate.
 */

export interface Policy {
  title: string;
  body: string[];
}

export const policiesIntro =
  "Clear expectations make for happy dogs and happy humans. Here's how we work — simple, fair, and transparent. We'll review everything together at your Meet & Greet.";

export const policies: Policy[] = [
  {
    title: "Meet & Greet First",
    body: [
      "Every new client starts with a complimentary, no-obligation Meet & Greet in your home. It's how we learn your dog's routine, personality, and needs — and how we build your care plan together.",
      "Service begins only after we've met your dog and agreed on a plan.",
    ],
  },
  {
    title: "Booking & Scheduling",
    body: [
      "Please request visits as far in advance as you can, especially around holidays and vacation periods, which fill quickly.",
      "We'll always do our best to accommodate last-minute requests, but they're subject to availability.",
    ],
  },
  {
    title: "Cancellations",
    body: [
      "Daily walks and visits: please give at least 24 hours' notice to cancel without charge.",
      "Vacation and holiday bookings: please give at least 72 hours' notice, as these dates are reserved just for your dog.",
      "Cancellations inside these windows may be billed at the full rate.",
    ],
  },
  {
    title: "Vaccinations & Health",
    body: [
      "For the safety of every dog we care for, all dogs must be up to date on core vaccinations (including rabies) as recommended by your veterinarian.",
      "Please let us know about any medical conditions, medications, allergies, or behavioral notes so we can care for your dog properly.",
    ],
  },
  {
    title: "Keys & Home Access",
    body: [
      "Keys and access codes are handled with strict confidentiality and stored securely — never labeled with your name or address.",
      "We're happy to use a lockbox or smart lock if you prefer. Access details are used only to provide the care you've requested.",
    ],
  },
  {
    title: "Payments",
    body: [
      "We'll walk you through simple, transparent pricing at your Meet & Greet — no hidden fees.",
      "Invoices are due as agreed in your care plan. We'll always confirm any add-ons (like extra distance or holiday visits) before they apply.",
    ],
  },
  {
    title: "Holidays & Travel",
    body: [
      "A holiday surcharge applies on major holidays, so your dog is cared for even on the big days.",
      "Local travel is included across our service area. Only longer drives beyond about 10 miles of Silver Creek High School (Sellersburg) add a small $0.65/mile gas fee — always confirmed with you in advance.",
    ],
  },
  {
    title: "Inclement Weather",
    body: [
      "Your dog's safety comes first. In extreme heat, cold, or storms, we may shorten outdoor time and focus on indoor care, potty breaks, and comfort.",
      "We'll always keep you updated on any weather-related changes.",
    ],
  },
  {
    title: "Safety, Insurance & Emergencies",
    body: [
      "Ballage Pet Concierge is insured and bonded, and we're Pet First Aid certified.",
      "Every care plan includes an emergency protocol built with you — your vet's information, an emergency contact, and clear instructions. If anything concerns us, we act immediately and keep you informed.",
    ],
  },
  {
    title: "Photos & Privacy",
    body: [
      "You'll receive photos and videos of your dog in your Daily Paw Reports.",
      "We'll only share photos of your dog publicly (on our website or social media) with your permission — just let us know your preference.",
    ],
  },
];
