export function StatsSection() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-primary">10k+</h3>
          <p className="text-muted-foreground">Active Mentors</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-primary">50k+</h3>
          <p className="text-muted-foreground">Career Paths Found</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-primary">95%</h3>
          <p className="text-muted-foreground">Satisfaction Rate</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-primary">200+</h3>
          <p className="text-muted-foreground">Industries Covered</p>
        </div>
      </div>
    </section>
  )
}

