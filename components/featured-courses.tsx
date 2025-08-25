import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 12500,
    duration: "40 hours",
    price: "$89.99",
    originalPrice: "$199.99",
    image: "/web-dev-bootcamp.png",
    category: "Web Development",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Data Science with Python",
    instructor: "Dr. Michael Chen",
    rating: 4.9,
    students: 8900,
    duration: "35 hours",
    price: "$79.99",
    originalPrice: "$179.99",
    image: "/data-science-python-analytics.png",
    category: "Data Science",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Rodriguez",
    rating: 4.7,
    students: 6700,
    duration: "28 hours",
    price: "$69.99",
    originalPrice: "$149.99",
    image: "/ui-ux-design-interface-mockups.png",
    category: "Design",
    level: "All Levels",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    instructor: "Prof. David Kim",
    rating: 4.8,
    students: 5400,
    duration: "45 hours",
    price: "$99.99",
    originalPrice: "$249.99",
    image: "/machine-learning-ai-algorithms.png",
    category: "AI & ML",
    level: "Advanced",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses, carefully selected to help you achieve your learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="absolute top-3 right-3 bg-background/90">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">{course.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-serif">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-serif bg-transparent">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
