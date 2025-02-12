"use client";

import { useState, useEffect, useRef } from "react";

interface LoadingAnimationProps {
  videoSrc: string;
  onLoadingComplete: () => void;
}

export default function LoadingAnimation({
  videoSrc,
  onLoadingComplete,
}: LoadingAnimationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 2.0;
      videoElement.play();
      videoElement.addEventListener("ended", () => {
        setIsVideoEnded(true);
        setTimeout(onLoadingComplete, 500); // Delay to allow for fade-out transition
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => setIsVideoEnded(true));
      }
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
        isVideoEnded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-screen h-screen flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            className="max-w-full max-h-full w-auto h-auto"
            style={{
              objectFit: "contain",
            }}
            playsInline
            muted
          />
        </div>
      </div>
    </div>
  );
}
