"use client"

import { motion } from "framer-motion"
import { Mail, BarChart2, Bot, Handshake } from "lucide-react"

const steps = [
  {
    icon: Mail,
    title: "Extract & Structure Data",
    description: "Emails turn into organized vessel & cargo listings automatically.",
  },
  {
    icon: BarChart2,
    title: "Analyze Market Trends",
    description: "Track supply, demand, and trade flows effortlessly.",
  },
  {
    icon: Handshake,
    title: "Match & Optimize",
    description: "Identify the best vessel-cargo pairings in real time.",
  },
  {
    icon: Bot,
    title: "Take Action Faster",
    description: "Circulate listings, track deals, and make smarter decisions—all in one place.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It <span className="text-blue-400">Works</span>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/20 transform -translate-x-1/2" />
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-blue-900 font-bold text-sm mr-4 md:mr-0 z-10">
        {index + 1}
      </div>
      <div className="flex-1 md:grid md:grid-cols-8 items-center bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 ml-4 md:ml-0 hover:bg-gray-800/70 transition-all duration-300">
        <div className="col-span-3 mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-full bg-blue-400/10 flex items-center justify-center mb-4 md:mb-0 mx-auto md:mx-0">
            <step.icon className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="col-span-5 md:pl-4">
          <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

