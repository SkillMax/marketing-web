import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { Categories } from "@/components/categories"
import { Subscriptions } from "@/components/subscriptions"
import { Testimonials } from "@/components/testimonials"
import { AboutUs } from "@/components/about-us"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <Categories />
        <Subscriptions />
        <Testimonials />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
