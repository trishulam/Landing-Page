import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <Link href="/" className="block mb-4">
              <span className="text-3xl font-bold text-foreground">
                VesselMatch
              </span>
            </Link>
            <p className="text-muted-foreground">
              Transforming maritime operations with AI-powered intelligence and real-time analytics.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Subscribe</h4>
            <p className="text-muted-foreground mb-4">Stay updated with the latest maritime insights and features.</p>
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/50 border-border/50 focus:border-[#4F7FFF]"
              />
              <Button className="bg-[#4F7FFF] hover:bg-[#4F7FFF]/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VesselMatch. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#4F7FFF] transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#4F7FFF]/5 blur-[120px] rounded-full" />
    </footer>
  )
}

