import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 pl-1 mb-2"
      onClick={() => router.push("/")}
    >
      <ArrowLeft className="h-4 w-4" />
      Back to home
    </Button>
  );
}
