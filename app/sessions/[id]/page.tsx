"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageSquare, Mic, MicOff, Camera, CameraOff, ScreenShare, PhoneOff } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"

export default function SessionPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = Number(params.id)

  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ id: number; sender: string; content: string; time: string }[]>([])

  // Mock data for the session
  const session = {
    id: 1,
    title: "JavaScript Basics",
    with: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Today",
    time: "3:00 PM - 4:00 PM",
    type: "Teaching",
    status: "In Progress",
    duration: 60, // minutes
    topic: "Variables, Functions, and Control Flow",
    notes:
      "We'll cover the fundamentals of JavaScript including variables, data types, functions, and basic control flow structures.",
  }

  useEffect(() => {
    // In a real app, this would connect to a WebRTC service
    // and set up the video call

    // Mock chat messages
    const initialMessages = [
      {
        id: 1,
        sender: "Sarah Johnson",
        content: "Hi there! Ready to start our JavaScript session?",
        time: "3:00 PM",
      },
      {
        id: 2,
        sender: "You",
        content: "Yes, I'm all set! Looking forward to learning about functions.",
        time: "3:01 PM",
      },
    ]

    setChatMessages(initialMessages)

    // Cleanup function
    return () => {
      // In a real app, this would disconnect from the WebRTC service
    }
  }, [])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: "You",
        content: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChatMessages([...chatMessages, newMessage])
      setChatMessage("")
    }
  }

  const handleEndCall = () => {
    // In a real app, this would disconnect the call
    // and navigate to a feedback/rating page
    router.push(`/sessions/${sessionId}/feedback`)
  }

  if (!session) {
    return (
      <div className="flex min-h-screen bg-muted/30">
        <DashboardNav />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Session not found</h2>
            <p className="text-muted-foreground mb-4">The session you're looking for doesn't exist or has ended.</p>
            <Button asChild>
              <Link href="/schedule">Back to Schedule</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center py-4">
            <Link href="/schedule" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">{session.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>with {session.with}</span>
                <span className="mx-2">•</span>
                <span>{session.time}</span>
                <span className="mx-2">•</span>
                <Badge variant="outline" className="ml-1">
                  {session.status}
                </Badge>
              </div>
            </div>
            <div className="ml-auto">
              <Button variant="destructive" size="sm" onClick={handleEndCall}>
                <PhoneOff className="h-4 w-4 mr-2" />
                End Session
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 container py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardContent className="flex-1 p-0 relative">
                <div className="bg-black h-[60vh] rounded-t-lg flex items-center justify-center relative">
                  {/* Main video (other participant) */}
                  <div className="text-white text-center">
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                      <AvatarImage src={session.avatar} alt={session.with} />
                      <AvatarFallback>
                        {session.with
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xl">{session.with}</p>
                  </div>

                  {/* Self video (small overlay) */}
                  <div className="absolute bottom-4 right-4 w-48 h-36 bg-muted rounded-lg flex items-center justify-center">
                    {isVideoOn ? (
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt="You" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <CameraOff className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm">Camera Off</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className={!isAudioOn ? "bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600" : ""}
                    onClick={() => setIsAudioOn(!isAudioOn)}
                  >
                    {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={!isVideoOn ? "bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600" : ""}
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={isScreenSharing ? "bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600" : ""}
                    onClick={() => setIsScreenSharing(!isScreenSharing)}
                  >
                    <ScreenShare className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={handleEndCall}>
                    <PhoneOff className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Tabs defaultValue="chat" className="h-full flex flex-col">
              <TabsList className="mb-4">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="info">Session Info</TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="flex-1 flex flex-col">
                <Card className="flex-1 flex flex-col">
                  <CardHeader>
                    <CardTitle>Chat</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto">
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          {message.sender !== "You" && (
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={session.avatar} alt={message.sender} />
                              <AvatarFallback>
                                {message.sender
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div className={`flex-1 ${message.sender === "You" ? "text-right" : ""}`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{message.sender}</span>
                              <span className="text-xs text-muted-foreground">{message.time}</span>
                            </div>
                            <div
                              className={`p-3 rounded-lg ${
                                message.sender === "You" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                              }`}
                            >
                              {message.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                      <Textarea
                        placeholder="Type a message..."
                        className="min-h-[40px] resize-none"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                      />
                      <Button type="submit" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Session Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">Topic</h3>
                      <p className="text-muted-foreground">{session.topic}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Duration</h3>
                      <p className="text-muted-foreground">{session.duration} minutes</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Session Type</h3>
                      <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>{session.type}</Badge>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Notes</h3>
                      <p className="text-muted-foreground">{session.notes}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/sessions/${sessionId}/reschedule`}>Reschedule Session</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

