"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const team = [ { name: "Mr. Manik Sood", role: "Director", title: "Chief Executive Officer", image: "https://res.cloudinary.com/dymanaa1j/image/upload/v1775818452/ChatGPT_Image_Mar_17_2026_11_57_40_PM_u7lc4e.png", }, { name: "Ms. Tripti Kapoor", role: "Director", title: "Chief Legal Officer", image: "https://res.cloudinary.com/dymanaa1j/image/upload/v1776068715/gunjan_vjny0i.png", }, { name: "Mr. Mohd Arqam", role: "Chief Technical Officer", title: "", image: "https://res.cloudinary.com/dymanaa1j/image/upload/v1775818546/IMG_4224_zysuat.png", }, { name: "Ms. Gunjan Kapoor", role: "Chief Marketing Officer", title: "", image: "https://res.cloudinary.com/dymanaa1j/image/upload/v1776069016/gunjan_oi9amu.png", }, ];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ABOUT */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-yellow-400">Us</span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Manitri Legal Solutions Private Limited is a New Delhi-based legal
            tech startup focused on AI-driven legal solutions. Operating under
            the brand <span className="text-yellow-400">LEGALIS</span>, we build
            intelligent legal research tools.
          </p>
        </div>

        {/* TEAM */}
        <div className="space-y-12 px-4">

          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Core <span className="text-yellow-400">Team</span>
          </h3>

          <div className="space-y-10">

            {/* 🔥 ROW 1 → 4 CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {team.slice(0, 4).map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>

            {/* 🔥 ROW 2 → 2 CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {team.slice(4, 6).map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>

            {/* 🔥 ROW 3 → 1 CARD */}
            <div className="grid grid-cols-1 gap-10">
              {team.slice(6, 7).map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- REUSABLE CARD ---------------- */

function TeamCard({ member, index }: any) {
  return (
    <Card className="p-0 group w-full h-[500px] bg-white/5 border border-yellow-500/20 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] flex flex-col">

      {/* IMAGE */}
      <div className="relative h-[85%] w-full bg-black">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* CONTENT */}
      <div className="h-[15%] flex flex-col justify-center items-center text-center px-4">
        <p className="text-xs tracking-widest text-yellow-400 uppercase">
          {member.role}
        </p>

        {member.title && (
          <p className="text-sm text-gray-400">{member.title}</p>
        )}

        <h4 className="text-lg font-semibold text-white mt-1">
          {member.name}
        </h4>
      </div>
    </Card>
  );
}