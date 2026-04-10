
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "hero" },
  { name: "Legalis AI", href: "legalis" },
  { name: "Video Illustrations", href: "preview" },
  { name: "Case Studies", href: "cases" },
  { name: "Moot Court Stimulator", href: "moot-court" },
  { name: "Answer Writing Stimulator", href: "answer-writing" },
  { name: "News and Updates", href: "news" },
  { name: "About Us", href: "about" },
  { name: "Contact Us", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  /* ==============================
     🔥 INTERSECTION OBSERVER (BEST)
  ============================== */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  /* ==============================
     🔒 SCROLL LOCK + ESC CLOSE
  ============================== */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  /* ==============================
     🎯 SCROLL HANDLER
  ============================== */
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });

    // 🔥 Update URL hash (WITHOUT reload)
    window.history.pushState(null, "", `#${id}`);

    setActive(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 border-b border-white/10">
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <div className="flex items-center gap-3">
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

        {/* 🖥 DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              aria-label={item.name}
              onClick={() => handleScrollTo(item.href)}
              className={`group relative text-sm font-semibold transition ${active === item.href
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {item.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 origin-left transition-transform duration-300 ${active === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                  }`}
              />
            </button>
          ))}
        </nav>

        {/* 👉 RIGHT CTA */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button className="bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition px-5">
              Login
            </Button>
          </Link>

          {/* 📱 MOBILE MENU */}
          <button
            aria-label="Open menu"
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 🚀 MOBILE DRAWER */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-slate-900 p-6 shadow-2xl flex flex-col animate-in slide-in-from-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-white font-bold text-lg">
                Menu
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* NAV */}
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className="text-left text-lg font-semibold text-gray-300 hover:text-yellow-400 transition"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-10">
              <Link href="/login" onClick={() => setOpen(false)}>
                <Button className="w-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}