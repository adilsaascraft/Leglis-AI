"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function SignupForm() {
  return (
    <Card className="p-0 overflow-hidden bg-black/40 border border-gray-800 backdrop-blur">
      <CardContent className="grid md:grid-cols-2 p-0 min-h-[420px]">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="https://res.cloudinary.com/dymanaa1j/image/upload/v1775820823/logo_kk6bfp.png"
            alt="Signup"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 md:p-10 text-white">
          <div className="flex flex-col gap-5">

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold">Create Account</h1>
              <p className="text-gray-400 text-sm">
                Register to access your dashboard
              </p>
            </div>

            {/* College Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">College Email ID</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your college email"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            {/* Full Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            {/* Semester Select */}
            <div className="grid gap-2">
              <Label>Semester</Label>
              <Select>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white w-full p-3">
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(8)].map((_, i) => (
                    <SelectItem key={i} value={`sem-${i + 1}`}>
                      Semester-{i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Course Select */}
            <div className="grid gap-2">
              <Label>Select Course</Label>
              <Select>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white w-full p-3">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="criminal">Criminal Law</SelectItem>
                  <SelectItem value="corporate">Corporate Law</SelectItem>
                  <SelectItem value="constitutional">Constitutional Law</SelectItem>
                  <SelectItem value="ip">Intellectual Property Law</SelectItem>
                  <SelectItem value="cyber">Cyber Law</SelectItem>
                  <SelectItem value="international">International Law</SelectItem>
                  <SelectItem value="human-rights">Human Rights Law</SelectItem>
                  <SelectItem value="environmental">Environmental Law</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Signup Button */}
            <button
              className="
                w-full py-2 rounded-lg
                bg-yellow-500 text-black font-semibold
                hover:bg-yellow-400 transition
              "
            >
              Signup
            </button>

            {/* Login Redirect */}
            <p className="text-sm text-center text-gray-400">
              Already a user?{" "}
              <Link href="/login" className="text-yellow-400 hover:underline">
                Login
              </Link>
            </p>

          </div>
        </div>

      </CardContent>
    </Card>
  );
}