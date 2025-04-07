"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, MessageSquare, Calendar, Settings, LogOut, Menu, X } from "lucide-react"

export default function DashboardNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Explore",
      href: "/explore",
      icon: Users,
    },
    {
      name: "Messages",
      href: "/messages",
      icon: MessageSquare,
    },
    {
      name: "Schedule",
      href: "/schedule",
      icon: Calendar,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      />

      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div
        className={`
        fixed top-0 bottom-0 left-0 z-40
        w-64 border-r bg-background p-4
        transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:z-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="py-4 text-center">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              SkillSwapHub
            </Link>
          </div>

          <nav className="space-y-2 mt-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-md text-sm
                    transition-colors
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

