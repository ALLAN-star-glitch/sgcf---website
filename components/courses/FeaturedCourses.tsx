'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';
import { Course, decodeHtmlEntities } from '@/lib/wordpress';

interface FeaturedCoursesProps {
  courses: Course[];
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  // Helper to clean excerpt (strip HTML tags and decode entities)
  const cleanExcerpt = (text: string | null | undefined, maxLength: number = 100): string => {
    if (!text) return '';
    const decoded = decodeHtmlEntities(text);
    const plainText = decoded.replace(/<[^>]*>/g, '');
    const cleaned = plainText.replace(/\s+/g, ' ').trim();
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.substring(0, maxLength) + '...';
  };

  if (courses.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] mb-2">
            Featured Courses
          </h2>
          <p className="text-gray-600">
            Courses chosen by our students and alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const featuredImage = course.featuredImage?.node?.sourceUrl || null;
            const courseType = course.courseDetails?.courseType?.[0] || 'course';
            
            // Clean the excerpt
            const cleanedExcerpt = cleanExcerpt(course.excerpt) || 
              cleanExcerpt(course.courseDetails?.careerPathways, 100) || 
              'Professional course designed for career success';

            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {featuredImage ? (
                    <Image
                      src={featuredImage}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                      <span className="text-6xl">📚</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#4B0082]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-[#FF7F32] text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#4B0082] mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {cleanedExcerpt}
                  </p>
                  {course.courseDetails?.duration && (
                    <p className="text-xs text-gray-400 mb-2">
                      📅 Duration: {course.courseDetails.duration}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {courseType.toUpperCase()} Course
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="bg-[#FF7F32] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#FF7F32]/90 transition-all hover:shadow-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}