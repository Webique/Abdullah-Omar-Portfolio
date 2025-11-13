"use client";

import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

const ContactSection = () => {
  const t = useTranslations("IndexPage.Contact");

  const contactMethods = [
    {
      icon: Phone,
      label: t("phone"),
      value: siteConfig.support.phone,
      href: `tel:${siteConfig.support.phone}`
    },
    {
      icon: MessageCircle,
      label: t("whatsapp"),
      value: siteConfig.support.whatsapp,
      href: siteConfig.links.whatsapp
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@abdullah-omar",
      href: siteConfig.links.instagram
    }
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32"
    >
      {/* Top Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute left-0 right-0 top-0 h-1 w-full from-transparent to-transparent"></div>

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
            className="mb-4 inline-block rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-[#D4AF37]">
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

        {/* Contact Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <m.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#1A1A1A] p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#1A1A1A]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Subtle Gold Glow on Hover */}
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
                    <Icon className="h-7 w-7 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Label */}
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#A0A0A0] transition-colors duration-300 group-hover:text-[#D4AF37]">
                    {method.label}
                  </h3>

                  {/* Value */}
                  <p
                    className="text-base font-semibold text-[#F5F5F5] transition-colors duration-300"
                    dir="ltr"
                  >
                    {method.value}
                  </p>

                  {/* Hover Indicator */}
                  <div className="bg-linear-to-r mt-4 h-0.5 w-0 from-transparent via-[#D4AF37] to-transparent transition-all duration-300 group-hover:w-full"></div>
                </div>

                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-[#D4AF37]/5 blur-2xl transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:bg-[#D4AF37]/10"></div>
              </m.a>
            );
          })}
        </div>

        {/* Bottom CTA Text */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#A0A0A0]">
            {t("cta")}{" "}
            <span className="font-semibold text-[#D4AF37]">
              {t("response")}
            </span>
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default ContactSection;
