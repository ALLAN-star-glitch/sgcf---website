'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Award, Users, BookOpen, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-white to-[#F8F6FF]">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'var(--color-primary)', opacity: 0.03 }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--color-secondary)', opacity: 0.03 }}
        />
      </div>

      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/about-founder.png"
                  alt="Dr. Susan Gitau - Founder and Clinical Director"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award size={16} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                    15+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Users size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Founder & Clinical Director
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Dr. Susan{' '}
              <span className="text-gradient-primary">Gitau</span>
            </h1>
            
            <p className="text-xl mb-6" style={{ color: 'var(--color-primary)' }}>
              MSC Certified Trainer | Trauma Healing Expert | Clinical Psychologist
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dr. Susan Gitau is a renowned clinical psychologist, certified MSC (Mindful Self-Compassion) 
              trainer, and trauma healing expert with over 15 years of experience in mental health. 
              She is the founder of Susan Gitau Counseling Foundation (SGCF) and a lecturer at Africa 
              Nazarene University where she chairs the Counseling Department.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <Award size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>15+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <BookOpen size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>20+</p>
                <p className="text-xs text-gray-500">Publications</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <Users size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>500+</p>
                <p className="text-xs text-gray-500">Lives Impacted</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <Calendar size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>2023</p>
                <p className="text-xs text-gray-500">Best Course Award</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                <Calendar size={18} />
                Book a Session
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ 
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
              >
                <Mail size={18} />
                Contact Dr. Gitau
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;