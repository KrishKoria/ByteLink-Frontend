import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { SocialAuthButtons } from "../SocialAuth";
import { PasswordInput } from "../PasswordInput";

interface SignupFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  onSocialSignup: (provider: string) => void;
  isLoading: boolean;
}

export function SignupForm({
  onSubmit,
  onSocialSignup,
  isLoading,
}: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <>
      <SocialAuthButtons
        onSocialAuth={onSocialSignup}
        isLoading={isLoading}
        actionText="Sign up"
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
          <Label htmlFor="name">Name</Label>
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </>
  );
}
