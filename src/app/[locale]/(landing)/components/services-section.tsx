"use client";

import { Camera, Film, User, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Film,
      key: "reels"
    },
    {
      icon: Camera,
      key: "products"
    },
    {
      icon: Users,
      key: "events"
    },
    {
      icon: User,
      key: "portrait"
    }
  ];

  return (
    <section
      id="services"
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

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.a
                href={`#${service.key}`}
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="border-primary/10 hover:border-primary/30 group relative overflow-hidden rounded-2xl border bg-[#1A1A1A] p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Subtle Gold Glow on Hover */}
                <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-primary h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F5F5F5]">
                    {
                      t(
                        `items.${service.key}.title` as "items.reels.title"
                      ) as string
                    }
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0]">
                    {
                      t(
                        `items.${service.key}.description` as "items.reels.description"
                      ) as string
                    }
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="bg-primary/5 group-hover:bg-primary/10 absolute end-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full blur-2xl transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5"></div>
              </m.a>
            );
          })}
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default ServicesSection;
