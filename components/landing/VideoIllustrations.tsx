"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "Consumer Complaint Process Explained",
    url: "https://www.youtube.com/embed/RRy-3iIb8BE",
  },
  {
    title: "Rights of an Arrested Person",
    url: "https://www.youtube.com/embed/wPQ_9EEb3tA",
  },
  {
    title: "Cheque Bounce Case Explained",
    url: "https://www.youtube.com/embed/muWNGkiizng",
  },
  {
    title: "FIR Filing Process",
    url: "https://www.youtube.com/embed/o6z_QHrNRrw",
  },
  {
    title: "Bail Procedure in India",
    url: "https://www.youtube.com/embed/FhIoTYq3dEw",
  },
  {
    title: "Contract Law Basics",
    url: "https://www.youtube.com/embed/Iwry-LPF_FI",
  },
];

export default function VideoIllustrations() {
  const [page, setPage] = useState(1);

  const perPage = 3;
  const totalPages = Math.ceil(videos.length / perPage);

  const currentVideos = videos.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <section
      id="preview"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">

        {/* TITLE */}
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Video Illustrations</h2>
          <p className="text-gray-300">
            Watch animated videos explaining legal concepts and scenarios with examples.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentVideos.map((video, index) => (
            <Card
              key={index}
              className="p-0 bg-white/5 border border-yellow-500/20 backdrop-blur-xl hover:scale-[1.02] transition"
            >
              <CardContent className="p-4 space-y-4">

                {/* 🎥 RESPONSIVE IFRAME */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-yellow-400 text-left">
                  {video.title}
                </h3>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-300"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}