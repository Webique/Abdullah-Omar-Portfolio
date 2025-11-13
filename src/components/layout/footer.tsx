"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Instagram from "@/assets/icons/instagram.svg";
import TickTock from "@/assets/icons/tiktok.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("portfolio"), href: "#portfolio" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" },
    { label: t("development"), href: "#services" },
    { label: t("consulting"), href: "#services" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: siteConfig.links.instagram,
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: TickTock,
      href: siteConfig.links.tiktok,
      label: "TikTok",
      color: "hover:text-white"
    }
  ];

  return (
    <footer className="bg-secondary relative">
      <div className="via-primary bg-linear-to-r h-1 w-full from-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-transparent to-transparent"></div>
      </div>

      <div className="layout relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Logo
              src="/images/logos/2.jpeg"
              className="mb-6"
              imgClassName="w-32 sm:w-36"
            />

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {t("companyDescription")}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <m.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "border-border bg-card hover:border-primary group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 hover:shadow-lg",
                      social.color
                    )}
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                  </m.a>
                );
              })}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center text-sm transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center text-sm transition-colors"
                  >
                    <span className="relative">
                      {service.label}
                      <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-center gap-3 transition-colors"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Phone className="text-primary h-4 w-4" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("phone")}
                  </div>
                  <div
                    className="text-foreground text-sm font-medium"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-center gap-3 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Mail className="text-primary h-4 w-4" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("email")}
                  </div>
                  <div className="text-foreground text-sm font-medium">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="text-primary h-4 w-4" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("location")}
                  </div>
                  <div className="text-foreground text-sm font-medium">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-border mt-12 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-muted-foreground text-sm">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>{t("available24_7")}</span>
            </div>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
