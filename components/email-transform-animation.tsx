"use client"

import { useState, useEffect } from "react"
import { Mail, FileText, BarChart2, Zap } from "lucide-react"

export default function EmailTransformAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 glassmorphism rounded-lg p-4 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <Mail className={`w-12 h-12 ${step >= 0 ? "text-blue-400" : "text-gray-400"} transition-colors duration-500`} />
        <Arrow />
        <FileText
          className={`w-12 h-12 ${step >= 1 ? "text-blue-400" : "text-gray-400"} transition-colors duration-500`}
        />
        <Arrow />
        <BarChart2
          className={`w-12 h-12 ${step >= 2 ? "text-blue-400" : "text-gray-400"} transition-colors duration-500`}
        />
        <Arrow />
        <Zap className={`w-12 h-12 ${step >= 3 ? "text-blue-400" : "text-gray-400"} transition-colors duration-500`} />
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

