import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Software Developer",
    company: "TechCorp",
    image: "/male-developer-headshot.png",
    rating: 5,
    content:
      "Skillmax transformed my career! The web development course was comprehensive and practical. I landed my dream job within 3 months of completing the program.",
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    company: "DataFlow Inc",
    image: "/professional-headshot-female-data-scientist.png",
    rating: 5,
    content:
      "The data science track exceeded my expectations. The instructors are industry experts, and the hands-on projects prepared me for real-world challenges.",
  },
  {
    name: "James Wilson",
    role: "UX Designer",
    company: "Creative Studio",
    image: "/male-designer-headshot.png",
    rating: 5,
    content:
      "Amazing platform! The UI/UX design course helped me transition from graphic design to UX. The portfolio projects were invaluable for job interviews.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "/professional-headshot-female-product-manager.png",
    rating: 5,
    content:
      "Skillmax offers the perfect blend of theory and practice. The business courses helped me understand product strategy and user psychology better.",
  },
  {
    name: "David Rodriguez",
    role: "Cybersecurity Analyst",
    company: "SecureNet",
    image: "/professional-headshot-male-cybersecurity-analyst.png",
    rating: 5,
    content:
      "The cybersecurity program is top-notch. Real-world scenarios and hands-on labs made complex concepts easy to understand and apply.",
  },
  {
    name: "Emily Johnson",
    role: "Mobile Developer",
    company: "AppVentures",
    image: "/professional-headshot-female-mobile-developer.png",
    rating: 5,
    content:
      "Excellent mobile development courses! The React Native track helped me build cross-platform apps efficiently. Highly recommend Skillmax!",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers with Skillmax
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-3 pt-4 border-t">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
