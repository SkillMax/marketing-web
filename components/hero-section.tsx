import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 lg:py-32">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary rotate-45"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-primary/20 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Start Learning Today with <span className="text-primary">Skillmax</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Unlock your potential with our comprehensive online courses. Learn from industry experts and advance
                your career with practical, hands-on training.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif text-base px-8"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-serif text-base px-8 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/modern-e-learning-platform-dashboard-with-courses-.png"
                alt="Skillmax Learning Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-secondary-foreground font-bold text-lg">AI</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold">JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
