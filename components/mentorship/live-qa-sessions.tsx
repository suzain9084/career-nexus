"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Clock, Users, Send, Video } from "lucide-react"

export function LiveQASessions() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [message, setMessage] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Live Q&A Sessions</h2>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </Button>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="live">Live Now</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcomingSessions.map((session, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <img
                      src={session.image || "/placeholder.svg"}
                      alt={session.title}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <div>
                      <Badge className="mb-2">{session.category}</Badge>
                      <h3 className="text-xl font-semibold">{session.title}</h3>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{session.attendees} attending</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={session.host.avatar} alt={session.host.name} />
                        <AvatarFallback>{session.host.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{session.host.name}</p>
                        <p className="text-sm text-muted-foreground">{session.host.title}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button>Register</Button>
                      <Button variant="outline">Add to Calendar</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="live" className="mt-6">
          {activeTab === "live" && (
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2">Live Now</Badge>
                    <CardTitle>Career Transitions in Tech: From Developer to Manager</CardTitle>
                    <CardDescription>
                      Join Emily Wilson as she discusses the challenges and opportunities in transitioning from a
                      developer role to management.
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-2" />
                    Join Video
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                  <div className="bg-muted aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/manager.png?height=400&width=600"
                        alt="Live session"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-[400px]">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold">Live Chat</h3>
                    </div>
                    <ScrollArea className="flex-grow p-4">
                      <div className="space-y-4">
                        {chatMessages.map((msg, index) => (
                          <div key={index} className="flex gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={msg.avatar} alt={msg.name} />
                              <AvatarFallback>{msg.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{msg.name}</span>
                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                              </div>
                              <p className="text-sm">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Type your question..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4 mt-6">
          {pastSessions.map((session, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <img
                      src={session.image || "/placeholder.svg"}
                      alt={session.title}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {session.category}
                      </Badge>
                      <h3 className="text-xl font-semibold">{session.title}</h3>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{session.attendees} attended</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={session.host.avatar} alt={session.host.name} />
                        <AvatarFallback>{session.host.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{session.host.name}</p>
                        <p className="text-sm text-muted-foreground">{session.host.title}</p>
                      </div>
                    </div>

                    <Button variant="outline">Watch Recording</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

const upcomingSessions = [
  {
    title: "Breaking into Tech: Pathways for Career Changers",
    description: "Learn about different pathways into tech careers for those coming from non-technical backgrounds.",
    category: "Career Development",
    date: "March 25, 2025",
    time: "2:00 PM - 3:30 PM EST",
    attendees: 156,
    image: "/career_path.jpeg?height=200&width=300",
    host: {
      name: "David Kim",
      title: "Senior Recruiter at TechHire",
      avatar: "/David_Kim.jpeg?height=40&width=40",
    },
  },
  {
    title: "Mastering Technical Interviews: Data Structures & Algorithms",
    description:
      "Practical strategies for tackling technical interviews with a focus on common data structures and algorithms.",
    category: "Interview Prep",
    date: "March 28, 2025",
    time: "1:00 PM - 2:30 PM EST",
    attendees: 203,
    image: "/dsa.jpg?height=200&width=300",
    host: {
      name: "Priya Patel",
      title: "Software Engineer at BigTech",
      avatar: "/Priya_Patel.jpeg?height=40&width=40",
    },
  },
]

const pastSessions = [
  {
    title: "Building Your Personal Brand in Tech",
    description: "Strategies for developing a strong personal brand to stand out in the competitive tech industry.",
    category: "Career Development",
    date: "March 10, 2025",
    attendees: 189,
    image: "/tech.jpeg?height=200&width=300",
    host: {
      name: "James Taylor",
      title: "Developer Advocate",
      avatar: "/James_Taylor.webp?height=40&width=40",
    },
  },
  {
    title: "From Junior to Senior: Navigating Your Tech Career Path",
    description:
      "Insights on how to progress from junior to senior roles in tech, including key skills and experiences to focus on.",
    category: "Career Growth",
    date: "March 5, 2025",
    attendees: 245,
    image: "/senior.jpeg?height=200&width=300",
    host: {
      name: "Sophia Martinez",
      title: "Engineering Manager",
      avatar: "/Sophia_Martinez.jpeg?height=40&width=40",
    },
  },
]

const chatMessages = [
  {
    name: "John D.",
    message: "What's the biggest challenge you faced when transitioning to management?",
    time: "2:15 PM",
    avatar: "/james_Taylor.webp?height=32&width=32",
  },
  {
    name: "Emily Wilson",
    message:
      "Great question, John! The biggest challenge was shifting from being evaluated on my technical output to being measured by my team's success.",
    time: "2:17 PM",
    avatar: "/Emily_Wilson.jpeg?height=32&width=32",
  },
  {
    name: "Sarah L.",
    message: "How do you balance staying technical while focusing on management responsibilities?",
    time: "2:20 PM",
    avatar: "/Sarah_Chen.jpg?height=32&width=32",
  },
  {
    name: "Emily Wilson",
    message:
      "I dedicate a few hours each week to code reviews and technical discussions. It's important to stay connected to the technical work without micromanaging.",
    time: "2:22 PM",
    avatar: "/Emily_Wilson.jpeg?height=32&width=32",
  },
  {
    name: "Michael R.",
    message: "What skills should developers focus on if they want to move into management eventually?",
    time: "2:25 PM",
    avatar: "/Michael_Rodriguez.jpeg?height=32&width=32",
  },
]

