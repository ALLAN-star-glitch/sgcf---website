'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Heart,
  Star,
  School,
  Building2,
  Handshake
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const ProgramsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const programs = [
    {
      id: 1,
      title: "Schools Outreach Program",
      tagline: "Planting seeds of mental wellness in young minds",
      description: "We bring mental health awareness and emotional wellness workshops directly to schools, empowering students and teachers with coping skills and resources.",
      icon: School,
      impactStat: "15+ schools reached",
      impactDetail: "Over 2,000 students impacted",
      features: [
        "Student wellness workshops",
        "Teacher training sessions",
        "Parent education seminars",
        "Crisis response training"
      ],
      color: "primary",
      href: "/programs/schools-outreach"
    },
    {
      id: 2,
      title: "Workplace Wellness",
      tagline: "Creating mentally healthy work environments",
      description: "Employee assistance programs and corporate mental health training designed to boost productivity, reduce burnout, and foster a supportive workplace culture.",
      icon: Building2,
      impactStat: "20+ partner organizations",
      impactDetail: "3,500+ employees served",
      features: [
        "Employee counseling services",
        "Manager mental health training",
        "Stress management workshops",
        "Mental health first aid"
      ],
      color: "secondary",
      href: "/programs/workplace-wellness"
    },
    {
      id: 3,
      title: "Community Support Groups",
      tagline: "You don't have to walk alone",
      description: "Free peer support groups for anxiety, grief, caregiving, and life transitions. A safe space to share, heal, and grow together.",
      icon: Handshake,
      impactStat: "8 active groups",
      impactDetail: "200+ weekly participants",
      features: [
        "Anxiety support group",
        "Grief and loss circle",
        "Caregiver support network",
        "Life transitions group"
      ],
      color: "accent",
      href: "/programs/support-groups"
    }
  ];

  const getColorStyles = (color: string) => {
    switch(color) {
      case 'primary': 
        return { 
          bg: 'var(--color-primary)', 
          light: 'var(--color-primary-light)', 
          dark: 'var(--color-primary-dark)',
          bgLight: 'rgba(45, 106, 79, 0.1)'
        };
      case 'secondary': 
        return { 
          bg: 'var(--color-secondary)', 
          light: 'var(--color-secondary-light)', 
          dark: '#5B21B6',
          bgLight: 'rgba(109, 40, 217, 0.1)'
        };
      case 'accent': 
        return { 
          bg: 'var(--color-accent)', 
          light: '#FCD34D', 
          dark: 'var(--color-accent-dark)',
          bgLight: 'rgba(251, 191, 36, 0.1)'
        };
      default: 
        return { 
          bg: 'var(--color-primary)', 
          light: 'var(--color-primary-light)', 
          dark: 'var(--color-primary-dark)',
          bgLight: 'rgba(45, 106, 79, 0.1)'
        };
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
            <Heart size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Community Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Our{' '}
            <span className="text-gradient-primary">Programs</span>
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Extending mental health support beyond the counseling room
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = program.icon;
            const colors = getColorStyles(program.color);
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Colored Header Bar with Icon */}
                <div 
                  className="relative h-32 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.dark} 100%)` }}
                >
                  <IconComponent size={64} className="text-white opacity-90" strokeWidth={1.5} />
                  
                  {/* Impact Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md">
                    <Star size={12} style={{ color: colors.bg }} />
                    <span className="text-xs font-semibold" style={{ color: colors.dark }}>
                      {program.impactStat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                    {program.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: colors.bg, opacity: 0.8 }}>
                    {program.tagline}
                  </p>

                  <p className="mb-4 leading-relaxed text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.features.slice(0, 3).map((feature, fIdx) => (
                      <span 
                        key={fIdx}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: colors.bgLight, color: colors.bg }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Impact Detail */}
                  <div 
                    className="mb-4 p-3 rounded-xl"
                    style={{ background: colors.bgLight }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: colors.bg }}>
                      Impact Highlight
                    </p>
                    <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                      {program.impactDetail}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                    style={{ color: colors.bg }}
                  >
                    <span>Learn more about this program</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            }}
          >
            <Heart size={18} />
            <span>Support Our Programs</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};