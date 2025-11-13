"use client";

import { Camera, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const ProcessSection = () => {
  const t = useTranslations("IndexPage.Process");

  const steps = [
    {
      icon: MessageSquare,
      key: "consultation",
      number: "01"
    },
    {
      icon: CheckCircle2,
      key: "planning",
      number: "02"
    },
    {
      icon: Camera,
      key: "shooting",
      number: "03"
    },
    {
      icon: Sparkles,
      key: "delivery",
      number: "04"
    }
  ];

  return (
    <section className="bg-muted/30 py-20 md:py-32">
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

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connection Line */}
          <div className="via-primary/20 bg-linear-to-r absolute left-0 right-0 top-16 hidden h-0.5 from-transparent to-transparent lg:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <m.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card relative rounded-2xl p-8 text-center shadow-lg">
                  {/* Number Badge */}
                  <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-primary/10 mx-auto mb-6 mt-4 flex h-20 w-20 items-center justify-center rounded-full">
                    <Icon className="text-primary h-10 w-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground mb-3 text-xl font-bold">
                    {t(`steps.${step.key}.title` as any)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {t(`steps.${step.key}.description` as any)}
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

export default ProcessSection;
