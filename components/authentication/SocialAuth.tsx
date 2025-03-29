import { Button } from "@/components/ui/button";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";

interface SocialAuthButtonsProps {
  onSocialAuth: (provider: string) => void;
  isLoading: boolean;
}

export function SocialAuthButtons({
  onSocialAuth,
  isLoading,
}: SocialAuthButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onSocialAuth("Google")}
        disabled={isLoading}
      >
        <GoogleLogo className="h-5 w-5 mr-2" weight="duotone" />
        Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onSocialAuth("GitHub")}
        disabled={isLoading}
      >
        <GithubLogo className="h-5 w-5 mr-2" />
        GitHub
      </Button>
    </div>
  );
}
