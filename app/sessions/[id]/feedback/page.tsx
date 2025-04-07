"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Star, ArrowLeft } from "lucide-react"

export default function SessionFeedbackPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = Number(params.id)

  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock data for the session
  const session = {
    id: 1,
    title: "JavaScript Basics",
    with: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "Today",
    time: "3:00 PM - 4:00 PM",
    type: "Teaching",
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Link href={`/sessions/${sessionId}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <CardTitle>Session Feedback</CardTitle>
            <div className="w-8"></div> {/* For balance */}
          </div>
          <CardDescription>Rate your session and provide feedback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
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

          <div className="space-y-2">
            <h3 className="font-medium">How was your session?</h3>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                  <Star
                    className={`h-8 w-8 ${
                      star <= rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Share your experience</h3>
            <Textarea
              placeholder="What went well? What could be improved?"
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={handleSubmit} disabled={rating === 0 || isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/dashboard">Skip for now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

