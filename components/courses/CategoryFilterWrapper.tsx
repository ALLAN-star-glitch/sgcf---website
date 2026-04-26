// components/courses/CategoryFilterWrapper.tsx
'use client';

import React, { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';

interface CategoryFilterWrapperProps {
  categories: { id: string; label: string }[];
}

export function CategoryFilterWrapper({ categories }: CategoryFilterWrapperProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  return (
    <CategoryFilter
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
  );
}