"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, MessageSquare, Video, Shield, Edit } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"

export default function ProfilePage() {
  // Mock data for the profile page
  const profile = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "San Francisco, CA",
    bio: "Frontend developer with 5 years of experience. I love teaching web development and learning new languages.",
    memberSince: "January 2025",
    rating: 4.8,
    reviewCount: 12,
    verified: true,
    skillsToTeach: ["JavaScript", "React", "HTML/CSS", "Node.js", "TypeScript"],
    skillsToLearn: ["Spanish", "Photography", "Public Speaking", "Guitar"],
    availability: [
      { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM - 12:00 PM", "3:00 PM - 6:00 PM"] },
      { day: "Friday", slots: ["9:00 AM - 12:00 PM"] },
      { day: "Saturday", slots: ["10:00 AM - 2:00 PM"] },
    ],
  }

  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "February 15, 2025",
      content:
        "John is an excellent JavaScript teacher! He explained complex concepts in a way that was easy to understand. Highly recommend!",
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "February 10, 2025",
      content: "Great React session. John is patient and knowledgeable. Looking forward to our next session.",
    },
    {
      id: 3,
      author: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "February 5, 2025",
      content:
        "John helped me understand Node.js fundamentals in just one session. He has a talent for teaching technical concepts!",
    },
  ]

  const sessions = [
    {
      id: 1,
      title: "JavaScript Basics",
      with: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 15, 2025",
      type: "Teaching",
    },
    {
      id: 2,
      title: "Introduction to Photography",
      with: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 10, 2025",
      type: "Learning",
    },
    {
      id: 3,
      title: "React Hooks Deep Dive",
      with: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 5, 2025",
      type: "Teaching",
    },
  ]

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </header>

        <main className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback>
                          {profile.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {profile.verified && (
                        <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1">
                          <Shield className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-bold">{profile.name}</h2>
                    <div className="flex items-center justify-center mt-1">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1">{profile.rating}</span>
                      </div>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{profile.reviewCount} reviews</span>
                    </div>
                    <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {profile.location}
                    </div>
                    <div className="flex items-center justify-center mt-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Member since {profile.memberSince}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" asChild>
                        <Link href="/messages/new">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/schedule/new">
                          <Video className="h-4 w-4 mr-2" />
                          Schedule
                        </Link>
                      </Button>
                    </div>
                    <Button variant="link" size="sm" className="mt-2" asChild>
                      <Link href="/settings">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Bio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{profile.bio}</p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.availability.map((day, index) => (
                      <div key={index}>
                        <h3 className="font-medium">{day.day}</h3>
                        <div className="space-y-1 mt-1">
                          {day.slots.map((slot, slotIndex) => (
                            <div key={slotIndex} className="text-sm text-muted-foreground">
                              {slot}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="skills">
                <TabsList className="mb-6">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="sessions">Past Sessions</TabsTrigger>
                </TabsList>

                <TabsContent value="skills">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Skills I Can Teach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {profile.skillsToTeach.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Skills I Want to Learn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {profile.skillsToLearn.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews</CardTitle>
                      <CardDescription>What others are saying about {profile.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarImage src={review.avatar} alt={review.author} />
                                <AvatarFallback>
                                  {review.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium">{review.author}</h3>
                                    <p className="text-sm text-muted-foreground">{review.date}</p>
                                  </div>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="mt-2">{review.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sessions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Past Sessions</CardTitle>
                      <CardDescription>Previous skill exchange sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sessions.map((session) => (
                          <div
                            key={session.id}
                            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                          >
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
                                <p className="text-sm text-muted-foreground">
                                  with {session.with} • {session.date}
                                </p>
                              </div>
                            </div>
                            <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>
                              {session.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

