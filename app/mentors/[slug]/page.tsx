import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, Star, MessageSquare, Video, FileText, Award, Briefcase, GraduationCap } from "lucide-react"

export default function MentorProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the mentor data based on the slug
  // For this example, we'll use a mock mentor
  const mentor = {
    name: "Alex Johnson",
    title: "Senior Software Engineer at TechCorp",
    specialty: "Web Development",
    bio: "I'm a passionate software engineer with over 10 years of experience building web applications. I specialize in React, Node.js, and cloud architecture. I enjoy helping junior developers level up their skills and navigate their career paths.",
    rating: 4.9,
    reviews: 124,
    location: "San Francisco, CA",
    languages: ["English", "Spanish"],
    experience: "10+ years",
    education: "M.S. Computer Science, Stanford University",
    imageUrl: "/Alex_Johnson.jpeg?height=400&width=400",
    hourlyRate: 85,
    availability: "Evenings and weekends",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "AWS", "System Design", "Career Guidance"],
    achievements: [
      "Led engineering team for product with 1M+ users",
      "Published author on web development best practices",
      "Speaker at multiple tech conferences",
    ],
    workHistory: [
      {
        company: "TechCorp",
        role: "Senior Software Engineer",
        duration: "2019 - Present",
      },
      {
        company: "StartupX",
        role: "Full Stack Developer",
        duration: "2016 - 2019",
      },
      {
        company: "BigTech Inc",
        role: "Frontend Developer",
        duration: "2013 - 2016",
      },
    ],
  }

  return (
    <div className="container py-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <img
                src={mentor.imageUrl}
                alt={mentor.name}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <h1 className="text-3xl font-bold">{mentor.name}</h1>
                <p className="text-xl text-muted-foreground">{mentor.title}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="ml-1 font-medium">{mentor.rating}</span>
                </div>
                <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                <Badge variant="outline" className="ml-2">
                  {mentor.specialty}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{mentor.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{mentor.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{mentor.availability}</span>
                </div>
              </div>

              <p className="text-muted-foreground">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Background & Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </h3>
                    <p>{mentor.education}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Languages</h3>
                    <div className="flex gap-2">
                      {mentor.languages.map((language, index) => (
                        <Badge key={index} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Work Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mentor.workHistory.map((work, index) => (
                      <div key={index} className="border-l-2 border-muted pl-4 pb-2">
                        <h3 className="font-medium">{work.role}</h3>
                        <p className="text-muted-foreground">{work.company}</p>
                        <p className="text-sm text-muted-foreground">{work.duration}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Mentee Reviews</CardTitle>
                  <CardDescription>
                    {mentor.reviews} reviews with an average rating of {mentor.rating}/5
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Sample reviews */}
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">2 weeks ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Alex was incredibly helpful in guiding me through system design concepts. His explanations were
                        clear and he provided practical examples that helped me understand complex topics.
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Sarah Miller</p>
                            <p className="text-xs text-muted-foreground">1 month ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        I had several sessions with Alex to prepare for technical interviews. His feedback on my code
                        and approach to problem-solving was invaluable. I landed my dream job thanks to his mentorship!
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Schedule</CardTitle>
                  <CardDescription>Available {mentor.availability}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center font-medium">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 28 }).map((_, i) => (
                        <Button
                          key={i}
                          variant={i % 5 === 0 || i % 7 === 0 ? "outline" : "ghost"}
                          className="h-10 w-full"
                          disabled={i % 3 === 0}
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </div>

                    <Button className="w-full">View Full Calendar</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Book a Session</CardTitle>
              <CardDescription>${mentor.hourlyRate} per hour</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Session Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Duration</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline">30 min</Button>
                  <Button variant="outline" className="bg-primary/10">
                    60 min
                  </Button>
                  <Button variant="outline">90 min</Button>
                </div>
              </div>

              <Button className="w-full">Schedule Session</Button>

              <div className="text-center text-sm text-muted-foreground">
                Free 15-minute introduction call available
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Alex</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Request Materials
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Mentors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>JT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">James Taylor</p>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Robert Chen</p>
                  <p className="text-sm text-muted-foreground">Backend Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Emily Wilson</p>
                  <p className="text-sm text-muted-foreground">Engineering Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

