import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/home/hero-section"
import { FeatureCard } from "@/components/home/feature-card"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { StatsSection } from "@/components/home/stats-section"
import { Briefcase, Users, BookOpen, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Platform Features</h2>
            <p className="mt-4 text-xl text-muted-foreground">Comprehensive tools to help you grow professionally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Mentorship & Networking"
              description="Connect with industry experts who can guide you through challenges, provide feedback, and help you reach your professional goals."
              icon={<Users className="h-12 w-12 text-primary" />}
              linkText="Find a Mentor"
              linkHref="/mentorship"
              benefits={[
                "AI-powered mentor matching based on your skills and goals",
                "Live Q&A sessions with industry experts",
                "Community discussions and networking opportunities",
                "Personalized guidance for your career journey",
              ]}
            />

            <FeatureCard
              title="Career Path Finder"
              description="Discover personalized career paths based on your skills, interests, and education level with our AI-powered tools."
              icon={<Briefcase className="h-12 w-12 text-primary" />}
              linkText="Explore Careers"
              linkHref="/career-path"
              benefits={[
                "AI-generated career path recommendations",
                "Skill assessment tests to identify strengths",
                "Job market insights and salary expectations",
                "Resume and portfolio builder tools",
              ]}
            />
          </div>
        </section>

        <StatsSection />

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Our Platform?
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  We combine AI technology with human expertise to provide the most effective career development tools.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <BookOpen className="h-6 w-6 text-primary mr-2 mt-1" />
                    <div>
                      <h3 className="font-semibold">Personalized Learning</h3>
                      <p className="text-muted-foreground">Tailored guidance based on your unique skills and goals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-primary mr-2 mt-1" />
                    <div>
                      <h3 className="font-semibold">Expert Community</h3>
                      <p className="text-muted-foreground">Access to a network of industry professionals and peers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-primary mr-2 mt-1" />
                    <div>
                      <h3 className="font-semibold">AI-Powered Insights</h3>
                      <p className="text-muted-foreground">Data-driven recommendations for optimal career decisions</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/mentorship">Find a Mentor</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/career-path">Explore Careers</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Platform features illustration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="container py-12 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Accelerate Your Career?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

