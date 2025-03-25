"use client";

import { useState } from "react";
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorks";
import { FeaturesSection } from "@/components/Features";
import { APISection } from "@/components/API";
import { AccountBenefitsSection } from "@/components/AccountBenefits";
import { CTASection } from "@/components/CTA";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const shortenUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);

    // This is a placeholder for the actual API call
    setTimeout(() => {
      setShortUrl(`bytelink.io/${Math.random().toString(36).substring(2, 8)}`);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const urlShortenerProps = {
    url,
    setUrl,
    shortUrl,
    setShortUrl,
    isLoading,
    setIsLoading,
    copied,
    setCopied,
    shortenUrl,
    copyToClipboard,
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection {...urlShortenerProps} />
      <HowItWorksSection />
      <FeaturesSection />
      <APISection />
      <AccountBenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
