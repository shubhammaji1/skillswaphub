"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import UpcomingSession from "@/components/upcoming-session"

export default function SchedulePage() {
  // Mock data for the schedule page
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

  const pastSessions = [
    {
      id: 3,
      title: "Spanish Conversation Practice",
      with: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 20, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "Learning",
    },
    {
      id: 4,
      title: "HTML & CSS Fundamentals",
      with: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 15, 2025",
      time: "4:00 PM - 5:30 PM",
      type: "Teaching",
    },
  ]

  const availabilitySlots = [
    { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Tuesday", slots: ["10:00 AM - 1:00 PM"] },
    { day: "Wednesday", slots: ["9:00 AM - 12:00 PM", "3:00 PM - 6:00 PM"] },
    { day: "Thursday", slots: ["1:00 PM - 4:00 PM"] },
    { day: "Friday", slots: ["9:00 AM - 12:00 PM"] },
    { day: "Saturday", slots: ["10:00 AM - 2:00 PM"] },
    { day: "Sunday", slots: [] },
  ]

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Schedule</h1>
          </div>
        </header>

        <main className="container py-6">
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="past">Past Sessions</TabsTrigger>
              <TabsTrigger value="availability">My Availability</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Sessions</CardTitle>
                    <CardDescription>Your scheduled skill exchange sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {upcomingSessions.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingSessions.map((session) => (
                          <UpcomingSession key={session.id} session={session} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No upcoming sessions</h3>
                        <p className="text-muted-foreground mb-4">You don't have any scheduled sessions yet.</p>
                        <Button>Schedule a Session</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Past Sessions</CardTitle>
                    <CardDescription>Your completed skill exchange sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pastSessions.length > 0 ? (
                      <div className="space-y-4">
                        {pastSessions.map((session) => (
                          <div key={session.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage src={session.avatar} alt={session.with} />
                                  <AvatarFallback>
                                    {session.with
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-medium">{session.title}</h3>
                                  <p className="text-sm text-muted-foreground">with {session.with}</p>
                                </div>
                              </div>
                              <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>
                                {session.type}
                              </Badge>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-2" />
                                {session.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                {session.time}
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                Leave Feedback
                              </Button>
                              <Button size="sm" variant="outline">
                                Schedule Again
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No past sessions</h3>
                        <p className="text-muted-foreground">You haven't completed any sessions yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="availability">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Availability</CardTitle>
                    <CardDescription>Set your available times for skill exchange sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {availabilitySlots.map((day, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">{day.day}</h3>
                            <Button variant="outline" size="sm">
                              Add Time Slot
                            </Button>
                          </div>

                          {day.slots.length > 0 ? (
                            <div className="space-y-2">
                              {day.slots.map((slot, slotIndex) => (
                                <div
                                  key={slotIndex}
                                  className="flex items-center justify-between bg-muted/50 p-2 rounded"
                                >
                                  <span>{slot}</span>
                                  <Button variant="ghost" size="sm">
                                    Remove
                                  </Button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">No availability set</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

