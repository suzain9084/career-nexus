import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, MessageSquare, Video } from "lucide-react"

export function MentorResults() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recommended Mentors</h2>
        <p className="text-muted-foreground">12 matches found</p>
      </div>

      <div className="space-y-4">
        {mentors.map((mentor, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-muted p-6 flex flex-col items-center justify-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-muted-foreground">{mentor.title}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                    <span className="ml-1 text-xs text-muted-foreground">({mentor.reviews})</span>
                  </div>
                </div>

                <div className="w-full md:w-3/4 p-6">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/10">
                          {mentor.matchPercentage}% Match
                        </Badge>
                        {mentor.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-muted-foreground mb-4">{mentor.bio}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{mentor.availability}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="font-medium mr-2">Experience:</span>
                          <span>{mentor.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button>View Profile</Button>
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline">
                        <Video className="h-4 w-4 mr-2" />
                        Book Session
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load More Mentors</Button>
      </div>
    </div>
  )
}

const mentors = [
  {
    name: "Alex Johnson",
    title: "Senior Software Engineer at TechCorp",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.9,
    reviews: 124,
    matchPercentage: 95,
    skills: ["React", "Node.js", "System Design"],
    bio: "I'm passionate about helping developers level up their skills in web development. With 10+ years of experience at companies like TechCorp and StartupX, I can guide you through technical challenges and career growth.",
    availability: "Available this week",
    experience: "10+ years",
  },
  {
    name: "Sarah Chen",
    title: "Product Manager at ProductLabs",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.8,
    reviews: 98,
    matchPercentage: 92,
    skills: ["Product Strategy", "User Research", "Agile"],
    bio: "Former software engineer turned product manager. I help professionals transition into product roles and develop the strategic thinking needed to excel in product management.",
    availability: "Available next week",
    experience: "8 years",
  },
  {
    name: "Michael Rodriguez",
    title: "UX Designer & Team Lead",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.7,
    reviews: 86,
    matchPercentage: 88,
    skills: ["UI/UX Design", "User Testing", "Design Systems"],
    bio: "I lead the design team at a Fortune 500 company and have helped many junior designers develop their portfolios and land their dream jobs. I specialize in user-centered design processes.",
    availability: "Limited availability",
    experience: "12 years",
  },
]

