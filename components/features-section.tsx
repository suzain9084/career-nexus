import { BookOpen, Calendar, MessageSquare, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need for effective mentorship
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools necessary for a successful mentoring relationship
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Matching</h3>
            <p className="text-center text-muted-foreground">
              Our algorithm connects you with mentors who match your goals and learning style
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Session Scheduling</h3>
            <p className="text-center text-muted-foreground">
              Easily book and manage mentoring sessions with integrated calendar tools
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure Messaging</h3>
            <p className="text-center text-muted-foreground">
              Communicate seamlessly with your mentor through our encrypted messaging system
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary/10 p-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Resource Sharing</h3>
            <p className="text-center text-muted-foreground">
              Exchange documents, links, and learning materials to enhance your mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

