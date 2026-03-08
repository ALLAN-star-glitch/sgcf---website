'use client';

import React from 'react';
import Image from 'next/image';
import { popularCourses } from '@/lib/constants/popularCourses';
import Link from 'next/link';

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Our Popular Courses
          </h2>
          <p className="text-gray-600">
            Accredited, hands-on, and values-based learning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  href="#"
                  className="bg-accent text-white hover:bg-accent/90 px-6 py-2 rounded-full inline-block font-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* View More Link */}
        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="text-primary font-medium hover:underline"
          >
            View More Courses &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
