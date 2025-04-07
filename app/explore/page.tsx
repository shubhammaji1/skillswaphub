"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import MatchCard from "@/components/match-card"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState("")

  // Mock data for the explore page
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
    {
      id: 4,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      skillsToTeach: ["Guitar", "Music Theory"],
      skillsToLearn: ["Cooking", "Photography"],
      rating: 4.6,
      matchPercentage: 82,
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      skillsToTeach: ["Yoga", "Meditation"],
      skillsToLearn: ["Digital Marketing", "Graphic Design"],
      rating: 4.9,
      matchPercentage: 79,
    },
  ]

  const handleAddSkill = () => {
    if (skillInput.trim() && !selectedSkills.includes(skillInput.trim())) {
      setSelectedSkills([...selectedSkills, skillInput.trim()])
      setSkillInput("")
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Explore Skills</h1>
          </div>
        </header>

        <main className="container py-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Find Your Perfect Skill Match</CardTitle>
              <CardDescription>Search for people who can teach you skills or learn from you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by skill, name, or keyword..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="match">Match Percentage</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="recent">Recently Active</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-medium">Skills I want to learn:</p>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Add a skill..."
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <Button size="sm" variant="ghost" className="absolute right-1 top-1 h-6" onClick={handleAddSkill}>
                      Add
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedSkills.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No skills selected. Add skills to find better matches.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Skills</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="arts">Arts & Music</TabsTrigger>
              <TabsTrigger value="fitness">Fitness & Health</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </TabsContent>

            <TabsContent value="tech" className="space-y-4">
              {matches
                .filter((match) =>
                  match.skillsToTeach.some((skill) => ["JavaScript", "React", "Web Development"].includes(skill)),
                )
                .map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
            </TabsContent>

            <TabsContent value="languages" className="space-y-4">
              {matches
                .filter((match) => match.skillsToTeach.some((skill) => ["Spanish", "French"].includes(skill)))
                .map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
            </TabsContent>

            <TabsContent value="arts" className="space-y-4">
              {matches
                .filter((match) =>
                  match.skillsToTeach.some((skill) => ["Piano", "Music Theory", "Guitar"].includes(skill)),
                )
                .map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
            </TabsContent>

            <TabsContent value="fitness" className="space-y-4">
              {matches
                .filter((match) => match.skillsToTeach.some((skill) => ["Yoga", "Meditation"].includes(skill)))
                .map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

