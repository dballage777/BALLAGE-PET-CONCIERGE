/**
 * The people and pets behind Ballage Pet Concierge. This personal content is
 * one of the strongest warmth/trust signals on the site — pet owners want to
 * know exactly who is caring for their family member.
 *
 * David & Heidi's bios are warm starter copy; replace with your own words
 * anytime. Oz's bio is complete. Add Raussie's when ready.
 */

export interface Caregiver {
  name: string;
  role: string;
  bio: string[];
  photo?: string; // e.g. "/gallery/david.jpg"
}

export interface PackMember {
  name: string;
  tagline: string;
  breed?: string;
  age?: string;
  bio: string[];
  loves?: string[];
  commands?: { phrase: string; meaning: string }[];
  badge?: string;
  photo?: string; // e.g. "/gallery/oz-1.jpg"
  videos?: string[]; // e.g. ["/videos/oz-hello.mp4"]
  comingSoon?: boolean;
}

export const caregivers: Caregiver[] = [
  {
    name: "David Ballage",
    role: "Founder & Pet Caregiver",
    bio: [
      "David turned a lifelong love of animals into Ballage Pet Concierge, built on one simple promise: treat every pet like one of his own.",
      "Alongside his wife Heidi and their dogs Oz and Raussie, David is dedicated to giving Southern Indiana families the same peace of mind he'd want for his own pack — professional, compassionate care from someone who genuinely loves what he does.",
    ],
    photo: "/gallery/david.jpg",
  },
  {
    name: "Heidi Ballage",
    role: "Pet Caregiver",
    bio: [
      "Heidi brings warmth, patience, and a gentle touch to every visit.",
      "Whether it's a bouncy puppy, an anxious rescue, or a gentle senior, she cares for each pet with the same love she gives Oz and Raussie at home — unhurried, attentive, and full of heart.",
    ],
    photo: "/gallery/heidi.jpg",
  },
];

export const pack: PackMember[] = [
  {
    name: "Oz Ballage",
    tagline: "The heart of the household",
    breed: "Heeler–Lab mix",
    age: "9 years young",
    badge: "Fully recovered from double CCL surgery — June 2024",
    videos: ["/videos/oz-play.mp4", "/videos/oz-hello.mp4"],
    photo: "/gallery/oz-1.jpg",
    bio: [
      "Meet Oz — our nine-year-old Heeler-Lab mix and the very heart of the Ballage household. If you've ever wondered what unconditional love looks like, it's Oz. He's what we lovingly call a “real boy” — the most affectionate dog we've ever known, and the inspiration behind the way we care for every pet.",
      "Oz is proof of what love and good care can do: he made a full recovery from double CCL surgery in June 2024, and he's back to doing all the things he loves. He's why Ballage Pet Concierge exists — because every pet deserves to be loved like family.",
    ],
    loves: [
      "Long walks (and “talking to” every friend he meets)",
      "“Nuggles” — serious cuddling with mom and dad",
      "Watching TV on the couch",
      "Peanut butter, obviously",
      "Playing with his buddy Mr. Squeeks",
      "Protecting the yard from rabbits, squirrels & birds",
      "Visiting his grandma and grandpa",
      "Car rides",
    ],
    commands: [
      { phrase: "Like a gentleman", meaning: "takes his treat ever so gently" },
      {
        phrase: "Too many butts in the kitchen",
        meaning: "politely relocates to the doorway to supervise",
      },
      { phrase: "Big boy words", meaning: "actually says “out” when he wants to go outside" },
    ],
  },
  {
    name: "Raussie Ballage",
    tagline: "The other half of the pack",
    bio: [
      "Raussie is the other beloved member of the Ballage pack — and this sweet pup's full story is coming soon.",
      "Check back to meet Raussie!",
    ],
    photo: "/gallery/raussie.jpg",
    comingSoon: true,
  },
];
