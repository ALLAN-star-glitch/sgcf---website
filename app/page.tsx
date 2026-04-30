import { Metadata } from 'next'
import { HeroSlider } from '@/components/home-page/HeroSlider'
import { NewsSection } from '@/components/home-page/NewsSection'
import { AboutSection } from '@/components/home-page/AboutSection'
import { FeaturesSection } from '@/components/home-page/FeaturesSection'
import { CoursesSectionWrapper } from '@/components/home-page/CoursesSectionWrapper'  // ← Updated import
import { TestimonialsSection } from '@/components/home-page/TestmonialSection'
import { getAllNews } from '@/lib/wordpress'
import { HeroSection } from '@/components/home-page/HeroSection'
import { ServicesSection } from '@/components/home-page/ServicesSection'
import { ProgramsSection } from '@/components/home-page/ProgramsSection'
import { EventsUpdatesSection } from '@/components/home-page/EventsUpdatesSection'

export const metadata: Metadata = {
  title: 'Africana College of Professionals | Professional Courses in Kenya',
  description:
    'Africana College of Professionals is a leading training institution in Kenya offering diploma, certificate, and short professional courses. Build skills, earn certifications, and advance your career.',
  keywords: [
    'Africana College',
    'Africana College of Professionals',
    'professional courses Kenya',
    'diploma courses Kenya',
    'certificate courses Kenya',
    'short courses Kenya',
    'career development Kenya',
    'professional training institution',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.acop.co.ke',
  },
  openGraph: {
    title: 'Africana College of Professionals',
    description:
      'Join Africana College of Professionals to access industry-focused courses designed for career success in Kenya.',
    url: 'https://www.acop.co.ke',
    siteName: 'Africana College of Professionals',
    type: 'website',
    images: [
      {
        url: 'https://www.acop.co.ke/acop2026intake.jpg',
        width: 1200,
        height: 630,
        alt: 'Africana College of Professionals',
      },
    ],
  },
}

export const revalidate = 60

export default async function Home() {
  const allNews = await getAllNews()
  const latestNews = allNews.slice(0, 3)

  return (
    <>
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollegeOrUniversity',
            name: 'Africana College of Professionals',
            url: 'https://www.acop.co.ke',
            logo: 'https://www.acop.co.ke/logo.png',
            description:
              'Africana College of Professionals is a professional training institution in Kenya offering diploma, certificate, and short courses.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'KE',
            },
            sameAs: [
              'https://www.facebook.com/acop',
              'https://www.linkedin.com/company/africana-college',
            ],
          }),
        }}
      />

      <div>
        <HeroSection/>
        <ServicesSection/>
        <EventsUpdatesSection/>
        <ProgramsSection/>
      </div>
    </>
  );
}