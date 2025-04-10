import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";

interface SocialAuthButtonsProps {
  isLoading: boolean;
}

export function SocialAuthButtons({ isLoading }: SocialAuthButtonsProps) {
  const { signIn } = useSignIn();
  const handleOauth = async (provider: "google" | "github") => {
    try {
      const result = await signIn?.authenticateWithRedirect({
        strategy: `oauth_${provider}`,
        redirectUrl: "/auth/callback",
        redirectUrlComplete: "/", //change to dashboard later
      });
      console.log(`${provider} OAuth sign-in initiated:`, result);
    } catch (error) {
      console.error(`Error during ${provider} OAuth sign-in:`, error);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleOauth("google")}
        disabled={isLoading}
      >
        <GoogleLogo className="h-5 w-5 mr-2" weight="duotone" />
        Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleOauth("github")}
        disabled={isLoading}
      >
        <GithubLogo className="h-5 w-5 mr-2" />
        GitHub
      </Button>
    </div>
  );
}
