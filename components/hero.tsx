"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, FileText, BarChart2, Bot, Play } from "lucide-react";
import Image from "next/image";
import ReactPlayer from "react-player";

const steps = [
  { icon: Mail, title: "Ingest Emails with AI" },
  { icon: FileText, title: "Analyze Market Trends with AI" },
  { icon: BarChart2, title: "Match & Optimize with AI" },
  { icon: Bot, title: "AI Agent Takes Action" },
];

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden ocean-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="whitespace-nowrap">
                The <span className="text-blue-400">Agentic AI Platform</span>
              </span>{" "}
              for Maritime Trade
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vessel Match transforms chaotic emails into structured insights,
              real-time AI-powered matches, and actionable market
              intelligence—powered by an AI Agent that understands your
              business.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white glow"
              >
                Experience the AI Agent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                Request a Demo
              </Button>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              {!isPlaying && (
                <>
                  <Image
                    src="/vm-video-placeholder.png"
                    alt="Vessel Match AI CRM Promo Video"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <button
                    onClick={handlePlayToggle}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-40"
                  >
                    <Play className="w-16 h-16 text-white" />
                  </button>
                </>
              )}
              {isPlaying && (
                <ReactPlayer
                  ref={playerRef}
                  url="https://www.youtube.com/watch?v=yBCJVwjMqBI"
                  playing={playing}
                  controls={false}
                  width="100%"
                  height="100%"
                  onPause={() => handlePlayPause()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
