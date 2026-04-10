"use client";

import Image from "next/image";
import {
 AlertDialog,
 AlertDialogContent,
 AlertDialogTrigger,
 AlertDialogTitle,
 AlertDialogDescription,
 AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function Hero() {
 return (
  <section className="relative w-full h-[90vh] overflow-hidden">

   {/* BACKGROUND IMAGE */}
   <Image
    src="https://res.cloudinary.com/dymanaa1j/image/upload/v1775818121/Firefly_Gemini_Flash_ekxxxo.png"
    alt="Courtroom"
    fill
    priority
    className="object-cover"
   />

   {/* DARK OVERLAY */}
   <div className="absolute inset-0 bg-black/60" />

   {/* CONTENT */}
   <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-10 space-y-6">

    <h1 className="text-3xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md">
     India’s{" "}
     <span className="text-yellow-400">1st</span>
     <br />
     <span className="text-yellow-400">Legal AI</span>{" "}
     Platform.
    </h1>

    {/* CTA */}
    <div className="flex gap-4 mt-4">

     {/* Get Started */}
     <button
      onClick={() => {
       document.getElementById("legalis")?.scrollIntoView({
        behavior: "smooth",
       });
      }}
      className="px-6 py-3 text-sm md:text-base font-semibold rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-500/20"
     >
      Get Started
     </button>

     {/* Learn More Dialog */}
     <AlertDialog>
      <AlertDialogTrigger asChild>
       <button className="px-6 py-3 text-sm md:text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-200">
        Learn More
       </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-h-[500px] overflow-y-auto bg-slate-950 text-white border border-white/10">

       {/* Hidden but required for accessibility */}
       <AlertDialogTitle className="hidden">
        About Legalis AI
       </AlertDialogTitle>

       <AlertDialogDescription className="hidden">
        Learn more about the features and capabilities of Legalis AI platform.
       </AlertDialogDescription>

       {/* Close Icon */}
       <AlertDialogCancel className="absolute top-4 right-4 p-1 bg-transparent hover:bg-white/10 border-none">
        ✕
       </AlertDialogCancel>

       {/* Visible Content */}
       <div className="space-y-4 text-left pr-4">
        <h2 className="text-xl font-bold text-yellow-400">
         About LÈGALIS AI
        </h2>

        <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-300">

         <li>
          <span className="text-white font-semibold">AI Legal Assistant:</span>{" "}
          Instantly ask legal questions and get simplified answers.
         </li>

         <li>
          <span className="text-white font-semibold">Indian Law Focused:</span>{" "}
          Built for Indian legal system and processes.
         </li>

         <li>
          <span className="text-white font-semibold">Document Help:</span>{" "}
          Understand agreements and notices.
         </li>

         <li>
          <span className="text-white font-semibold">24/7 Access:</span>{" "}
          Always available legal guidance.
         </li>

         <li>
          <span className="text-white font-semibold">Beginner Friendly:</span>{" "}
          No legal background needed.
         </li>

         <li>
          <span className="text-white font-semibold">Fast & Secure:</span>{" "}
          Private and quick responses.
         </li>

         <li>
          <span className="text-white font-semibold">Future Ready:</span>{" "}
          Expanding to lawyer connect & case tracking.
         </li>

        </ol>
       </div>

      </AlertDialogContent>
     </AlertDialog>

    </div>
   </div>
  </section>
 );
}