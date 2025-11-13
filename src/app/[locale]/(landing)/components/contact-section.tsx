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
      href: `tel:${siteConfig.support.phone}`,
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      label: t("whatsapp"),
      value: siteConfig.support.whatsapp,
      href: siteConfig.links.whatsapp,
      color: "text-green-500"
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`,
      color: "text-red-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@abdullah-omar",
      href: siteConfig.links.instagram,
      color: "text-pink-500"
    }
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-32">
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

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Background Gradient */}
                <div className="from-primary/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative flex items-center gap-6">
                  {/* Icon */}
                  <div
                    className={`bg-primary/10 group-hover:bg-primary/20 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl transition-colors duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${method.color}`} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-muted-foreground mb-1 text-sm font-medium">
                      {method.label}
                    </h3>
                    <p
                      className="text-foreground truncate text-lg font-semibold"
                      dir="ltr"
                    >
                      {method.value}
                    </p>
                  </div>
                </div>
              </m.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
