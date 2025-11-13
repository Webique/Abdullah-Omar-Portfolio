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
      category: "wedding"
    },
    {
      id: 2,
      image: "/images/صور منتجات/صور لايف ستايل/8-2.jpg",
      category: "product"
    },
    {
      id: 3,
      image: "/images/صور عامه/تجمعات/11.jpg",
      category: "event"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32">
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

        {/* Featured Works Grid */}
        <div className="space-y-8">
          {featuredWorks.map((work, index) => (
            <m.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`border-primary/10 hover:border-primary/30 group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                index % 2 === 0 ? "lg:mr-20" : "lg:ml-20"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <ExportedImage
                  src={work.image}
                  alt={
                    t(
                      `items.${work.category}.title` as "items.wedding.title"
                    ) as string
                  }
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 90vw"
                />

                {/* Overlay */}
                <div className="bg-linear-to-t absolute inset-0 from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-85"></div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="border-primary/30 bg-primary/20 text-primary mb-3 inline-block rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                      {
                        t(
                          `categories.${work.category}` as "categories.wedding"
                        ) as string
                      }
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F5F5] md:text-4xl">
                      {
                        t(
                          `items.${work.category}.title` as "items.wedding.title"
                        ) as string
                      }
                    </h3>
                  </m.div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default FeaturedWorkSection;
