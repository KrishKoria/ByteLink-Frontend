import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialAuthButtonsProps {
  onSocialAuth: (provider: string) => void;
  isLoading: boolean;
  actionText?: string;
}

export function SocialAuthButtons({
  onSocialAuth,
  isLoading,
  actionText = "Sign in",
}: SocialAuthButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onSocialAuth("Google")}
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 mr-2"
        >
          <path
            fill="currentColor"
            d="M12.545 12.151c0 .866-.563 1.452-1.298 1.452-.74 0-1.29-.586-1.29-1.452 0-.874.55-1.452 1.29-1.452.735 0 1.298.578 1.298 1.452zm-1.557 4.86c-.74 0-1.29-.579-1.29-1.453 0-.866.55-1.452 1.29-1.452.735 0 1.298.586 1.298 1.452 0 .874-.563 1.453-1.298 1.453zm1.557-9.713c0 .874-.563 1.452-1.298 1.452-.74 0-1.29-.578-1.29-1.452 0-.866.55-1.452 1.29-1.452.735 0 1.298.586 1.298 1.452zm7.975 2.475C20.52 5.497 17.278 3 12.345 3 7.676 3 3.497 6.582 3.497 12.151c0 4.063 2.864 7.334 6.476 8.096V13.38c-1.557 0-2.05-.874-2.05-1.742 0-1.452 1.367-2.95 1.983-3.527.62.577 1.99 2.075 1.99 3.527 0 .868-.493 1.742-2.05 1.742v6.869c.62.096 1.306.15 2.05.15 4.934 0 8.174-2.497 8.174-7.85 0-1.36-.315-2.6-.874-3.667z"
          />
        </svg>
        Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onSocialAuth("GitHub")}
        disabled={isLoading}
      >
        <Github className="h-5 w-5 mr-2" />
        GitHub
      </Button>
    </div>
  );
}
