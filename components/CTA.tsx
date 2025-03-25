import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
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
  );
}
