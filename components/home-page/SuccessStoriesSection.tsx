'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Quote, 
  ArrowRight, 
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  GraduationCap,
  Baby,
  Home
} from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const successStories = [
  {
    id: 1,
    name: "Mary Wanjiku",
    age: 17,
    location: "Kiandutu, Thika",
    story: "When I became pregnant at 15, I thought my life was over. I had dropped out of school and felt completely alone. SGCF found me in Kiandutu and showed me that I still had hope. They provided counseling, connected me with other young mothers, and helped me go back to school. Today, I'm in Form 3 and dreaming of becoming a nurse.",
    impact: "Returned to school, gained confidence, and now mentors other young mothers",
    image: "/stories/mary.jpg",
    badge: "Young Mothers Program",
    badgeIcon: Baby,
    color: "highlight"
  },
  {
    id: 2,
    name: "James Otieno",
    age: 19,
    location: "Thika",
    story: "After losing both my parents, I was spiraling into depression and was about to drop out of school. SGCF's counselors walked with me through my grief. They didn't just listen—they helped me find purpose again. I'm now in my first year of university studying Social Work, and I volunteer with SGCF to help others like me.",
    impact: "Graduated high school, joined university, became a volunteer",
    image: "/stories/james.jpg",
    badge: "Youth Support",
    badgeIcon: Heart,
    color: "secondary"
  },
  {
    id: 3,
    name: "Esther Muthoni",
    age: 14,
    location: "Kiandutu",
    story: "I wanted to go to school but my family couldn't afford fees or books. SGCF sponsored my education and provided a mentor who checks on me regularly. Last term, I scored 420 out of 500 in my exams. I want to be a teacher so I can help other children in Kiandutu get an education.",
    impact: "Academic excellence, staying in school, dreams of becoming a teacher",
    image: "/stories/esther.jpg",
    badge: "Student Sponsorship",
    badgeIcon: GraduationCap,
    color: "accent"
  },
  {
    id: 4,
    name: "Mama Grace",
    age: 45,
    location: "Kiandutu Slums",
    story: "When my husband lost his job, we couldn't afford food for our three children. SGCF came to our door with emergency food supplies and connected us with a support group. Today, I run a small vegetable business, and my children are back in school. I don't know where we would be without SGCF.",
    impact: "Food security restored, children back in school, economic empowerment",
    image: "/stories/grace.jpg",
    badge: "Emergency Relief",
    badgeIcon: Home,
    color: "primary"
  }
];

export const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const nextStory = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const goToStory = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(nextStory, 8000);
    return () => clearInterval(interval);
  }, [isMounted, currentIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const getColorScheme = (color: string) => {
    switch(color) {
      case 'primary': return { bg: 'var(--color-primary)', light: '#2D6A4F20' };
      case 'secondary': return { bg: 'var(--color-secondary)', light: '#6D28D920' };
      case 'accent': return { bg: 'var(--color-accent)', light: '#FBBF2420' };
      case 'highlight': return { bg: 'var(--color-highlight)', light: '#DC262620' };
      default: return { bg: 'var(--color-primary)', light: '#2D6A4F20' };
    }
  };

  // Fixed variants with proper typing
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  if (!isMounted) return null;

  const currentStory = successStories[currentIndex];
  const colorScheme = getColorScheme(currentStory.color);
  const BadgeIcon = currentStory.badgeIcon;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'radial-gradient(circle at 100% 50%, var(--color-lavender) 0%, transparent 70%)',
          opacity: 0.4
        }}
      />

      {/* Decorative elements */}
      <div 
        className="absolute top-20 left-0 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'var(--color-primary)', opacity: 0.03 }}
      />
      <div 
        className="absolute bottom-20 right-0 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'var(--color-secondary)', opacity: 0.03 }}
      />

      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
            <Star size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Transformation Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Lives{' '}
            <span className="text-gradient-primary">Changed Forever</span>
          </h2>

          <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Real stories of hope, resilience, and transformation from the communities we serve
          </p>
        </motion.div>

        {/* Stories Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Main Story Card */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Side */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${currentStory.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r" />
                    
                    {/* Quote mark overlay */}
                    <div className="absolute top-6 left-6">
                      <Quote size={40} className="text-white/30" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    {/* Badge */}
                    <div 
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
                      style={{ background: colorScheme.light }}
                    >
                      <BadgeIcon size={14} style={{ color: colorScheme.bg }} />
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: colorScheme.bg }}>
                        {currentStory.badge}
                      </span>
                    </div>

                    {/* Story Text */}
                    <p className="text-lg lg:text-xl leading-relaxed mb-6 italic" style={{ color: 'var(--foreground)' }}>
                      &quot;{currentStory.story}&quot;
                    </p>

                    {/* Quotation mark */}
                    <div className="mb-6">
                      <Quote size={24} style={{ color: colorScheme.bg, opacity: 0.5 }} />
                    </div>

                    {/* Person Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                        {currentStory.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        {currentStory.location}
                      </p>
                    </div>

                    {/* Impact Highlight */}
                    <div 
                      className="rounded-xl p-4 mb-6"
                      style={{ background: colorScheme.light }}
                    >
                      <div className="flex items-start gap-3">
                        <Shield size={18} style={{ color: colorScheme.bg }} />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: colorScheme.bg }}>
                            Impact
                          </p>
                          <p className="text-sm" style={{ color: 'var(--foreground)' }}>
                            {currentStory.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous story"
            >
              <ChevronLeft size={20} style={{ color: 'var(--color-primary)' }} />
            </button>

            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next story"
            >
              <ChevronRight size={20} style={{ color: 'var(--color-primary)' }} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8" : "w-2"
                }`}
                style={{ 
                  background: index === currentIndex 
                    ? "var(--color-primary)" 
                    : "var(--color-primary)",
                  opacity: index === currentIndex ? 1 : 0.3
                }}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "500+", label: "Students Supported", icon: GraduationCap, color: "var(--color-primary)" },
            { number: "200+", label: "Young Mothers Empowered", icon: Baby, color: "var(--color-secondary)" },
            { number: "1,000+", label: "Individuals Counseled", icon: Heart, color: "var(--color-accent)" },
            { number: "3,000+", label: "Meals Distributed", icon: Home, color: "var(--color-highlight)" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${stat.color}10` }}>
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/stories"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'var(--color-primary)',
              color: 'white'
            }}
          >
            <Heart size={18} />
            <span>Read More Success Stories</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};