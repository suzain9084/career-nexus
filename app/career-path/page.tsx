import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CareerPathForm } from "@/components/career-path/career-path-form"
import { CareerPathResults } from "@/components/career-path/career-path-results"
import { SkillAssessment } from "@/components/career-path/skill-assessment"
import { JobMarketInsights } from "@/components/career-path/job-market-insights"
import { ResumeBuilder } from "@/components/career-path/resume-builder"

export default function CareerPathPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">AI-Powered Career Path Finder</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover personalized career paths based on your skills, interests, and education level. Get insights into job
          markets and build your professional profile.
        </p>
      </div>

      <Tabs defaultValue="career-finder" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
          <TabsTrigger value="career-finder">Career Finder</TabsTrigger>
          <TabsTrigger value="skill-assessment">Skill Assessment</TabsTrigger>
          <TabsTrigger value="job-insights">Job Market Insights</TabsTrigger>
          <TabsTrigger value="resume-builder">Resume Builder</TabsTrigger>
          <TabsTrigger value="saved-paths">Saved Paths</TabsTrigger>
        </TabsList>

        <TabsContent value="career-finder" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
            <CareerPathForm />
            <CareerPathResults />
          </div>
        </TabsContent>

        <TabsContent value="skill-assessment">
          <SkillAssessment />
        </TabsContent>

        <TabsContent value="job-insights">
          <JobMarketInsights />
        </TabsContent>

        <TabsContent value="resume-builder">
          <ResumeBuilder />
        </TabsContent>

        <TabsContent value="saved-paths">
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">You haven't saved any career paths yet</h3>
            <p className="text-muted-foreground mb-6">
              Use our AI-powered career finder to discover and save potential career paths.
            </p>
            <Tabs defaultValue="career-finder">
              <TabsTrigger value="career-finder">Explore Careers</TabsTrigger>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

