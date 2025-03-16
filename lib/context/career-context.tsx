"use client"

import { createContext, useState, type ReactNode } from "react"

interface CareerPath {
  id: string
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

interface CareerContextType {
  careerPaths: CareerPath[]
  savedPaths: string[] // Array of career path IDs
  isLoading: boolean
  findCareerPaths: (userProfile: any) => Promise<void>
  savePath: (pathId: string) => void
  removePath: (pathId: string) => void
}

const CareerContext = createContext<CareerContextType | undefined>(undefined)

export function CareerProvider({ children }: { children: ReactNode }) {
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([])
  const [savedPaths, setSavedPaths] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const findCareerPaths = async (userProfile: any) => {
    setIsLoading(true)
    
    // In a real app, this would be an API call to get career recommendations
    // For now, we'll simulate a delay and return mock data
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock career paths based on user profile
    const mockPaths: CareerPath[] = [
      {
        id: "1",
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make better decisions through statistical analysis, machine learning, and data visualization.",
        matchPercentage: 92,
        skillsMatch: {
          existing: ["Python", "Statistics", "Problem Solving", "Communication"],
          needed: ["Machine Learning", "SQL", "Data Visualization", "Big Data Technologies"]
        },
        salaryRange: {
          min: 90,
          max: 150
        },
        growthRate: 22,
        workLifeBalance: 7,
        education: {
          required: "Bachelor's or Master's in related field",
          timeToAcquire: "6-12 months with your background"
        },
        locationOptions: ["Remote", "Hybrid", "On-site"]
      },
      {
        id: "2",
        title: "UX/UI Designer",
        description: "Create intuitive, accessible, and visually appealing user experiences for digital products through research, wireframing, and prototyping.",
        matchPercentage: 85,
        skillsMatch: {
          existing: ["Visual Design", "Communication", "Problem Solving"],
          needed: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
        },
        salaryRange: {
          min: 75,
          max: 120
        },
        growthRate: 15,
        workLifeBalance: 8,
        education: {
          required: "Bachelor's or certification in design",
          timeToAcquire: "3-9 months with your background"
        },
        locationOptions: ["Remote", "Hybrid", "On-site"]
      },
      {
        id: "3",
        title: "Product Manager",\
        description: "Lead the development of products from conception to launch, balancing business needs with technical constraints

