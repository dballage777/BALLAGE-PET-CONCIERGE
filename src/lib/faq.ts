export interface FaqItem {
  question: string;
  answer: string;
  category: "Trust & Safety" | "Getting Started" | "Visits & Updates" | "Logistics";
}

/**
 * FAQ content answers the real questions dog owners ask before hiring in-home
 * care — insurance, safety, Meet & Greets, daily updates, and more. These are
 * the top trust drivers surfaced in owner research and pre-hire checklists.
 */
export const faqs: FaqItem[] = [
  {
    category: "Trust & Safety",
    question: "Are you insured and bonded?",
    answer:
      "Yes. Ballage Pet Concierge is fully insured and bonded, so your dog and your home are protected the moment we're entrusted with their care. We're happy to share our coverage details at your Meet & Greet.",
  },
  {
    category: "Trust & Safety",
    question: "Are you certified in pet first aid?",
    answer:
      "Absolutely. We're Pet First Aid certified and trained to recognize and respond to emergencies calmly and quickly. Your dog's safety is the foundation of everything we do.",
  },
  {
    category: "Trust & Safety",
    question: "How do you keep my home and keys secure?",
    answer:
      "Your keys and access details are handled with strict confidentiality and stored securely — never labeled with your address. We treat the trust of entering your home with the seriousness it deserves.",
  },
  {
    category: "Trust & Safety",
    question: "What happens in an emergency?",
    answer:
      "Every care plan includes an emergency protocol built with you: your vet's information, an emergency contact, and clear instructions. If anything concerns us, we act immediately and keep you informed every step of the way.",
  },
  {
    category: "Getting Started",
    question: "Do you offer a free Meet & Greet?",
    answer:
      "Yes — and we consider it essential. Every relationship starts with a complimentary, no-obligation Meet & Greet in your home. It's how we learn your dog's routine and personality, and how you get comfortable with us. There's no pressure to book.",
  },
  {
    category: "Getting Started",
    question: "Do you only care for dogs?",
    answer:
      "Yes! We're proudly dog people, and dogs are all we do. That focus lets us bring real expertise to every walk, adventure, and visit — from bouncy puppies to gentle seniors.",
  },
  {
    category: "Getting Started",
    question: "What areas do you serve?",
    answer:
      "We proudly serve New Albany, Clarksville, Sellersburg, Jeffersonville, Floyds Knobs, and the greater Southern Indiana / Louisville metro area. Not sure if we reach you? Just ask — we're happy to help.",
  },
  {
    category: "Getting Started",
    question: "My dog is anxious or reactive. Can you still help?",
    answer:
      "Yes. We take a gentle, patient, low-stress approach and move at your dog's pace — never forcing interactions. At your Meet & Greet we'll learn their triggers and comfort cues so every visit feels safe and calm for them.",
  },
  {
    category: "Visits & Updates",
    question: "Can you drive my dog to the vet?",
    answer:
      "Yes — it's one of our services. With Vet Visit Rides, we'll safely drive your dog to and from their appointment, and can even stay through the visit and relay the vet's notes. It's a great option when you can't get away from work.",
  },
  {
    category: "Visits & Updates",
    question: "Will I get updates while I'm away?",
    answer:
      "Every single visit. You'll receive a Daily Paw Report with photos, videos, and a warm personal note covering walks, feeding, potty breaks, medication, and how your dog is doing — so you're never left wondering.",
  },
  {
    category: "Visits & Updates",
    question: "Will the same person care for my dog each time?",
    answer:
      "Consistency is at the heart of what we do. We build a genuine, ongoing relationship with your dog — not a rotating cast of strangers. Your dog gets to know and trust their caregiver, and so do you.",
  },
  {
    category: "Logistics",
    question: "How far in advance should I book?",
    answer:
      "The sooner the better, especially for holidays and vacation care, but we'll always do our best to accommodate you. Reach out and we'll find a way to help.",
  },
  {
    category: "Logistics",
    question: "How do payments work?",
    answer:
      "We'll walk you through simple, transparent pricing and payment options at your Meet & Greet — no surprises, no hidden fees. Just clear, honest care.",
  },
];
