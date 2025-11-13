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
      <div className="bg-linear-to-r via-primary absolute left-0 right-0 top-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <ExportedImage
            src="/images/صور عامه/استديو/صورة مايك.jpg"
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
            className="mb-6 inline-block rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-[#D4AF37]">
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
              className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#0A0A0A] shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#E5C158] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <MessageCircle className="h-6 w-6" />
              {t("primaryButton")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </m.a>

            <m.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] transition-all duration-300 hover:bg-[#D4AF37]/10"
            >
              {t("secondaryButton")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </m.a>
          </div>
        </m.div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute bottom-0 left-0 right-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default CTASection;
