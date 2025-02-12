"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "nav-blur glassmorphism" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between relative">
          <Link href="/" className="absolute left-0">
            <img 
              src="/logo_without_bg.png" 
              alt="VesselMatch Logo" 
              className="h-10 w-auto -ml-4 md:h-10 lg:h-12 xl:h-14 xl:ml-0"
            />
          </Link>
          <div className="flex items-center justify-center w-full">
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <NavLink href="#features" onClick={() => scrollToSection("features")}>
                Features
              </NavLink>
              <NavLink href="#how-it-works" onClick={() => scrollToSection("how-it-works")}>
                How It Works
              </NavLink>
              <NavLink href="#faq" onClick={() => scrollToSection("faq")}>
                FAQ
              </NavLink>
              <NavLink href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </NavLink>
            </nav>
            <div className="hidden md:block ml-auto">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 ai-glow">Book a Demo</Button>
            </div>
          </div>
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all transform duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-lg">
          <nav className="flex flex-col p-6 space-y-6">
            <NavLink 
              href="#features" 
              onClick={() => scrollToSection("features")}
              className="text-lg text-foreground/80 hover:text-blue-400"
            >
              Features
            </NavLink>
            <NavLink 
              href="#how-it-works" 
              onClick={() => scrollToSection("how-it-works")}
              className="text-lg text-foreground/80 hover:text-blue-400"
            >
              How It Works
            </NavLink>
            <NavLink 
              href="#faq" 
              onClick={() => scrollToSection("faq")}
              className="text-lg text-foreground/80 hover:text-blue-400"
            >
              FAQ
            </NavLink>
            <NavLink 
              href="#contact" 
              onClick={() => scrollToSection("contact")}
              className="text-lg text-foreground/80 hover:text-blue-400"
            >
              Contact
            </NavLink>
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 ai-glow mt-4 py-6">
              Book a Demo
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick: () => void
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-blue-400 transition-colors ai-text-glow cursor-pointer"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

