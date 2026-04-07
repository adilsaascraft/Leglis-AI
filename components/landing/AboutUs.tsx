"use client";

import { Card } from "@/components/ui/card";

const team = [
 {
  name: "Mr. Manik Sood",
  role: "Director",
  title: "Chief Executive Officer",
  image: "/sood.png",
 },
 {
  name: "Ms. Tripti Kapoor",
  role: "Director",
  title: "Chief Legal Officer",
  image: "/tripti.png",
 },
 {
  name: "Mr. Mohd Arqam",
  role: "Chief Technical Officer",
  title: "",
  image: "/arqam.png",
 },
 {
  name: "Ms. Gunjan Kapoor",
  role: "Chief Marketing Officer",
  title: "",
  image: "/gunjan.png",
 },
];

export default function AboutUs() {
 return (
  <section
   id="about"
   className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
  >
   <div className="max-w-6xl mx-auto space-y-16">

    {/* ABOUT SECTION */}
    <div className="text-center space-y-4">
     <h2 className="text-4xl md:text-5xl font-bold">
      About <span className="text-yellow-400">Us</span>
     </h2>

     <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
      Manitri Legal Solutions Private Limited is a New Delhi-based legal tech startup incorporated on March 26, 2026, focused on providing AI-driven legal solutions to lawyers, corporations, and startups. Operating under the brand{" "}
      <span className="text-yellow-400 font-medium">"LEGALIS"</span>, the company focuses on digital legal research and knowledge-based tools.
     </p>
    </div>

    {/* TEAM SECTION */}
    <div className="space-y-10">

     <h3 className="text-3xl font-bold text-center">
      Core <span className="text-yellow-400">Team</span>
     </h3>

     <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

      {team.map((member, index) => (
       <Card
        key={index}
        className="bg-white/5 border border-yellow-500/20 overflow-hidden hover:scale-105 transition"
       >
        {/* IMAGE FULL WIDTH */}
        <img
         src={member.image}
         alt={member.name}
         className="w-full h-56 object-fit"
        />

        {/* CONTENT */}
        <div className="p-4 text-center">

         {/* ROLE */}
         <p className="text-xs text-yellow-400 uppercase">
          {member.role}
         </p>

         {/* TITLE */}
         {member.title && (
          <p className="text-sm text-gray-300">
           {member.title}
          </p>
         )}

         {/* NAME */}
         <h4 className="mt-2 font-semibold text-white">
          {member.name}
         </h4>

        </div>
       </Card>
      ))}

     </div>
    </div>

   </div>
  </section>
 );
}