import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MentorCard } from "@/components/mentor-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter } from "lucide-react"

export default function MentorsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Find Your Mentor</h1>

      <div className="grid gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        {/* Filters sidebar */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Search</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search mentors..." className="w-full pl-8" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Specialty</h3>
            <div className="space-y-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software-development">Software Development</SelectItem>
                  <SelectItem value="product-management">Product Management</SelectItem>
                  <SelectItem value="ux-design">UX Design</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="leadership">Leadership</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Experience Level</h3>
            <div className="space-y-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                  <SelectItem value="mid-level">Mid-level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (5-10 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Availability</h3>
            <div className="space-y-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekdays">Weekdays</SelectItem>
                  <SelectItem value="evenings">Evenings</SelectItem>
                  <SelectItem value="weekends">Weekends</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Price Range</h3>
            <div className="space-y-1">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="low">$1-$50 per session</SelectItem>
                  <SelectItem value="medium">$51-$100 per session</SelectItem>
                  <SelectItem value="high">$100+ per session</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full">
            <Filter className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="all">All Mentors</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="new">Newly Added</TabsTrigger>
              </TabsList>

              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                  <SelectItem value="rating-low">Rating: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map((mentor, index) => (
                  <MentorCard
                    key={index}
                    name={mentor.name}
                    title={mentor.title}
                    specialty={mentor.specialty}
                    rating={mentor.rating}
                    reviews={mentor.reviews}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.slice(0, 3).map((mentor, index) => (
                  <MentorCard
                    key={index}
                    name={mentor.name}
                    title={mentor.title}
                    specialty={mentor.specialty}
                    rating={mentor.rating}
                    reviews={mentor.reviews}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.slice(3, 6).map((mentor, index) => (
                  <MentorCard
                    key={index}
                    name={mentor.name}
                    title={mentor.title}
                    specialty={mentor.specialty}
                    rating={mentor.rating}
                    reviews={mentor.reviews}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.slice(6, 9).map((mentor, index) => (
                  <MentorCard
                    key={index}
                    name={mentor.name}
                    title={mentor.title}
                    specialty={mentor.specialty}
                    rating={mentor.rating}
                    reviews={mentor.reviews}
                    imageUrl={mentor.imageUrl}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

const mentors = [
  {
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    specialty: "Web Development",
    rating: 4.9,
    reviews: 124,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    title: "Product Manager",
    specialty: "Product Strategy",
    rating: 4.8,
    reviews: 98,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    title: "UX Designer",
    specialty: "User Experience",
    rating: 4.7,
    reviews: 86,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Priya Patel",
    title: "Data Scientist",
    specialty: "Machine Learning",
    rating: 4.9,
    reviews: 112,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    title: "Marketing Director",
    specialty: "Digital Marketing",
    rating: 4.6,
    reviews: 75,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Wilson",
    title: "Engineering Manager",
    specialty: "Leadership",
    rating: 4.8,
    reviews: 92,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "James Taylor",
    title: "Frontend Developer",
    specialty: "React & UI Development",
    rating: 4.7,
    reviews: 68,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sophia Martinez",
    title: "Startup Founder",
    specialty: "Entrepreneurship",
    rating: 4.9,
    reviews: 104,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Robert Chen",
    title: "Backend Engineer",
    specialty: "System Architecture",
    rating: 4.8,
    reviews: 89,
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]

