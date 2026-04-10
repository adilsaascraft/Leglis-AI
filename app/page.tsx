"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AILegalis from "@/components/landing/AILegalis";
import VideoIllustrations from "@/components/landing/VideoIllustrations";
import CaseStudies from "@/components/landing/CaseStudies";
import NewsUpdates from "@/components/landing/NewsUpdates";
import AboutUs from "@/components/landing/AboutUs";
import Contact from "@/components/landing/Footer";




export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* AI LEGALIS */}
      <section id="legalis">
        <AILegalis />
      </section>

      {/* VIDEO */}
      <section id="preview">
        <VideoIllustrations />
      </section>

      {/* CASE STUDIES */}
      <section id="cases">
        <CaseStudies />
      </section>

      {/* NEWS */}
      <section id="news">
        <NewsUpdates />
      </section>
      {/*About*/}
      <section id="about">
        <AboutUs />
      </section>
      {/*Footer*/}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}