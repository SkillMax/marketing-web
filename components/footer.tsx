import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg font-serif">S</span>
              </div>
              <span className="text-xl font-bold text-secondary font-serif">Skillmax</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Empowering learners worldwide with high-quality online education. Join our community and unlock your
              potential today.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Mobile Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/60">© 2024 Skillmax. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-sm text-background/60">
            <span>Made with ❤️ for learners worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
