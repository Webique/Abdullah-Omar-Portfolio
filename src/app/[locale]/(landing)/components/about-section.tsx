"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("IndexPage.About");

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="layout">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 relative overflow-hidden rounded-2xl">
              <ExportedImage
                src="/images/user.png"
                alt="Abdullah Omar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="border-primary/20 absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-2"></div>
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-foreground text-4xl font-bold md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              {t("description")}
            </p>
            <blockquote className="border-primary bg-card text-foreground border-s-4 py-4 ps-6 italic">
              {t("quote")}
            </blockquote>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
