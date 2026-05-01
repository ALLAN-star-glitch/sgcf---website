'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Users, Award, Lock, Handshake, ArrowRight, Star } from 'lucide-react';

const ValuesContent = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with genuine care, empathy, and unconditional positive regard, creating a safe space for healing.",
      color: "var(--color-primary)",
      verse: "“Healing begins with a compassionate heart.”"
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy and trust are sacred. We maintain the highest standards of confidentiality in every interaction.",
      color: "var(--color-secondary)",
      verse: "“Your story is safe with us.”"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously update our skills and use evidence-based practices to ensure the best possible outcomes for our clients.",
      color: "var(--color-accent-dark)",
      verse: "“Striving for the highest standard of care.”"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "We offer sliding scale fees, flexible scheduling, and both online and in-person sessions to reach those in need.",
      color: "var(--color-primary)",
      verse: "“Mental health care for everyone.”"
    },
    {
      icon: Star,
      title: "Empowerment",
      description: "We believe in your capacity for growth and change, helping you discover your inner strength and resilience.",
      color: "var(--color-secondary)",
      verse: "“You have the power to heal.”"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "We uphold the highest ethical standards, acting with honesty, transparency, and professional responsibility.",
      color: "var(--color-accent-dark)",
      verse: "“Doing what is right, always.”"
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decoration */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          opacity: 0.03
        }}
      />
      
      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Heart size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                What Guides Us
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Our{' '}
              <span className="text-gradient-primary">Core Values</span>
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              The principles that shape every interaction and guide our commitment to your wellbeing
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: `3px solid ${value.color}` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${value.color}10` }}
                  >
                    <Icon size={22} style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {value.description}
                  </p>
                  <p className="text-xs italic" style={{ color: value.color, opacity: 0.7 }}>
                    {value.verse}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: 'var(--color-lavender)' }}>
              <Lock size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm" style={{ color: 'var(--color-primary)' }}>These values are at the heart of everything we do</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Back to About Us <ArrowRight size={14} />
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/about/mission-vision"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Our Mission & Vision <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesContent;