"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const TestimonialsSection = () => {
  const t = useTranslations("IndexPage.Testimonials");

  const testimonials = [
    {
      id: 1,
      key: "testimonial1",
      rating: 5
    },
    {
      id: 2,
      key: "testimonial2",
      rating: 5
    },
    {
      id: 3,
      key: "testimonial3",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card relative rounded-2xl p-8 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Quote className="text-primary h-6 w-6" />
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="fill-primary text-primary h-5 w-5" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">
                {t(`items.${testimonial.key}.content` as any)}
              </p>

              {/* Author */}
              <div className="border-border border-t pt-4">
                <div className="text-foreground font-semibold">
                  {t(`items.${testimonial.key}.name` as any)}
                </div>
                <div className="text-muted-foreground text-sm">
                  {t(`items.${testimonial.key}.role` as any)}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
