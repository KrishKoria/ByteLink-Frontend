import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ErrorAlert } from "@/components/miscellanous/ErrorAlert";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function OTPInput() {
  const { signUp, setActive } = useSignUp();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string>("");
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({
        code,
      });
      console.log("Verification response:", completeSignUp);
      if (completeSignUp?.status === "complete") {
        if (!setActive) {
          throw new Error("setActive function is undefined.");
        }
        await setActive({ session: completeSignUp.createdSessionId });
        console.log("Email verified and signup complete.");
        router.push("/");
      } else {
        console.error("Verification incomplete:", completeSignUp);
        setError("Verification failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Verification error:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Verify your email</h1>
      <form onSubmit={handleVerify} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp">Enter your verification code</Label>
          <InputOTP
            maxLength={6}
            value={code}
            onChange={(value) => {
              setCode(value);
            }}
            name="otp"
            id="otp"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        {error && <ErrorAlert error={error} />}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </>
  );
}
