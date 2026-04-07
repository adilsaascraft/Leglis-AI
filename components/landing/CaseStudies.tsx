"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Search, Star, Bot } from "lucide-react";

const dummyData = [
  {
    chapter: "Chapter I - Preliminary",
    sections: [
      {
        title: "Section 1. Short title",
        content: "Defines the name and extent of the Act.",
      },
      {
        title: "Section 2. Repealed",
        content: "This section has been repealed.",
      },
    ],
  },
  {
    chapter: "Chapter II - Of Notes, Bills and Cheques",
    sections: [
      {
        title: "Section 3. Interpretation clause",
        content: "Defines important legal terms used in the Act.",
      },
      {
        title: "Section 4. Promissory note",
        content: "Defines what constitutes a promissory note.",
      },
      {
        title: "Section 5. Bill of exchange",
        content: "Explains bill of exchange and its legal meaning.",
      },
    ],
  },
];

const tabs = ["Rules", "Regulations", "Annexure", "Appendix"];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("Rules");
  const [search, setSearch] = useState("");
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // 🔍 Highlight function
  const highlightText = (text: string) => {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} className="bg-yellow-500 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const toggleBookmark = (title: string) => {
    setBookmarks((prev) =>
      prev.includes(title)
        ? prev.filter((b) => b !== title)
        : [...prev, title]
    );
  };

  return (
    <section
      id="cases"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto space-y-8">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          The Negotiable Instruments Act, 1881
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded border ${
                activeTab === tab
                  ? "bg-yellow-500 text-black"
                  : "border-yellow-500/30 text-white hover:bg-yellow-500/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT SIDEBAR ACCORDION */}
          <Card className="p-4 bg-white/5 border border-yellow-500/20 text-white">
            <h3 className="text-yellow-400 font-semibold mb-4">
              Chapters
            </h3>

            {dummyData.map((chap, i) => (
              <div key={i} className="mb-2">
                <button
                  onClick={() =>
                    setOpenChapter(openChapter === i ? null : i)
                  }
                  className="w-full flex justify-between items-center p-2 hover:bg-white/10 rounded"
                >
                  <span>{chap.chapter}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      openChapter === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openChapter === i && (
                  <div className="pl-3 space-y-1 text-sm">
                    {chap.sections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded hover:bg-white/10 cursor-pointer"
                        onClick={() => setOpenSection(sec.title)}
                      >
                        {sec.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Card>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 space-y-4">

            {/* SEARCH */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                Showing results
              </span>

              <div className="relative">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search sections..."
                  className="bg-white/10 border-yellow-500/20 text-white pr-8"
                />
                <Search className="absolute right-2 top-2 w-4 h-4 text-yellow-400" />
              </div>
            </div>

            {/* SECTIONS */}
            <Card className="bg-white/5 border border-yellow-500/20 text-white">
              {dummyData.map((chap) =>
                chap.sections
                  .filter((sec) =>
                    sec.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((sec, index) => (
                    <div
                      key={index}
                      className="border-b border-yellow-500/10"
                    >
                      <button
                        onClick={() =>
                          setOpenSection(
                            openSection === sec.title ? null : sec.title
                          )
                        }
                        className="w-full flex justify-between items-center p-4 hover:bg-white/10 text-left"
                      >
                        <span>{highlightText(sec.title)}</span>

                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            openSection === sec.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* CONTENT */}
                      {openSection === sec.title && (
                        <div className="px-4 pb-4 text-sm text-gray-300 space-y-3">

                          <p>{highlightText(sec.content)}</p>

                          {/* ACTIONS */}
                          <div className="flex gap-4 text-xs">

                            {/* ⭐ Bookmark */}
                            <button
                              onClick={() => toggleBookmark(sec.title)}
                              className={`flex items-center gap-1 ${
                                bookmarks.includes(sec.title)
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                            >
                              <Star className="w-4 h-4" />
                              {bookmarks.includes(sec.title)
                                ? "Bookmarked"
                                : "Bookmark"}
                            </button>

                            {/* 🤖 Explain */}
                            <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                              <Bot className="w-4 h-4" />
                              Explain with AI
                            </button>

                          </div>
                        </div>
                      )}
                    </div>
                  ))
              )}
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}