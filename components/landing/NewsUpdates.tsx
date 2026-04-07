"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Share2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const newsData = [
 {
  title: "Supreme Court Rules on Privacy Rights",
  desc: "Landmark judgment affirming privacy as a fundamental right under Article 21.",
  date: "April 22, 2024",
  category: "Supreme Court",
  image: "/n1.jpg",
  trending: true,
 },
 {
  title: "High Court Overturns Conviction",
  desc: "Conviction overturned citing lack of sufficient evidence in corruption case.",
  date: "April 18, 2024",
  category: "High Court",
  image: "/n2.jpg",
 },
 {
  title: "Legal Reforms Announced",
  desc: "Major reforms discussed including amendments in criminal law procedures.",
  date: "April 15, 2024",
  category: "Legal Update",
  image: "/n3.png",
 },
 {
  title: "Cyber Law Strengthened",
  desc: "Government proposes stricter cybercrime laws to prevent fraud.",
  date: "April 10, 2024",
  category: "IT Law",
  image: "/n2.jpg",
 },
 {
  title: "New Bail Guidelines Issued",
  desc: "Supreme Court sets uniform guidelines for bail across India.",
  date: "April 5, 2024",
  category: "Criminal Law",
  image: "/n3.png",
 },
 {
  title: "Consumer Law Update",
  desc: "New rules introduced for faster complaint resolution.",
  date: "April 1, 2024",
  category: "Consumer Law",
  image: "/n1.jpg",
 },
];

export default function NewsUpdates() {
 const [page, setPage] = useState(1);
 const [open, setOpen] = useState(false);
 const [selected, setSelected] = useState<any>(null);
 const [bookmarks, setBookmarks] = useState<string[]>([]);

 const perPage = 3;
 const totalPages = Math.ceil(newsData.length / perPage);

 const current = newsData.slice(
  (page - 1) * perPage,
  page * perPage
 );

 const toggleBookmark = (title: string) => {
  setBookmarks((prev) =>
   prev.includes(title)
    ? prev.filter((b) => b !== title)
    : [...prev, title]
  );
 };

 return (
  <section
   id="news"
   className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
  >
   <div className="max-w-6xl mx-auto space-y-10">

    {/* TITLE */}
    <div className="text-center space-y-2">
     <h2 className="text-4xl font-bold">News and Updates</h2>
     <p className="text-gray-300">
      Stay informed with the latest legal updates and court rulings.
     </p>
    </div>

    {/* NEWS LIST */}
    <div className="space-y-6">
     {current.map((item, i) => (
      <Card
       key={i}
       className="flex flex-col md:flex-row gap-4 bg-white/5 border border-yellow-500/20 hover:scale-[1.01] transition"
      >

       {/* IMAGE */}
       <img
        src={item.image}
        className="w-full md:w-64 h-40 object-cover rounded-lg block"
        alt={item.title}
       />

       {/* CONTENT */}
       <div className="flex-1 space-y-2">

        {/* CATEGORY + TREND */}
        <div className="flex items-center gap-2 text-xs">
         <span className="bg-yellow-500 text-black px-2 py-1 rounded">
          {item.category}
         </span>

         {item.trending && (
          <span className="text-red-400">🔥 Trending</span>
         )}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-yellow-400">
         {item.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-300">{item.desc}</p>

        {/* DATE */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
         <Calendar className="w-4 h-4" />
         {item.date}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 mt-2">

         <Button
          onClick={() => {
           setSelected(item);
           setOpen(true);
          }}
          className="bg-yellow-500 text-black hover:bg-yellow-400"
         >
          Read More
         </Button>

         {/* ⭐ Bookmark */}
         <button
          onClick={() => toggleBookmark(item.title)}
          className={`${bookmarks.includes(item.title)
            ? "text-yellow-400"
            : "text-gray-400"
           }`}
         >
          <Star className="w-5 h-5" />
         </button>

         {/* 🔗 Share */}
         <button className="text-gray-400 hover:text-white">
          <Share2 className="w-5 h-5" />
         </button>

        </div>
       </div>
      </Card>
     ))}
    </div>

    {/* PAGINATION */}
    <div className="flex justify-center gap-2">
     {[...Array(totalPages)].map((_, i) => (
      <button
       key={i}
       onClick={() => setPage(i + 1)}
       className={`px-3 py-1 rounded ${page === i + 1
         ? "bg-yellow-500 text-black"
         : "bg-white/10 text-gray-300"
        }`}
      >
       {i + 1}
      </button>
     ))}

     <button
      onClick={() =>
       setPage((p) => Math.min(p + 1, totalPages))
      }
      className="px-3 py-1 rounded bg-white/10 text-gray-300"
     >
      Next →
     </button>
    </div>

    {/* MODAL */}
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogContent className="bg-black text-white border border-yellow-500/20 max-w-xl">
      {selected && (
       <div className="space-y-4">
        <img
         src={selected.image}
         className="rounded-lg"
         alt=""
        />

        <h3 className="text-xl font-bold text-yellow-400">
         {selected.title}
        </h3>

        <p className="text-sm text-gray-300">
         {selected.desc} This is a detailed explanation of the case,
         including legal implications and future impact.
        </p>

        <div className="text-xs text-gray-400">
         {selected.date}
        </div>
       </div>
      )}
     </DialogContent>
    </Dialog>

   </div>
  </section>
 );
}