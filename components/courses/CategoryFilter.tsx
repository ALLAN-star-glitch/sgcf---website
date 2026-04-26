// components/courses/CategoryFilter.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface CategoryFilterProps {
  categories: { id: string; label: string }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const filterSection = document.getElementById('category-filter-section');
      if (filterSection) {
        const rect = filterSection.getBoundingClientRect();
        setIsSticky(rect.top <= 88);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topHeaderHeight = 32;
  const mainHeaderHeight = 56;
  const stickyTop = topHeaderHeight + mainHeaderHeight;

  return (
    <section 
      id="category-filter-section"
      className={`bg-white px-4 transition-all duration-300 ${
        isSticky ? 'fixed left-0 right-0 z-40 shadow-md py-3' : 'py-12'
      }`}
      style={{ top: isSticky ? stickyTop : undefined }}
    >
      <div className="max-w-7xl mx-auto">
        {!isSticky && (
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4B0082] mb-2">
              Find Your Course
            </h2>
            <p className="text-gray-600">
              Browse courses by field and specialization
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                rounded-lg font-medium transition-all whitespace-nowrap
                ${isSticky 
                  ? 'px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm' 
                  : 'px-6 py-3 text-base'
                }
                ${activeCategory === category.id 
                  ? 'bg-[#4B0082] text-white shadow-lg' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FF7F32] hover:text-[#FF7F32]'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {isSticky && <div className="w-full h-16" />}
    </section>
  );
}