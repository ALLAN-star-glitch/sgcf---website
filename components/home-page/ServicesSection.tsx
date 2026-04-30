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
  Globe
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const ServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      icon: Heart,
      description: "One-on-one sessions in a safe, confidential environment. We'll work together to navigate anxiety, depression, life transitions, and personal growth.",
      features: ["Anxiety & Depression", "Self-Discovery", "Life Transitions"],
      href: "/services/individual-therapy",
      color: "primary"
    },
    {
      id: 2,
      title: "Couples Counseling",
      icon: Users,
      description: "Strengthen communication, rebuild trust, and deepen your connection. Supporting couples through every stage of their relationship.",
      features: ["Conflict Resolution", "Trust Rebuilding", "Premarital Counseling"],
      href: "/services/couples-counseling",
      color: "secondary"
    },
    {
      id: 3,
      title: "Trauma Recovery",
      icon: Shield,
      description: "Evidence-based approaches to help you heal from past experiences and reclaim your life with confidence and resilience.",
      features: ["EMDR Therapy", "PTSD Support", "Healing from Abuse"],
      href: "/services/trauma-recovery",
      color: "accent"
    }
  ];

  // Fixed Variants typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const getAccentColor = (color: string): string => {
    switch(color) {
      case 'primary': return 'var(--color-primary)';
      case 'secondary': return 'var(--color-secondary)';
      case 'accent': return 'var(--color-accent)';
      default: return 'var(--color-primary)';
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background - subtle gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'radial-gradient(circle at 0% 0%, var(--color-lavender) 0%, transparent 70%)',
          opacity: 0.5
        }}
      />
      
      {/* Decorative element */}
      <div 
        className="absolute top-40 right-0 w-72 h-72 rounded-full blur-3xl"
        style={{ background: 'var(--color-primary)', opacity: 0.03 }}
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
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
            <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Our Services
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            How We Can{' '}
            <span className="text-gradient-primary">Help</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Professional counseling tailored to your unique needs, delivered with compassion and expertise
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
                className="card-hover group relative bg-white rounded-2xl p-8 transition-all duration-300"
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
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Feather size={12} style={{ color: accentColor }} />
                      <span style={{ color: 'var(--foreground)', opacity: 0.6 }}>{feature}</span>
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
          <p className="mb-6" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Not sure which service is right for you?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              border: `2px solid var(--color-primary)`,
              color: 'var(--color-primary)',
              background: 'transparent'
            }}
          >
            <MessageCircle size={18} />
            <span>Schedule a Free Consultation</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t"
          style={{ borderColor: 'var(--color-lavender)' }}
        >
          {[
            { icon: Lock, text: "100% Confidential", color: "var(--color-primary)" },
            { icon: Clock, text: "Flexible Scheduling", color: "var(--color-secondary)" },
            { icon: Globe, text: "Online & In-Person", color: "var(--color-accent)" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon size={18} style={{ color: item.color }} />
              <span className="text-sm font-medium" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};