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
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32">
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

        {/* Process Steps */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connection Line */}
          <div className="bg-linear-to-r via-primary/30 absolute inset-x-0 top-16 hidden h-px from-transparent to-transparent lg:block"></div>

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
                <div className="border-primary/10 hover:border-primary/30 group relative rounded-2xl border bg-[#1A1A1A] p-8 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  {/* Number Badge */}
                  <div className="border-primary text-primary absolute -top-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-[#0A0A0A] text-xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 mt-4 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-primary h-10 w-10" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-[#F5F5F5]">
                    {
                      t(
                        `steps.${step.key}.title` as "steps.consultation.title"
                      ) as string
                    }
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0]">
                    {
                      t(
                        `steps.${step.key}.description` as "steps.consultation.description"
                      ) as string
                    }
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default ProcessSection;
