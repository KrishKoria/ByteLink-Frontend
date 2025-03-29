import { History, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function AccountBenefitsSection() {
  const router = useRouter();
  return (
    <section
      id="account-benefits"
      className="py-16 md:py-24 bg-muted/50 border-t border-b"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Optional: Save Your Links</h2>
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
                    Track clicks, referrers, and geographic data for each link.
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
              <Button
                variant="outline"
                onClick={() => router.push("/auth/signup")}
              >
                Create Free Account
              </Button>
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
  );
}
