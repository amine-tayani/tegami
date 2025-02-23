import { mainNav, MobileNav } from "./components/mobile-nav";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { CommandMenu } from "./components/command-menu";
import { Bookmark, Globe } from "lucide-react";

export default function App() {
  return (
    <div className="px-6 py-4">
      <header className=" sticky rounded-xl top-0 z-50 w-full bg-main-background">
        <div className="container-wrapper px-4">
          <div className="container flex h-20 items-center justify-between">
            <div className="mr-4 hidden md:flex">
              <a href="/" className="mr-6 flex items-center gap-2 lg:mr-10">
                <TegamiLogo />
              </a>
              <nav className="flex items-center gap-4 text-sm xl:gap-6">
                {mainNav.map((screen) => (
                  <a
                    href={`/${screen.href}`}
                    className={cn(
                      "last:last-of-type:text-foreground transition-colors text-base font-medium hover:text-foreground text-foreground/80"
                    )}
                  >
                    {screen.title}
                  </a>
                ))}
              </nav>
            </div>
            <MobileNav />
            <div className="flex justify-center flex-1">
              <CommandMenu />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
              <nav className="flex items-center gap-4">
                <Bookmark />
                <Globe />
                <Button className="relative justify-start text-lg h-10 px-7 bg-blue-500 hover:bg-blue-600 font-medium text-foreground rounded-full shadow-none">
                  Get Pro
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export const TegamiLogo = () => {
  return (
    <svg
      width="128"
      height="60"
      viewBox="0 0 128 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none h-20 w-[43px] fill-foreground"
    >
      <path d="M128 28H96V60H128V28Z"></path>
      <path d="M0 59.9998V31.8268L31.8268 0H59.9998V28.1731L28.1731 59.9998H0Z"></path>
      <path d="M48 59.9998V31.8268L79.8268 0H108V28.1731L76.1731 59.9998H48Z"></path>
    </svg>
  );
};
