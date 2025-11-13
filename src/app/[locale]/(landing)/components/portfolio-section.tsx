"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PortfolioSection = () => {
  const t = useTranslations("IndexPage.Portfolio");
  const [activeCategory, setActiveCategory] = useState("all");

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

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="layout">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {t(`categories.${category}` as any)}
            </button>
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
              className="bg-card group relative aspect-square overflow-hidden rounded-xl shadow-lg"
            >
              <ExportedImage
                src={item.image}
                alt={`Portfolio ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="bg-linear-to-t absolute inset-0 from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
