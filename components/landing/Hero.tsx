"use client";

import Image from "next/image";

export default function Hero() {
 return (
  <section className="relative w-full h-[90vh] overflow-hidden">

   {/* BACKGROUND IMAGE */}
   <Image
    src="https://res.cloudinary.com/dymanaa1j/image/upload/v1775587833/courtroom_bpe2iq.png"
    alt="Courtroom"
    fill
    priority
    className="object-cover"
   />

   {/* DARK OVERLAY */}
   <div className="absolute inset-0 bg-black/60" />

   {/* CONTENT */}
   <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-3">
    <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white">
     India’s{" "}
     <span className="text-yellow-400">1st</span>
     <br />
     <span className="text-yellow-400">Legal AI</span>{" "}
     Platform.
    </h1>
   </div>
  </section>
 );
}