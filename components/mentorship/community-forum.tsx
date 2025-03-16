"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, ThumbsUp, Eye, Clock, Search, PlusCircle } from "lucide-react"

export function CommunityForum() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Community Forum</h2>
          <p className="text-muted-foreground">Connect, share, and learn with peers and mentors</p>
        </div>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Discussion
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search discussions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="responses">Most Responses</SelectItem>
                <SelectItem value="views">Most Views</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-6">
              {forumPosts.map((post, index) => (
                <ForumPostCard key={index} post={post} />
              ))}
            </TabsContent>

            <TabsContent value="career" className="space-y-4 mt-6">
              {forumPosts
                .filter((post) => post.category === "Career Development")
                .map((post, index) => (
                  <ForumPostCard key={index} post={post} />
                ))}
            </TabsContent>

            <TabsContent value="technical" className="space-y-4 mt-6">
              {forumPosts
                .filter((post) => post.category === "Technical")
                .map((post, index) => (
                  <ForumPostCard key={index} post={post} />
                ))}
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-4 mt-6">
              {forumPosts
                .filter((post) => post.category === "Mentorship")
                .map((post, index) => (
                  <ForumPostCard key={index} post={post} />
                ))}
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Discussions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeDiscussions.map((discussion, index) => (
                <div key={index} className="flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-sm">{discussion.title}</p>
                    <p className="text-xs text-muted-foreground">{discussion.responses} responses</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                    <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <p className="font-medium text-sm">{contributor.name}</p>
                    <p className="text-xs text-muted-foreground">{contributor.posts} posts</p>
                  </div>
                  <Badge variant="outline">{contributor.level}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface ForumPost {
  title: string
  preview: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  responses: number
  views: number
  likes: number
  timePosted: string
  isHot?: boolean
}

function ForumPostCard({ post }: { post: ForumPost }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-[80%] space-y-2">
            <div className="flex items-center gap-2">
              <Badge>{post.category}</Badge>
              {post.isHot && <Badge variant="destructive">Hot</Badge>}
            </div>

            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-muted-foreground">{post.preview}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{post.author.name}</span>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {post.timePosted}
              </span>
            </div>
          </div>

          <div className="md:w-[20%] flex md:flex-col justify-between md:justify-center items-center gap-4 md:border-l md:pl-4">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{post.responses}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{post.likes}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const forumPosts: ForumPost[] = [
  {
    title: "How to transition from frontend to full-stack development?",
    preview:
      "I've been working as a frontend developer for 3 years and want to expand my skills to backend. What's the best approach?",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    category: "Career Development",
    tags: ["career-change", "full-stack", "learning-path"],
    responses: 24,
    views: 342,
    likes: 56,
    timePosted: "2 hours ago",
    isHot: true,
  },
  {
    title: "Best practices for implementing authentication in React apps",
    preview:
      "I'm building a React application and need advice on secure authentication implementation. What are the current best practices?",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    category: "Technical",
    tags: ["react", "authentication", "security"],
    responses: 18,
    views: 276,
    likes: 42,
    timePosted: "5 hours ago",
  },
  {
    title: "How to find a mentor specializing in AI and machine learning?",
    preview:
      "I'm looking for guidance in the AI/ML field but having trouble finding the right mentor. Any suggestions?",
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    category: "Mentorship",
    tags: ["ai", "machine-learning", "finding-mentors"],
    responses: 12,
    views: 198,
    likes: 28,
    timePosted: "1 day ago",
  },
  {
    title: "Negotiating salary for a senior developer position",
    preview:
      "I've received an offer for a senior role but the salary seems below market rate. How should I approach negotiation?",
    author: {
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    category: "Career Development",
    tags: ["salary-negotiation", "senior-roles", "job-offers"],
    responses: 32,
    views: 412,
    likes: 67,
    timePosted: "2 days ago",
    isHot: true,
  },
]

const popularTags = [
  "career-change",
  "interview-prep",
  "react",
  "javascript",
  "python",
  "machine-learning",
  "mentorship",
  "remote-work",
  "salary-negotiation",
  "portfolio",
  "resume-tips",
  "networking",
]

const activeDiscussions = [
  {
    title: "How to prepare for system design interviews?",
    responses: 45,
  },
  {
    title: "Is a computer science degree still worth it in 2025?",
    responses: 78,
  },
  {
    title: "Best resources for learning cloud architecture?",
    responses: 32,
  },
  {
    title: "How to balance full-time work with side projects?",
    responses: 29,
  },
]

const topContributors = [
  {
    name: "David Kim",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 156,
    level: "Expert",
  },
  {
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 124,
    level: "Mentor",
  },
  {
    name: "James Taylor",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 98,
    level: "Advanced",
  },
  {
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 87,
    level: "Mentor",
  },
]

