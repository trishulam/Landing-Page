import { Card } from "@/components/ui/card"

const stats = [
  {
    number: "98%",
    label: "Accuracy Rate",
    description: "In vessel-cargo matching",
  },
  {
    number: "2.5x",
    label: "Faster Matching",
    description: "Than traditional methods",
  },
  {
    number: "24/7",
    label: "Real-time Monitoring",
    description: "Global coverage",
  },
  {
    number: "150+",
    label: "Ports Covered",
    description: "Worldwide network",
  },
]

export default function Statistics() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glassmorphism card-gradient border-border/50 p-6 relative group hover:border-[#4F7FFF]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#4F7FFF]/0 via-transparent to-[#4F7FFF]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-[#4F7FFF] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-[#4F7FFF]/5 blur-[120px] rounded-full" />
    </section>
  )
}

