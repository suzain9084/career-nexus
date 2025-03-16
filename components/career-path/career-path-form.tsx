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
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function CareerPathForm() {
  const [interests, setInterests] = useState<string[]>([])
  const [currentInterest, setCurrentInterest] = useState("")

  const addInterest = () => {
    if (currentInterest && !interests.includes(currentInterest)) {
      setInterests([...interests, currentInterest])
      setCurrentInterest("")
    }
  }

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addInterest()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Discover Your Ideal Career Path</CardTitle>
        <CardDescription>Our AI will analyze your profile and suggest personalized career paths.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-field">Current Field/Industry</Label>
          <Select>
            <SelectTrigger id="current-field">
              <SelectValue placeholder="Select your current field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="education-level">Education Level</Label>
          <Select>
            <SelectTrigger id="education-level">
              <SelectValue placeholder="Select your education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="associates">Associate's Degree</SelectItem>
              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
              <SelectItem value="masters">Master's Degree</SelectItem>
              <SelectItem value="phd">PhD or Doctorate</SelectItem>
              <SelectItem value="bootcamp">Bootcamp/Certification</SelectItem>
              <SelectItem value="self-taught">Self-taught</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Interests & Passions</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add an interest or passion"
              value={currentInterest}
              onChange={(e) => setCurrentInterest(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="button" onClick={addInterest} variant="secondary">
              Add
            </Button>
          </div>
          {interests.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {interest}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeInterest(interest)} />
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Current Skills</Label>
          <Textarea
            id="skills"
            placeholder="List your current skills, separated by commas..."
            className="min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Work-Life Balance Importance</Label>
          <div className="pt-2">
            <Slider defaultValue={[7]} max={10} step={1} className="mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Less Important</span>
              <span>Very Important</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Salary Expectations</Label>
          <div className="pt-2">
            <Slider defaultValue={[70]} max={200} step={10} className="mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$40k</span>
              <span>$100k</span>
              <span>$150k+</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location-preference">Location Preference</Label>
          <Select>
            <SelectTrigger id="location-preference">
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remote">Fully Remote</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Find Career Paths</Button>
      </CardFooter>
    </Card>
  )
}

