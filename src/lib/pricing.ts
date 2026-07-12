import type { IconName } from "@/types";

/**
 * Suggested, competitive starting prices for the Southern Indiana / Louisville
 * market (benchmarked mid-2025: ~$20–25 per 30-min walk, ~$44/day pet sitting,
 * ~$33–58/night overnight). Ballage is positioned as premium concierge, so
 * these sit at the solid middle-to-upper of the local range.
 *
 * These are easy to adjust — edit the numbers here and they update site-wide.
 * Every plan is ultimately tailored at the free Meet & Greet.
 */

export interface PriceItem {
  name: string;
  price: string;
  unit?: string;
  description: string;
}

export interface PricePackage {
  serviceName: string;
  trademark?: boolean;
  href: string;
  icon: IconName;
  accent: "forest" | "gold";
  note?: string;
  items: PriceItem[];
}

export const pricingIntro =
  "Simple, honest pricing with no hidden fees. Every plan is personalized at your complimentary Meet & Greet — the rates below are starting points to help you plan.";

export const packages: PricePackage[] = [
  {
    serviceName: "Daily Dog Care",
    href: "/services/dog-walking",
    icon: "paw",
    accent: "forest",
    items: [
      {
        name: "Quick Drop-In",
        price: "$20",
        unit: "20 min",
        description: "Feeding, fresh water, potty break, and a little love.",
      },
      {
        name: "Dog Walk",
        price: "$24",
        unit: "30 min",
        description: "An unhurried, one-on-one walk paced to your dog.",
      },
      {
        name: "Extended Walk or Visit",
        price: "$30",
        unit: "45 min",
        description: "More time to walk, play, and settle your dog.",
      },
      {
        name: "Vacation Care Visit",
        price: "$26",
        unit: "per visit",
        description: "In-home visits while you travel (2–3 per day recommended).",
      },
      {
        name: "Overnight In-Home Stay",
        price: "$70",
        unit: "per night",
        description: "Overnight companionship and care in your own home.",
      },
    ],
  },
  {
    serviceName: "Puppy Foundations",
    trademark: true,
    href: "/services/puppy-care",
    icon: "puppy",
    accent: "gold",
    items: [
      {
        name: "Puppy Visit",
        price: "$26",
        unit: "30 min",
        description: "Potty routine, socialization, exercise, and enrichment.",
      },
      {
        name: "Puppy Power Package",
        price: "$120",
        unit: "5 visits / week",
        description: "A weekly bundle of daily puppy visits — save vs. per-visit.",
      },
    ],
  },
  {
    serviceName: "Adventure Outings",
    trademark: true,
    href: "/services/adventure-outings",
    icon: "leaf",
    accent: "forest",
    note: "Our signature service",
    items: [
      {
        name: "Trail Adventure",
        price: "$45",
        unit: "60 min",
        description:
          "A one-on-one hike or “sniffari,” including safe transport to and from the trail.",
      },
      {
        name: "Weekly Adventure Club",
        price: "$80",
        unit: "2 outings / week",
        description: "Two adventures a week for your active dog — save vs. per-outing.",
      },
    ],
  },
  {
    serviceName: "Senior Companion Care",
    trademark: true,
    href: "/services/senior-care",
    icon: "senior",
    accent: "forest",
    items: [
      {
        name: "Gentle Visit",
        price: "$26",
        unit: "30 min",
        description: "Companionship, medication reminders, and gentle care.",
      },
      {
        name: "Extended Comfort Visit",
        price: "$34",
        unit: "45–60 min",
        description: "Unhurried time with mobility support and a watchful eye.",
      },
    ],
  },
  {
    serviceName: "Vet Visit Rides",
    href: "/services/vet-rides",
    icon: "location",
    accent: "gold",
    items: [
      {
        name: "Round-Trip Vet Ride",
        price: "$45",
        unit: "local",
        description:
          "Pickup, safe transport to the vet, and back home — with updates along the way.",
      },
      {
        name: "Ride & Stay",
        price: "$65",
        unit: "up to 1 hr",
        description:
          "We stay through the appointment and relay the vet's notes (+$20 per extra 30 min).",
      },
    ],
  },
  {
    serviceName: "Final Journey Care",
    trademark: true,
    href: "/services/final-journey-care",
    icon: "heart",
    accent: "gold",
    note: "Custom, compassionate pricing",
    items: [
      {
        name: "Comfort & Companionship",
        price: "Let's talk",
        unit: "free consultation",
        description:
          "Every family's needs are different. We'll build a gentle plan together — reach out for a caring, no-pressure conversation.",
      },
    ],
  },
];

