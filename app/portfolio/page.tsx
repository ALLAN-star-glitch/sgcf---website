'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Sparkles
} from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const portfolioImages = [
  {
    id: 1,
    title: "Community Outreach in Kiandutu",
    description: "Our team bringing hope and supplies to families in Kiandutu slums",
    image: "/gallery/outreach1.jpeg",
    color: "primary",
    date: "January 2024",
    location: "Kiandutu, Thika",
    category: "Community Outreach"
  },
  {
    id: 2,
    title: "With Interns and Africana College of Professional",
    description: "Weekly support program collaboration",
    image: "/gallery/withinternsandafricana.jpeg",
    color: "highlight",
    date: "February 2024",
    location: "Thika",
    category: "Collaboration"
  },
  {
    id: 3,
    title: "Festive Session at Kianjau",
    description: "Supporting Kianjau community during the festive session",
    image: "/gallery/kianjaufestive.jpeg",
    color: "accent",
    date: "December 2023",
    location: "Kianjau",
    category: "Community Outreach"
  },
  {
    id: 4,
    title: "In Collaboration with ANU, ACOP, and SGCF",
    description: "Providing essential food supplies to vulnerable families during the holidays",
    image: "/gallery/withafricana.jpeg",
    color: "primary",
    date: "December 2023",
    location: "Thika",
    category: "Collaboration"
  },
  {
    id: 5,
    title: "Counseling Session",
    description: "Professional counseling in a safe, confidential environment",
    image: "/gallery/og-image.webp",
    color: "secondary",
    date: "March 2024",
    location: "SGCF Center",
    category: "Counseling"
  },
  {
    id: 6,
    title: "In Collaboration with ANU",
    description: "Supporting the community",
    image: "/gallery/withanu.jpeg",
    color: "secondary",
    date: "January 2024",
    location: "Thika",
    category: "Collaboration"
  },
  {
    id: 7,
    title: "Back to School Drive",
    description: "Providing school supplies and uniforms to sponsored students",
    image: "/gallery/kianjau.jpeg",
    color: "accent",
    date: "January 2024",
    location: "Kianjau",
    category: "Education"
  },
  {
    id: 8,
    title: "Community Healing Circle",
    description: "Counseling and Medical support",
    image: "/gallery/communityhealing.jpeg",
    color: "primary",
    date: "February 2024",
    location: "Kiandutu",
    category: "Health"
  },
  {
    id: 9,
    title: "Festive Season Support",
    description: "Bringing joy and support to families during the holidays",
    image: "/gallery/festive.jpeg",
    color: "highlight",
    date: "December 2023",
    location: "Multiple Locations",
    category: "Community Outreach"
  }
];

const categories = ["All", "Community Outreach", "Collaboration", "Counseling", "Education", "Health"];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredImages = selectedCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const getColorStyle = (color: string) => {
    switch(color) {
      case 'primary': return { bg: '#2D6A4F', light: '#2D6A4F10', hover: '#2D6A4F20', text: '#2D6A4F' };
      case 'secondary': return { bg: '#6D28D9', light: '#6D28D910', hover: '#6D28D920', text: '#6D28D9' };
      case 'accent': return { bg: '#FBBF24', light: '#FBBF2410', hover: '#FBBF2420', text: '#FBBF24' };
      case 'highlight': return { bg: '#DC2626', light: '#DC262610', hover: '#DC262620', text: '#DC2626' };
      default: return { bg: '#2D6A4F', light: '#2D6A4F10', hover: '#2D6A4F20', text: '#2D6A4F' };
    }
  };

  const openLightbox = (image: typeof portfolioImages[0]) => {
    setSelectedImage(image);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            background: 'radial-gradient(circle at 0% 100%, #F8F6FF 0%, transparent 70%)',
            opacity: 0.4
          }}
        />

        {/* Decorative elements */}
        <div 
          className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: '#2D6A4F', opacity: 0.03 }}
        />
        <div 
          className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: '#6D28D9', opacity: 0.03 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 group"
            style={{ color: '#2D6A4F' }}
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
              <Camera size={14} style={{ color: '#2D6A4F' }} />
              <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
                Our Visual Journey
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
              Our{' '}
              <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Portfolio</span>
            </h1>

            <p className="text-lg sm:text-xl" style={{ color: '#171717', opacity: 0.7 }}>
              A visual documentation of our impact, collaborations, and the lives we&apos;ve touched
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white shadow-md' 
                      : 'hover:shadow-sm'
                  }`}
                  style={{
                    background: isActive ? '#2D6A4F' : 'transparent',
                    color: isActive ? 'white' : '#171717',
                    border: `1px solid ${isActive ? 'transparent' : '#2D6A4F'}`,
                    opacity: isActive ? 1 : 0.7
                  }}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center p-4 rounded-xl" style={{ background: '#F8F6FF' }}>
              <div className="text-2xl font-bold mb-1" style={{ color: '#2D6A4F' }}>{portfolioImages.length}+</div>
              <div className="text-sm" style={{ color: '#171717', opacity: 0.6 }}>Moments Captured</div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: '#F8F6FF' }}>
              <div className="text-2xl font-bold mb-1" style={{ color: '#6D28D9' }}>5+</div>
              <div className="text-sm" style={{ color: '#171717', opacity: 0.6 }}>Communities Served</div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: '#F8F6FF' }}>
              <div className="text-2xl font-bold mb-1" style={{ color: '#FBBF24' }}>4+</div>
              <div className="text-sm" style={{ color: '#171717', opacity: 0.6 }}>Partner Organizations</div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: '#F8F6FF' }}>
              <div className="text-2xl font-bold mb-1" style={{ color: '#DC2626' }}>1000+</div>
              <div className="text-sm" style={{ color: '#171717', opacity: 0.6 }}>Lives Impacted</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image) => {
              const colorStyle = getColorStyle(image.color);
              
              return (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative w-full h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${image.image})` }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {/* Category Badge */}
                      <div className="mb-2">
                        <span 
                          className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${colorStyle.bg}cc`, color: 'white' }}
                        >
                          {image.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white text-xl font-bold mb-1">
                        {image.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/80 text-sm line-clamp-2">
                        {image.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex gap-3 mt-2 text-white/60 text-xs">
                        {image.date && (
                          <div className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{image.date}</span>
                          </div>
                        )}
                        {image.location && (
                          <div className="flex items-center gap-1">
                            <MapPin size={10} />
                            <span>{image.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: '#171717', opacity: 0.6 }}>
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-3 hover:bg-white/20"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-3 hover:bg-white/20"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image content */}
            <div className="max-w-6xl mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/70 mb-3">{selectedImage.description}</p>
                <div className="flex justify-center gap-4 text-white/50 text-sm">
                  {selectedImage.date && (
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedImage.date}
                    </span>
                  )}
                  {selectedImage.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {selectedImage.location}
                    </span>
                  )}
                  {selectedImage.category && (
                    <span className="flex items-center gap-1">
                      <Sparkles size={14} />
                      {selectedImage.category}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}