import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MentorMatchingForm } from "@/components/mentorship/mentor-matching-form"
import { MentorResults } from "@/components/mentorship/mentor-results"
import { LiveQASessions } from "@/components/mentorship/live-qa-sessions"
import { CommunityForum } from "@/components/mentorship/community-forum"

export default function MentorshipPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">Mentorship & Networking Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with industry experts, participate in community discussions, and find the perfect mentor to guide your
          career journey.
        </p>
      </div>

      <Tabs defaultValue="mentor-matching" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="mentor-matching">Mentor Matching</TabsTrigger>
          <TabsTrigger value="community">Community Forum</TabsTrigger>
          <TabsTrigger value="live-qa">Live Q&A Sessions</TabsTrigger>
          <TabsTrigger value="my-mentors">My Mentors</TabsTrigger>
        </TabsList>

        <TabsContent value="mentor-matching" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
            <MentorMatchingForm />
            <MentorResults />
          </div>
        </TabsContent>

        <TabsContent value="community">
          <CommunityForum />
        </TabsContent>

        <TabsContent value="live-qa">
          <LiveQASessions />
        </TabsContent>

        <TabsContent value="my-mentors">
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-2">You haven't connected with any mentors yet</h3>
            <p className="text-muted-foreground mb-6">
              Use our AI-powered mentor matching system to find the perfect mentor for your needs.
            </p>
            <Tabs defaultValue="mentor-matching">
              <TabsTrigger value="mentor-matching">Find Mentors</TabsTrigger>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

