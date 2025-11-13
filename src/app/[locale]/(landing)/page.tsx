import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import CTASection from "./components/cta-section";
import FeaturedWorkSection from "./components/featured-work-section";
import HeroSection from "./components/hero-section";
import PortfolioSection from "./components/portfolio-section";
import ProcessSection from "./components/process-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import TestimonialsSection from "./components/testimonials-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedWorkSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
