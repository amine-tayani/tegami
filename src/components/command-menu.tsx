import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Layers2, Search } from "lucide-react";
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
          "relative h-10 lg:h-14 w-full justify-start rounded-full text-base font-medium text-muted-foreground bg-neutral-700 shadow-none md:w-60 lg:w-72 xl:w-[460px]"
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
          <div className="flex gap-2 p-2">
            <Button
              variant="outline"
              className={cn(
                "relative rounded-full font-medium bg-neutral-700/60 text-primary shadow-none"
              )}
            >
              <Layers2 />
              Dashboard
            </Button>
            <Button
              variant="outline"
              className={cn(
                "relative rounded-full font-medium bg-neutral-700/60 text-primary shadow-none"
              )}
            >
              <Layers2 />
              Emails & Messages
            </Button>
          </div>
          <CommandEmpty>No results found.</CommandEmpty>
          <div className="grid grid-cols-3">
            <CommandGroup className="w-60 md:w-52 font-semibold mt-3 hidden md:block">
              {commandSidenavLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  value={link.title}
                  className="text-base first:bg-neutral-700/60 rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                >
                  <link.icon className="text-muted-foreground size-5" />
                  {link.title}
                </CommandItem>
              ))}
            </CommandGroup>

            <div className="col-span-4 md:col-span-2 mt-5 ">
              <p className="text-muted-foreground mb-4 text-sm md:hidden">
                Trending Apps
              </p>
              <div className="flex gap-3 overflow-x-auto">
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/dbf29a3f-f163-44eb-9525-fa449d2304a9.webp?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/81f30ae0-45d4-492c-b414-318374ec0dd3.png?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/3b29e078-e049-4b1c-a110-af7a81e66d25.webp?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/67e3e060-624b-4b4b-b5df-355cfd0e2556.png?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/67e3e060-624b-4b4b-b5df-355cfd0e2556.png?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/67e3e060-624b-4b4b-b5df-355cfd0e2556.png?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
                <img
                  className="rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300"
                  src="https://bytescale.mobbin.com/FW25bBB/image/content/app_logos/67e3e060-624b-4b4b-b5df-355cfd0e2556.png?f=png&w=400&q=85&fit=shrink-cover"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm">Screens</p>
                <div className="flex overflow-x-auto gap-x-2 mt-4">
                  <div className="group relative aspect-square bg-muted size-[120px] rounded-2xl">
                    <p className="font-medium text-base p-2 text-primary">
                      Signup
                    </p>
                    <img
                      src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                      alt="Signup"
                      className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                    />
                  </div>
                  <div className="group relative aspect-square bg-muted size-[120px] rounded-2xl">
                    <p className="font-medium text-base p-2 text-primary">
                      Login
                    </p>
                    <img
                      src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                      alt="Login"
                      className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                    />
                  </div>
                  <div className="group relative aspect-square bg-muted size-[120px] rounded-2xl">
                    <p className="font-medium text-base p-2 text-primary">
                      Home
                    </p>
                    <img
                      src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                      alt="Home"
                      className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                    />
                  </div>
                  <div className="group relative aspect-square bg-muted size-[120px] rounded-2xl">
                    <p className="font-medium text-base p-2 text-primary">
                      Dashboard
                    </p>
                    <img
                      src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/static/dictionary/web_screen_patterns/signup_01.png"
                      alt="Dashboard"
                      className="absolute max-w-none rounded-lg right-0 top-[40%] w-28 group-hover:-translate-y-1  ease-in-out duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
}
