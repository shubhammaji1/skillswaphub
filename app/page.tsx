"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import CTASection from "@/components/cta-section"
import { useState } from "react"
import { Menu, X, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    { href: "https://facebook.com", icon: FacebookIcon, label: "Facebook" },
    { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
    { href: "https://instagram.com", icon: InstagramIcon, label: "Instagram" },
    { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm md:bg-transparent transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SkillSwapHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/signup" className="hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/community" className="hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="/pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4">
            <Link href="/signup" className="hover:text-primary" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link href="/how-it-works" className="hover:text-primary" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link href="/community" className="hover:text-primary" onClick={() => setIsOpen(false)}>Community</Link>
            <Link href="/pricing" className="hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/login" onClick={() => setIsOpen(false)}><Button variant="ghost" size="sm">Log in</Button></Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}><Button size="sm">Sign up</Button></Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bgGradient" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#bgGradient)" />
            </svg>
          </div>
        </section>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40 py-8 md:py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <span className="text-2xl font-bold text-primary">SkillSwapHub</span>
            <p className="text-sm text-muted-foreground">
              Exchange skills, grow together. <br /> © {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-base">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Socials with Animation */}
          <div className="space-y-2">
            <h4 className="font-semibold text-base">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
