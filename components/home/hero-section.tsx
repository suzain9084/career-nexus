import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Your Path, Connect with Mentors
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our AI-powered platform helps you find the perfect career path and connects you with mentors who can
                guide you to success.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/mentorship">Find a Mentor</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/career-path">Explore Careers</Link>
              </Button>
            </div>
          </div>
          <img
            alt="Career guidance illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            src="/placeholder.svg?height=500&width=800"
          />
        </div>
      </div>
    </section>
  )
}

