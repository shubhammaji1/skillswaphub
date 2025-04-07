"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, Phone, Video, MoreHorizontal } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
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
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can we reschedule our JavaScript lesson to tomorrow?",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the Spanish lesson! It was very helpful.",
      time: "Monday",
      unread: false,
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
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageInput.trim()) {
      // In a real app, this would send the message to the backend
      setMessageInput("")
    }
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Messages</h1>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Chat list sidebar */}
          <div className="w-80 border-r bg-background">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2 px-2">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  className={`w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors ${
                    selectedChat === chat.id ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={chat.avatar} alt={chat.name} />
                      <AvatarFallback>
                        {chat.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {chat.unread && <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{chat.name}</h3>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className="border-b p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={chats.find((c) => c.id === selectedChat)?.avatar}
                        alt={chats.find((c) => c.id === selectedChat)?.name}
                      />
                      <AvatarFallback>
                        {chats
                          .find((c) => c.id === selectedChat)
                          ?.name.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-medium">{chats.find((c) => c.id === selectedChat)?.name}</h2>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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

                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages
                      .filter((m) => m.chatId === selectedChat)
                      .map((message) => (
                        <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[70%] rounded-lg px-4 py-2 ${
                              message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p>{message.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"
                              }`}
                            >
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="border-t p-4">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
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
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">Select a conversation</h2>
                  <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

