import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SocialAuthButtons } from "../SocialAuth";
import { PasswordInput } from "../PasswordInput";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { ErrorAlert } from "@/components/miscellanous/ErrorAlert";
import { OTPInput } from "../OTPInput";

export function SignupForm() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUp?.create({
        firstName: formData.name,
        emailAddress: formData.email,
        password: formData.password,
      });

      if (
        result?.status === "missing_requirements" &&
        result?.unverifiedFields.includes("email_address")
      ) {
        await signUp?.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        console.log("Email verification sent. Please check your inbox.");
        setVerify(true);
      } else if (result?.status === "complete") {
        console.log("Signup successful:", result);
        router.push("/");
      } else {
        console.error("Signup incomplete:", result);
        setError(new Error("Signup incomplete. Please try again.").message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Signup error:", error);
        setError(error.message);
      } else {
        console.error("Unexpected error:", error);
        setError(new Error("An unexpected error occurred.").message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (verify) {
    return <OTPInput />;
  }

  return (
    <>
      <SocialAuthButtons
        onSocialAuth={(provider) =>
          console.log(`Social signup with ${provider} is not implemented yet.`)
        }
        isLoading={isLoading}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">User Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Create a password"
        />

        {error && <ErrorAlert error={error} />}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </>
  );
}
