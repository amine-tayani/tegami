import { Bookmark, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu";
import { mainNav } from "@/config/data";
import { TegamiLogo } from "./logo";
import UserMenu from "./user-menu";

export default function SiteHeader() {
  return (
    <div className="container-wrapper px-4">
      <div className="container flex h-20 items-center justify-between">
        <div className="mr-4 flex items-center">
          <a href="/" className=" lg:mr-10">
            <TegamiLogo />
          </a>
          <nav className="lg:flex items-center gap-4 text-sm xl:gap-6 hidden ">
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
        <div className="flex justify-center flex-1">
          <CommandMenu />
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-between gap-2 md:justify-end">
          <nav className="flex items-center gap-4">
            <Bookmark />
            <Globe />
            <Button className="relative justify-start text-lg h-10 px-7 bg-blue-500 hover:bg-blue-600 font-medium text-foreground rounded-full shadow-none">
              Get Pro
            </Button>
          </nav>
        </div>
        <UserMenu />
      </div>
    </div>
  );
}
