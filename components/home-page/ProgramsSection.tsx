'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Heart, 
  Star,
  School,
  Building2,
  Handshake
} from 'lucide-react';

export const ProgramsSection = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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
      color: "#2D6A4F",
      lightColor: "#40916C",
      bgLight: "rgba(45, 106, 79, 0.1)",
      href: "/programs/schools-outreach",
      image: "/programs/schools-outreach.png",
      imageAlt: "Students participating in mental health awareness workshop"
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
      color: "#6D28D9",
      lightColor: "#8B5CF6",
      bgLight: "rgba(109, 40, 217, 0.1)",
      href: "/programs/workplace-wellness",
      image: "/programs/workplace-wellness.png",
      imageAlt: "Corporate employees participating in mental wellness training"
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
      color: "#FBBF24",
      lightColor: "#FCD34D",
      bgLight: "rgba(251, 191, 36, 0.15)",
      href: "/programs/support-groups",
      image: "/programs/support-groups.png",
      imageAlt: "Support group participants sharing in a safe environment"
    }
  ];

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 md:py-28" style={{ background: '#F8F6FF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
            <Heart size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Community Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Our{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Programs
            </span>
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: '#171717', opacity: 0.7 }}>
            Extending mental health support beyond the counseling room
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            const hasImageError = imageErrors[program.id];
            
            return (
              <div
                key={program.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Section with Fallback */}
                <div className="relative h-56 overflow-hidden">
                  {!hasImageError ? (
                    <>
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(program.id)}
                        priority={program.id === 1}
                      />
                      {/* Dark overlay for better text contrast */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    </>
                  ) : (
                    /* Fallback - Colored Header Bar with Icon when image fails to load */
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${program.color} 0%, ${program.color}CC 100%)` }}
                    >
                      <IconComponent size={56} className="text-white opacity-90" strokeWidth={1.5} />
                    </div>
                  )}
                  
                  {/* Impact Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md z-10">
                    <Star size={12} style={{ color: program.color }} />
                    <span className="text-xs font-semibold" style={{ color: program.color }}>
                      {program.impactStat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#171717' }}>
                    {program.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: program.color, opacity: 0.8 }}>
                    {program.tagline}
                  </p>

                  <p className="mb-4 leading-relaxed text-sm" style={{ color: '#171717', opacity: 0.7 }}>
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: program.bgLight, color: program.color }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Impact Detail */}
                  <div 
                    className="mb-4 p-3 rounded-xl"
                    style={{ background: program.bgLight }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: program.color }}>
                      Impact Highlight
                    </p>
                    <p className="text-sm" style={{ color: '#171717', opacity: 0.7 }}>
                      {program.impactDetail}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                    style={{ color: program.color }}
                  >
                    <span>Learn more about this program</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
            }}
          >
            <Heart size={18} />
            <span>Support Our Programs</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};