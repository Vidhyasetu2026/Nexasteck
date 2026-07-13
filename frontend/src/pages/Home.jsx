import React from "react";
import Hero from "../components/sections/Hero";
import LogosMarquee from "../components/sections/LogosMarquee";
import ServicesPreview from "../components/sections/ServicesPreview";
import TechStack from "../components/sections/TechStack";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/shared/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Nexasteck — Premium Web & App Development Agency"
        description="We design and build premium websites, mobile apps, and SaaS products using React, Node.js, Flutter, and AI."
      />
      <Hero />
      <LogosMarquee />
      <ServicesPreview />
      <TechStack />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
