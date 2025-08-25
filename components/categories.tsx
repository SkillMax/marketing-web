import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Palette, Brain, Camera, TrendingUp, Shield, Smartphone } from "lucide-react"

const categories = [
  {
    icon: Code,
    title: "Web Development",
    description: "Frontend, Backend, Full-Stack",
    courses: 245,
    color: "text-blue-600",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Analytics, ML, Statistics",
    courses: 189,
    color: "text-green-600",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Graphic Design",
    courses: 156,
    color: "text-pink-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deep Learning, NLP, Computer Vision",
    courses: 134,
    color: "text-purple-600",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Digital, Portrait, Landscape",
    courses: 98,
    color: "text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Business",
    description: "Marketing, Finance, Management",
    courses: 167,
    color: "text-red-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Ethical Hacking, Network Security",
    courses: 87,
    color: "text-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "iOS, Android, React Native",
    courses: 123,
    color: "text-teal-600",
  },
]

export function Categories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of course categories and start your learning journey today
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card hover:bg-background"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="text-xs text-primary font-medium">{category.courses} courses</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
