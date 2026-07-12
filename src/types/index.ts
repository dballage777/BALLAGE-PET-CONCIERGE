export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  trademark?: boolean;
  href: string;
  tagline: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubcopy: string;
  intro: string;
  features: ServiceFeature[];
  idealFor: string[];
  includes: string[];
  icon: IconName;
  accent: "forest" | "gold";
}

export interface Review {
  name: string;
  location: string;
  petName: string;
  service: string;
  rating: number;
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  content: string[];
  keywords: string[];
}

export type IconName =
  | "paw"
  | "puppy"
  | "senior"
  | "heart"
  | "shield"
  | "report"
  | "location"
  | "clock"
  | "camera"
  | "leaf";
