import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theming/ToggleSwitch";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link className="h-6 w-6 text-primary" href="/" />
          <span className="text-xl font-bold">ByteLink</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#api"
            className="text-sm hover:text-primary transition-colors"
          >
            API
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/auth/login")}
          >
            Log in
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => router.push("/auth/signup")}
          >
            Sign up
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
