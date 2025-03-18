/* eslint-disable react-hooks/exhaustive-deps */
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
  const [visibleCards, setVisibleCards] = React.useState(12);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const MAX_CARDS = 240;

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [carouselStates, setCarouselStates] = React.useState<
    Record<
      number,
      {
        api: CarouselApi | null;
        current: number;
        count: number;
      }
    >
  >({});

  React.useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading) {
          loadMoreCards();
        }
      },
      { threshold: 0.5 }
    );

    const loadingElement = document.getElementById("loading-spinner");
    if (loadingElement) {
      observer.observe(loadingElement);
    }

    return () => {
      if (loadingElement) {
        observer.unobserve(loadingElement);
      }
    };
  }, [isLoading, hasMore]);

  const loadMoreCards = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      const newTotal = Math.min(visibleCards + 12, MAX_CARDS);
      setVisibleCards(newTotal);
      setIsLoading(false);

      if (newTotal >= MAX_CARDS) {
        setHasMore(false);
      }
    }, 1500);
  };

  const handleCarouselApi = (index: number) => (api: CarouselApi | null) => {
    if (!api) return;

    setCarouselStates((prev) => ({
      ...prev,
      [index]: {
        api,
        current: api.selectedScrollSnap() + 1,
        count: api.scrollSnapList().length,
      },
    }));

    api.on("select", () => {
      setCarouselStates((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          current: api.selectedScrollSnap() + 1,
        },
      }));
    });
  };

  const cards = React.useMemo(() => {
    return Array.from({ length: visibleCards }).map((_, index) => index);
  }, [visibleCards]);

  return (
    <div ref={containerRef} className="flex flex-1 flex-col gap-4 py-4">
      <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((index) => (
          <div
            key={index}
            className="bg-neutral-800/60 rounded-[28px] select-none cursor-pointer hover:bg-neutral-800 relative group"
          >
            <div className="flex justify-between p-4">
              <Badge className="bg-neutral-700 rounded-lg" variant="secondary">
                New
              </Badge>
              <div className="invisible group-hover:visible">
                {Array.from({ length: carouselStates[index]?.count || 5 }).map(
                  (_, i) => (
                    <Button
                      key={i}
                      className={cn(
                        "size-1.5 mx-0.5 flex-grow rounded-full p-0",
                        {
                          "bg-primary":
                            i === (carouselStates[index]?.current || 1) - 1,
                          "bg-neutral-600/75":
                            i !== (carouselStates[index]?.current || 1) - 1,
                        }
                      )}
                    />
                  )
                )}
              </div>
            </div>
            <Carousel
              setApi={handleCarouselApi(index)}
              className="flex items-center justify-center overflow-hidden"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, imageIndex) => (
                  <CarouselItem
                    key={imageIndex}
                    className="aspect-square transition-colors duration-300 ease-out"
                  >
                    <div className="flex justify-center w-full h-96 items-center px-12">
                      <img
                        className="rounded-xl"
                        src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/11c7fd2a-73dd-45c0-bff5-dd4b0c64ddb7.png?f=webp&amp;w=1920&amp;q=85&amp;fit=shrink-cover&amp;extend-bottom=120&amp;image=%2Fwatermark%2F1.0%2Ff58f1725-5477-40de-9271-bfac6f2fadfe&amp;gravity=bottom&amp;v=1.0"
                        alt={`Screen ${imageIndex + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden group-hover:flex absolute left-4 size-12 top-[40%] rounded-full cursor-pointer" />
              <CarouselNext className="hidden group-hover:flex absolute right-4 size-12 top-[40%] rounded-full cursor-pointer" />
            </Carousel>
          </div>
        ))}
      </div>

      {hasMore && (
        <div
          id="loading-spinner"
          className="w-full flex justify-center items-center py-8"
        >
          {isLoading ? (
            <div className="flex space-x-2 justify-center items-center">
              <span className="sr-only">Loading...</span>
              <div className="size-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="size-2 bg-muted-foreground/80 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="size-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
            </div>
          ) : (
            <div className="h-8" />
          )}
        </div>
      )}

      {!hasMore && (
        <div className="w-full text-center py-8 text-neutral-400">
          You've reached the end
        </div>
      )}
    </div>
  );
}
