import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 1200 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 1500 },
  { name: "May", value: 1700 },
  { name: "Jun", value: 1400 },
  { name: "Jul", value: 1800 },
]

export default function MarketInsights() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real-Time <span className="text-[#4F7FFF]">Market Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay ahead of market trends with our advanced analytics and predictive insights.
          </p>
        </div>

        <Card className="glassmorphism card-gradient border-border/50 p-8">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2f3c" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4F7FFF"
                  strokeWidth={2}
                  dot={{ fill: "#4F7FFF", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4F7FFF]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#4F7FFF]/10 blur-[120px] rounded-full" />
    </section>
  )
}

