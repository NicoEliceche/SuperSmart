import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: {
    webp: string;
    fallback: string;
    alt: string;
  };
  specs: string[];
  badge?: string;
}

export interface FeaturedItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: {
    webp: string;
    fallback: string;
    alt: string;
  };
}

export interface Review {
  name: string;
  vehicle: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
