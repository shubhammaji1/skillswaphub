'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px] items-center">
          {/* Text Block */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Exchange Skills, Grow Together
              </h1>
              <p className="max-w-xl text-muted-foreground text-lg md:text-xl">
                SkillSwapHub connects you with people who want to learn what you know and teach what you want to learn.
                No money, just knowledge exchange.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-200">
                  Get Started
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto hover:scale-105 transition-transform duration-200"
                >
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Card Block */}
          <motion.div
            className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
           <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl">
                <div className="bg-white/80 dark:bg-background/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-[90%] max-w-lg transition-all duration-300">
                  
                  {/* Match Header */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-primary">Skill Match Found!</h2>
                    <p className="text-sm text-muted-foreground">You've got a perfect learning partner.</p>
                  </div>

                  {/* Offered Skill Card */}
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:shadow-md transition hover:scale-[1.02] mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      JS
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">JavaScript Basics</h3>
                      <p className="text-sm text-muted-foreground">Offered by Alex</p>
                    </div>
                  </div>

                  {/* Wanted Skill Card */}
                  <div className="flex items-center gap-4 p-4 bg-blue-100/40 rounded-lg hover:shadow-md transition hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-lg">
                      YG
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">Yoga for Beginners</h3>
                      <p className="text-sm text-muted-foreground">Wanted by Alex</p>
                    </div>
                  </div>

                  {/* Match Footer */}
                  {/* <div className="mt-6 text-center">
                    <span className="text-sm font-medium text-green-600 animate-pulse">
                     Perfect Match!
                    </span>
                  </div> */}
                </div>
              </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
