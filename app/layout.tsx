import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import MouseFollowEffect from "@/components/mouse-follow-effect"
import AnimatedBackground from "@/components/animated-background"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VesselMatch - AI-Driven Maritime Operations Platform",
  description: "Revolutionize your maritime operations with VesselMatch's AI-powered analytics and real-time insights.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <AnimatedBackground />
        <MouseFollowEffect />
        {children}
      </body>
    </html>
  )
}

