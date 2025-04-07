"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Phone, Video, MoreHorizontal, ArrowLeft } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import Link from "next/link"

export default function MessageDetailPage() {
  const params = useParams()
  const chatId = Number(params.id)
  const [messageInput, setMessageInput] = useState("")

  // Mock data for the messages page
  const chats = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "That sounds great! I'm looking forward to our session.",
      time: "10:30 AM",
      unread: true,
      status: "Online",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can we reschedule our JavaScript lesson to tomorrow?",
      time: "Yesterday",
      unread: false,
      status: "Last seen 2h ago",
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the Spanish lesson! It was very helpful.",
      time: "Monday",
      unread: false,
      status: "Last seen yesterday",
    },
  ]

  const messages = [
    {
      id: 1,
      chatId: 1,
      sender: "Sarah Johnson",
      content: "Hi there! I saw that you're interested in learning photography.",
      time: "10:15 AM",
      isMe: false,
    },
    {
      id: 2,
      chatId: 1,
      sender: "Me",
      content: "Yes, I've been wanting to improve my photography skills for a while now.",
      time: "10:18 AM",
      isMe: true,
    },
    {
      id: 3,
      chatId: 1,
      sender: "Sarah Johnson",
      content: "Great! I'd be happy to teach you the basics. In return, I see you're good at web development?",
      time: "10:22 AM",
      isMe: false,
    },
    {
      id: 4,
      chatId: 1,
      sender: "Me",
      content: "I can help you with HTML, CSS, and JavaScript. Would you like to schedule a session?",
      time: "10:25 AM",
      isMe: true,
    },
    {
      id: 5,
      chatId: 1,
      sender: "Sarah Johnson",
      content: "That sounds great! I'm looking forward to our session.",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 6,
      chatId: 2,
      sender: "Michael Chen",
      content: "Hey, how's it going with the JavaScript exercises I sent you?",
      time: "Yesterday",
      isMe: false,
    },
    {
      id: 7,
      chatId: 2,
      sender: "Me",
      content: "I've completed most of them, but I'm stuck on the async/await part.",
      time: "Yesterday",
      isMe: true,
    },
    {
      id: 8,
      chatId: 2,
      sender: "Michael Chen",
      content:
        "No problem, we can go over that in our next session. Speaking of which, can we reschedule our JavaScript lesson to tomorrow?",
      time: "Yesterday",
      isMe: false,
    },
    {
      id: 9,
      chatId: 3,
      sender: "Priya Patel",
      content: "¡Hola! ¿Cómo estás hoy?",
      time: "Monday",
      isMe: false,
    },
    {
      id: 10,
      chatId: 3,
      sender: "Me",
      content: "¡Estoy bien, gracias! Estoy practicando mi español todos los días.",
      time: "Monday",
      isMe: true,
    },
    {
      id: 11,
      chatId: 3,
      sender: "Priya Patel",
      content: "¡Muy bien! Tu español está mejorando mucho. Thanks for the Spanish lesson! It was very helpful.",
      time: "Monday",
      isMe: false,
    },
  ]

  const currentChat = chats.find((chat) => chat.id === chatId)
  const chatMessages = messages.filter((message) => message.chatId === chatId)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageInput.trim()) {
      // In a real app, this would send the message to the backend
      setMessageInput("")
    }
  }

  if (!currentChat) {
    return (
      <div className="flex min-h-screen bg-muted/30">
        <DashboardNav />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Chat not found</h2>
            <p className="text-muted-foreground mb-4">
              The conversation you're looking for doesn't exist or has been deleted.
            </p>
            <Button asChild>
              <Link href="/messages">Back to Messages</Link>
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
            <Link href="/messages" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={currentChat.avatar} alt={currentChat.name} />
                <AvatarFallback>
                  {currentChat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium">{currentChat.name}</h2>
                <p className="text-xs text-muted-foreground">{currentChat.status}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4 max-w-3xl mx-auto">
            {chatMessages.map((message) => (
              <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                {!message.isMe && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarImage src={currentChat.avatar} alt={currentChat.name} />
                    <AvatarFallback>
                      {currentChat.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2 max-w-3xl mx-auto">
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

