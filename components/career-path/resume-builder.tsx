"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Trash2, Download, FileText, Sparkles, Eye, EyeOff, X } from "lucide-react"

export function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("personal")
  const [skills, setSkills] = useState<string[]>(["JavaScript", "React", "Node.js", "CSS"])
  const [currentSkill, setCurrentSkill] = useState("")
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "TechCorp Inc.",
      position: "Frontend Developer",
      startDate: "2020-06",
      endDate: "2023-01",
      current: false,
      description:
        "Developed and maintained responsive web applications using React and TypeScript. Collaborated with UX designers to implement user-friendly interfaces.",
    },
  ])
  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2016-09",
      endDate: "2020-05",
      current: false,
      description: "Focused on software engineering and web development. Graduated with honors.",
    },
  ])

  const addSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill])
      setCurrentSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setExperiences([...experiences, newExperience])
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setEducation([...education, newEducation])
  }

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    setEducation(education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">AI-Powered Resume Builder</h2>
          <p className="text-muted-foreground">Create a professional resume tailored to your target role</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Professional Title</Label>
                  <Input id="job-title" placeholder="Frontend Developer" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website/Portfolio</Label>
                  <Input id="website" placeholder="https://johndoe.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Experienced frontend developer with 5+ years of experience building responsive web applications..."
                  className="min-h-[120px]"
                />
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="mt-2">
                    <Sparkles className="h-3 w-3 mr-2" />
                    Generate with AI
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setActiveTab("experience")}>Next: Experience</Button>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6 pt-4">
              {experiences.map((exp, index) => (
                <Card key={exp.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Work Experience {index + 1}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeExperience(exp.id)}
                        disabled={experiences.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`company-${exp.id}`}>Company</Label>
                        <Input
                          id={`company-${exp.id}`}
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          placeholder="Company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`position-${exp.id}`}>Position</Label>
                        <Input
                          id={`position-${exp.id}`}
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                          placeholder="Job title"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                        <Input
                          id={`start-date-${exp.id}`}
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`end-date-${exp.id}`} className={exp.current ? "text-muted-foreground" : ""}>
                          End Date
                        </Label>
                        <Input
                          id={`end-date-${exp.id}`}
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          disabled={exp.current}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`current-job-${exp.id}`}
                        checked={exp.current}
                        onCheckedChange={(checked) => updateExperience(exp.id, "current", checked)}
                      />
                      <Label htmlFor={`current-job-${exp.id}`}>I currently work here</Label>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`description-${exp.id}`}>Description</Label>
                      <Textarea
                        id={`description-${exp.id}`}
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        placeholder="Describe your responsibilities and achievements..."
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="mt-2">
                          <Sparkles className="h-3 w-3 mr-2" />
                          Enhance with AI
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button variant="outline" className="w-full" onClick={addExperience}>
                <Plus className="h-4 w-4 mr-2" />
                Add Another Experience
              </Button>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setActiveTab("personal")}>
                  Previous: Personal
                </Button>
                <Button onClick={() => setActiveTab("education")}>Next: Education</Button>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6 pt-4">
              {education.map((edu, index) => (
                <Card key={edu.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Education {index + 1}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeEducation(edu.id)}
                        disabled={education.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                        <Input
                          id={`institution-${edu.id}`}
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          placeholder="University or school name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${edu.id}`}>Degree/Certificate</Label>
                        <Input
                          id={`degree-${edu.id}`}
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Degree or certificate earned"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`edu-start-date-${edu.id}`}>Start Date</Label>
                        <Input
                          id={`edu-start-date-${edu.id}`}
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-end-date-${edu.id}`}
                          className={edu.current ? "text-muted-foreground" : ""}
                        >
                          End Date
                        </Label>
                        <Input
                          id={`edu-end-date-${edu.id}`}
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                          disabled={edu.current}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`current-edu-${edu.id}`}
                        checked={edu.current}
                        onCheckedChange={(checked) => updateEducation(edu.id, "current", checked)}
                      />
                      <Label htmlFor={`current-edu-${edu.id}`}>I'm currently studying here</Label>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`edu-description-${edu.id}`}>Description</Label>
                      <Textarea
                        id={`edu-description-${edu.id}`}
                        value={edu.description}
                        onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                        placeholder="Describe your studies, achievements, relevant coursework..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button variant="outline" className="w-full" onClick={addEducation}>
                <Plus className="h-4 w-4 mr-2" />
                Add Another Education
              </Button>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setActiveTab("experience")}>
                  Previous: Experience
                </Button>
                <Button onClick={() => setActiveTab("skills")}>Next: Skills</Button>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Expertise</CardTitle>
                  <CardDescription>Add skills that are relevant to your target role</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Add Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                      <Button type="button" onClick={addSkill} variant="secondary">
                        Add
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1 py-1.5">
                          {skill}
                          <X className="h-3 w-3 cursor-pointer ml-1" onClick={() => removeSkill(skill)} />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>AI Skill Suggestions</Label>
                      <Button variant="outline" size="sm">
                        <Sparkles className="h-3 w-3 mr-2" />
                        Generate Suggestions
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {["TypeScript", "Redux", "GraphQL", "Tailwind CSS", "Jest", "CI/CD", "Git"].map(
                        (skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="cursor-pointer hover:bg-secondary"
                            onClick={() => {
                              if (!skills.includes(skill)) {
                                setSkills([...skills, skill])
                              }
                            }}
                          >
                            + {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language-1">Language</Label>
                      <Input id="language-1" defaultValue="English" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="proficiency-1">Proficiency</Label>
                      <Select defaultValue="native">
                        <SelectTrigger id="proficiency-1">
                          <SelectValue placeholder="Select proficiency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="native">Native</SelectItem>
                          <SelectItem value="fluent">Fluent</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="basic">Basic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Language
                  </Button>
                </CardContent>
              </Card>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setActiveTab("education")}>
                  Previous: Education
                </Button>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Resume
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted aspect-[8.5/11] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <EyeOff className="h-8 w-8 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground mt-2">Preview will appear here</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Resume Assistant</CardTitle>
              <CardDescription>Get AI-powered suggestions to improve your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                <Sparkles className="h-4 w-4 mr-2" />
                Optimize for ATS
              </Button>
              <Button className="w-full" variant="outline">
                <Sparkles className="h-4 w-4 mr-2" />
                Improve Bullet Points
              </Button>
              <Button className="w-full" variant="outline">
                <Sparkles className="h-4 w-4 mr-2" />
                Tailor to Job Description
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Use action verbs to start bullet points (e.g., "Developed," "Implemented")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Quantify achievements with numbers when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Keep your resume to 1-2 pages maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Tailor your resume for each job application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Use keywords from the job description to pass ATS screening</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

interface Education {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

