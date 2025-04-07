"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Bell, Search } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import MatchCard from "@/components/match-card"
import UpcomingSession from "@/components/upcoming-session"

export default function DashboardPage() {
  // Mock data for the dashboard
  const matches = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      skillsToTeach: ["Photography", "Adobe Lightroom"],
      skillsToLearn: ["Web Development", "JavaScript"],
      rating: 4.8,
      matchPercentage: 92,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      skillsToTeach: ["JavaScript", "React"],
      skillsToLearn: ["Spanish", "Public Speaking"],
      rating: 4.9,
      matchPercentage: 88,
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      skillsToTeach: ["Spanish", "French"],
      skillsToLearn: ["Piano", "Music Theory"],
      rating: 4.7,
      matchPercentage: 85,
    },
  ]

  const upcomingSessions = [
    {
      id: 1,
      title: "JavaScript Basics",
      with: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Tomorrow",
      time: "3:00 PM - 4:00 PM",
      type: "Teaching",
    },
    {
      id: 2,
      title: "Introduction to Photography",
      with: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Saturday, Mar 2",
      time: "10:00 AM - 11:30 AM",
      type: "Learning",
    },
  ]

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="container py-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back, John!</CardTitle>
                <CardDescription>Here's what's happening with your skill exchanges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                    <span className="text-3xl font-bold">3</span>
                    <span className="text-sm text-muted-foreground">Active Matches</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                    <span className="text-3xl font-bold">2</span>
                    <span className="text-sm text-muted-foreground">Upcoming Sessions</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                    <span className="text-3xl font-bold">5</span>
                    <span className="text-sm text-muted-foreground">Skills Teaching</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                    <span className="text-3xl font-bold">4</span>
                    <span className="text-sm text-muted-foreground">Skills Learning</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/explore">Find New Matches</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled skill exchange sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.length > 0 ? (
                  upcomingSessions.map((session) => <UpcomingSession key={session.id} session={session} />)
                ) : (
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">No upcoming sessions</p>
                    <Button variant="link" asChild>
                      <Link href="/schedule">Schedule a session</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/schedule">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Full Schedule
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Matches</CardTitle>
                <CardDescription>People who match with your skill preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recommended">
                  <TabsList className="mb-4">
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                    <TabsTrigger value="new">New</TabsTrigger>
                    <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recommended" className="space-y-4">
                    {matches.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </TabsContent>
                  <TabsContent value="new">
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">Check back soon for new matches!</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="favorites">
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">You haven't added any favorites yet</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/explore">
                    <Search className="mr-2 h-4 w-4" />
                    Explore All Matches
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

