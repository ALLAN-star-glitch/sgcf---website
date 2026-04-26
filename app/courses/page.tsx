import { getAllCourses, getCourseTypeDisplayName } from '@/lib/wordpress';
import { CategoryFilterWrapper } from '@/components/courses/CategoryFilterWrapper';
import { CoursesGridWrapper } from '@/components/courses/CoursesGridWrapper';
import { FeaturedCoursesWrapper } from '@/components/courses/FeaturedCoursesWrapper';
import { WhyChoose } from '@/components/courses/WhyChooseUs';
import { Metadata } from 'next';
import Hero from '@/components/courses/Hero';

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Professional Courses in Kenya | Africana College of Professionals",
  description:
    "Explore diploma, certificate, and short courses at Africana College of Professionals. Join now to develop professional skills, earn certifications, and grow your career.",
  keywords: [
    "Africana College",
    "professional courses",
    "diploma courses Kenya",
    "certificate courses Kenya",
    "short courses",
    "career development",
    "online learning",
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://www.acop.co.ke/courses",
  },
  openGraph: {
    title: "Professional Courses at Africana College of Professionals",
    description:
      "Join Africana College of Professionals to access top-tier diploma, certificate, and short courses for career advancement in Kenya.",
    url: "https://www.acop.co.ke/courses",
    siteName: "Africana College of Professionals",
    type: "website",
    images: [
      {
        url: "https://www.acop.co.ke/courses-background.JPG",
        width: 1200,
        height: 630,
        alt: "Africana College Courses",
      },
    ],
  },
};

export default async function CoursesPage() {
  const allCourses = await getAllCourses();

  // Get unique course types for categories
  const categories = [
    { id: 'all', label: 'All Courses' },
    ...Array.from(new Set(allCourses.flatMap(course => 
      course.courseDetails?.courseType || []
    ))).map(type => ({
      id: type,
      label: getCourseTypeDisplayName([type])
    }))
  ];

  // Create JSON-LD structured data for all courses
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Africana College Courses",
    itemListElement: allCourses.map((course, index) => ({
      "@type": "Course",
      position: index + 1,
      name: course.title,
      description: course.excerpt || course.courseDetails?.careerPathways?.substring(0, 200),
      provider: {
        "@type": "Organization",
        name: "Africana College of Professionals",
        sameAs: "https://www.acop.co.ke",
      },
    })),
  };

  return (
    <>
      {/* JSON-LD structured data for all courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Courses UI */}
      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <CategoryFilterWrapper categories={categories} />
          <CoursesGridWrapper allCourses={allCourses} />
          <FeaturedCoursesWrapper />
          <WhyChoose />
        </main>
      </div>
    </>
  );
}