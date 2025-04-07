import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Video, Star } from "lucide-react"

interface MatchCardProps {
  match: {
    id: number
    name: string
    avatar: string
    skillsToTeach: string[]
    skillsToLearn: string[]
    rating: number
    matchPercentage: number
  }
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col md:flex-row gap-4">
      <div className="flex items-center md:items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={match.avatar} alt={match.name} />
          <AvatarFallback>
            {match.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{match.name}</h3>
            <Badge variant="outline" className="text-xs">
              {match.matchPercentage}% Match
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{match.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Can teach you:</p>
          <div className="flex flex-wrap gap-1">
            {match.skillsToTeach.map((skill, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Wants to learn:</p>
          <div className="flex flex-wrap gap-1">
            {match.skillsToLearn.map((skill, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-2 mt-2 md:mt-0">
        <Button size="sm" asChild>
          <Link href={`/messages/${match.id}`}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Message
          </Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href={`/schedule/${match.id}`}>
            <Video className="h-4 w-4 mr-2" />
            Schedule
          </Link>
        </Button>
      </div>
    </div>
  )
}

