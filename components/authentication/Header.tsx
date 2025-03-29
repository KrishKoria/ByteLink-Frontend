import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theming/ToggleSwitch";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <LinkIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ByteLink</span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
