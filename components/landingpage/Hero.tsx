import { useState } from "react";
import { ErrorAlert } from "../miscellanous/ErrorAlert";
import { URLShortener } from "./Shortener";
export function HeroSection() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleError = (error: Error) => {
    setError(error);
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
    copyToClipboard,
    onError: handleError,
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          {error && <ErrorAlert error={error.message} />}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Shorten URLs <span className="text-primary">instantly</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            No registration required. Just paste, click, and share.
          </p>
        </div>

        {/* URL Shortener Card - Main Focus */}
        <div className="max-w-2xl mx-auto">
          <URLShortener {...urlShortenerProps} />
        </div>
      </div>
    </section>
  );
}
