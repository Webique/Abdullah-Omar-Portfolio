"use client";

import { Expand } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const PortfolioSection = () => {
  const t = useTranslations("IndexPage.Portfolio");
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      category: "products",
      image: "/images/صور منتجات/صور لايف ستايل/1.jpg"
    },
    {
      id: 2,
      category: "products",
      image: "/images/صور منتجات/صور لايف ستايل/5.jpg"
    },
    {
      id: 3,
      category: "events",
      image: "/images/صور عامه/تجمعات/2.jpg"
    },
    {
      id: 4,
      category: "events",
      image: "/images/صور عامه/اعراس/LIFELENS (18).jpg"
    },
    {
      id: 5,
      category: "commercial",
      image: "/images/صور ب تصاميم/1.png"
    },
    {
      id: 6,
      category: "products",
      image: "/images/صور منتجات/صور لايف ستايل/c.jpg"
    },
    {
      id: 7,
      category: "events",
      image: "/images/صور عامه/فندق/135A2297.jpg"
    },
    {
      id: 8,
      category: "events",
      image: "/images/صور عامه/اعراس/LIFELENS (35).jpg"
    }
  ];

  const categories = ["all", "products", "events", "commercial"];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="portfolio"
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
          className="mb-12 text-center"
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

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <m.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-6 py-2.5 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-[#0A0A0A] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "border-primary/20 hover:border-primary/40 hover:bg-primary/10 border bg-[#1A1A1A] text-[#F5F5F5]"
              }`}
            >
              {t(`categories.${category}` as "categories.all") as string}
            </m.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <m.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredItems.map((item, index) => (
            <m.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="border-primary/10 hover:border-primary/30 group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              onClick={() => openLightbox(index)}
            >
              <ExportedImage
                src={item.image}
                alt={`Portfolio ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="bg-linear-to-t absolute inset-0 from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Expand Icon */}
              <div className="bg-primary/20 absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Expand className="text-primary h-5 w-5" />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filteredItems.map((item) => ({
          src: item.image,
          alt: `Portfolio ${item.id}`
        }))}
        plugins={[Fullscreen, Zoom, Slideshow, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true
        }}
        slideshow={{
          autoplay: false,
          delay: 3000
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.6)" }
        }}
      />
    </section>
  );
};

export default PortfolioSection;
