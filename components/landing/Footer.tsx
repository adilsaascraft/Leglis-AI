"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* 🔥 LOGO + ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dymanaa1j/image/upload/v1775845361/Untitled_1_yxbhva.png"
              alt="Legalis AI"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-lg font-extrabold tracking-wide text-white">
              LÈGALIS <span className="text-yellow-400">- AI</span>
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            AI-powered legal research platform helping lawyers, startups,
            and enterprises simplify legal workflows and access knowledge instantly.
          </p>
        </div>

        {/* ⚡ QUICK LINKS */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#legalis">Legalis AI</Link></li>
            <li><Link href="#preview">Video Illustrations</Link></li>
            <li><Link href="#cases">Case Studies</Link></li>
            <li><Link href="#moot-court">Moot Court Stimulator</Link></li>
            <li><Link href="#answer-writing">Answer Writing Stimulator</Link></li>
            <li><Link href="#news">News and Updates</Link></li>
          </ul>
        </div>

        {/* 🚀 PRODUCT */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#legalis">Jurix (Legalis AI)</Link></li>
            <li><Link href="#moot-court">Moot Court Stimulator</Link></li>
            <li><Link href="#answer-writing">Answer Writing Stimulator</Link></li>
            <li><Link href="#legalis">Legal Research</Link></li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>

          <p className="text-sm text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4" />
            New Delhi, India
          </p>

          <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
            <FaEnvelope className="w-4 h-4" />
            contact@legalis.co.in
          </p>

          {/* 🌐 SOCIAL */}
          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-yellow-500/10 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Legalis AI. All rights reserved.
      </div>
    </footer>
  );
}