import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MentorCardProps {
  name: string
  title: string
  specialty: string
  rating: number
  reviews: number
  imageUrl: string
}

export function MentorCard({ name, title, specialty, rating, reviews, imageUrl }: MentorCardProps) {
  // Get initials for avatar fallback
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="text-muted-foreground">{title}</p>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">Specialty: {specialty}</p>
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
            <span className="ml-1 text-sm text-muted-foreground">({reviews} reviews)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/mentors/${name.toLowerCase().replace(" ", "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

