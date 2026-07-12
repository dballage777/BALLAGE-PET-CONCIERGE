import type { BlogPost } from "@/types";

/**
 * Blog posts are stored as structured data so the blog can later migrate to a
 * CMS or MDX without changing the rendering layer. Each post is SEO-targeted
 * around Southern Indiana / Louisville local pet-care search intent.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-a-dog-sitter-new-albany-indiana",
    title: "How to Choose a Dog Sitter in New Albany, Indiana",
    excerpt:
      "What to look for in a professional pet sitter — from certifications to daily reports — so you can leave home with true peace of mind.",
    category: "Choosing Care",
    date: "2026-06-18",
    readingTime: "6 min read",
    author: "Ballage Pet Concierge",
    keywords: [
      "dog sitter New Albany Indiana",
      "pet sitter Southern Indiana",
      "professional pet care",
    ],
    content: [
      "Choosing someone to care for your dog is one of the most personal decisions a pet owner makes. In New Albany and across Southern Indiana, families have more options than ever — but not all pet care is created equal. Here is what separates a professional pet concierge from someone who simply stops by.",
      "Start with certifications and preparedness. A professional should be Pet First Aid certified and able to explain what they would do in an emergency. Ask how they handle medication, escapes, and unexpected illness. Confidence and a clear plan are signs of genuine professionalism.",
      "Look for personalized care, not a checklist. Your dog is an individual with a specific routine, energy level, and personality. The best sitters build a care plan around your pet at an in-person Meet & Greet, rather than applying the same visit to every animal.",
      "Insist on communication. Daily photo and video updates, activity notes, and honest reporting turn anxiety into reassurance. If you cannot see how your pet's day went, you are missing the most important part of modern pet care.",
      "Finally, trust your instincts about warmth. Skill matters, but so does heart. The right person treats your pet like family — because to you, they are. That combination of professionalism and genuine compassion is exactly what a concierge approach is built to deliver.",
    ],
  },
  {
    slug: "senior-dog-care-southern-indiana",
    title: "Caring for a Senior Dog: A Southern Indiana Owner's Guide",
    excerpt:
      "Aging pets need patience, routine, and gentle attention. Here's how to keep your senior dog comfortable and thriving at home.",
    category: "Senior Pets",
    date: "2026-05-29",
    readingTime: "7 min read",
    author: "Ballage Pet Concierge",
    keywords: [
      "senior dog care Southern Indiana",
      "senior pet care",
      "aging dog comfort",
    ],
    content: [
      "Senior dogs give us a lifetime of loyalty, and their later years call for a gentler kind of care. Whether your companion is slowing down on walks or needs help on the stairs, small adjustments make a meaningful difference in comfort and dignity.",
      "Keep routines steady. Predictable feeding times, medication schedules, and rest periods reduce stress and support aging bodies. Consistency is one of the kindest things you can offer an older pet.",
      "Adapt exercise to their pace. Short, gentle walks keep joints moving and spirits up without overexertion. Watch for signs of fatigue and let your dog set the tempo.",
      "Stay ahead of medication and mobility. On-time medication and simple mobility support — help with stairs, softer bedding, secure footing — protect both comfort and safety. Detailed notes after every visit help you and your veterinarian catch changes early.",
      "Above all, cherish the quiet companionship. Senior pets often want closeness more than activity. Time spent simply being together is care in its purest form — and it's the heart of Senior Companion Care™.",
    ],
  },
  {
    slug: "why-in-home-pet-care-beats-boarding",
    title: "Why In-Home Pet Care Beats Boarding for Louisville-Area Pets",
    excerpt:
      "When you travel, your pet is happiest at home. Here's why in-home vacation care is the calmer, safer choice.",
    category: "Vacation Care",
    date: "2026-04-15",
    readingTime: "5 min read",
    author: "Ballage Pet Concierge",
    keywords: [
      "dog walking Louisville",
      "pet sitter Clarksville Indiana",
      "in-home pet care",
    ],
    content: [
      "Boarding kennels serve a purpose, but for many pets the stress of an unfamiliar environment outweighs the convenience. In-home care keeps your pet in the surroundings they know and love while you travel.",
      "Less stress, more comfort. Familiar smells, favorite napping spots, and an unchanged routine keep anxiety low. Your pet stays relaxed instead of adjusting to a noisy, crowded facility.",
      "Personalized attention. In-home visits are one-on-one. Your pet isn't competing with dozens of others for care — the entire visit is theirs, tailored to their needs.",
      "Healthier and safer. Staying home reduces exposure to illness that can spread in group settings, and it keeps pets on their normal diet and schedule. For seniors and puppies especially, that stability matters.",
      "Peace of mind for you. With photo updates, activity notes, and light home checks, in-home vacation care protects both your pet and your home — so you can actually enjoy your time away.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
