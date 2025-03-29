import { Clock, Shield, ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
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
  );
}
