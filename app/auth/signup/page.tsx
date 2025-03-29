"use client";

import { AuthCard } from "@/components/authentication/AuthCard";
import { BackButton } from "@/components/authentication/BackButton";
import { SignupForm } from "@/components/authentication/forms/SignupForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signup data:", formData);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    setIsLoading(true);

    console.log(`Signing up with ${provider}`);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  const footerContent = (
    <>
      <div className="text-sm text-center text-muted-foreground">
        By creating an account, you agree to our{" "}
        <Link href="#" className="text-primary hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </div>
      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-primary font-medium hover:underline"
        >
          Sign in
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className="mb-6">
        <BackButton />
        <h1 className="text-3xl font-bold">Create your account</h1>
        <p className="text-muted-foreground mt-2">
          Join ByteLink to save and manage your shortened URLs
        </p>
      </div>

      <AuthCard
        title="Sign up"
        description="Choose your preferred sign up method"
        footer={footerContent}
      >
        <SignupForm
          onSubmit={handleSubmit}
          onSocialSignup={handleSocialSignup}
          isLoading={isLoading}
        />
      </AuthCard>
    </>
  );
}
