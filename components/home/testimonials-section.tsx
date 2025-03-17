import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Hear from professionals who have transformed their careers with our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
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
              <p className="mt-4 text-sm font-medium">{testimonial.outcome}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Ayush Kaushik",
    role: "Product Manager at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The AI career path finder suggested product management as a perfect match for my skills. I connected with an amazing mentor who guided me through the transition from engineering.",
    outcome: "Increased salary by 35% after career change",
  },
  {
    name: "Suzain",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The skill assessment identified gaps in my knowledge that I wasn't aware of. My mentor helped me create a learning plan that fast-tracked my development as a frontend specialist.",
    outcome: "Landed a senior role at a top tech company",
  },
  {
    name: "Ansh Gupta",
    role: "Startup Founder",
    avatar: "/ansh-gupta.jpg?height=40&width=40",
    content:
      "The mentorship program connected me with experienced entrepreneurs who provided invaluable advice on launching my startup. The community forums were also incredibly helpful.",
    outcome: "Successfully secured seed funding for my startup",
  },
]

