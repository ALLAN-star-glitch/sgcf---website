/* eslint-disable @typescript-eslint/no-explicit-any */
// components/courses/SidebarFilter.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Filter, X, SlidersHorizontal, Search } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface SidebarFilterProps {
  courseLevels: FilterOption[];
  onFilterChange?: (category: string, search: string) => void;
}

// Desktop Sidebar Component
const DesktopSidebar = ({ 
  courseLevels, 
  selectedCategory, 
  handleCategoryChange,
  searchQuery,
  setSearchQuery,
  handleSearch
}: { 
  courseLevels: FilterOption[];
  selectedCategory: string;
  handleCategoryChange: (categoryId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [stickyTop, setStickyTop] = useState(100);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const coursesSection = document.querySelector('#courses-section');
      const footer = document.querySelector('footer');
      const header = document.querySelector('header');
      
      if (!coursesSection) return;
      
      const sectionRect = coursesSection.getBoundingClientRect();
      const footerRect = footer ? footer.getBoundingClientRect() : null;
      const headerHeight = header ? header.clientHeight : 80;
      const topOffset = headerHeight + 20;
      
      // Get the top position of the courses section relative to the document
      const sectionTop = sectionRect.top + window.scrollY;
      const currentScroll = window.scrollY;
      
      // Calculate the point where the sidebar should start sticking
      // Only stick when we've scrolled past the courses section start
      const shouldStartSticky = currentScroll >= sectionTop - topOffset;
      
      // Check if we've scrolled past the courses section (near footer)
      const sectionBottom = sectionRect.bottom + window.scrollY;
      const shouldStopSticky = currentScroll + sidebarRect.height + 20 >= sectionBottom;
      
      if (shouldStartSticky && !shouldStopSticky) {
        setIsSticky(true);
        setStickyTop(topOffset);
        setSidebarWidth(sidebarRect.width);
        setSpacerHeight(sidebarRect.height);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      if (sidebarRef.current && isSticky) {
        setSidebarWidth(sidebarRef.current.offsetWidth);
        setSpacerHeight(sidebarRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSticky]);

  return (
    <div className="hidden lg:block">
      <div 
        ref={sidebarRef}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300"
        style={isSticky ? {
          position: 'fixed',
          top: `${stickyTop}px`,
          width: `${sidebarWidth}px`,
          zIndex: 40,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        } : {}}
      >
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-orange-500" />
          Filter Courses
        </h3>

        {/* Search Section */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Search Courses
          </label>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or description..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                handleSearch({ preventDefault: () => {} } as React.FormEvent);
              }}
              className="mt-2 text-xs text-orange-600 hover:text-orange-700"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Course Levels Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Course Level
          </label>
          <label
            className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="level"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={() => handleCategoryChange('all')}
                className="w-4 h-4 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-700 font-medium">All Courses</span>
            </div>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {courseLevels.reduce((total, level) => total + level.count, 0)}
            </span>
          </label>
          
          {courseLevels.map((level) => (
            <label
              key={level.id}
              className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors ml-6"
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="level"
                  value={level.id}
                  checked={selectedCategory === level.id}
                  onChange={() => handleCategoryChange(level.id)}
                  className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">{level.label}</span>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {level.count}
              </span>
            </label>
          ))}
        </div>

        {/* Reset Filter */}
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              handleCategoryChange('all');
              setSearchQuery('');
              handleSearch({ preventDefault: () => {} } as React.FormEvent);
            }}
            className="mt-6 text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>
      {/* Spacer to prevent layout shift when sticky */}
      {isSticky && <div style={{ height: `${spacerHeight}px` }} />}
    </div>
  );
};

// Mobile Filter Button - LEFT SIDE
const MobileFilterButton = ({ onOpen }: { onOpen: () => void }) => (
  <div className="lg:hidden fixed bottom-24 left-6 z-40">
    <button
      onClick={onOpen}
      className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
    >
      <SlidersHorizontal className="w-5 h-5" />
      <span className="text-sm font-medium">Filter Courses</span>
    </button>
  </div>
);

// Mobile Filter Modal - Slides from LEFT
const MobileFilterModal = ({ 
  isOpen, 
  onClose, 
  courseLevels, 
  selectedCategory, 
  handleCategoryChange,
  searchQuery,
  setSearchQuery,
  handleSearch
}: { 
  isOpen: boolean;
  onClose: () => void;
  courseLevels: FilterOption[];
  selectedCategory: string;
  handleCategoryChange: (categoryId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Sidebar Panel - Slides from LEFT */}
      <div className="absolute top-0 left-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-orange-500" />
            <h3 className="font-bold text-lg text-gray-800">Filter Courses</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-4 space-y-6">
          {/* Active Filter Indicator */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="bg-orange-50 rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm text-orange-700">
                Active filters: 
                {selectedCategory !== 'all' && ` ${courseLevels.find(l => l.id === selectedCategory)?.label}`}
                {searchQuery && ` &ldquo;${searchQuery}&rdquo;`}
              </span>
              <button
                onClick={() => {
                  handleCategoryChange('all');
                  setSearchQuery('');
                  handleSearch({ preventDefault: () => {} } as React.FormEvent);
                }}
                className="text-xs text-orange-600 font-medium hover:text-orange-700"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Search Section */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
              Search Courses
            </h4>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title or description..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Course Levels Section */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
              Course Level
            </h4>
            <div className="space-y-2">
              <label
                className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="mobile-level"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-700 font-medium">All Courses</span>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {courseLevels.reduce((total, level) => total + level.count, 0)}
                </span>
              </label>
              
              {courseLevels.map((level) => (
                <label
                  key={level.id}
                  className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-orange-50 transition-colors ml-6"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="mobile-level"
                      value={level.id}
                      checked={selectedCategory === level.id}
                      onChange={() => handleCategoryChange(level.id)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700">{level.label}</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {level.count}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Apply Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4">
          <button
            onClick={onClose}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
export function SidebarFilter({ courseLevels, onFilterChange }: SidebarFilterProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Dispatch event for CoursesGridWrapper to listen
    window.dispatchEvent(new CustomEvent('categoryChange', { 
      detail: { category: categoryId, search: searchQuery } 
    }));
    onFilterChange?.(categoryId, searchQuery);
    setIsMobileFilterOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch event for CoursesGridWrapper to listen
    window.dispatchEvent(new CustomEvent('categoryChange', { 
      detail: { category: selectedCategory, search: searchQuery } 
    }));
    onFilterChange?.(selectedCategory, searchQuery);
  };

  return (
    <>
      <DesktopSidebar 
        courseLevels={courseLevels}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <MobileFilterButton onOpen={() => setIsMobileFilterOpen(true)} />
      <MobileFilterModal 
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        courseLevels={courseLevels}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
    </>
  );
}