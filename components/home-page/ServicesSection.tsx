'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Users, 
  Shield, 
  ArrowRight, 
  Sparkles,
  Feather,
  MessageCircle,
  Clock,
  Lock,
  Globe,
  GraduationCap,
  HandHeart,
  Home,
  UsersRound,
  Baby,
  BookOpen,
  Target,
  Award,
  TreePine,
  Compass
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const AboutServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const services = [
    {
      id: 1,
      title: "Community Outreach",
      icon: HandHeart,
      description: "Bringing hope and support directly to vulnerable communities in Kiandutu, Thika and beyond. We meet people where they are.",
      features: ["Slum Communities Support", "Food & Basic Needs", "Crisis Intervention", "Home Visits"],
      href: "/services/community-outreach",
      color: "primary"
    },
    {
      id: 2,
      title: "Youth & Teen Support",
      icon: UsersRound,
      description: "Empowering teenagers and young adults with counseling, mentorship, and life skills to navigate challenges and build brighter futures.",
      features: ["Teen Pregnancy Support", "Mentorship Programs", "Life Skills Training", "Peer Counseling"],
      href: "/services/youth-support",
      color: "secondary"
    },
    {
      id: 3,
      title: "Student Sponsorship",
      icon: GraduationCap,
      description: "Supporting students from underserved backgrounds to stay in school, excel academically, and break the cycle of poverty.",
      features: ["School Fees Support", "Educational Materials", "Academic Mentorship", "Career Guidance"],
      href: "/services/student-sponsorship",
      color: "accent"
    },
    {
      id: 4,
      title: "Young Mothers Program",
      icon: Baby,
      description: "Providing holistic support for teenage mothers including counseling, parenting skills, and pathways back to education.",
      features: ["Pregnancy Support", "Parenting Classes", "Re-entry to School", "Economic Empowerment"],
      href: "/services/young-mothers",
      color: "highlight"
    },
    {
      id: 5,
      title: "Professional Counseling",
      icon: Heart,
      description: "Safe, confidential, and compassionate counseling services for individuals, couples, and families facing life's challenges.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Relationship Support", "Grief Counseling"],
      href: "/services/counseling",
      color: "primary"
    },
    {
      id: 6,
      title: "Emergency Relief",
      icon: Home,
      description: "Rapid response support for families facing crisis situations including food insecurity, medical emergencies, and shelter needs.",
      features: ["Food Distribution", "Medical Support", "Emergency Shelter", "Crisis Hotline"],
      href: "/services/emergency-relief",
      color: "highlight"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const getAccentColor = (color: string): string => {
    switch(color) {
      case 'primary': return '#2D6A4F';
      case 'secondary': return '#6D28D9';
      case 'accent': return '#FBBF24';
      case 'highlight': return '#DC2626';
      default: return '#2D6A4F';
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background - subtle gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'radial-gradient(circle at 0% 0%, #F8F6FF 0%, transparent 70%)',
          opacity: 0.5
        }}
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-40 right-0 w-72 h-72 rounded-full blur-3xl"
        style={{ background: '#2D6A4F', opacity: 0.03 }}
      />
      <div 
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: '#6D28D9', opacity: 0.03 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Us Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
            <Compass size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Who We Are
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6" style={{ color: '#171717' }}>
            Serving{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Hope & Healing</span>
          </h2>

          {/* About Description */}
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed" style={{ color: '#171717', opacity: 0.8 }}>
              Susan Gitau Counseling Foundation (SGCF) is a non-profit organization dedicated to transforming lives 
              through compassionate care, professional counseling, and community empowerment.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#171717', opacity: 0.7 }}>
              Based in <span className="font-semibold" style={{ color: '#2D6A4F' }}>Thika, Kenya</span>, 
              we serve vulnerable populations including families in slum communities, teenage mothers, 
              at-risk youth, and students facing barriers to education. Our holistic approach combines 
              mental health support with practical assistance to create lasting change.
            </p>
          </div>

          {/* Mission & Vision Row - FIXED with solid colors */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 text-left" style={{ background: '#2D6A4F0D' }}>
              <div className="flex items-center gap-3 mb-3">
                <Target size={24} style={{ color: '#2D6A4F' }} />
                <h3 className="text-xl font-bold" style={{ color: '#2D6A4F' }}>Our Mission</h3>
              </div>
              <p style={{ color: '#171717', opacity: 0.7 }}>
                To restore hope, dignity, and purpose to vulnerable individuals and families through 
                professional counseling, education support, and community-based empowerment programs.
              </p>
            </div>
            <div className="rounded-2xl p-6 text-left" style={{ background: '#6D28D90D' }}>
              <div className="flex items-center gap-3 mb-3">
                <TreePine size={24} style={{ color: '#6D28D9' }} />
                <h3 className="text-xl font-bold" style={{ color: '#6D28D9' }}>Our Vision</h3>
              </div>
              <p style={{ color: '#171717', opacity: 0.7 }}>
                A community where every individual has access to mental health support, quality education, 
                and the opportunity to build a thriving future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
              <Award size={14} style={{ color: '#2D6A4F' }} />
              <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
                Our Core Values
              </span>
            </div>
            <h3 className="text-2xl font-bold font-serif" style={{ color: '#171717' }}>
              What Guides Us
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "Compassion", icon: Heart, color: "#2D6A4F", desc: "Meeting people where they are" },
              { value: "Integrity", icon: Shield, color: "#6D28D9", desc: "Transparent & ethical service" },
              { value: "Hope", icon: TreePine, color: "#FBBF24", desc: "Believing in every person's potential" },
              { value: "Community", icon: Users, color: "#DC2626", desc: "Together we rise" }
            ].map((value, idx) => {
              const ValueIcon = value.icon;
              return (
                <div key={idx} className="text-center p-4 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${value.color}15` }}>
                    <ValueIcon size={22} style={{ color: value.color }} />
                  </div>
                  <h4 className="font-bold mb-1" style={{ color: value.color }}>{value.value}</h4>
                  <p className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Programs Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 pt-8 border-t"
          style={{ borderColor: '#F8F6FF' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
            <Sparkles size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Our Programs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            How We{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Make a Difference</span>
          </h2>
          <p className="text-lg" style={{ color: '#171717', opacity: 0.7 }}>
            Through these programs, we&apos;re transforming lives and building stronger communities
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            const accentColor = getAccentColor(service.color);
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  borderTop: `4px solid ${accentColor}`
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)`,
                  }}
                >
                  <IconComponent size={28} style={{ color: accentColor }} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#171717' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed" style={{ color: '#171717', opacity: 0.7 }}>
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Target size={12} style={{ color: accentColor }} />
                      <span style={{ color: '#171717', opacity: 0.6 }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: accentColor }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Decorative gradient on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 100% 0%, ${accentColor}05, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="mb-6" style={{ color: '#171717', opacity: 0.7 }}>
            Want to get involved or need support?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                background: '#2D6A4F',
                color: 'white'
              }}
            >
              <MessageCircle size={18} />
              <span>Contact Us</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                border: `2px solid #2D6A4F`,
                color: '#2D6A4F',
                background: 'transparent'
              }}
            >
              <HandHeart size={18} />
              <span>Become a Volunteer</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t"
          style={{ borderColor: '#F8F6FF' }}
        >
          {[
            { icon: Lock, text: "100% Confidential", color: "#2D6A4F" },
            { icon: Clock, text: "Free Support Services", color: "#6D28D9" },
            { icon: Globe, text: "Community-Based", color: "#FBBF24" },
            { icon: Users, text: "Qualified Team", color: "#DC2626" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon size={18} style={{ color: item.color }} />
              <span className="text-sm font-medium" style={{ color: '#171717', opacity: 0.7 }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};