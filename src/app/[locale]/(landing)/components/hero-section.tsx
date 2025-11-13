"use client";

import Fade from "embla-carousel-fade";
import { Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  const t = useTranslations("IndexPage.Hero");

  const slides = [
    {
      id: 1,
      image: "/images/صور عامه/استديو/صورة استديديو دارك مود.jpg"
    },
    {
      id: 2,
      image: "/images/صور عامه/اعراس/LIFELENS (39).jpg"
    },
    {
      id: 3,
      image: "/images/صور منتجات/صور لايف ستايل/8-2.jpg"
    },
    {
      id: 4,
      image: "/images/صور عامه/تجمعات/11.jpg"
    }
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      <Carousel
        className="h-full max-w-full overflow-hidden"
        plugins={[
          // Autoplay({
          //   delay: 4000
          // }),
          Fade()
        ]}
        opts={{
          align: "start",
          loop: true,
          duration: 20
        }}
      >
        <CarouselContent className="ms-0 h-screen min-h-[600px] gap-0">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="h-screen min-h-[600px] ps-0"
            >
              <div className="relative h-full w-full">
                <ExportedImage
                  src={slide.image}
                  alt="Abdullah Omar Photography"
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  sizes="100vw"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 z-10 bg-black/60"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Static Content Overlay - Always visible */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="layout">
            <div className="mx-auto max-w-4xl text-center text-white">
              <div className="mx-auto flex flex-col items-center space-y-8">
                {/* Title Animation */}
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl font-bold leading-tight lg:text-7xl"
                >
                  {t("title")}
                </m.h1>

                {/* Subtitle Animation */}
                <m.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="max-w-2xl text-xl leading-relaxed text-gray-100 lg:text-2xl"
                >
                  {t("subtitle")}
                </m.p>

                {/* Call Button Animation */}
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <a
                    className="bg-primary text-primary-foreground hover:shadow-primary/30 flex items-center justify-center gap-3 rounded-full px-10 py-4 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-6 w-6" />
                    <span dir="ltr">{siteConfig.support.whatsapp}</span>
                  </a>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
