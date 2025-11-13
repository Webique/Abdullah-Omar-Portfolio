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
    <section className="bg-primary text-primary-foreground py-20">
      <div className="layout">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <m.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-foreground/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-4xl font-bold md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {t(`items.${stat.key}` as any)}
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
