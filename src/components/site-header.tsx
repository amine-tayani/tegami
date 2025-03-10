import { Bookmark, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import UserMenu from "./user-menu";
import { CommandMenu } from "./command-menu";
import { TegamiLogo } from "./logo";
import { mainNav } from "@/config/data";
import { Link, useLocation } from "@tanstack/react-router";

export default function SiteHeader() {
  const location = useLocation();
  return (
    <div className="container-wrapper px-4 fixed top-0 inset-x-0 z-50">
      <div className="container flex h-20 items-center justify-between bg-main-background">
        <div className="mr-4 flex items-center">
          <Link to="/" className="lg:mr-10">
            <TegamiLogo />
          </Link>
          <nav className="lg:flex items-center gap-4 text-sm xl:gap-6 hidden ">
            {mainNav.map((screen) => (
              <Link
                key={screen.title}
                to={"/" + screen.href}
                className={cn(
                  "transition-colors text-base font-medium hover:text-primary",
                  location.pathname === screen.href
                    ? "text-foreground underline decoration-2 underline-offset-4"
                    : "text-foreground/70"
                )}
              >
                {screen.title}
              </Link>
            ))}
          </nav>
        </div>
        <CommandMenu />
        <div className="hidden lg:flex flex-1 items-center justify-between gap-2 md:justify-end">
          <nav className="flex items-center gap-x-8">
            <Bookmark />
            <Globe />
            <Button className="relative justify-start px-3 mr-3 bg-blue-500 hover:bg-blue-600 font-semibold text-foreground rounded-full shadow-none">
              Get Pro
            </Button>
          </nav>
        </div>
        <UserMenu />
      </div>
    </div>
  );
}
