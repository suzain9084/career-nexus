import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from professionals who have transformed their careers through mentorship
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                Mentored by {testimonial.mentor}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Product Manager at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Working with my mentor helped me transition from engineering to product management. Their guidance was invaluable in navigating this career change.",
    mentor: "David Chen",
  },
  {
    name: "James Wilson",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "My mentor helped me improve my coding skills and guided me through building a portfolio that landed me my dream job at a top tech company.",
    mentor: "Sarah Miller",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The mentorship I received provided me with the confidence and strategic insights needed to launch my startup and secure our first round of funding.",
    mentor: "Michael Rodriguez",
  },
]

