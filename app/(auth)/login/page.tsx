"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/forms/LoginForm";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
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

      {/* Content */}
      <div className="w-full max-w-5xl">
        <LoginForm />
      </div>
    </div>
  );
}