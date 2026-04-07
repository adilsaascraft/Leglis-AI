"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import Logo from "@/components/landing/Logo";

const navItems = [
  { name: "Home", href: "hero" },
  { name: "AI Legalis", href: "legalis" },
  { name: "Video Illustrations", href: "preview" },
  { name: "Case Studies", href: "cases" },
  { name: "News and Updates", href: "news" },
  { name: "About Us", href: "about" },
];

export default function Navbar() {
 const [active, setActive] = useState("hero");
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [progress, setProgress] = useState(0);
 const isClickScrolling = useRef(false);

 useEffect(() => {
  const handleScroll = () => {
   if (isClickScrolling.current) return; // 🚨 ignore during click scroll

   let currentSection = "hero";

   navItems.forEach((item) => {
    const section = document.getElementById(item.href);
    if (section) {
     const rect = section.getBoundingClientRect();
     if (rect.top <= 150) {
      currentSection = item.href;
     }
    }
   });

   setActive(currentSection);

   setScrolled(window.scrollY > 50);

   const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
   const current = (window.scrollY / totalHeight) * 100;
   setProgress(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const handleScrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
   isClickScrolling.current = true; // 🚨 lock scroll override

   section.scrollIntoView({ behavior: "smooth" });

   window.history.pushState(null, "", `#${id}`);

   setActive(id);
   setOpen(false);

   // ⏳ unlock after scroll finishes
   setTimeout(() => {
    isClickScrolling.current = false;
   }, 600);
  }
 };

 return (
  <>
   {/* 🔥 SCROLL PROGRESS BAR */}
   <div
    className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 z-[60] transition-all"
    style={{ width: `${progress}%` }}
   />

   <header
    className={`sticky top-0 z-50 w-full border-b border-yellow-600/20 backdrop-blur-md transition-all duration-300 ${scrolled
     ? "bg-black/95 h-14 shadow-lg"
     : "bg-black/80 h-16"
     }`}
   >
    <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

     {/* LOGO */}
     <div className="flex items-center gap-3 cursor-pointer">
      <Logo />
      <span className="text-lg font-bold tracking-wide">
       <span className="text-white">Legalis</span>
       <span className="text-yellow-500">-AI</span>
      </span>
     </div>

     {/* DESKTOP MENU */}
     <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
       <button
        key={item.name}
        onClick={() => handleScrollTo(item.href)}
        className="relative text-sm text-gray-300 hover:text-yellow-400 transition group"
       >
        {item.name}

        {/* 🔥 GRADIENT UNDERLINE */}
        <span
         className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 ${active === item.href
          ? "opacity-100 scale-x-100"
          : "opacity-0 scale-x-0 group-hover:scale-x-100"
          }`}
        />
       </button>
      ))}
     </nav>

     {/* RIGHT SIDE */}
     <div className="flex items-center gap-3">
      <span className="hidden md:flex items-center gap-2 text-sm text-yellow-400">
       HI | ADIL <User className="w-5 h-5" />
      </span>

      <Link href="/login">
       <Button
        variant="outline"
        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
       >
        Login
       </Button>
      </Link>

      {/* MOBILE MENU */}
      <button
       className="md:hidden text-yellow-400"
       onClick={() => setOpen(true)}
      >
       <Menu className="w-6 h-6" />
      </button>
     </div>
    </div>

    {/* MOBILE DRAWER */}
    {open && (
     <div className="fixed inset-0 z-50 bg-black/95 flex flex-col p-6">
      <div className="flex justify-end">
       <button onClick={() => setOpen(false)}>
        <X className="w-6 h-6 text-yellow-400" />
       </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
       {navItems.map((item) => (
        <button
         key={item.name}
         onClick={() => handleScrollTo(item.href)}
         className="text-xl text-gray-300 hover:text-yellow-400"
        >
         {item.name}
        </button>
       ))}

       <Link href="/login" onClick={() => setOpen(false)}>
        <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-400">
         Login
        </Button>
       </Link>
      </div>
     </div>
    )}
   </header>
  </>
 );
}