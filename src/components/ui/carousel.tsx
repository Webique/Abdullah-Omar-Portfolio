"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import * as React from "react";
import { getLangDir } from "rtl-detect";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  dir?: "ltr" | "rtl";
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  dir?: "ltr" | "rtl";
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  dir,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const locale = useLocale();
  const documentDir = getLangDir(locale);

  const direction = dir || documentDir;

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      direction: direction
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  //Dot States
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  //On init for Dots
  const onInit = React.useCallback((api: CarouselApi) => {
    setScrollSnaps(api?.scrollSnapList || []);
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Dot Actions
  const onDotButtonClick = (index: number) => {
    setSelectedIndex(index);

    api?.scrollTo(index);
  };

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        direction === "rtl" ? scrollNext() : scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        direction === "rtl" ? scrollPrev() : scrollNext();
      }
    },
    [scrollPrev, scrollNext, direction]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onInit(api);
    onSelect(api);
    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onInit, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        dir: direction,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
      }}
    >
      <div
        dir={direction}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "gap-4" : "flex-col gap-4",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev, dir } = useCarousel();

  const Icon = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-2 top-1/2 -translate-y-1/2 md:-left-12"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext, dir } = useCarousel();

  const Icon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-2 top-1/2 -translate-y-1/2 md:-right-12"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

const CarouselDot = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "size-3 shrink-0 rounded-full border-none bg-[#D9D9D9] shadow-none hover:bg-[#D9D9D9]",
        orientation === "horizontal" ? "" : "",
        className
      )}
      aria-label="Go to slide"
      {...props}
    ></Button>
  );
});

CarouselDot.displayName = "CarouselDot";

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollSnaps, selectedIndex, onDotButtonClick, api } = useCarousel();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [direction, setDirection] = React.useState<"left" | "right" | null>(
    null
  );
  const scrollToDot = React.useCallback(
    (index: number) => {
      if (!containerRef.current) return;

      const dotAndGapWidth = 32; // dot (16px) + gap (16px)
      const containerWidth = 113; // container width
      const totalWidth = scrollSnaps.length * dotAndGapWidth;
      const centerOffset = (containerWidth - dotAndGapWidth) / 2;

      let scrollAmount =
        (direction === "left" ? index : index - 1) * dotAndGapWidth -
        centerOffset;

      // Clamp the scroll amount
      scrollAmount = Math.max(
        0,
        Math.min(scrollAmount, totalWidth - containerWidth)
      );

      containerRef.current.scrollTo({
        left: scrollAmount + (index < 3 ? 0 : 8),
        behavior: "smooth"
      });
    },
    [direction, scrollSnaps.length]
  );

  React.useEffect(() => {
    if (!api) return;
    scrollToDot(selectedIndex);
  }, [selectedIndex, api, scrollToDot]);

  const previousIndexRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      const previousIndex = previousIndexRef.current;

      if (previousIndex < currentIndex) {
        setDirection("right");
      } else if (previousIndex > currentIndex) {
        setDirection("left");
      }

      previousIndexRef.current = currentIndex;
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-primary/10 mx-auto flex w-fit justify-center gap-1 rounded-full p-2 px-3",
        className
      )}
      role="navigation"
      aria-label="Carousel navigation dots"
      {...props}
    >
      <div ref={containerRef} className="no-scrollbar w-[113px] overflow-auto">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <CarouselDot
              key={index}
              className={`${index === selectedIndex && "bg-secondary hover:bg-secondary dark:bg-primary dark:hover:bg-primary"}`}
              onClick={() => onDotButtonClick(index)}
              aria-current={index === selectedIndex ? "step" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

CarouselDots.displayName = "CarouselDots";

export {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
};
