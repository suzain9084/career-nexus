"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface UserProfile {
  id: string
  name: string
  email: string
  skills: string[]
  interests: string[]
  education: {
    level: string
    field: string
  }
  experience: string
}

interface UserContextType {
  user: UserProfile | null
  isLoading: boolean
  setUser: (user: UserProfile | null) => void
  updateUserProfile: (data: Partial<UserProfile>) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading user data
  useState(() => {
    // In a real app, this would be an API call to get the user profile
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })

  const updateUserProfile = (data: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...data })
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, isLoading, setUser, updateUserProfile, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

