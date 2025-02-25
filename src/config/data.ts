import { NavLink } from "@/types";
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

export const filterCategories = [
  "All",
  "Business",
  "Finance",
  "CRM",
  "Shopping",
  "Social",
  "Travel",
  "Health",
  "Fitness",
  "Education",
  "Entertainment",
  "News",
  "Utilities",
  "Productivity",
  "Photo & Video",
  "Music",
  "Books",
  "Lifestyle",
  "Food & Drink",
  "Sports",
  "Games",
  "Weather",
  "Developer Tools",
  "Networking",
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