export const addOns: PriceItem[] = [
  {
    name: "Travel (gas)",
    price: "+$0.65",
    unit: "per mile",
    description:
      "Local travel is included across our service area (about 10 miles of Silver Creek High School, Sellersburg). Only longer drives beyond that add a small $0.65/mile gas fee each way — always confirmed in advance.",
  },
  {
    name: "Additional dog",
    price: "+$5",
    unit: "per visit",
    description: "Care for more than one dog in the same household.",
  },
  {
    name: "Holiday visits",
    price: "+$10",
    unit: "per visit",
    description: "Major holidays, so your dog is loved even on the big days.",
  },
  {
    name: "Medication administration",
    price: "Included",
    description: "Oral and topical medications, given carefully and logged.",
  },
  {
    name: "Daily Paw Reports",
    price: "Included",
    description: "Photos, videos, and notes after every single visit — always.",
  },
];

export const weeklyDiscountNote =
  "Save 10% when you book 5 or more recurring visits per week.";

export const travelNote =
  "Local travel is included across our service area — about 10 miles of Silver Creek High School (Sellersburg), which covers our core towns. Only longer drives beyond that (like far-side Louisville trips or extended Vet Rides) add a small $0.65/mile gas fee each way, always confirmed with you first.";

export interface Bundle {
  name: string;
  price: string;
  unit: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

/**
 * Recurring packages & bundles. These improve retention and cash flow and give
 * clients a clear reason to commit. The New Puppy Starter is built for our
 * breeder-referral channel.
 */
export const bundles: Bundle[] = [
  {
    name: "New Puppy Starter",
    price: "$225",
    unit: "2-week foundation",
    badge: "Perfect for new puppies",
    highlight: true,
    description:
      "Ten weekday puppy visits over two weeks to lock in potty routines, socialization, and good habits from day one — plus your Meet & Greet. A calm, confident start for your new best friend.",
  },
  {
    name: "Weekly Walk Pack",
    price: "$110",
    unit: "5 weekday walks",
    description:
      "A 30-minute one-on-one walk every weekday — save versus booking individually, with the same great care.",
  },
  {
    name: "Weekly Adventure Club",
    price: "$80",
    unit: "2 outings / week",
    description:
      "Two trail adventures a week for your active dog. They come home happy and tired — the good kind of tired.",
  },
  {
    name: "Vacation Care Bundle",
    price: "from $70 / day",
    unit: "3 visits / day",
    description:
      "Three in-home visits a day while you travel — feeding, walks, potty breaks, and company — so your dog stays home and relaxed.",
  },
];

export const launchOffer = {
  eyebrow: "Now Booking Our Founding Families",
  title: "Founding Family Offer",
  subtitle:
    "We're welcoming our very first client families — and we'd love for yours to be one of them.",
  // Adjust the number and any dates to match your launch plan.
  highlights: [
    "15% off your entire first month of service",
    "Lock in your founding rate — your intro pricing stays as we grow",
    "Always-complimentary in-home Meet & Greet",
    "Refer a friend and you'll each receive a free drop-in visit",
  ],
  finePrint:
    "Limited to our first 15 founding families. New clients only. Mention the Founding Family Offer at your Meet & Greet.",
};
