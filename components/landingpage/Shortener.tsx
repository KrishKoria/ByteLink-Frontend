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
import { Copy, CheckCircle } from "lucide-react";

interface URLShortenerProps {
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

export function URLShortener({
  url,
  setUrl,
  shortUrl,
  setShortUrl,
  isLoading,
  copied,
  shortenUrl,
  copyToClipboard,
}: URLShortenerProps) {
  return (
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
          <a href="#account-benefits" className="text-primary hover:underline">
            Create an account
          </a>{" "}
          (optional)
        </p>
      </CardFooter>
    </Card>
  );
}
