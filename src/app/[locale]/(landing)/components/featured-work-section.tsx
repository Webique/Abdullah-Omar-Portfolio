"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const FeaturedWorkSection = () => {
  const t = useTranslations("IndexPage.FeaturedWork");

  const featuredWorks = [
    {
      id: 1,
      image: "/images/صور عامه/اعراس/LIFELENS (39).jpg",
      category: "wedding",
      title: "Wedding Photography"
    },
    {
      id: 2,
      image: "/images/صور منتجات/صور لايف ستايل/8-2.jpg",
      category: "product",
      title: "Product Lifestyle"
    },
    {
      id: 3,
      image: "/images/صور عامه/تجمعات/11.jpg",
      category: "event",
      title: "Corporate Event"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="layout">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="space-y-8">
          {featuredWorks.map((work, index) => (
            <m.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl ${
                index % 2 === 0 ? "lg:mr-20" : "lg:ml-20"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <ExportedImage
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 90vw"
                />
                {/* Overlay */}
                <div className="bg-linear-to-t absolute inset-0 from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-12">
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="bg-primary/90 text-primary-foreground mb-3 inline-block rounded-full px-4 py-1 text-sm font-medium">
                      {t(`categories.${work.category}` as any)}
                    </div>
                    <h3 className="text-2xl font-bold md:text-4xl">
                      {work.title}
                    </h3>
                  </m.div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
