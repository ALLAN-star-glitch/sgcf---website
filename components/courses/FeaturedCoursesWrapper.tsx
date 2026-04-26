// components/courses/FeaturedCoursesWrapper.tsx (Server Component)
import { Course, getAllCourses } from '@/lib/wordpress';
import { FeaturedCourses } from './FeaturedCourses';

export const FeaturedCoursesWrapper = async () => {
  let featuredCourses: Course[] = [];
  
  try {
    const allCourses = await getAllCourses();
    // Get first 3 courses as featured
    featuredCourses = allCourses.slice(0, 3);
  } catch (error) {
    console.error('Failed to fetch featured courses:', error);
  }
  
  return <FeaturedCourses courses={featuredCourses} />;
};