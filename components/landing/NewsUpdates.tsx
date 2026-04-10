"use client";

import { useState } from "react";
import Image from "next/image";
import { newsData } from "@/data/news";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Share2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id)
        ? prev.filter((b) => b !== id)
        : [...prev, id]
    );
  };

  return (
    <section
      id="news"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">News and Updates</h2>
          <p className="text-gray-300">
            Stay informed with the latest legal updates.
          </p>
        </div>

        {/* 🧱 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

          {current.map((item) => {
            const isHigh = item.importance === "high";
            const isMedium = item.importance === "medium";

            const size =
              isHigh
                ? "md:col-span-2 md:row-span-2"
                : isMedium
                  ? "md:col-span-2"
                  : "";

            return (
              <Card
                key={item.id}
                className={`group relative overflow-hidden bg-white/5 border border-yellow-500/20 backdrop-blur-xl flex flex-col justify-end hover:scale-[1.02] transition ${size}`}
              >

                {/* 🔥 FULL COVER IMAGE */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* 🔥 GRADIENT OVERLAY (VERY IMPORTANT) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* 🔥 CONTENT (ON TOP OF IMAGE) */}
                <div className="relative z-10 p-4 space-y-2">

                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded">
                      {item.category}
                    </span>
                    {item.trending && (
                      <span className="text-red-400">🔥 Trending</span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-yellow-400 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between pt-2">

                    <Button
                      onClick={() => {
                        setSelected(item);
                        setOpen(true);
                      }}
                      className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs px-3 py-1"
                    >
                      Read
                    </Button>

                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={
                          bookmarks.includes(item.id)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        <Star className="w-4 h-4" />
                      </button>

                      <button className="text-gray-300 hover:text-white">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </Card>
            );
          })}

        </div>

        {/* 📑 PAGINATION */}
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
                <div className="relative w-full h-60 rounded-lg overflow-hidden">
                  <Image
                    src={selected.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-yellow-400">
                  {selected.title}
                </h3>

                <p className="text-sm text-gray-300">
                  {selected.desc} Detailed legal explanation and implications.
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