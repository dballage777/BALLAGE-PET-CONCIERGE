import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "dog-walking",
    name: "Daily Pet Concierge",
    href: "/services/dog-walking",
    tagline: "Everyday care, elevated.",
    shortDescription:
      "Dog walking, drop-in visits, and vacation care delivered with the attention your family member deserves.",
    heroHeadline: "Daily Pet Concierge",
    heroSubcopy:
      "Reliable dog walking, drop-in visits, and vacation care across Southern Indiana — thoughtfully personalized to your pet's routine.",
    intro:
      "Your pet thrives on routine, comfort, and connection. Our Daily Pet Concierge service keeps their days steady and joyful while you're away — whether that's a midday walk, a check-in while you travel, or full vacation care in the home they already love.",
    features: [
      {
        title: "Dog Walking",
        description:
          "Unhurried, one-on-one walks paced to your dog's age, energy, and health — with fresh water, treats, and plenty of attention.",
      },
      {
        title: "Drop-In Visits",
        description:
          "Feeding, fresh water, litter and potty breaks, medication, playtime, and a tidy-up so your home stays as calm as your pet.",
      },
      {
        title: "Vacation Care",
        description:
          "Multiple daily visits while you travel, so your pet stays in familiar surroundings instead of a stressful boarding kennel.",
      },
    ],
    idealFor: [
      "Busy professionals who want their dog walked midday",
      "Cat families needing dependable drop-in care",
      "Anyone traveling who wants their pet to stay home",
    ],
    includes: [
      "Personalized care plan built at your Meet & Greet",
      "Photo and video updates after every visit",
      "GPS-tracked walks and detailed activity notes",
      "Mail, plants, and light home checks on request",
    ],
    icon: "paw",
    accent: "forest",
  },
  {
    slug: "puppy-care",
    name: "Puppy Foundations",
    trademark: true,
    href: "/services/puppy-care",
    tagline: "A confident start for a lifelong companion.",
    shortDescription:
      "Routine support, socialization, exercise, and owner education to set your puppy up for a calm, confident life.",
    heroHeadline: "Puppy Foundations™",
    heroSubcopy:
      "Structured routine, gentle socialization, and owner coaching that build the foundation for a well-adjusted adult dog.",
    intro:
      "The first months shape everything. Puppy Foundations™ blends dependable daytime care with the structure young dogs need — consistent potty routines, positive socialization, healthy exercise, and coaching for you, so good habits take root early.",
    features: [
      {
        title: "Puppy Routine Support",
        description:
          "Consistent potty breaks, feeding, and rest cycles that reinforce the schedule you're building at home.",
      },
      {
        title: "Socialization",
        description:
          "Calm, positive exposure to new sights, sounds, surfaces, and gentle handling — always at your puppy's pace.",
      },
      {
        title: "Exercise & Enrichment",
        description:
          "Age-appropriate play and enrichment that burns energy without overtaxing growing joints.",
      },
      {
        title: "Owner Education",
        description:
          "Practical guidance and shared notes so the whole family stays consistent between visits.",
      },
    ],
    idealFor: [
      "New puppy parents balancing work and training",
      "Families wanting consistent daytime structure",
      "Anyone building strong habits from day one",
    ],
    includes: [
      "Custom puppy routine aligned with your training goals",
      "Socialization and handling milestones tracked over time",
      "Positive-reinforcement approach on every visit",
      "Daily Paw Reports with photos, notes, and progress",
    ],
    icon: "puppy",
    accent: "gold",
  },
  {
    slug: "senior-care",
    name: "Senior Companion Care",
    trademark: true,
    href: "/services/senior-care",
    tagline: "Comfort, dignity, and gentle attention.",
    shortDescription:
      "Mobility support, medication reminders, and gentle companionship tailored to the needs of senior pets.",
    heroHeadline: "Senior Companion Care™",
    heroSubcopy:
      "Patient, gentle care for senior pets — with mobility support, medication reminders, and the unhurried companionship they've earned.",
    intro:
      "Senior pets deserve to age comfortably in the home they know. Senior Companion Care™ is built around their pace: slower walks, help with mobility, careful attention to medication and routine, and the steady companionship that keeps their days warm.",
    features: [
      {
        title: "Gentle Companionship",
        description:
          "Calm visits centered on comfort — soft attention, quiet company, and a watchful eye on how they're feeling.",
      },
      {
        title: "Mobility Support",
        description:
          "Assistance with stairs, gentle short walks, and help getting up and settled for pets who move more slowly now.",
      },
      {
        title: "Medication Reminders",
        description:
          "Careful administration of medications on schedule, with clear notes recorded after every visit.",
      },
      {
        title: "Wellness Watch",
        description:
          "Attentive monitoring of appetite, comfort, and behavior — so changes are noticed early and shared with you.",
      },
    ],
    idealFor: [
      "Senior dogs and cats who do best staying home",
      "Pets needing medication kept on a strict schedule",
      "Families wanting extra eyes on an aging companion",
    ],
    includes: [
      "Care plan reviewed with you and, when helpful, your vet",
      "Slow, gentle walks paced to their comfort",
      "Medication and mobility support with detailed logs",
      "Compassionate updates so you always know how they are",
    ],
    icon: "senior",
    accent: "forest",
  },
  {
    slug: "final-journey-care",
    name: "Final Journey Care",
    trademark: true,
    href: "/services/final-journey-care",
    tagline: "Helping families create peaceful, meaningful final moments.",
    shortDescription:
      "Compassionate comfort visits, last adventures, transportation, and family support during a beloved pet's final chapter.",
    heroHeadline: "Final Journey Care™",
    heroSubcopy:
      "Tender, unhurried support that helps families create peaceful, meaningful final moments with the pets they love.",
    intro:
      "When a beloved companion nears the end of their journey, every moment matters. Final Journey Care™ surrounds your family with gentle, practical support — comfort visits, cherished last adventures, transportation when you need it, and a caring presence for the whole family.",
    features: [
      {
        title: "Comfort Visits",
        description:
          "Quiet, gentle time focused entirely on your pet's ease — soft companionship and attentive comfort in their final chapter.",
      },
      {
        title: "Last Adventures",
        description:
          "Helping you create meaningful memories, from a favorite slow stroll to a peaceful afternoon in the sun.",
      },
      {
        title: "Transportation Support",
        description:
          "Careful, comforting transportation to appointments so you can stay present with your pet.",
      },
      {
        title: "Family Support",
        description:
          "Steady, compassionate support for the people who love them — because grief deserves care too.",
      },
    ],
    idealFor: [
      "Families navigating a pet's final chapter",
      "Those wanting meaningful moments over their last weeks",
      "Anyone who needs a gentle, steady hand nearby",
    ],
    includes: [
      "A calm, unhurried plan shaped around your family",
      "Comfort visits and cherished last adventures",
      "Compassionate transportation when you need it",
      "A caring presence for the whole family",
    ],
    icon: "heart",
    accent: "gold",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
