import { CategoryFilter, NavLink } from "@/types";
import {
  AppleIcon,
  Laptop,
  Smartphone,
  Cable,
  Layers3,
  Newspaper,
  ToggleLeft,
  TrendingUp,
  TvMinimal,
} from "lucide-react";

export const mainNav: NavLink[] = [
  {
    title: "iOS",
    icon: AppleIcon,
    href: "/",
  },
  {
    title: "Android",
    icon: Smartphone,
    href: "/android",
  },
  {
    title: "Web",
    href: "/web",
    icon: Laptop,
  },
];

export const commandSidenavLinks: NavLink[] = [
  {
    title: "Trending",
    icon: TrendingUp,
    href: "/trending",
  },
  {
    title: "App Categories",
    icon: Layers3,
    href: "/categories",
  },
  {
    title: "Screens",
    icon: TvMinimal,
    href: "/screens",
  },
  {
    title: "Marketing Pages",
    icon: Newspaper,
    href: "/marketing",
  },
  {
    title: "UI Elements",
    icon: ToggleLeft,
    href: "/elements",
  },
  {
    title: "Flows",
    icon: Cable,
    href: "/flows",
  },
];

export const tabs = [
  {
    title: "Apps",
    content: "Content for Apps",
  },
  {
    title: "Screens",
    content: "Content for Screens",
  },
  {
    title: "Marketing Pages",
    content: "Content for Marketing Pages",
  },
  {
    title: "UI Elements",
    content: "Content for UI Elements",
  },
  {
    title: "Flows",
    content: "Content for Flows",
  },
];

export const filterCategories: CategoryFilter[] = [
  { title: "All", description: "", images: [] },
  {
    title: "Business",
    description: `Business apps assist with running a business 
      or provide a means to collaborate, edit, or share content.`,
    images: [
      { src: "/images/business/1.png", alt: "Business App 1" },
      { src: "/images/business/2.png", alt: "Business App 2" },
    ],
  },
  {
    title: "Finance",
    description: `Finance apps perform financial transactions or assist the user 
      with business or personal financial matters.`,
    images: [
      { src: "/images/finance/1.png", alt: "Finance App 1" },
      { src: "/images/finance/2.png", alt: "Finance App 2" },
    ],
  },
  {
    title: "CRM",
    description: `CRM apps help businesses manage relationships and interactions with customers and clients.`,
    images: [
      { src: "/images/crm/1.png", alt: "CRM App 1" },
      { src: "/images/crm/2.png", alt: "CRM App 2" },
    ],
  },
  {
    title: "Shopping",
    description: `Shopping apps facilitate purchasing goods and services online.`,
    images: [
      { src: "/images/shopping/1.png", alt: "Shopping App 1" },
      { src: "/images/shopping/2.png", alt: "Shopping App 2" },
    ],
  },
  {
    title: "Social",
    description: `Social apps connect users for communication, networking, or sharing content.`,
    images: [
      { src: "/images/social/1.png", alt: "Social App 1" },
      { src: "/images/social/2.png", alt: "Social App 2" },
    ],
  },
  {
    title: "Travel",
    description: `Travel apps assist users in planning, booking, and navigating trips.`,
    images: [
      { src: "/images/travel/1.png", alt: "Travel App 1" },
      { src: "/images/travel/2.png", alt: "Travel App 2" },
    ],
  },
  {
    title: "Health",
    description: `Health apps help users manage their well-being, medical information, or fitness.`,
    images: [
      { src: "/images/health/1.png", alt: "Health App 1" },
      { src: "/images/health/2.png", alt: "Health App 2" },
    ],
  },
  {
    title: "Fitness",
    description: `Fitness apps provide workout routines, tracking, and motivation for exercise.`,
    images: [
      { src: "/images/fitness/1.png", alt: "Fitness App 1" },
      { src: "/images/fitness/2.png", alt: "Fitness App 2" },
    ],
  },
  {
    title: "Education",
    description: `Education apps offer learning resources, courses, or skill development.`,
    images: [
      { src: "/images/education/1.png", alt: "Education App 1" },
      { src: "/images/education/2.png", alt: "Education App 2" },
    ],
  },
  {
    title: "Entertainment",
    description: `Entertainment apps provide media, games, or content for amusement.`,
    images: [
      { src: "/images/entertainment/1.png", alt: "Entertainment App 1" },
      { src: "/images/entertainment/2.png", alt: "Entertainment App 2" },
    ],
  },
  {
    title: "News",
    description: `News apps deliver the latest headlines, articles, and updates on current events.`,
    images: [
      { src: "/images/news/1.png", alt: "News App 1" },
      { src: "/images/news/2.png", alt: "News App 2" },
    ],
  },
  {
    title: "Utilities",
    description: `Utility apps assist with everyday tasks such as file management, calculations, or security.`,
    images: [
      { src: "/images/utilities/1.png", alt: "Utility App 1" },
      { src: "/images/utilities/2.png", alt: "Utility App 2" },
    ],
  },
  {
    title: "Productivity",
    description: `Productivity apps help users manage tasks, projects, and efficiency.`,
    images: [
      { src: "/images/productivity/1.png", alt: "Productivity App 1" },
      { src: "/images/productivity/2.png", alt: "Productivity App 2" },
    ],
  },
  {
    title: "Developer Tools",
    description: `Developer tools assist in software development, coding, and debugging.`,
    images: [
      { src: "/images/developer-tools/1.png", alt: "Developer Tool 1" },
      { src: "/images/developer-tools/2.png", alt: "Developer Tool 2" },
    ],
  },
  {
    title: "Networking",
    description: `Networking apps facilitate communication, collaboration, and connectivity between users or devices.`,
    images: [
      { src: "/images/networking/1.png", alt: "Networking App 1" },
      { src: "/images/networking/2.png", alt: "Networking App 2" },
    ],
  },
];
