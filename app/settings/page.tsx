"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, X, Plus, Bell, Lock, CreditCard, User, Shield } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Frontend developer with 5 years of experience. I love teaching web development and learning new languages.",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const [skillsToTeach, setSkillsToTeach] = useState(["JavaScript", "React", "HTML/CSS", "Node.js", "TypeScript"])

  const [skillsToLearn, setSkillsToLearn] = useState(["Spanish", "Photography", "Public Speaking", "Guitar"])

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newMatches: true,
    messages: true,
    sessionReminders: true,
    marketingUpdates: false,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (key: string, checked: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: checked }))
  }

  const handleRemoveSkill = (type: "teach" | "learn", skill: string) => {
    if (type === "teach") {
      setSkillsToTeach((prev) => prev.filter((s) => s !== skill))
    } else {
      setSkillsToLearn((prev) => prev.filter((s) => s !== skill))
    }
  }

  const handleSaveProfile = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardNav />

      <div className="flex-1">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h1 className="text-xl font-bold">Settings</h1>
          </div>
        </header>

        <main className="container py-6">
          <Tabs defaultValue="profile">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-64 space-y-1">
                <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
                  <TabsTrigger value="profile" className="justify-start px-3 py-2 h-9 w-full">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="justify-start px-3 py-2 h-9 w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start px-3 py-2 h-9 w-full">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="security" className="justify-start px-3 py-2 h-9 w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="justify-start px-3 py-2 h-9 w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1">
                <TabsContent value="profile" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>Manage your personal information and profile settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src={profileData.avatar} alt={profileData.name} />
                            <AvatarFallback>
                              {profileData.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            size="icon"
                            variant="outline"
                            className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" size="sm">
                          Change Avatar
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" value={profileData.name} onChange={handleProfileChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={profileData.email}
                              onChange={handleProfileChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            name="bio"
                            rows={4}
                            value={profileData.bio}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            name="location"
                            value={profileData.location}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills</CardTitle>
                      <CardDescription>Manage the skills you can teach and want to learn</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Skills You Can Teach</h3>
                          <div className="flex flex-wrap gap-2">
                            {skillsToTeach.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="px-3 py-1">
                                {skill}
                                <button
                                  onClick={() => handleRemoveSkill("teach", skill)}
                                  className="ml-2 text-muted-foreground hover:text-foreground"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm" className="gap-1">
                              <Plus className="h-3 w-3" />
                              Add Skill
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">Skills You Want to Learn</h3>
                          <div className="flex flex-wrap gap-2">
                            {skillsToLearn.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="px-3 py-1">
                                {skill}
                                <button
                                  onClick={() => handleRemoveSkill("learn", skill)}
                                  className="ml-2 text-muted-foreground hover:text-foreground"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm" className="gap-1">
                              <Plus className="h-3 w-3" />
                              Add Skill
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Configure how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Notification Channels</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="email-notifications">Email Notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                            </div>
                            <Switch
                              id="email-notifications"
                              checked={notifications.email}
                              onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="push-notifications">Push Notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                            </div>
                            <Switch
                              id="push-notifications"
                              checked={notifications.push}
                              onCheckedChange={(checked) => handleNotificationChange("push", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="sms-notifications">SMS Notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                            </div>
                            <Switch
                              id="sms-notifications"
                              checked={notifications.sms}
                              onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Notification Types</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="new-matches">New Matches</Label>
                            <Switch
                              id="new-matches"
                              checked={notifications.newMatches}
                              onCheckedChange={(checked) => handleNotificationChange("newMatches", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="messages">Messages</Label>
                            <Switch
                              id="messages"
                              checked={notifications.messages}
                              onCheckedChange={(checked) => handleNotificationChange("messages", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="session-reminders">Session Reminders</Label>
                            <Switch
                              id="session-reminders"
                              checked={notifications.sessionReminders}
                              onCheckedChange={(checked) => handleNotificationChange("sessionReminders", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="marketing-updates">Marketing Updates</Label>
                            <Switch
                              id="marketing-updates"
                              checked={notifications.marketingUpdates}
                              onCheckedChange={(checked) => handleNotificationChange("marketingUpdates", checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security</CardTitle>
                      <CardDescription>Manage your account security and password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Change Password</h3>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                              <p className="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                              </p>
                            </div>
                            <Switch id="two-factor" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Sessions</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">You're currently logged in on these devices:</p>
                          <div className="border rounded-md p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">Current Session</p>
                                <p className="text-sm text-muted-foreground">
                                  Chrome on macOS • San Francisco, CA • Last active now
                                </p>
                              </div>
                              <Badge>Current</Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            Log Out of All Other Sessions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={handleSaveProfile} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="billing" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing</CardTitle>
                      <CardDescription>Manage your subscription and payment methods</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Current Plan</h3>
                        <div className="border rounded-md p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h4 className="font-medium">Free Plan</h4>
                              <p className="text-sm text-muted-foreground">Basic features for skill exchange</p>
                            </div>
                            <Badge>Current</Badge>
                          </div>
                          <Button variant="outline">Upgrade to Premium</Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Payment Methods</h3>
                        <p className="text-sm text-muted-foreground">No payment methods added yet.</p>
                        <Button variant="outline" size="sm">
                          Add Payment Method
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Billing History</h3>
                        <p className="text-sm text-muted-foreground">No billing history available.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

