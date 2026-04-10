"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="p-0 overflow-hidden bg-black/40 border border-gray-800 backdrop-blur">
      <CardContent className="grid md:grid-cols-2 p-0 min-h-[500px]">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="https://res.cloudinary.com/dymanaa1j/image/upload/v1775820823/logo_kk6bfp.png"
            alt="Login"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 md:p-10 text-white">
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-gray-400 text-sm">
                Please login to your account
              </p>
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex justify-between text-sm">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-gray-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            {/* Login Button */}
            <button
              className="
                w-full py-2 rounded-lg
                bg-yellow-500 text-black font-semibold
                hover:bg-yellow-400 transition
              "
            >
              Login
            </button>

            {/* Signup Redirect */}
            <p className="text-sm text-center text-gray-400">
              Not a user?{" "}
              <Link href="/signup" className="text-yellow-400 hover:underline">
                Signup
              </Link>
            </p>

          </div>
        </div>

      </CardContent>
    </Card>
  );
}