"use client";

import { useRouter } from "next/navigation";
import { SignupForm } from "@/components/forms/SignupForm";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

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

      {/* Signup Form */}
      <div className="w-full max-w-5xl">
        <SignupForm />
      </div>
    </div>
  );
}