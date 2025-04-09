"use client";

import { AuthCard } from "@/components/authentication/AuthCard";
import { BackButton } from "@/components/authentication/BackButton";
import { SignupForm } from "@/components/authentication/forms/SignupForm";
import Link from "next/link";

export default function LoginPage() {
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
        <SignupForm />
      </AuthCard>
    </>
  );
}
