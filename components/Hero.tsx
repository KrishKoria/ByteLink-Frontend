import { URLShortener } from "./Shortener";

interface HeroSectionProps {
  url: string;
  setUrl: (url: string) => void;
  shortUrl: string;
  setShortUrl: (url: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  copied: boolean;
  setCopied: (copied: boolean) => void;
  shortenUrl: (e: React.FormEvent) => Promise<void>;
  copyToClipboard: () => void;
}

export function HeroSection(props: HeroSectionProps) {
  return (
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
          <URLShortener {...props} />
        </div>
      </div>
    </section>
  );
}
