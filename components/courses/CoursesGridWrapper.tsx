// components/courses/CoursesGridWrapper.tsx
'use client';

import React, { useState } from 'react';
import { CoursesGrid } from './CoursesGrid';
import { Course } from '@/lib/wordpress';

interface CoursesGridWrapperProps {
  allCourses: Course[];
}

export function CoursesGridWrapper({ allCourses }: CoursesGridWrapperProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Listen for category changes from the filter
  React.useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      setActiveCategory(event.detail);
    };
    
    window.addEventListener('categoryChange', handleCategoryChange as EventListener);
    return () => window.removeEventListener('categoryChange', handleCategoryChange as EventListener);
  }, []);
  
  return <CoursesGrid courses={allCourses} activeCategory={activeCategory} />;
}