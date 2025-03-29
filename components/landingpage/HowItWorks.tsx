import { Link, ArrowRight, Copy } from "lucide-react";

export function HowItWorksSection() {
  return (
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
  );
}
