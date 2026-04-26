/* eslint-disable @typescript-eslint/no-explicit-any */


import { getAllCourses } from '@/lib/wordpress';
import { CoursesSection } from './CoursesSection';

export const CoursesSectionWrapper = async () => {
  let courses: any[] = [];
  
  try {
    courses = await getAllCourses();
    // Get first 6 courses for homepage
    courses = courses.slice(0, 6);
  } catch (error) {
    console.error('Failed to fetch courses:', error);
  }
  
  return <CoursesSection courses={courses} />;
};