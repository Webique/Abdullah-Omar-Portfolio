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
                className="border-primary/10 hover:border-primary/30 group relative overflow-hidden rounded-2xl border bg-[#1A1A1A] p-6 transition-all duration-300 hover:bg-[#1A1A1A]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Subtle Gold Glow on Hover */}
                <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-primary h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Label */}
                  <h3 className="group-hover:text-primary mb-2 text-sm font-medium uppercase tracking-wider text-[#A0A0A0] transition-colors duration-300">
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
                  <div className="bg-linear-to-r via-primary mt-4 h-0.5 w-0 from-transparent to-transparent transition-all duration-300 group-hover:w-full"></div>
                </div>

                {/* Corner Accent */}
                <div className="bg-primary/5 group-hover:bg-primary/10 absolute end-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full blur-2xl transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5"></div>
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
            <span className="text-primary font-semibold">{t("response")}</span>
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default ContactSection;
