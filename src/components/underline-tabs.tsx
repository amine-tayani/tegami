import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UnderlineTabs() {
  const tabs = [
    {
      title: "Apps",
      content: "Content for Apps",
    },
    {
      title: "Screens",
      content: "Content for Screens",
    },
    {
      title: "Marketing Pages",
      content: "Content for Marketing Pages",
    },
    {
      title: "UI Elements",
      content: "Content for UI Elements",
    },
    {
      title: "Flows",
      content: "Content for Flows",
    },
  ];

  return (
    <Tabs defaultValue="Apps">
      <TabsList className="h-auto rounded-none bg-transparent p-0">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.title}
            className="data-[state=active]:after:bg-primary text-base relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.title}>
          <p className="text-muted-foreground p-4 text-center text-xs">
            {tab.content}
          </p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
