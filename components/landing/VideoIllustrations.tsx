"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const videos = [
  {
    title: "Consumer Complaint Process Explained",
    duration: "2:36",
    thumbnail: "/1.png",
    url: "https://www.youtube.com/embed/RRy-3iIb8BE",
  },
  {
    title: "Rights of an Arrested Person",
    duration: "3:02",
    thumbnail: "/2.png",
    url: "https://www.youtube.com/embed/wPQ_9EEb3tA",
  },
  {
    title: "Cheque Bounce Case Explained",
    duration: "2:27",
    thumbnail: "/3.png",
    url: "https://www.youtube.com/embed/muWNGkiizng",
  },
  {
    title: "FIR Filing Process",
    duration: "2:50",
    thumbnail: "/1.png",
    url: "https://www.youtube.com/embed/o6z_QHrNRrw",
  },
  {
    title: "Bail Procedure in India",
    duration: "3:10",
    thumbnail: "/2.png",
    url: "https://www.youtube.com/embed/FhIoTYq3dEw",
  },
  {
    title: "Contract Law Basics",
    duration: "2:40",
    thumbnail: "/3.png",
    url: "https://www.youtube.com/embed/Iwry-LPF_FI",
  },
];

export default function VideoIllustrations() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const perPage = 3;
  const totalPages = Math.ceil(videos.length / perPage);

  const currentVideos = videos.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handlePlay = (url: string) => {
    setActiveVideo(url);
    setOpen(true);
  };

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
              className="bg-white/5 border border-yellow-500/20 backdrop-blur-xl hover:scale-105 transition"
            >
              <CardContent className="p-4 space-y-4">

                {/* THUMBNAIL */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-lg w-full h-40 object-cover"
                  />

                  <span className="absolute bottom-2 right-2 bg-black/70 text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-yellow-400">
                  {video.title}
                </h3>

                {/* PLAY */}
                <Button
                  onClick={() => handlePlay(video.url)}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  <Play className="w-4 h-4 mr-2" /> Play
                </Button>

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

        {/* 🎥 VIDEO MODAL */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl p-0 bg-black border-none">
            {activeVideo && (
              <iframe
                width="100%"
                height="400"
                src={activeVideo}
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}