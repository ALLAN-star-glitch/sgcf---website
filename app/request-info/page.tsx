// app/request-info/page.tsx
import { StudentConversionForm } from "@/components/StudentConversionForm";
import { getAllCourses, getCourseTypeDisplayName, Course, decodeHtmlEntities } from "@/lib/wordpress";
import { Calendar, Clock, Award, BookOpen, Users, MessageCircle, Mail, Phone, MapPin, CheckCircle, GraduationCap, Sparkles, Target, Briefcase, Heart, TrendingUp, Eye, Share2, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Request Information | Africana College of Professionals",
  description: "Interested in our programs? Fill out this form to receive information about courses, fees, and admissions at Africana College.",
  openGraph: {
    title: "Request Information | Africana College of Professionals",
    description: "Learn more about our diploma, certificate, and short courses.",
    url: "https://www.acop.co.ke/request-info",
    type: "website",
  },
};

// Helper to clean excerpt
const cleanExcerpt = (text: string | null | undefined, maxLength: number = 100): string => {
  if (!text) return '';
  const decoded = decodeHtmlEntities(text);
  const plainText = decoded.replace(/<[^>]*>/g, '');
  const cleaned = plainText.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength) + '...';
};

export default async function RequestInfoPage() {
  const allCourses = await getAllCourses();
  
  // Get diploma courses (first 4)
  const diplomaCourses = allCourses
    .filter(course => course.courseDetails?.courseType?.includes('diploma'))
    .slice(0, 4);
  
  // Get certificate courses (first 4)
  const certificateCourses = allCourses
    .filter(course => course.courseDetails?.courseType?.includes('certificate'))
    .slice(0, 4);
  
  // Get popular short courses
  const shortCourses = allCourses
    .filter(course => course.courseDetails?.courseType?.includes('short-course'))
    .slice(0, 4);

  // Get featured course for testimonial
  const featuredCourse = allCourses[0];

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
              Ready to Start Your Journey?
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Take the first step towards a rewarding career at Africana College of Professionals
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Form */}
          <div className="lg:w-2/3">
            <StudentConversionForm />
          </div>

          {/* Right Column - Dynamic Sidebar from WordPress */}
          <aside className="lg:w-1/3 space-y-6">
            
            {/* Share Buttons */}
            <ShareButtons title="Request Information - Africana College of Professionals" />

            {/* Quick Contact Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-600" />
                  </div>
                  <a href="tel:+254756234165" className="hover:text-orange-600 transition-colors">
                    +254 756 234 165
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-orange-600" />
                  </div>
                  <a href="mailto:info@acop.co.ke" className="hover:text-orange-600 transition-colors">
                    info@acop.co.ke
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-orange-600" />
                  </div>
                  <span>Kyanjau House, 4th Floor, Thika, Kenya</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl p-6 border border-orange-100">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Why Choose Africana College?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">TVET-accredited institution</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Flexible learning (Virtual & Physical)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Experienced lecturers & mentors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Affordable payment plans</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Internship & job placement support</span>
                </div>
              </div>
            </div>

            {/* Diploma Programs Card - Clickable */}
            {diplomaCourses.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  Diploma Programs
                </h3>
                <div className="space-y-3">
                  {diplomaCourses.map((course) => (
                    <Link 
                      key={course.id} 
                      href={`/courses/${course.slug}`}
                      className="block group hover:bg-orange-50 p-2 -mx-2 rounded-lg transition-all duration-200"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {course.courseDetails?.duration || 'Contact us'} • {course.courseDetails?.studyMode?.join(', ') || 'Flexible'}
                      </p>
                    </Link>
                  ))}
                  <Link href="/courses" className="inline-flex items-center text-orange-600 text-sm font-medium mt-3 hover:text-purple-700 transition-colors">
                    View All Diploma Courses →
                  </Link>
                </div>
              </div>
            )}

            {/* Certificate Programs Card - Clickable */}
            {certificateCourses.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Certificate Programs
                </h3>
                <div className="space-y-3">
                  {certificateCourses.map((course) => (
                    <Link 
                      key={course.id} 
                      href={`/courses/${course.slug}`}
                      className="block group hover:bg-orange-50 p-2 -mx-2 rounded-lg transition-all duration-200"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {course.courseDetails?.duration || 'Contact us'} • Hands-on training
                      </p>
                    </Link>
                  ))}
                  <Link href="/courses" className="inline-flex items-center text-orange-600 text-sm font-medium mt-3 hover:text-purple-700 transition-colors">
                    View All Certificate Courses →
                  </Link>
                </div>
              </div>
            )}

            {/* Short Courses Card - Clickable */}
            {shortCourses.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  Short Courses
                </h3>
                <div className="space-y-3">
                  {shortCourses.map((course) => (
                    <Link 
                      key={course.id} 
                      href={`/courses/${course.slug}`}
                      className="block group hover:bg-orange-50 p-2 -mx-2 rounded-lg transition-all duration-200"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {course.courseDetails?.duration || 'Flexible duration'} • Certificate awarded
                      </p>
                    </Link>
                  ))}
                  <Link href="/courses" className="inline-flex items-center text-orange-600 text-sm font-medium mt-3 hover:text-purple-700 transition-colors">
                    View All Short Courses →
                  </Link>
                </div>
              </div>
            )}

            {/* Upcoming Intake Card */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Upcoming Intake
              </h3>
              <p className="text-2xl font-bold text-green-700 mb-2">May 2026 Intake</p>
              <p className="text-sm text-gray-600 mb-4">Applications are now open! Limited seats available.</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Application deadline: May 15, 2026</span>
              </div>
            </div>

            {/* Testimonial Card */}
            {featuredCourse && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  Student Testimonials
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <p className="text-sm text-gray-600 italic">
                      &quot;The {cleanExcerpt(featuredCourse.title, 50)} program gave me the skills and confidence to excel in my career. The lecturers were very supportive.&quot;
                    </p>
                    <p className="text-xs font-semibold text-gray-800 mt-2">— Successful Graduate</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 italic">
                      &quot;Flexible learning allowed me to work while studying. I highly recommend Africana College for quality education.&quot;
                    </p>
                    <p className="text-xs font-semibold text-gray-800 mt-2">— Working Professional</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats Card */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Total Courses</span>
                  <span className="font-semibold text-gray-800">{allCourses.length}+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Qualified Instructors</span>
                  <span className="font-semibold text-gray-800">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Successful Graduates</span>
                  <span className="font-semibold text-gray-800">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Years of Excellence</span>
                  <span className="font-semibold text-gray-800">10+</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center pt-4">
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
                  Quality Assurance
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-orange-600 to-purple-700 rounded-2xl text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-3">Start Your Professional Journey Today</h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Join Africana College of Professionals and take the first step towards a rewarding career
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/request-info" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request Information
          </Link>
          <Link href="/courses" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Explore Courses
          </Link>
        </div>
      </div>
    </main>
  );
}