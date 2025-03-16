import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Briefcase, DollarSign, MapPin, BarChart, Heart, Star, BookmarkPlus } from "lucide-react"

export function CareerPathResults() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recommended Career Paths</h2>
        <p className="text-muted-foreground">Based on your profile</p>
      </div>

      <Tabs defaultValue="match">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="match">Best Match</TabsTrigger>
            <TabsTrigger value="growth">Highest Growth</TabsTrigger>
            <TabsTrigger value="salary">Highest Salary</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="match" className="space-y-6 mt-6">
          {careerPaths.map((career, index) => (
            <CareerPathCard key={index} career={career} />
          ))}
        </TabsContent>

        <TabsContent value="growth" className="space-y-6 mt-6">
          {careerPaths
            .sort((a, b) => b.growthRate - a.growthRate)
            .map((career, index) => (
              <CareerPathCard key={index} career={career} />
            ))}
        </TabsContent>

        <TabsContent value="salary" className="space-y-6 mt-6">
          {careerPaths
            .sort((a, b) => b.salaryRange.max - a.salaryRange.max)
            .map((career, index) => (
              <CareerPathCard key={index} career={career} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface CareerPath {
  title: string
  description: string
  matchPercentage: number
  skillsMatch: {
    existing: string[]
    needed: string[]
  }
  salaryRange: {
    min: number
    max: number
  }
  growthRate: number
  workLifeBalance: number
  education: {
    required: string
    timeToAcquire: string
  }
  locationOptions: string[]
}

function CareerPathCard({ career }: { career: CareerPath }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{career.title}</CardTitle>
            <CardDescription className="mt-1">{career.description}</CardDescription>
          </div>
          <Badge className="bg-primary/10 text-primary">{career.matchPercentage}% Match</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                Skills Match
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Your matching skills</span>
                    <span className="text-muted-foreground">{career.skillsMatch.existing.length} skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {career.skillsMatch.existing.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Skills to develop</span>
                    <span className="text-muted-foreground">{career.skillsMatch.needed.length} skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {career.skillsMatch.needed.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-muted">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Education & Training
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">Required education</span>
                  <span className="text-sm font-medium">{career.education.required}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Time to acquire skills</span>
                  <span className="text-sm font-medium">{career.education.timeToAcquire}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Salary & Growth
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">Salary range</span>
                  <span className="text-sm font-medium">
                    ${career.salaryRange.min}k - ${career.salaryRange.max}k
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Industry growth rate</span>
                  <span className="text-sm font-medium">{career.growthRate}% per year</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-primary" />
                Work-Life Balance
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Rating</span>
                  <span>{career.workLifeBalance}/10</span>
                </div>
                <Progress value={career.workLifeBalance * 10} className="h-2" />
              </div>
            </div>

            <div>
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location Options
              </h3>
              <div className="flex flex-wrap gap-2">
                {career.locationOptions.map((location, index) => (
                  <Badge key={index} variant="secondary">
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <BarChart className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <div className="space-x-2">
          <Button variant="outline">
            <BookmarkPlus className="h-4 w-4 mr-2" />
            Save Path
          </Button>
          <Button>
            <Star className="h-4 w-4 mr-2" />
            Explore This Career
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

const careerPaths: CareerPath[] = [
  {
    title: "Data Scientist",
    description:
      "Analyze complex data to help organizations make better decisions through statistical analysis, machine learning, and data visualization.",
    matchPercentage: 92,
    skillsMatch: {
      existing: ["Python", "Statistics", "Problem Solving", "Communication"],
      needed: ["Machine Learning", "SQL", "Data Visualization", "Big Data Technologies"],
    },
    salaryRange: {
      min: 90,
      max: 150,
    },
    growthRate: 22,
    workLifeBalance: 7,
    education: {
      required: "Bachelor's or Master's in related field",
      timeToAcquire: "6-12 months with your background",
    },
    locationOptions: ["Remote", "Hybrid", "On-site"],
  },
  {
    title: "UX/UI Designer",
    description:
      "Create intuitive, accessible, and visually appealing user experiences for digital products through research, wireframing, and prototyping.",
    matchPercentage: 85,
    skillsMatch: {
      existing: ["Visual Design", "Communication", "Problem Solving"],
      needed: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    salaryRange: {
      min: 75,
      max: 120,
    },
    growthRate: 15,
    workLifeBalance: 8,
    education: {
      required: "Bachelor's or certification in design",
      timeToAcquire: "3-9 months with your background",
    },
    locationOptions: ["Remote", "Hybrid", "On-site"],
  },
  {
    title: "Product Manager",
    description:
      "Lead the development of products from conception to launch, balancing business needs with technical constraints and user experience.",
    matchPercentage: 78,
    skillsMatch: {
      existing: ["Communication", "Problem Solving", "Strategic Thinking"],
      needed: ["Product Development", "Market Research", "Agile Methodologies", "Stakeholder Management"],
    },
    salaryRange: {
      min: 85,
      max: 140,
    },
    growthRate: 18,
    workLifeBalance: 6,
    education: {
      required: "Bachelor's in business or related field",
      timeToAcquire: "6-12 months with your background",
    },
    locationOptions: ["Hybrid", "On-site"],
  },
]

