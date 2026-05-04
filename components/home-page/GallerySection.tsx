'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Camera, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  ArrowRight
} from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: "Community Outreach in Kiandutu",
    description: "Our team bringing hope and supplies to families in Kiandutu slums",
    image: "/gallery/outreach1.jpeg",
    color: "primary"
  },
  {
    id: 2,
    title: "With Interns and Africana College of Professional",
    description: "Weekly support program",
    image: "/gallery/withinternsandafricana.jpeg",
    color: "highlight"
  },
  {
    id: 3,
    title: "Festive session at Kianjau",
    description: "Supporting Kianjau community during the festive session",
    image: "/gallery/kianjaufestive.jpeg",
    color: "accent"
  },
  {
    id: 4,
    title: "In collaboration with ANU, ACOP, and SGCF",
    description: "Providing essential food supplies to vulnerable families during the holidays",
    image: "/gallery/withafricana.jpeg",
    color: "primary"
  },
  {
    id: 5,
    title: "Counseling Session",
    description: "Professional counseling in a safe, confidential environment",
    image: "/gallery/og-image.webp",
    color: "secondary"
  },
  {
    id: 6,
    title: "In Collaboration with ANU",
    description: "Supporting the community.",
    image: "/gallery/withanu.jpeg",
    color: "secondary"
  },
  {
    id: 7,
    title: "Back to School Drive",
    description: "Providing school supplies and uniforms to sponsored students",
    image: "/gallery/kianjau.jpeg",
    color: "accent"
  },
  {
    id: 8,
    title: "Community Healing Circle",
    description: "Counseling and Medical support",
    image: "/gallery/communityhealing.jpeg",
    color: "primary"
  },
  {
    id: 9,
    title: "Festive Season Support",
    description: "Bringing joy and support to families during the holidays",
    image: "/gallery/festive.jpeg",
    color: "highlight"
  }
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getColorStyle = (color: string) => {
    switch(color) {
      case 'primary': return { bg: '#2D6A4F', light: '#2D6A4F10', hover: '#2D6A4F20' };
      case 'secondary': return { bg: '#6D28D9', light: '#6D28D910', hover: '#6D28D920' };
      case 'accent': return { bg: '#FBBF24', light: '#FBBF2410', hover: '#FBBF2420' };
      case 'highlight': return { bg: '#DC2626', light: '#DC262610', hover: '#DC262620' };
      default: return { bg: '#2D6A4F', light: '#2D6A4F10', hover: '#2D6A4F20' };
    }
  };

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
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
  }, [selectedImage]);

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
    <section className="py-20 md:py-28 relative overflow-hidden">
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
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
            <Camera size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Our Impact in Pictures
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Stories{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>In Focus</span>
          </h2>

          <p className="text-lg sm:text-xl" style={{ color: '#171717', opacity: 0.7 }}>
            A glimpse into the lives we&apos;ve touched and the hope we&apos;re building together
          </p>
        </motion.div>

        {/* Gallery Grid - Simple showcase without filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => {
            const colorStyle = getColorStyle(image.color);
            
            return (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                onClick={() => openLightbox(image)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.image})` }}
                  />
                  
                  {/* Overlay Gradient - Shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay - Shows on hover */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {/* Title */}
                    <h3 className="text-white text-xl font-bold mb-1">
                      {image.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Link to Portfolio Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: '#2D6A4F',
              color: 'white'
            }}
          >
            <Heart size={18} />
            <span>View Full Portfolio</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

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
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image content */}
            <div className="max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-auto min-h-[300px] max-h-[80vh] bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${selectedImage.image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '56.25%'
                  }}
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};