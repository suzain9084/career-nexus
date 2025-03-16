"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, TrendingDown, DollarSign, Users, MapPin, Download } from "lucide-react"

export function JobMarketInsights() {
  const [selectedRole, setSelectedRole] = useState("software-engineer")
  const [selectedLocation, setSelectedLocation] = useState("united-states")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Job Market Insights</h2>
          <p className="text-muted-foreground">Explore salary trends, demand, and required skills for various roles</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search roles..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Filter Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software-engineer">Software Engineer</SelectItem>
                  <SelectItem value="data-scientist">Data Scientist</SelectItem>
                  <SelectItem value="product-manager">Product Manager</SelectItem>
                  <SelectItem value="ux-designer">UX Designer</SelectItem>
                  <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="united-states">United States</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="remote">Remote Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Experience Level</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                  <SelectItem value="executive">Executive Level (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Industry</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Size</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="startup">Startup (1-50)</SelectItem>
                  <SelectItem value="small">Small (51-200)</SelectItem>
                  <SelectItem value="medium">Medium (201-1000)</SelectItem>
                  <SelectItem value="large">Large (1000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Software Engineer</CardTitle>
              <CardDescription>United States • All Experience Levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="salary">Salary</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Average Salary</p>
                            <p className="text-2xl font-bold">$112,500</p>
                          </div>
                          <DollarSign className="h-8 w-8 text-primary opacity-70" />
                        </div>
                        <div className="mt-2 flex items-center text-xs text-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+5.2% from last year</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Job Openings</p>
                            <p className="text-2xl font-bold">125,430</p>
                          </div>
                          <Users className="h-8 w-8 text-primary opacity-70" />
                        </div>
                        <div className="mt-2 flex items-center text-xs text-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+12.8% from last year</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Remote Jobs</p>
                            <p className="text-2xl font-bold">42%</p>
                          </div>
                          <MapPin className="h-8 w-8 text-primary opacity-70" />
                        </div>
                        <div className="mt-2 flex items-center text-xs text-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>+8.5% from last year</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Role Description</h3>
                    <p className="text-muted-foreground">
                      Software Engineers design, develop, and maintain software systems and applications. They work
                      across the full software development lifecycle, from requirements gathering to deployment and
                      maintenance. The role requires strong problem-solving skills and proficiency in programming
                      languages and development tools.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Top Industries Hiring</h3>
                        <ul className="space-y-1">
                          <li className="flex justify-between text-sm">
                            <span>Technology</span>
                            <span>42%</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Finance</span>
                            <span>18%</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Healthcare</span>
                            <span>12%</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>E-commerce</span>
                            <span>10%</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Other</span>
                            <span>18%</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Top Locations</h3>
                        <ul className="space-y-1">
                          <li className="flex justify-between text-sm">
                            <span>San Francisco, CA</span>
                            <span>$145K</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Seattle, WA</span>
                            <span>$135K</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>New York, NY</span>
                            <span>$130K</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Austin, TX</span>
                            <span>$115K</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span>Remote</span>
                            <span>$125K</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="salary" className="pt-4">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground">Entry Level</p>
                          <p className="text-2xl font-bold">$85,000</p>
                          <p className="text-xs text-muted-foreground">0-2 years experience</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground">Mid Level</p>
                          <p className="text-2xl font-bold">$115,000</p>
                          <p className="text-xs text-muted-foreground">3-5 years experience</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground">Senior Level</p>
                          <p className="text-2xl font-bold">$145,000</p>
                          <p className="text-xs text-muted-foreground">5+ years experience</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Salary by Company Size</h3>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Startup (1-50 employees)</span>
                            <span>$95,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Small (51-200 employees)</span>
                            <span>$105,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Medium (201-1000 employees)</span>
                            <span>$120,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Large (1000+ employees)</span>
                            <span>$135,000</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Additional Compensation</h3>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Average Bonus</span>
                            <span>$15,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Stock Options/RSUs</span>
                            <span>$25,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Profit Sharing</span>
                            <span>$5,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="pt-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Most In-Demand Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "Python",
                          "React",
                          "Node.js",
                          "AWS",
                          "TypeScript",
                          "Docker",
                          "Kubernetes",
                          "SQL",
                          "Git",
                          "CI/CD",
                          "REST APIs",
                        ].map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Emerging Skills (Highest Growth)</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Rust", "WebAssembly", "GraphQL", "Terraform", "Golang", "Machine Learning"].map(
                          (skill, index) => (
                            <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200 text-sm">
                              {skill}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Declining Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {["jQuery", "PHP", "Angular.js", "CoffeeScript", "Perl"].map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Skill Premium (Salary Boost)</h3>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Machine Learning</span>
                            <span>+15%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Kubernetes</span>
                            <span>+12%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Rust</span>
                            <span>+10%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>GraphQL</span>
                            <span>+8%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>TypeScript</span>
                            <span>+7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trends" className="pt-4">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Industry Growth Forecast</h3>
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-sm mb-2">
                          Software Engineer roles are projected to grow by 22% over the next decade, much faster than
                          the average for all occupations.
                        </p>
                        <div className="flex items-center text-sm text-green-500">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span>Strong long-term outlook</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Emerging Job Titles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted rounded-lg p-4">
                          <h4 className="font-medium text-sm">Machine Learning Engineer</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Combines software engineering with data science to build AI systems
                          </p>
                          <div className="mt-2 flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+45% growth</span>
                          </div>
                        </div>

                        <div className="bg-muted rounded-lg p-4">
                          <h4 className="font-medium text-sm">Cloud Infrastructure Engineer</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Specializes in designing and maintaining cloud-based infrastructure
                          </p>
                          <div className="mt-2 flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+38% growth</span>
                          </div>
                        </div>

                        <div className="bg-muted rounded-lg p-4">
                          <h4 className="font-medium text-sm">DevSecOps Engineer</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Integrates security practices within the DevOps process
                          </p>
                          <div className="mt-2 flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+35% growth</span>
                          </div>
                        </div>

                        <div className="bg-muted rounded-lg p-4">
                          <h4 className="font-medium text-sm">Blockchain Developer</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Develops and implements blockchain-based solutions
                          </p>
                          <div className="mt-2 flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>+30% growth</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Industry Shifts</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Increased demand for engineers with AI/ML experience across all industries</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>
                            Healthcare and fintech sectors showing fastest growth in software engineering roles
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Remote work options becoming standard rather than a perk</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <TrendingDown className="h-4 w-4 text-red-500 mt-0.5" />
                          <span>Decreasing demand for pure front-end roles without full-stack capabilities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

