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
    href: "/ios",
  },
  {
    title: "Android",
    icon: Smartphone,
    href: "/android",
  },
  {
    title: "Web",
    href: "/",
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
  { title: "All", description: "" },
  {
    title: "Business",
    description: `Business apps assist with running a business 
      or provide a means to collaborate, edit, or share content.`,
  },
  {
    title: "Finance",
    description: `Finance apps perform financial transactions or assist the user 
      with business or personal financial matters.`,
  },
  {
    title: "CRM",
    description: `CRM apps help businesses manage relationships and interactions with customers and clients.`,
  },
  {
    title: "Shopping",
    description: `Shopping apps facilitate purchasing goods and services online.`,
  },
  {
    title: "Social",
    description: `Social apps connect users for communication, networking, or sharing content.`,
  },
  {
    title: "Travel",
    description: `Travel apps assist users in planning, booking, and navigating trips.`,
  },
  {
    title: "Health",
    description: `Health apps help users manage their well-being, medical information, or fitness.`,
  },
  {
    title: "Fitness",
    description: `Fitness apps provide workout routines, tracking, and motivation for exercise.`,
  },
  {
    title: "Education",
    description: `Education apps offer learning resources, courses, or skill development.`,
  },
  {
    title: "Entertainment",
    description: `Entertainment apps provide media, games, or content for amusement.`,
  },
  {
    title: "News",
    description: `News apps deliver the latest headlines, articles, and updates on current events.`,
  },
  {
    title: "Utilities",
    description: `Utility apps assist with everyday tasks such as file management, calculations, or security.`,
  },
  {
    title: "Productivity",
    description: `Productivity apps help users manage tasks, projects, and efficiency.`,
  },
  {
    title: "Developer Tools",
    description: `Developer tools assist in software development, coding, and debugging.`,
  },
  {
    title: "Networking",
    description: `Networking apps facilitate communication, collaboration, and connectivity between users or devices.`,
  },
];
