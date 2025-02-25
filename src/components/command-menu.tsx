import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Layers2, Mail, Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { commandSidenavLinks } from "@/config/data";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "min-w-0 flex items-center sm:mx-12 xl:mx-32 gap-x-2 cursor-pointer transition-colors ease-out relative h-10 lg:h-12 w-full justify-start rounded-full text-base font-medium text-muted-foreground bg-menu-background shadow-none"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="size-4 md:size-6 ml-3 mr-1 text-foreground" />
        <span className="hidden lg:inline-flex">Search on Web...</span>
        <span className="inline-flex lg:hidden">Search...</span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Web Apps, Screens, UI Elements, Flows or keywords..."
          className="text-base"
        />
        <CommandList className="bg-muted/70 px-4 pb-12">
          <ScrollArea className="h-80">
            <div className="flex gap-2 p-2">
              <Button
                variant="outline"
                className={cn(
                  "relative rounded-full font-semibold bg-neutral-700/60 text-primary shadow-none"
                )}
              >
                <Layers2 />
                Dashboard
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "relative rounded-full font-semibold bg-neutral-700/60 text-primary shadow-none"
                )}
              >
                <Mail />
                Emails & Messages
              </Button>
            </div>
            <CommandEmpty>No results found.</CommandEmpty>
            <section className="row-start-3 lg:flex overflow-hidden gap-4">
              <CommandGroup className="hidden w-[240px] shrink-0 flex-col justify-between pb-20 pt-6 lg:flex">
                <div className="flex flex-col items-stretch gap-y-[1px]">
                  {commandSidenavLinks.map((link) => (
                    <CommandItem
                      key={link.href}
                      value={link.title}
                      className="text-base font-semibold first:bg-neutral-700/60 rounded-xl hover:scale-105 transition-transform ease-in-out duration-300"
                    >
                      <link.icon className="text-muted-foreground/70 size-5" />
                      {link.title}
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>

              <div className="col-span-4 md:col-span-2 mt-5 ">
                <p className="text-muted-foreground mb-4 text-sm md:hidden">
                  Trending Apps
                </p>
                <ScrollArea>
                  <div className="flex gap-x-3">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <img
                        key={i}
                        className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                        src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/dbf29a3f-f163-44eb-9525-fa449d2304a9.webp?f=png&w=400&q=85&fit=shrink-cover"
                        width={60}
                        height={60}
                      />
                    ))}
                  </div>
                  <ScrollBar className="h-0" orientation="horizontal" />
                </ScrollArea>
                <div className="mt-4">
                  <p className="text-muted-foreground text-sm">Screens</p>
                  <ScrollArea>
                    <div className="flex gap-x-2 mt-4">
                      {["Signup", "Login", "Home", "Dashboard"].map(
                        (screen) => (
                          <div
                            key={screen}
                            className="group relative aspect-square bg-muted size-[120px] rounded-2xl"
                          >
                            <p className="font-medium text-base p-2 text-primary">
                              {screen}
                            </p>
                            <img
                              src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                              alt={screen}
                              className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                            />
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      {["Signup", "Login", "Home", "Dashboard"].map(
                        (screen) => (
                          <div
                            key={screen}
                            className="group relative aspect-square bg-muted size-[120px] rounded-2xl"
                          >
                            <p className="font-medium text-base p-2 text-primary">
                              {screen}
                            </p>
                            <img
                              src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                              alt={screen}
                              className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                            />
                          </div>
                        )
                      )}
                    </div>
                    <ScrollBar className="h-0" orientation="horizontal" />
                  </ScrollArea>
                </div>
              </div>
            </section>
          </ScrollArea>
        </CommandList>
      </CommandDialog>
    </>
  );
}
