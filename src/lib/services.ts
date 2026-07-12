import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "dog-walking",
    name: "Daily Dog Care",
    href: "/services/dog-walking",
    tagline: "Everyday care, elevated.",
    shortDescription:
      "Dog walking, drop-in visits, and vacation care delivered with the attention your best friend deserves.",
    heroHeadline: "Daily Dog Care",
    heroSubcopy:
      "Reliable dog walking, drop-in visits, and vacation care across Southern Indiana — thoughtfully personalized to your dog's routine.",
    intro:
      "Your dog thrives on routine, exercise, and connection. Our Daily Dog Care keeps their days happy and steady while you're away — whether that's a midday walk, a check-in while you travel, or full vacation care in the home they already love.",
    features: [
      {
        title: "Dog Walking",
        description:
          "Unhurried, one-on-one walks paced to your dog's age, energy, and health — with fresh water, treats, and plenty of attention.",
      },
      {
        title: "Drop-In Visits",
        description:
          "Feeding, fresh water, potty breaks, medication, playtime, and a tidy-up so your home stays as calm as your dog.",
      },
      {
        title: "Vacation Care",
        description:
          "Multiple daily visits while you travel, so your dog stays in familiar surroundings instead of a stressful boarding kennel.",
      },
    ],
    idealFor: [
      "Busy professionals who want their dog walked midday",
      "Families needing dependable drop-in care",
      "Anyone traveling who wants their dog to stay home",
    ],
    includes: [
      "Personalized care plan built at your Meet & Greet",
      "Photo and video updates after every visit",
      "Walks paced to your dog with detailed activity notes",
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
      "Ask about our New Puppy Starter — a 2-week foundation package",
    ],
    icon: "puppy",
    accent: "gold",
  },
  {
    slug: "adventure-outings",
    name: "Adventure Outings",
    trademark: true,
    href: "/services/adventure-outings",
    tagline: "Because a walk around the block isn't always enough.",
    shortDescription:
      "Hikes, trail “sniffaris,” and one-on-one adventures that give active adult dogs the stimulation and exercise they crave.",
    heroHeadline: "Adventure Outings™",
    heroSubcopy:
      "Beyond the neighborhood walk — real adventures for adult dogs, from trail hikes to sniff-driven explorations, all one-on-one and tailored to your dog.",
    intro:
      "Adult dogs in their prime need more than a lap around the block. Adventure Outings™ is our signature service for active grown-up dogs — a genuinely different experience in Southern Indiana. We take your dog somewhere new and let them be a dog: hiking trails, exploring, sniffing, and burning happy energy, then coming home tired and content.",
    features: [
      {
        title: "Trail Hikes",
        description:
          "One-on-one hikes on dog-friendly local trails — fresh scenery, real exercise, and a change of pace from the daily walk.",
      },
      {
        title: "“Sniffari” Explorations",
        description:
          "Slow, sniff-led adventures that let your dog use their nose and decompress — enrichment that tires the mind, not just the body.",
      },
      {
        title: "Decompression & Play",
        description:
          "Time to explore, splash, and play safely off the usual route, matched to your dog's fitness and confidence.",
      },
      {
        title: "Adventure Recap",
        description:
          "Photos, videos, and a story from the trail after every outing — you'll love seeing where they went.",
      },
    ],
    idealFor: [
      "High-energy adult dogs who need more than a walk",
      "Working owners whose dogs crave real stimulation",
      "Dogs who love the outdoors and new places",
    ],
    includes: [
      "One-on-one outing tailored to your dog's fitness & confidence",
      "Safe transport to and from the adventure",
      "Fresh water, gear, and cleanup handled",
      "Daily Paw Report with photos and video from the trail",
    ],
    icon: "leaf",
    accent: "forest",
  },
  {
    slug: "senior-care",
    name: "Senior Companion Care",
    trademark: true,
    href: "/services/senior-care",
    tagline: "Comfort, dignity, and gentle attention.",
    shortDescription:
      "Mobility support, medication reminders, and gentle companionship tailored to the needs of senior dogs.",
    heroHeadline: "Senior Companion Care™",
    heroSubcopy:
      "Patient, gentle care for senior dogs — with mobility support, medication reminders, and the unhurried companionship they've earned.",
    intro:
      "Senior dogs deserve to age comfortably in the home they know. Senior Companion Care™ is built around their pace: slower walks, help with mobility, careful attention to medication and routine, and the steady companionship that keeps their days warm.",
    features: [
      {
        title: "Gentle Companionship",
        description:
          "Calm visits centered on comfort — soft attention, quiet company, and a watchful eye on how they're feeling.",
      },
      {
        title: "Mobility Support",
        description:
          "Assistance with stairs, gentle short walks, and help getting up and settled for dogs who move more slowly now.",
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
      "Senior dogs who do best staying home",
      "Dogs needing medication kept on a strict schedule",
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
    slug: "vet-rides",
    name: "Vet Visit Rides",
    href: "/services/vet-rides",
    tagline: "We'll get them there — and bring them home.",
    shortDescription:
      "Safe, caring transportation to and from vet appointments, so your dog never misses care even when you can't drive.",
    heroHeadline: "Vet Visit Rides",
    heroSubcopy:
      "Can't make the vet appointment? We'll safely drive your dog there and back — calm, careful, and with updates the whole way.",
    intro:
      "Life gets busy, and not everyone can take time off for every vet visit. Our Vet Visit Rides get your dog to and from their appointment safely and calmly, whether you need a simple round-trip ride or someone to stay with them through the visit. It's one less thing to worry about — and one more way we keep your dog's care on track.",
    features: [
      {
        title: "Round-Trip Rides",
        description:
          "We pick your dog up, drive them to the vet, and bring them safely home — secured, calm, and cared for.",
      },
      {
        title: "Ride & Stay",
        description:
          "Prefer someone with them? We'll stay through the appointment, relay the vet's notes, and keep you posted.",
      },
      {
        title: "Safe & Secure",
        description:
          "Proper restraint, a clean vehicle, and gentle handling for anxious or senior dogs.",
      },
      {
        title: "Real-Time Updates",
        description:
          "Photos and messages so you know exactly where your dog is and how the visit went.",
      },
    ],
    idealFor: [
      "Working owners who can't get away for appointments",
      "Seniors or anyone without reliable transportation",
      "Multi-dog households juggling schedules",
    ],
    includes: [
      "Safe pickup and drop-off within our service area",
      "Secure restraint and gentle, patient handling",
      "Updates and the vet's notes relayed to you",
      "Optional stay-through-appointment support",
    ],
    icon: "location",
    accent: "gold",
  },
  {
    slug: "final-journey-care",
    name: "Final Journey Care",
    trademark: true,
    href: "/services/final-journey-care",
    tagline: "Helping families create peaceful, meaningful final moments.",
    shortDescription:
      "Compassionate comfort visits, last adventures, transportation, and family support during a beloved dog's final chapter.",
    heroHeadline: "Final Journey Care™",
    heroSubcopy:
      "Tender, unhurried support that helps families create peaceful, meaningful final moments with the dogs they love.",
    intro:
      "When a beloved companion nears the end of their journey, every moment matters. Final Journey Care™ surrounds your family with gentle, practical support — comfort visits, cherished last adventures, transportation when you need it, and a caring presence for the whole family.",
    features: [
      {
        title: "Comfort Visits",
        description:
          "Quiet, gentle time focused entirely on your dog's ease — soft companionship and attentive comfort in their final chapter.",
      },
      {
        title: "Last Adventures",
        description:
          "Helping you create meaningful memories, from a favorite slow stroll to a peaceful afternoon in the sun.",
      },
      {
        title: "Transportation Support",
        description:
          "Careful, comforting transportation to appointments so you can stay present with your dog.",
      },
      {
        title: "Family Support",
        description:
          "Steady, compassionate support for the people who love them — because grief deserves care too.",
      },
    ],
    idealFor: [
      "Families navigating a dog's final chapter",
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

/**
 * Services featured on the homepage grid. Final Journey Care is intentionally
 * excluded here so end-of-life care is available (via Services/nav) without
 * dominating the homepage.
 */
export const featuredServices = services.filter(
  (s) => s.slug !== "final-journey-care"
);
