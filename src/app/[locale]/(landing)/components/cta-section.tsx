"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

const CTASection = () => {
  const t = useTranslations("IndexPage.CTA");

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32">
      {/* Top Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 top-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <ExportedImage
            src="/images/cta.jpg"
            alt="Call to Action"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0A0A]/85"></div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-transparent to-transparent"></div>
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
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/20 bg-primary/10 mb-6 inline-block rounded-full border px-4 py-1.5"
          >
            <span className="text-primary text-sm font-medium">
              {t("badge")}
            </span>
          </m.div>

          <h2 className="mb-6 text-4xl font-bold text-[#F5F5F5] md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mb-10 text-xl text-[#A0A0A0] md:text-2xl">
            {t("subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <m.a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-[#0A0A0A] shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#E5C158] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <MessageCircle className="h-6 w-6" />
              {t("primaryButton")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </m.a>

            <m.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-primary hover:bg-primary/10 group inline-flex items-center gap-3 rounded-full border-2 bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] transition-all duration-300"
            >
              {t("secondaryButton")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </m.a>
          </div>
        </m.div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default CTASection;
