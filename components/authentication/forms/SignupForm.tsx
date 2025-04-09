import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { SocialAuthButtons } from "../SocialAuth";
import { PasswordInput } from "../PasswordInput";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

export function SignupForm() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
        await signUp?.prepareEmailAddressVerification();
        console.log("Email verification sent. Please check your inbox.");
      }
      if (result?.status === "complete") {
        console.log("Signup successful:", result);
        router.push("/");
      } else {
        console.error("Signup incomplete:", result);
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Social signup with ${provider} is not implemented yet.`);
  };

  return (
    <>
      <SocialAuthButtons
        onSocialAuth={handleSocialSignup}
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

        <div id="clerk-captcha"></div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </>
  );
}
