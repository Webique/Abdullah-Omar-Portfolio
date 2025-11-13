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

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="border-primary/10 hover:border-primary/30 group relative overflow-hidden rounded-2xl border bg-[#1A1A1A] p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              {/* Subtle Gold Glow on Hover */}
              <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <Quote className="text-primary h-7 w-7" />
                </div>

                {/* Rating */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-5 w-5"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="mb-6 leading-relaxed text-[#A0A0A0]">
                  &ldquo;
                  {
                    t(
                      `items.${testimonial.key}.content` as "items.testimonial1.content"
                    ) as string
                  }
                  &rdquo;
                </p>

                {/* Author Info */}
                <div className="border-primary/10 border-t pt-4">
                  <div className="font-semibold text-[#F5F5F5]">
                    {
                      t(
                        `items.${testimonial.key}.name` as "items.testimonial1.name"
                      ) as string
                    }
                  </div>
                  <div className="text-primary text-sm">
                    {
                      t(
                        `items.${testimonial.key}.role` as "items.testimonial1.role"
                      ) as string
                    }
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="bg-primary/5 group-hover:bg-primary/10 absolute end-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full blur-2xl transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5"></div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute inset-x-0 bottom-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
