"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500); // simulate loading
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">

      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className="
          absolute top-6 left-6
          flex items-center gap-2
          text-white/80 hover:text-white
          transition
        "
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* Card */}
      <Card className="p-0 overflow-hidden bg-black/40 border border-gray-800 backdrop-blur w-full max-w-3xl">
        <CardContent className="grid md:grid-cols-2 p-0 min-h-[300px]">

          {/* LEFT IMAGE */}
          <div className="relative hidden md:block">
            <img
              src="/login.png"
              alt="Forgot Password"
              className="object-cover w-full h-full"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 md:p-10 text-white flex flex-col justify-center gap-5">
            <div>
              <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
              <p className="text-gray-400 text-sm text-center">
                Enter your college email to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">College Email ID</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your college email"
                  className="bg-gray-900 border-gray-700 text-white"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full py-2 rounded-lg
                  bg-yellow-500 text-black font-semibold
                  hover:bg-yellow-400 transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>

              {/* Login Redirect */}
              <p className="text-sm text-center text-gray-400">
                Remember your password?{" "}
                <span
                  onClick={() => router.push("/login")}
                  className="text-yellow-400 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}