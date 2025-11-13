"use client";

import { ArrowRight, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

const CTASection = () => {
  const t = useTranslations("IndexPage.CTA");

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <ExportedImage
          src="/images/صور عامه/استديو/صورة مايك.jpg"
          alt="Call to Action"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="from-background via-background/95 to-background bg-linear-to-r absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="layout relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mb-10 text-xl md:text-2xl">
            {t("subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <m.a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground hover:shadow-primary/30 group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <Phone className="h-6 w-6" />
              {t("primaryButton")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </m.a>

            <m.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-primary text-foreground hover:bg-primary/10 inline-flex items-center gap-3 rounded-full border-2 bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              {t("secondaryButton")}
            </m.a>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default CTASection;
