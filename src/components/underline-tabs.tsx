import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { filterCategories, tabs } from "@/config/data";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ArrowRight } from "lucide-react";

export default function UnderlineTabs() {
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
                  {filterCategories.map((category) => (
                    <Button
                      key={category}
                      className={cn(
                        "h-12 rounded-full px-4 cursor-pointer text-base font-medium",
                        "border border-muted-foreground/30 bg-transparent text-primary",
                        "hover:bg-muted hover:text-primary transition-colors ease-in-out"
                      )}
                    >
                      <span className="truncate">{category}</span>
                    </Button>
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
