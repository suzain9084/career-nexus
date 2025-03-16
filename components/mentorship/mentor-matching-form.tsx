"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function MentorMatchingForm() {
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState("")

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Find Your Perfect Mentor</CardTitle>
        <CardDescription>
          Our AI will match you with mentors based on your skills, goals, and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="career-field">Career Field</Label>
          <Select>
            <SelectTrigger id="career-field">
              <SelectValue placeholder="Select your field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software-development">Software Development</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="product-management">Product Management</SelectItem>
              <SelectItem value="ux-design">UX Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="business">Business & Entrepreneurship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience-level">Experience Level</Label>
          <Select>
            <SelectTrigger id="experience-level">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
              <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
              <SelectItem value="advanced">Advanced (5-10 years)</SelectItem>
              <SelectItem value="expert">Expert (10+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Skills & Interests</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a skill or interest"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="button" onClick={addSkill} variant="secondary">
              Add
            </Button>
          </div>
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals">Career Goals</Label>
          <Textarea
            id="goals"
            placeholder="Describe your short and long-term career goals..."
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mentor-experience">Preferred Mentor Experience</Label>
          <div className="pt-2">
            <Slider defaultValue={[7]} max={20} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 year</span>
              <span>5 years</span>
              <span>10 years</span>
              <span>15+ years</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="session-type">Preferred Session Type</Label>
          <Select>
            <SelectTrigger id="session-type">
              <SelectValue placeholder="Select session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one-on-one">One-on-One Mentoring</SelectItem>
              <SelectItem value="group">Group Sessions</SelectItem>
              <SelectItem value="project-based">Project-Based Mentoring</SelectItem>
              <SelectItem value="code-review">Code/Portfolio Reviews</SelectItem>
              <SelectItem value="career-advice">Career Advice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="availability" />
          <Label htmlFor="availability">Only show mentors available this week</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Find Mentors</Button>
      </CardFooter>
    </Card>
  )
}

