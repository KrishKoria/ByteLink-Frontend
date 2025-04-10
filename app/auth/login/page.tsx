"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BackButton } from "@/components/authentication/BackButton";
import { AuthCard } from "@/components/authentication/AuthCard";
import { LoginForm } from "@/components/authentication/forms/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login data:", formData);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const footerContent = (
    <div className="text-sm text-center">
      Don&apos;t have an account?{" "}
      <Link
        href="/auth/signup"
        className="text-primary font-medium hover:underline"
      >
        Sign up
      </Link>
    </div>
  );

  return (
    <>
      <div className="mb-6">
        <BackButton />
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-2">
          Sign in to access your shortened URLs and analytics
        </p>
      </div>

      <AuthCard
        title="Sign in"
        description="Choose your preferred sign in method"
        footer={footerContent}
      >
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      </AuthCard>
    </>
  );
}
