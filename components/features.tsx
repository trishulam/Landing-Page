"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, BarChart2, Anchor, Bot, Search, Send, Ship, Package, Handshake } from "lucide-react"

const aiFeatures = [
  {
    icon: Mail,
    title: "Smart Email Parser",
    description: "Extracts and structures data from maritime emails automatically.",
    animation: "EmailParsingAnimation",
  },
  {
    icon: BarChart2,
    title: "Market Intelligence Dashboard",
    description: "Uncovers trade flows, demand-supply trends, and real-time opportunities.",
    animation: "IntelligenceDashboardAnimation",
  },
  {
    icon: Handshake,
    title: "Automated Vessel & Cargo Matching",
    description: "Instantly finds the best shipping opportunities—no manual searching.",
    animation: "MatchingAnimation",
  },
  {
    icon: Bot,
    title: "Your Personal Shipping Assistant",
    description: "Answers questions, suggests actions, and simplifies workflows.",
    animation: "ChatAnimation",
  },
  {
    icon: Search,
    title: "Maritime News Search Engine",
    description: "Finds and summarizes the latest market updates in seconds.",
    animation: "SearchAnimation",
  },
  {
    icon: Send,
    title: "One-Click Circulations",
    description: "Drafts and sends optimized circulation emails instantly.",
    animation: "CirculationAnimation",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-Powered <span className="text-blue-400">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the power of AI agents in every aspect of your maritime operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="feature-card glassmorphism card-gradient border-border/50 hover:border-blue-400/50 transition-all p-6 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <feature.icon className="w-10 h-10 text-blue-400 mr-4 feature-icon" />
          <h3 className="text-xl font-semibold">{feature.title}</h3>
        </div>
        <p className="text-muted-foreground flex-grow mb-4">{feature.description}</p>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <FeatureAnimation type={feature.animation} />
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

function FeatureAnimation({ type }) {
  switch (type) {
    case "EmailParsingAnimation":
      return (
        <div className="h-32 bg-gray-800 rounded-md overflow-hidden relative p-2">
          <motion.div
            className="absolute top-2 left-2 right-2 h-6 bg-gray-700 rounded flex items-center px-2"
            initial={{ width: "30%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <Mail className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-xs text-gray-300">Parsing email...</span>
          </motion.div>
          <motion.div
            className="absolute bottom-2 left-2 right-2 h-20 bg-gray-700 rounded p-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-xs text-gray-300 mb-1">Extracted Data:</div>
            <motion.div
              className="h-3 bg-blue-500/30 rounded mb-1"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.div
              className="h-3 bg-blue-500/30 rounded mb-1"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.div
              className="h-3 bg-blue-500/30 rounded"
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />
          </motion.div>
        </div>
      )
    case "IntelligenceDashboardAnimation":
      return (
        <div className="h-32 bg-gray-800 rounded-md overflow-hidden relative p-2">
          <div className="flex justify-between mb-2">
            <div className="text-xs text-gray-400">Market Trends</div>
            <div className="text-xs text-blue-400">Live Updates</div>
          </div>
          <div className="relative h-24 bg-gray-700 rounded overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0 80 Q 40 70, 80 50, 120 60, 160 30, 200 40, 240 50, 280 20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </svg>
            <motion.div
              className="absolute top-2 right-2 flex items-center"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Ship className="w-4 h-4 text-blue-400 mr-1" />
              <span className="text-xs text-blue-400">Vessel Activity</span>
            </motion.div>
            <motion.div
              className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            >
              AI Insight
            </motion.div>
          </div>
        </div>
      )
    case "MatchingAnimation":
      return <MatchingAnimation />
    case "ChatAnimation":
      return (
        <div className="h-32 bg-gray-800 rounded-md overflow-hidden p-2 flex flex-col justify-end">
          <motion.div
            className="text-xs text-gray-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            User: What's the best vessel for this cargo?
          </motion.div>
          <motion.div
            className="text-xs text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            AI: Based on your data, MV XYZ is optimal with 95% match confidence.
          </motion.div>
          <motion.div
            className="mt-2 h-6 bg-blue-500/20 rounded"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </div>
      )
    case "SearchAnimation":
      return (
        <div className="h-32 bg-gray-800 rounded-md overflow-hidden p-2">
          <div className="flex items-center bg-gray-700 rounded p-1 mb-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <motion.div
              className="h-4 bg-blue-500/30 rounded"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="h-4 bg-gray-700 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
              />
            ))}
          </motion.div>
        </div>
      )
    case "CirculationAnimation":
      return (
        <div className="h-32 bg-gray-800 rounded-md overflow-hidden p-2 flex flex-col justify-between">
          <div className="text-xs text-gray-400 mb-2">AI-Generated Email Preview</div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="h-3 bg-gray-700 rounded overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="h-full bg-blue-500/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-between items-center mt-2">
            <motion.div
              className="text-xs text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              AI Optimized
            </motion.div>
            <motion.button
              className="bg-blue-500 text-white text-xs py-1 px-2 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Circulation
            </motion.button>
          </div>
        </div>
      )
    default:
      return null
  }
}

function MatchingAnimation() {
  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatched(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-32 bg-gray-800 rounded-md overflow-hidden relative p-2">
      <div className="flex justify-between items-center h-full">
        <motion.div initial={{ x: -50 }} animate={{ x: isMatched ? 0 : -50 }} transition={{ duration: 1 }}>
          <Ship className="w-12 h-12 text-blue-400" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isMatched ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Handshake className="w-12 h-12 text-green-400" />
        </motion.div>

        <motion.div initial={{ x: 50 }} animate={{ x: isMatched ? 0 : 50 }} transition={{ duration: 1 }}>
          <Package className="w-12 h-12 text-yellow-400" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-2 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMatched ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-xs text-green-300 font-semibold bg-green-900/50 px-2 py-1 rounded-full">
          Match Found!
        </span>
      </motion.div>
    </div>
  )
}

