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
