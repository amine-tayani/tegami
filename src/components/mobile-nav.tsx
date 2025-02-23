"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { cn } from "@/lib/utils";
import { TegamiLogo } from "@/App";
import { AppleIcon, Laptop, LucideIcon, Smartphone } from "lucide-react";

export type NavLink = {
  title: string;
  icon: LucideIcon;
  href?: string;
};

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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = (open: boolean) => setOpen(open);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <div className="flex items-center justify-between w-full md:hidden ml-4">
        <TegamiLogo />
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="!size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <a
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={cn(
        "text-muted-foreground hover:text-foreground/80 font-medium text-lg",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
