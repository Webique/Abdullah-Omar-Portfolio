"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { getLangDir } from "rtl-detect";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const t = useTranslations("IndexPage.Partners");
  const locale = useLocale();
  const dir = getLangDir(locale);
  const autoScrollRef = useRef<any>(null);

  const partners = [
    { src: "/images/partners/1.png", width: 80, height: 80 },
    { src: "/images/partners/2.jpg", width: 80, height: 80 },
    { src: "/images/partners/3.jpg", width: 80, height: 80 },
    { src: "/images/partners/4.jpg", width: 50, height: 50 },
    { src: "/images/partners/5.jpg", width: 80, height: 80 },
    { src: "/images/partners/6.png", width: 80, height: 80 },
    { src: "/images/partners/7.jpg", width: 80, height: 80 },
    { src: "/images/partners/8.jpg", width: 80, height: 80 },
    { src: "/images/partners/9.jpg", width: 80, height: 80 },
    { src: "/images/partners/6.jpg", width: 80, height: 80 },
    { src: "/images/partners/10.jpg", width: 80, height: 80 },
    { src: "/images/partners/11.jpg", width: 80, height: 80 },
    { src: "/images/partners/12.jpg", width: 80, height: 80 },
    { src: "/images/partners/13.jpg", width: 80, height: 80 },
    { src: "/images/partners/14.jpg", width: 80, height: 80 },
    { src: "/images/partners/15.jpg", width: 80, height: 80 }
  ];

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32"
    >
      {/* Top Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 top-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-transparent to-transparent"></div>
      </div>

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/20 bg-primary/10 mb-4 inline-block rounded-full border px-4 py-1.5"
          >
            <span className="text-primary text-sm font-medium">
              {t("badge")}
            </span>
          </m.div>
          <h2 className="mb-4 text-4xl font-bold text-[#F5F5F5] md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#A0A0A0] md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Partners Carousel */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => autoScrollRef.current?.stop()}
          onMouseLeave={() => autoScrollRef.current?.play()}
        >
          <Carousel
            dir={dir === "rtl" ? "rtl" : "ltr"}
            opts={{
              align: "start",
              loop: true,
              watchDrag: false
            }}
            plugins={[
              AutoScroll({
                speed: 1.5,
                direction: "backward"
              })
            ]}
            className="max-w-full overflow-hidden"
          >
            <CarouselContent>
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-auto items-center px-2 ps-3"
                >
                  <ExportedImage
                    src={partner.src}
                    alt={`Partner ${index + 1}`}
                    width={partner.width}
                    height={partner.height}
                    placeholder="empty"
                    className="h-auto w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </m.div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default PartnersSection;
