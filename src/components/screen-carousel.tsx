import * as React from "react";
import { Badge } from "./ui/badge";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "./ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function ScreenCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="bg-neutral-800/60 rounded-[28px] select-none cursor-pointer hover:bg-neutral-800 relative group">
            <div className="flex justify-between p-4">
              <Badge className="bg-neutral-700 rounded-lg" variant="secondary">
                New
              </Badge>
              <div className=" invisible group-hover:visible">
                {Array.from({ length: count }).map((_, index) => (
                  <Button
                    key={index}
                    className={cn(
                      "size-1.5 mx-0.5 flex-grow rounded-full p-0",
                      {
                        "bg-primary": index === current - 1,
                        "bg-neutral-600/75": index !== current - 1,
                      }
                    )}
                  />
                ))}
              </div>
            </div>
            <Carousel
              setApi={setApi}
              key={index}
              className="flex items-center justify-center"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="aspect-square transition-colors duration-300 ease-out"
                  >
                    <div className="flex justify-center w-full h-96 items-center px-12">
                      <img
                        className="rounded-xl"
                        src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/11c7fd2a-73dd-45c0-bff5-dd4b0c64ddb7.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover&amp;extend-bottom=120&amp;image=%2Fwatermark%2F1.0%2Ff58f1725-5477-40de-9271-bfac6f2fadfe&amp;gravity=bottom&amp;v=1.0"
                        alt="Gemini screen"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden group-hover:flex absolute left-4 size-12 top-[40%] rounded-full cursor-pointer" />
              <CarouselNext className="hidden group-hover:flex absolute right-4 size-12 top-[40%] rounded-full  cursor-pointer" />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
