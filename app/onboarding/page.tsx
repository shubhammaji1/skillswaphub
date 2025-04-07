"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Plus, ChevronRight, ChevronLeft } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [skillInput, setSkillInput] = useState("")
  const [learningInput, setLearningInput] = useState("")

  const [profile, setProfile] = useState({
    bio: "",
    location: "",
    availability: "",
    skillsToTeach: [] as string[],
    skillsToLearn: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddSkill = (type: "teach" | "learn") => {
    if (type === "teach" && skillInput.trim()) {
      setProfile((prev) => ({
        ...prev,
        skillsToTeach: [...prev.skillsToTeach, skillInput.trim()],
      }))
      setSkillInput("")
    } else if (type === "learn" && learningInput.trim()) {
      setProfile((prev) => ({
        ...prev,
        skillsToLearn: [...prev.skillsToLearn, learningInput.trim()],
      }))
      setLearningInput("")
    }
  }

  const handleRemoveSkill = (type: "teach" | "learn", index: number) => {
    if (type === "teach") {
      setProfile((prev) => ({
        ...prev,
        skillsToTeach: prev.skillsToTeach.filter((_, i) => i !== index),
      }))
    } else {
      setProfile((prev) => ({
        ...prev,
        skillsToLearn: prev.skillsToLearn.filter((_, i) => i !== index),
      }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, type: "teach" | "learn") => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill(type)
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Set Up Your Profile</h1>
        <p className="text-muted-foreground mt-2">Tell us about yourself and what skills you want to exchange</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between relative">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {i}
              </div>
              <span className="text-sm mt-2">
                {i === 1 ? "Basic Info" : i === 2 ? "Skills to Teach" : "Skills to Learn"}
              </span>
            </div>
          ))}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-0"></div>
          <div
            className="absolute top-5 left-0 h-0.5 bg-primary -z-0 transition-all duration-300"
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">About You</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us a bit about yourself, your background, and interests..."
                  rows={4}
                  value={profile.bio}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Country"
                  value={profile.location}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  name="availability"
                  placeholder="e.g., Weekends, Evenings, etc."
                  value={profile.availability}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skillsToTeach">Skills You Can Teach</Label>
                <div className="flex gap-2">
                  <Input
                    id="skillsToTeach"
                    placeholder="e.g., JavaScript, Yoga, Spanish..."
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "teach")}
                  />
                  <Button type="button" onClick={() => handleAddSkill("teach")} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {profile.skillsToTeach.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill("teach", index)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Tips for adding skills:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Be specific about your skill level (e.g., "Beginner Spanish")</li>
                  <li>Include how long you've practiced this skill</li>
                  <li>Add any certifications or qualifications you have</li>
                </ul>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skillsToLearn">Skills You Want to Learn</Label>
                <div className="flex gap-2">
                  <Input
                    id="skillsToLearn"
                    placeholder="e.g., Photography, Guitar, Cooking..."
                    value={learningInput}
                    onChange={(e) => setLearningInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, "learn")}
                  />
                  <Button type="button" onClick={() => handleAddSkill("learn")} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {profile.skillsToLearn.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill("learn", index)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Tips for learning skills:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Specify your current level (e.g., "Complete beginner at Guitar")</li>
                  <li>Mention specific aspects you want to learn</li>
                  <li>Be realistic about your learning goals</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={isLoading}>
            {step < 3 ? (
              <>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : isLoading ? (
              "Finalizing..."
            ) : (
              "Complete Setup"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

