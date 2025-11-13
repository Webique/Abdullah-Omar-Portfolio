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
      <div className="bg-linear-to-r via-primary absolute left-0 right-0 top-0 h-1 w-full from-transparent to-transparent"></div>

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
            className="mb-4 inline-block rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-[#D4AF37]">
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
              className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#1A1A1A] p-8 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              {/* Subtle Gold Glow on Hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
                  <Quote className="h-7 w-7 text-[#D4AF37]" />
                </div>

                {/* Rating */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
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
                <div className="border-t border-[#D4AF37]/10 pt-4">
                  <div className="font-semibold text-[#F5F5F5]">
                    {
                      t(
                        `items.${testimonial.key}.name` as "items.testimonial1.name"
                      ) as string
                    }
                  </div>
                  <div className="text-sm text-[#D4AF37]">
                    {
                      t(
                        `items.${testimonial.key}.role` as "items.testimonial1.role"
                      ) as string
                    }
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-[#D4AF37]/5 blur-2xl transition-all duration-300 group-hover:-translate-y-5 group-hover:translate-x-5 group-hover:bg-[#D4AF37]/10"></div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="bg-linear-to-r via-primary absolute bottom-0 left-0 right-0 h-1 w-full from-transparent to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
