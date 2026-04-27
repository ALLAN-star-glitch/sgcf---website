// app/contact/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Twitter, Linkedin, Instagram, 
  CheckCircle, Calendar, Send, TrendingUp, Users
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Africana College of Professionals",
  description: "Contact Africana College of Professionals. Have questions about our professional courses? Reach out via phone, email, or visit our campus in Thika, Kenya.",
  keywords: [
    "contact Africana College",
    "Africana College phone number",
    "Africana College email",
    "college contact Kenya",
    "Thika college contact",
    "Africana College location",
    "reach Africana College",
    "college customer service Kenya",
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://www.acop.co.ke/contact",
  },
  openGraph: {
    title: "Contact Us | Africana College of Professionals",
    description: "Get in touch with Africana College of Professionals. Call, email, or visit our campus in Thika, Kenya. We're here to help you start your journey.",
    url: "https://www.acop.co.ke/contact",
    siteName: "Africana College of Professionals",
    type: "website",
    images: [
      {
        url: "https://www.acop.co.ke/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Africana College of Professionals - We're here to help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Africana College of Professionals",
    description: "Get in touch with us. We're here to answer your questions.",
    images: ["https://www.acop.co.ke/contact-og.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Have questions about our programs? Reach out to us. We&apos;re here to help you start your journey.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Call, email, or visit us — we&apos;re ready to assist you
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-purple-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
                <p className="text-white/80 text-sm">Fill out the form and we&apos;ll get back to you shortly.</p>
              </div>
              <div className="p-6">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-800">Quick Contact</h3>
              </div>
              <div className="space-y-3 ml-12">
                <p>
                  <a href="tel:+254756234165" className="text-gray-600 hover:text-orange-600 transition-colors">
                    +254 756 234 165
                  </a>
                </p>
                <p>
                  <a href="mailto:info@acop.co.ke" className="text-gray-600 hover:text-orange-600 transition-colors">
                    info@acop.co.ke
                  </a>
                </p>
                <p className="text-gray-600">Kyanjau House, 4th Floor, Thika, Kenya</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-2 ml-12">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold text-gray-800">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                Connect With Us
              </h3>
              <div className="flex gap-3">
                <a href="https://facebook.com/acop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/acop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/acop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/acop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl p-5 border border-orange-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                Why Choose Africana College?
              </h3>
              <div className="space-y-2">
                {[
                  "TVET-accredited institution",
                  "Flexible learning (Virtual & Physical)",
                  "Experienced lecturers & mentors",
                  "Affordable payment plans",
                  "Internship & job placement support",
                  "Modern learning facilities"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Intake Card */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-5 border border-green-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Upcoming Intake
              </h3>
              <p className="text-2xl font-bold text-green-700 mb-2">May 2026 Intake</p>
              <p className="text-sm text-gray-600 mb-3">Applications are now open! Limited seats available.</p>
              <Link 
                href="/get-started" 
                className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
              >
                Get Started
                <Send className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Quick Facts
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Graduates</span>
                  <span className="font-semibold text-gray-800">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Active Courses</span>
                  <span className="font-semibold text-gray-800">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Qualified Instructors</span>
                  <span className="font-semibold text-gray-800">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Student Satisfaction</span>
                  <span className="font-semibold text-gray-800">95%</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center pt-2">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  TVET Accredited
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Industry Recognized
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Quality Assured
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="relative h-[300px] w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d37.084!3d-1.043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDInMzUuMCJTIDM3wrAwNCc1OC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Africana College Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <p className="text-sm text-gray-600">
              📍 Kyanjau House, 4th Floor, Next to Unaitas Bank, Along Kwame Nkrumah Road, Thika Town, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <div className="mt-8 mb-12 mx-4">
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-orange-600 to-purple-700 rounded-2xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Professional Journey?</h3>
          <p className="text-white/90 mb-6">
            Join Africana College of Professionals and take the first step towards a rewarding career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-started" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link href="/courses" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}