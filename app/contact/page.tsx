'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef } from "react"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    const name = formData.get("name")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const message = formData.get("message")?.toString().trim()

    if (!name || !email || !message) {
      alert("Please fill in all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission
    console.log({ name, email, message })
    alert("Message sent successfully!")

    form.reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SkillSwapHub
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/explore" className="text-sm font-medium hover:text-primary">Explore</Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">How It Works</Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">Community</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login"><Button variant="ghost" size="sm">Log in</Button></Link>
            <Link href="/signup"><Button size="sm">Sign up</Button></Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <Input name="name" required placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <Input name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <Textarea name="message" rows={5} required placeholder="Write your message here..." />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </main>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-lg">SkillSwapHub</span>
            <p className="text-sm text-muted-foreground">Exchange skills, grow together. © 2025</p>
          </div>
          <div className="flex gap-8">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
