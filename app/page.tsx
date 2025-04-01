"use client";

import { AccountBenefitsSection } from "@/components/landingpage/AccountBenefits";
import { APISection } from "@/components/landingpage/API";
import { CTASection } from "@/components/landingpage/CTA";
import { FeaturesSection } from "@/components/landingpage/Features";
import { Footer } from "@/components/landingpage/Footer";
import { Header } from "@/components/landingpage/Header";
import { HeroSection } from "@/components/landingpage/Hero";
import { HowItWorksSection } from "@/components/landingpage/HowItWorks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <APISection />
      <AccountBenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
