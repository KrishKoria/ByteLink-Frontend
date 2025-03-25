"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Copy,
  Link,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  BarChart3,
  History,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ToggleSwitch";

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

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ByteLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#api"
              className="text-sm hover:text-primary transition-colors"
            >
              API
            </a>
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm" variant="outline">
              Sign up
            </Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with URL Shortener */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Shorten URLs <span className="text-primary">instantly</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              No registration required. Just paste, click, and share.
            </p>
          </div>

          {/* URL Shortener Card - Main Focus */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle>Shorten any URL</CardTitle>
                <CardDescription>
                  Paste your long URL to get started — no login required
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!shortUrl ? (
                  <form onSubmit={shortenUrl} className="space-y-4">
                    <Input
                      type="url"
                      placeholder="https://example.com/very/long/url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full text-base h-12"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 text-base"
                      size="lg"
                    >
                      {isLoading ? "Shortening..." : "Shorten URL"}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-md border bg-muted p-4">
                      <span className="font-medium text-base">{shortUrl}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={copyToClipboard}
                        className="h-10 w-10"
                      >
                        {copied ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setShortUrl("")}
                        className="flex-1 h-12"
                      >
                        Shorten another
                      </Button>
                      <Button onClick={copyToClipboard} className="flex-1 h-12">
                        {copied ? "Copied!" : "Copy to clipboard"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col text-sm text-muted-foreground pt-0">
                <p className="text-center text-xs">
                  Want to save your links?{" "}
                  <a
                    href="#account-benefits"
                    className="text-primary hover:underline"
                  >
                    Create an account
                  </a>{" "}
                  (optional)
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How ByteLink Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ByteLink makes URL shortening simple and fast. No registration
              needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Link className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste Your URL</h3>
              <p className="text-muted-foreground">
                Enter your long URL in the input field above.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Short Link</h3>
              <p className="text-muted-foreground">
                Click shorten and receive your ByteLink instantly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Copy className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Anywhere</h3>
              <p className="text-muted-foreground">
                Copy and share your short URL with anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              No Nonsense URL Shortening
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ByteLink is designed to be simple, fast, and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Shortening</h3>
              <p className="text-muted-foreground">
                Create short URLs in seconds with no registration or login
                required.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
              <p className="text-muted-foreground">
                No personal data collection. We only store the URLs you shorten.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Just Works</h3>
              <p className="text-muted-foreground">
                Simple, reliable redirects with no ads, popups, or waiting
                screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Developer API</h2>
              <p className="text-muted-foreground">
                Need to shorten URLs programmatically? ByteLink offers a simple
                REST API with no authentication required.
              </p>
            </div>
            <div className="bg-black rounded-lg p-4 mb-6">
              <pre className="text-sm text-green-400 overflow-x-auto">
                <code>{`curl -X POST https://api.bytelink.io/shorten \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com/very/long/url/that/needs/shortening"}'`}</code>
              </pre>
            </div>
            <div className="text-center">
              <Button variant="outline">View API Documentation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Account Benefits Section */}
      <section
        id="account-benefits"
        className="py-16 md:py-24 bg-muted/50 border-t border-b"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Optional: Save Your Links
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              While ByteLink works perfectly without an account, creating one
              gives you these additional benefits:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Link History</h3>
                    <p className="text-sm text-muted-foreground">
                      Access all your previously shortened links anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Click Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Track clicks, referrers, and geographic data for each
                      link.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Link Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Edit, deactivate, or delete your links as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button variant="outline">Create Free Account</Button>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative bg-background rounded-lg border shadow-md overflow-hidden">
                <div className="bg-primary/10 p-3 border-b flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium mx-auto">
                    ByteLink Dashboard
                  </div>
                </div>
                <div className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="ByteLink Dashboard Preview"
                    width={500}
                    height={300}
                    className="rounded border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Focus on Immediate Use */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Shortening URLs Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            No registration required. Just paste your URL and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Shorten a URL
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Link className="h-5 w-5 text-primary" />
                <span className="font-bold">ByteLink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Simple, fast URL shortening for everyone.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ByteLink. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
