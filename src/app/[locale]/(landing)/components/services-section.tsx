"use client";

import { Camera, Film, User, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Film,
      key: "reels",
      emoji: "🎬"
    },
    {
      icon: Camera,
      key: "products",
      emoji: "📦"
    },
    {
      icon: Users,
      key: "events",
      emoji: "🎤"
    },
    {
      icon: User,
      key: "portrait",
      emoji: "👤"
    }
  ];

  return (
    <section id="services" className="bg-muted/30 py-20 md:py-32">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Background Gradient */}
                <div className="from-primary/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-16 w-16 items-center justify-center rounded-xl text-4xl transition-colors duration-300">
                    {service.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground text-xl font-bold">
                    {t(`items.${service.key}.title` as any)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {t(`items.${service.key}.description` as any)}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
