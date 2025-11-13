"use client";

import { Award, Camera, Heart, Users } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const t = useTranslations("IndexPage.Stats");

  const stats = [
    {
      icon: Camera,
      number: "500+",
      key: "projects"
    },
    {
      icon: Users,
      number: "200+",
      key: "clients"
    },
    {
      icon: Award,
      number: "50+",
      key: "awards"
    },
    {
      icon: Heart,
      number: "100%",
      key: "satisfaction"
    }
  ];

  return (
    <section className="bg-primary relative overflow-hidden py-16 md:py-20">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        ></div>
      </div>

      <div className="layout relative">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <m.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <m.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A0A0A]/10"
                >
                  <Icon className="h-8 w-8 text-[#0A0A0A]" />
                </m.div>
                <div className="mb-2 text-4xl font-bold text-[#0A0A0A] md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-[#0A0A0A]/80">
                  {t(`items.${stat.key}` as "items.projects") as string}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
