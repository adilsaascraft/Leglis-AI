"use client";

import { useState, useEffect } from "react";
import { caseStudies } from "@/data/cases";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, Bot, Search } from "lucide-react";

const categories = ["All", "Criminal", "Corporate", "Civil"];

export default function CaseStudiesBento() {
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Pagination
  const [page, setPage] = useState(1);
  const perPage = 3;

  /* 🔒 Persist bookmarks */
  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // ✅ Reset page on filter/search
  useEffect(() => {
    setPage(1);
  }, [search, activeCategory]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id)
        ? prev.filter((b) => b !== id)
        : [...prev, id]
    );
  };

  /* 🔍 FILTER LOGIC */
  const filtered = caseStudies.filter((c) => {
    const matchSearch = c.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || c.category === activeCategory;

    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <section
      id="cases"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* 🔥 HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold">Case Intelligence</h2>
          <p className="text-gray-400">
            Explore structured legal case studies powered by AI insights.
          </p>
        </div>

        {/* 🔍 SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row justify-between gap-4">

          <div className="relative w-full md:w-80">
            <Input
              placeholder="Search cases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/10 border-yellow-500/20 text-white pr-8"
            />
            <Search className="absolute right-2 top-2 w-4 h-4 text-yellow-400" />
          </div>

          {/* 🧠 CATEGORY FILTER */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs rounded ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 🧱 BENTO GRID */}
        {paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

              {paginated.map((c) => {
                const size =
                  c.importance === "high"
                    ? "md:col-span-2 md:row-span-2"
                    : c.importance === "medium"
                    ? "md:col-span-2"
                    : "";

                return (
                  <Card
                    key={c.id}
                    className={`group p-5 bg-white/5 border border-yellow-500/20 backdrop-blur-xl flex flex-col justify-between transition hover:scale-[1.02] hover:border-yellow-400 ${size}`}
                  >
                    <div className="space-y-3">

                      {/* TITLE */}
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400">
                          {c.title}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {c.court} • {c.year} • {c.category}
                        </p>
                      </div>

                      {/* SUMMARY */}
                      <p className="text-sm text-gray-300">
                        {c.summary}
                      </p>

                      {/* EXTRA */}
                      {c.importance !== "low" && (
                        <>
                          <div>
                            <h4 className="text-sm font-semibold text-white">Judgement</h4>
                            <p className="text-xs text-gray-400">
                              {c.judgement}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-white">Outcome</h4>
                            <p className="text-xs text-green-400">
                              {c.outcome}
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-between items-center pt-4">

                      <button
                        onClick={() => toggleBookmark(c.id)}
                        className={`flex items-center gap-1 text-xs ${
                          bookmarks.includes(c.id)
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      >
                        <Star className="w-4 h-4" />
                        {bookmarks.includes(c.id) ? "Saved" : "Save"}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          const section = document.getElementById("legalis");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }

                          window.history.pushState(null, "", "#legalis");
                        }}
                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                      >
                        <Bot className="w-4 h-4" />
                        AI Explain
                      </button>

                    </div>
                  </Card>
                );
              })}

            </div>

            {/* 📑 PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">

                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  className="px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 text-white"
                >
                  ← Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 text-sm rounded ${
                      page === i + 1
                        ? "bg-yellow-500 text-black"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 text-white"
                >
                  Next →
                </button>

              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-400 py-20">
            No case studies found.
          </div>
        )}

      </div>
    </section>
  );
}