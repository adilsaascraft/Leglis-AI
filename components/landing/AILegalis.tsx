"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { dummyLegalResponse } from "@/data/prompt";

export default function AILegalis() {
  const [question, setQuestion] = useState("");
  const [currentQ, setCurrentQ] = useState("");
  const [thinking, setThinking] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!question.trim()) return;

    setCurrentQ(question);
    setQuestion("");
    setThinking(true);
    setDisplayText("");
    setLoading(true);

    const fullText = dummyLegalResponse.content;
    const words = fullText.split(" ");

    setTimeout(() => {
      setThinking(false);

      let index = 0;

      const interval = setInterval(() => {
        setDisplayText((prev) => prev + words[index] + " ");
        index++;

        // 🧠 Smart pauses (like GPT)
        const word = words[index] || "";
        let delay = 25;

        if (word.includes("###")) delay = 200;
        if (word.includes("\n")) delay = 120;

        if (index >= words.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 25);
    }, 700);
  };

  // 🔽 Auto scroll like ChatGPT
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight;
    }
  }, [displayText]);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-yellow-400">JURIX</span>
          </h2>
          <p className="text-yellow-400 text-lg mt-2">
            All Legal Queries. One Stop Solution.
          </p>
        </div>

        <Card className="bg-white/5 border border-yellow-500/20 backdrop-blur-xl shadow-xl">
          <CardContent className="p-6 space-y-6">

            {/* QUESTION */}
            {currentQ && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                <Bot className="w-5 h-5 text-yellow-400" />
                <p className="text-sm text-gray-200">{currentQ}</p>
              </div>
            )}

            {/* CHAT CONTAINER */}
            {currentQ && (
              <div
                ref={containerRef}
                className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-6 h-[500px] overflow-y-auto custom-scrollbar"
              >
                {/* THINKING */}
                {thinking && (
                  <p className="text-yellow-400 animate-pulse text-sm">
                    Thinking...
                  </p>
                )}

                {/* RESPONSE */}
                {!thinking && (
                  <div className="space-y-4">

                    <h3 className="text-xl font-bold text-yellow-400">
                      {dummyLegalResponse.title}
                    </h3>

                    <div className="prose prose-invert max-w-none text-sm text-white leading-relaxed">
                      <ReactMarkdown>
                        {displayText}
                      </ReactMarkdown>

                      {/* CURSOR */}
                      {loading && (
                        <span className="inline-block w-2 h-4 ml-1 bg-yellow-400 animate-pulse" />
                      )}
                    </div>

                    {!loading && (
                      <div className="text-xs text-green-400 mt-4">
                        Confidence Score: 95%
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SOURCES */}
            {!loading && displayText && (
              <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-4">
                <h4 className="text-yellow-400 font-semibold text-sm mb-2">
                  References
                </h4>

                <ul className="space-y-1 text-xs text-gray-300">
                  {dummyLegalResponse.sources.map((src, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-400">•</span>
                      {src}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* INPUT */}
            <div className="flex items-center gap-3">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your legal question..."
                className="bg-white/10 border-none text-white placeholder:text-gray-400"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                onClick={handleSend}
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                Send <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}