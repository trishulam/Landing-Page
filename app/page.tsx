"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore')

    if (!hasVisited) {
      setIsLoading(true)
      localStorage.setItem('hasVisitedBefore', 'true')
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black">
          <LoadingAnimation
            videoSrc="/loading-animation.mp4"
            onLoadingComplete={handleLoadingComplete}
          />
        </div>
      )}
      <main
        className={`min-h-screen bg-background transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
