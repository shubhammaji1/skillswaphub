"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, ThumbsUp, Share2, Flag, Filter, Plus } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for the community page
  const discussions = [
    {
      id: 1,
      title: "Tips for teaching programming to beginners?",
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 hours ago",
      content:
        "I'm going to start teaching JavaScript to someone who has never coded before. Any advice on how to make the learning process smoother and more engaging?",
      tags: ["Teaching", "Programming", "JavaScript"],
      likes: 24,
      comments: 12,
    },
    {
      id: 2,
      title: "Best resources for learning photography?",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Yesterday",
      content:
        "I'm looking for recommendations on books, courses, or YouTube channels that helped you improve your photography skills. Specifically interested in portrait photography.",
      tags: ["Learning", "Photography", "Resources"],
      likes: 18,
      comments: 9,
    },
    {
      id: 3,
      title: "How to structure language exchange sessions?",
      author: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "3 days ago",
      content:
        "I've been doing language exchanges for Spanish and English, but I feel like our sessions could be more structured. How do you organize your language exchange sessions?",
      tags: ["Languages", "Exchange", "Structure"],
      likes: 32,
      comments: 15,
    },
  ]

  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      organizer: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "March 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Online (Zoom)",
      attendees: 45,
      description: "Learn the basics of HTML, CSS, and JavaScript in this beginner-friendly workshop.",
    },
    {
      id: 2,
      title: "Photography Walk",
      organizer: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "March 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Golden Gate Park, San Francisco",
      attendees: 12,
      description: "Join us for a photography walk in the park. All skill levels welcome!",
    },
  ]

  const groups = [
    {
      id: 1,
      name: "JavaScript Learners",
      members: 234,
      description: "A group for people learning JavaScript and web development.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Language Exchange Hub",
      members: 456,
      description: "Connect with others for language exchange in multiple languages.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Photography Enthusiasts",
      members: 189,
      description: "Share tips, get feedback, and improve your photography skills.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Community</h1>
          </div>
        </header>

        <main className="container py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/4">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search discussions, events, and groups..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="discussions">
                <TabsList className="mb-6">
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="groups">Groups</TabsTrigger>
                </TabsList>

                <TabsContent value="discussions" className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={discussion.avatar} alt={discussion.author} />
                            <AvatarFallback>
                              {discussion.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-lg">{discussion.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>{discussion.author}</span>
                                  <span>•</span>
                                  <span>{discussion.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-2">{discussion.content}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {discussion.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-4 mt-4">
                              <Button variant="ghost" size="sm" className="gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {discussion.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <MessageSquare className="h-4 w-4" />
                                {discussion.comments}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                                Share
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Flag className="h-4 w-4" />
                                Report
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="events" className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/4 bg-muted rounded-md flex items-center justify-center p-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{event.date.split(",")[0].split(" ")[1]}</div>
                              <div className="text-sm">{event.date.split(",")[0].split(" ")[0]}</div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{event.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <span>Organized by {event.organizer}</span>
                              <span>•</span>
                              <span>{event.attendees} attending</span>
                            </div>
                            <p className="mt-2">{event.description}</p>
                            <div className="mt-3 space-y-1 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Date & Time:</span> {event.date}, {event.time}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Location:</span> {event.location}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm">Attend</Button>
                              <Button variant="outline" size="sm">
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="groups" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groups.map((group) => (
                    <Card key={group.id}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img
                              src={group.image || "/placeholder.svg"}
                              alt={group.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} members</p>
                            <p className="text-sm mt-2">{group.description}</p>
                            <Button size="sm" className="mt-3">
                              Join Group
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Photography</Badge>
                    <Badge variant="secondary">Languages</Badge>
                    <Badge variant="secondary">Teaching</Badge>
                    <Badge variant="secondary">Learning</Badge>
                    <Badge variant="secondary">Music</Badge>
                    <Badge variant="secondary">Cooking</Badge>
                    <Badge variant="secondary">Art</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex gap-3">
                      <div className="bg-muted rounded-md flex items-center justify-center p-2 w-12 h-12">
                        <div className="text-center">
                          <div className="text-sm font-bold">{event.date.split(",")[0].split(" ")[1]}</div>
                          <div className="text-xs">{event.date.split(",")[0].split(" ")[0]}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {event.date}, {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Be respectful and kind to others</li>
                    <li>Share knowledge freely</li>
                    <li>Give constructive feedback</li>
                    <li>No spam or self-promotion</li>
                    <li>Report inappropriate content</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" size="sm" className="px-0">
                    Read Full Guidelines
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

