import useCommandStore from "@/store";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight, Settings2 } from "lucide-react";
import { filterCategories, tabs } from "@/config/data";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";

export default function UnderlineTabs() {
  const setIsCommandMenuOpen = useCommandStore(
    (state) => state.setIsCommandMenuOpen
  );

  return (
    <Tabs defaultValue="Apps">
      <TabsList className="h-auto gap-x-3 rounded-none bg-transparent p-0">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.title}
            className="data-[state=active]:after:bg-primary cursor-pointer hover:text-primary text-base relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.title}>
          <div className="relative min-w-0">
            <div className="relative flex items-center">
              <ScrollArea className="w-full">
                <div className="flex w-fit gap-x-2 mt-4">
                  <div className="flex">
                    <Button
                      onClick={() => setIsCommandMenuOpen(true)}
                      variant="secondary"
                      className="text-base rounded-full mr-3 h-12 font-semibold w-28"
                    >
                      <Settings2
                        className="text-muted-foreground size-6"
                        aria-hidden="true"
                      />
                      Filter
                    </Button>
                    <Separator
                      orientation="vertical"
                      className="mr-2 !h-8 self-center"
                    />
                  </div>

                  {filterCategories.map((category) => (
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button
                          key={category.title}
                          className={cn(
                            "h-12 rounded-full px-4 cursor-pointer text-base font-medium",
                            "border border-muted-foreground/30 bg-transparent text-primary",
                            "hover:bg-muted hover:text-primary transition-colors ease-in-out"
                          )}
                        >
                          <span className="truncate">{category.title}</span>
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="border-none flex flex-col gap-5 rounded-xl p-4 shadow-xl bg-[#2c2c2c]  w-[400px] mt-2">
                        <div className="grid grid-flow-col gap-3">
                          <div className="p-3 rounded-xl bg-neutral-800">
                            <img
                              className=" border-0 object-cover rounded-2xl"
                              src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/992dd1ac-0a8d-4fe5-91ff-27b0d600365d.png?f=webp&w=1920&q=85&fit=shrink-cover"
                              alt="Avatar"
                            />
                          </div>
                          <div className="p-3 rounded-xl bg-neutral-800">
                            <img
                              className=" border-0 object-cover rounded-2xl"
                              src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/992dd1ac-0a8d-4fe5-91ff-27b0d600365d.png?f=webp&w=1920&q=85&fit=shrink-cover"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground/80 text-sm">
                          {category.description}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <ScrollBar className="h-0" orientation="horizontal" />
              </ScrollArea>
              <Button
                variant="ghost"
                size="icon"
                className="hidden lg:flex flex-none rounded-full mt-3 ml-3"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
