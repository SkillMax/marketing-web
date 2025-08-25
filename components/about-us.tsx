import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Students",
    description: "Learners from around the world",
  },
  {
    icon: BookOpen,
    value: "1,000+",
    label: "Expert Courses",
    description: "Across various disciplines",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Students achieve their goals",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global learning community",
  },
]

export function AboutUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Empowering Learners Worldwide</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Skillmax, we believe that quality education should be accessible to everyone, everywhere. Our mission
                is to democratize learning by providing world-class courses taught by industry experts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a global community of lifelong learners who can adapt, grow, and thrive in an ever-changing
                world. We envision a future where anyone can acquire new skills and advance their career through
                accessible, high-quality online education.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Excellence:</strong> We maintain the highest standards in course quality and student
                    experience
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Accessibility:</strong> Learning should be available to everyone, regardless of background
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Innovation:</strong> We continuously evolve our platform and teaching methods
                  </span>
                </li>
              </ul>
            </div>

            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src="/diverse-team-of-educators-and-students-collaborati.png"
                alt="Skillmax Team"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="border-0 bg-card">
                    <CardContent className="p-4 text-center space-y-2">
                      <Icon className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="font-semibold text-sm">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
