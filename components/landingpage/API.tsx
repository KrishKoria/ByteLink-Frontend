import { Button } from "@/components/ui/button";

export function APISection() {
  return (
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
  );
}
