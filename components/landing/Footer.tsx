"use client";

import Link from "next/link";
import {
  BookIcon,
  X,
  LinkIcon,
  Mail,
} from "lucide-react";
import Logo from "@/components/landing/Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold">
              <span className="text-white">Legalis</span>
              <span className="text-yellow-500">-AI</span>
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            AI-powered legal research platform helping lawyers, startups,
            and enterprises simplify legal processes and access knowledge instantly.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#legalis">AI Legalis</Link></li>
            <li><Link href="#preview">Videos</Link></li>
            <li><Link href="#cases">Case Studies</Link></li>
            <li><Link href="#news">News</Link></li>
          </ul>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Legal AI Assistant</li>
            <li>Case Analysis</li>
            <li>Document Automation</li>
            <li>Legal Research</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Contact</h4>

          <p className="text-sm text-gray-400">
            New Delhi, India
          </p>

          <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
            <Mail className="w-4 h-4" />
            support@legalis.ai
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-4">
            <BookIcon className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <X  className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            <LinkIcon className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-yellow-500/10 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Legalis-AI. All rights reserved.
      </div>
    </footer>
  );
}