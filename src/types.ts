import { LucideIcon } from "lucide-react";

export type NavLink = {
  title: string;
  icon: LucideIcon;
  href?: string;
};

export type CategoryFilter = {
  title: string;
  description: string;
};
