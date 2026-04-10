"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";
import { dummyAnswers } from "@/data/dummyAnswers";
import { dummySources } from "@/data/dummySources";

export default function AILegalis() {
  const [question, setQuestion] = useState("");
  const [currentQ, setCurrentQ] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [sources, setSources] = useState<string[]>([]);
  const [confidence, setConfidence] = useState<number | null>(null);

  const handleSend = () => {
    if (!question.trim()) return;

    setCurrentQ(question);
    setQuestion("");
    setAnswers([]);
    setCurrentLine("");
    setThinking(true);
    setLoading(true);
    setSources([]);
    setConfidence(null);

    const random =
      dummyAnswers[Math.floor(Math.random() * dummyAnswers.length)];

    const randomSources =
      dummySources[Math.floor(Math.random() * dummySources.length)];

    // 🧠 Thinking delay
    setTimeout(() => {
      setThinking(false);

      let lineIndex = 0;

      const typeLine = () => {
        if (lineIndex >= random.length) {
          setLoading(false);

          // 📚 Show sources
          setTimeout(() => {
            setSources(randomSources);

            // 🎯 Confidence (random realistic value)
            const randomConfidence = Math.floor(85 + Math.random() * 10);
            setConfidence(randomConfidence);
          }, 500);

          return;
        }

        const line = random[lineIndex];
        const words = line.split(" ");
        let wordIndex = 0;

        const wordInterval = setInterval(() => {
          setCurrentLine((prev) => prev + words[wordIndex] + " ");
          wordIndex++;

          if (wordIndex >= words.length) {
            clearInterval(wordInterval);

            setAnswers((prev) => [...prev, line]);
            setCurrentLine("");

            lineIndex++;
            setTimeout(typeLine, 400);
          }
        }, 100);
      };

      typeLine();
    }, 3000);
  };

  return (
    <section
      id="solution"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold">
          AI <span className="text-yellow-400">Legalis</span>
        </h2>

        <p className="text-yellow-400 text-lg">
          All Legal Queries. One Stop Solution.
        </p>

        <Card className="mt-10 bg-white/5 border border-yellow-500/20 backdrop-blur-xl shadow-xl">
          <CardContent className="p-6 space-y-6">

            {/* QUESTION */}
            {currentQ && (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg text-left">
                <Bot className="w-5 h-5 text-yellow-400" />
                <p className="text-sm text-gray-200">{currentQ}</p>
              </div>
            )}

            {/* ANSWER */}
            {currentQ && (
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-5 text-left relative min-h-[160px]">

                {/* ICON */}
                <div className="absolute top-3 right-3">
                  <div className="bg-yellow-500 text-black p-2 rounded-full">
                    <Bot className="w-4 h-4" />
                  </div>
                </div>

                {/* 🧠 THINKING */}
                {thinking && (
                  <p className="text-yellow-400 animate-pulse text-sm">
                    Analyzing your query...
                  </p>
                )}

                {/* ANSWERS */}
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-200">
                  {answers.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}

                  {/* CURRENT LINE */}
                  {loading && currentLine && (
                    <li>
                      {currentLine}
                      <span className="inline-block w-2 h-4 ml-1 bg-yellow-400 animate-pulse" />
                    </li>
                  )}
                </ol>

                {/* 📊 CONFIDENCE */}
                {confidence && (
                  <div className="mt-4 text-xs text-green-400 font-medium">
                    Confidence Score: {confidence}%
                  </div>
                )}
              </div>
            )}

            {/* 📚 SOURCES */}
            {sources.length > 0 && (
              <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-4 text-left">
                <h4 className="text-yellow-400 font-semibold text-sm mb-2">
                  References & Sources
                </h4>

                <ul className="space-y-1 text-xs text-gray-300">
                  {sources.map((src, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      {src}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ⚠️ DISCLAIMER */}
            {sources.length > 0 && (
              <div className="text-xs text-gray-400 text-left border-t border-yellow-500/10 pt-3">
                ⚠️ This AI-generated response is for informational purposes only
                and should not be considered as legal advice. Please consult a
                qualified legal professional for accurate guidance.
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