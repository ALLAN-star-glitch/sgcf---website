'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, Clock, Award, Tag } from 'lucide-react';
import { Course, getCourseTypeDisplayName, decodeHtmlEntities } from '@/lib/wordpress';

interface CourseCardProps {
  course: Course;
}

// Helper to clean excerpt (strip HTML tags and decode entities)
const cleanExcerpt = (text: string | null | undefined, maxLength: number = 120): string => {
  if (!text) return '';
  const decoded = decodeHtmlEntities(text);
  const plainText = decoded.replace(/<[^>]*>/g, '');
  const cleaned = plainText.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength) + '...';
};

export function CourseCard({ course }: CourseCardProps) {
  const featuredImage = course.featuredImage?.node?.sourceUrl || null;
  const courseType = getCourseTypeDisplayName(course.courseDetails?.courseType || []);
  
  // Get accreditations from course categories (limit to 2)
  const accreditations = course.courseCategories?.nodes?.slice(0, 2).map(cat => cat.name) || [];

  // Clean the excerpt
  const cleanedExcerpt = cleanExcerpt(course.excerpt, 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
            <span className="text-6xl">📚</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-[#FF7F32] text-white text-xs font-semibold px-2 py-1 rounded-full">
            {courseType}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#4B0082] mb-3">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {cleanedExcerpt}
        </p>

        {course.courseDetails?.duration && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Clock className="w-4 h-4" />
            <span>{course.courseDetails.duration}</span>
          </div>
        )}

        {course.courseDetails?.fee && (
          <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold mb-3">
            <Award className="w-4 h-4" />
            <span>{course.courseDetails.fee}</span>
          </div>
        )}

        {accreditations.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {accreditations.map((acc) => (
              <span
                key={acc}
                className="inline-flex items-center gap-1 text-xs bg-[#F8F6FF] text-[#4B0082] px-3 py-1 rounded-full"
              >
                <CheckCircleIcon className="w-3 h-3" />
                {acc}
              </span>
            ))}
          </div>
        )}

        {/* Tags Section */}
        {course.courseTags?.nodes?.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {course.courseTags.nodes.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/courses/tag/${tag.slug}`}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs hover:bg-orange-100 hover:text-orange-600 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href={`/courses/${course.slug}`}
          className="inline-block w-full text-center bg-[#FF7F32] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF7F32]/90 transition-all hover:shadow-lg mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}