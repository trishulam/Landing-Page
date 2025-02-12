import { Activity, Brain, Zap } from "lucide-react"

const insights = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "AI-driven forecasts for optimal decision-making",
    stat: "98% accuracy",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast data analysis and insights",
    stat: "<10ms latency",
  },
  {
    icon: Activity,
    title: "Market Pulse",
    description: "Stay ahead with live market trends and analysis",
    stat: "24/7 monitoring",
  },
]

export default function AIInsights() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">AI-Powered</span> Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gray-900/50 ring-1 ring-gray-800/50 rounded-lg p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-[-5px] glassmorphism">
                <insight.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                <p className="text-gray-400 mb-4">{insight.description}</p>
                <span className="text-2xl font-bold text-blue-400">{insight.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

