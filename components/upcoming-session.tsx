import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video } from "lucide-react"

interface UpcomingSessionProps {
  session: {
    id: number
    title: string
    with: string
    avatar: string
    date: string
    time: string
    type: "Teaching" | "Learning"
  }
}

export default function UpcomingSession({ session }: UpcomingSessionProps) {
  return (
    <div className="border rounded-lg p-4">
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
        <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>{session.type}</Badge>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-3">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {session.date}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          {session.time}
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="sm" asChild>
          <Link href={`/sessions/${session.id}`}>
            <Video className="h-4 w-4 mr-2" />
            Join Session
          </Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href={`/sessions/${session.id}/reschedule`}>Reschedule</Link>
        </Button>
      </div>
    </div>
  )
}

