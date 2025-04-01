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
import { shortenUrlAction } from "@/actions/shorten";

interface URLShortenerProps {
  url: string;
  setUrl: (url: string) => void;
  shortUrl: string;
  setShortUrl: (url: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  copied: boolean;
  setCopied: (copied: boolean) => void;
  copyToClipboard: () => void;
  onError: (error: Error) => void;
}

export function URLShortener({
  url,
  setUrl,
  shortUrl,
  setShortUrl,
  isLoading,
  setIsLoading,
  copied,
  copyToClipboard,
  onError,
}: URLShortenerProps) {
  async function handleShortenUrl(formData: FormData) {
    setIsLoading(true);
    try {
      const result = await shortenUrlAction(formData);
      setShortUrl(result);
    } catch (error) {
      onError(
        error instanceof Error ? error : new Error("Failed to shorten URL")
      );
    } finally {
      setIsLoading(false);
    }
  }
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
          <form action={handleShortenUrl} className="space-y-4">
            <Input
              type="url"
              name="url"
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
