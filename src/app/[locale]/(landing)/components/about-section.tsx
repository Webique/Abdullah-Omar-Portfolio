"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("IndexPage.About");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32"
    >
      {/* Top Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 top-0 h-1 w-full from-transparent to-transparent"></div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-transparent to-transparent"></div>
      </div>

      <div className="layout relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 border-primary/20 relative overflow-hidden rounded-2xl border">
              <ExportedImage
                src="/images/صور عامه/استديو/صورة استديديو دارك مود.jpg"
                alt="Abdullah Omar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="border-primary/20 absolute -bottom-6 -end-6 -z-10 h-full w-full rounded-2xl border-2"></div>
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-primary/20 bg-primary/10 inline-block rounded-full border px-4 py-1.5"
            >
              <span className="text-primary text-sm font-medium">
                {t("title")}
              </span>
            </m.div>

            <h2 className="text-4xl font-bold text-[#F5F5F5] md:text-5xl">
              {t("title")}
            </h2>

            <p className="text-lg leading-relaxed text-[#A0A0A0] md:text-xl">
              {t("description")}
            </p>

            <blockquote className="border-primary relative border-s-4 bg-[#1A1A1A] py-6 ps-6 italic text-[#F5F5F5]">
              <div className="text-primary absolute start-3 top-1 text-4xl opacity-50">
                &ldquo;
              </div>
              {t("quote")}
              <div className="text-primary absolute -bottom-2 end-2 text-4xl opacity-50">
                &rdquo;
              </div>
            </blockquote>
          </m.div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute bottom-0 end-0 start-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default AboutSection;
