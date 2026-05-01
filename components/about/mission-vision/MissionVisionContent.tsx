'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Users, Sparkles, ArrowRight } from 'lucide-react';

const MissionVisionContent = () => {
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Target size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Our Purpose
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Mission &{' '}
              <span className="text-gradient-primary">Vision</span>
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Guiding our commitment to mental wellness in Kenya
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderTop: '4px solid var(--color-primary)' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'var(--color-primary)', opacity: 0.1 }}>
                <Target size={28} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, professional, and compassionate mental health counseling that empowers 
                individuals, couples, and families to overcome challenges, heal from trauma, and live fulfilling lives.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderTop: '4px solid var(--color-secondary)' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'var(--color-secondary)', opacity: 0.1 }}>
                <Eye size={28} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-secondary)' }}>Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A society where mental health is prioritized, stigma is eliminated, and every person has access 
                to quality psychological care regardless of their background or circumstances.
              </p>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-md mb-10"
            style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart size={20} style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Compassion", description: "Genuine care and empathy" },
                { icon: Shield, title: "Confidentiality", description: "Your privacy matters" },
                { icon: Users, title: "Accessibility", description: "Care for all" },
                { icon: Sparkles, title: "Excellence", description: "Evidence-based practice" },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="text-center p-4 rounded-xl" style={{ background: 'var(--color-lavender)' }}>
                    <Icon size={24} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-2" />
                    <h3 className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{value.title}</h3>
                    <p className="text-xs text-gray-500">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Back to About Us <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionContent;