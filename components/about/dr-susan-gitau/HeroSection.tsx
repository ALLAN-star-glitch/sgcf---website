'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Award, Users, BookOpen, ArrowRight, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, PhoneCall, Mail as MailIcon, Video, Laptop } from 'lucide-react';
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
                  alt="Dr. Susan Gitau - Founder, Executive Director & Counseling Psychologist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge Overlay - Updated */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award size={16} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                    20+ Years Experience
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
              <Briefcase size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Founder & Executive Director | Counseling Psychologist
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Dr. Susan{' '}
              <span className="text-gradient-primary">Gitau</span>
            </h1>
            
            <p className="text-xl mb-6" style={{ color: 'var(--color-primary)' }}>
              PhD in Counseling Psychology | Senior Accredited Supervisor | Trauma Expert
            </p>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-gray-800">Progressive Leader & Catalyst for Lasting, Significant Impact</strong> — 
              Dr. Susan Gitau is a distinguished Counseling Psychologist with a PhD from Chuka University, Kenya. 
              She brings over 20 years of experience in mental health, trauma counseling, and community development 
              across Africa and internationally.
            </p>

            {/* Expertise Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Trauma Counseling', 'Clinical Supervision', 'SGBV Education', 
                'Global Mental Health', 'Curriculum Development', 'Research'
              ].map(exp => (
                <span 
                  key={exp}
                  className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700"
                >
                  {exp}
                </span>
              ))}
            </div>

            {/* Contact Info Row - Using Lucide Icons */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 border-t border-b border-gray-100 py-3">
              <span className="flex items-center gap-1">
                <PhoneCall size={14} style={{ color: 'var(--color-primary)' }} />
                +254722367619
              </span>
              <span className="flex items-center gap-1">
                <MailIcon size={14} style={{ color: 'var(--color-primary)' }} />
                drsusangitau@sgcfoundation.org
              </span>
              <span className="flex items-center gap-1">
                <Video size={14} style={{ color: 'var(--color-primary)' }} />
                Google/Zoom/Skype: Dr. Susan Gitau
              </span>
            </div>

            {/* Quick Stats - Updated with accurate data from CV */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <Award size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>20+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <BookOpen size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>12+</p>
                <p className="text-xs text-gray-500">Publications</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <Globe size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>10+</p>
                <p className="text-xs text-gray-500">Countries Served</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white shadow-sm">
                <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-1" />
                <p className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>50+</p>
                <p className="text-xs text-gray-500">Training Programs</p>
              </div>
            </div>

            {/* Current Roles */}
            <div className="mb-6 bg-gray-50 p-4 rounded-xl">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Briefcase size={14} style={{ color: 'var(--color-primary)' }} />
                Current Leadership Roles
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>Lecturer in Counseling Psychology - Africa Nazarene University (2011-Present)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>Founder & Executive Director - Susan Gitau Counseling Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>Founder & Executive Director - International Professional Counselors Centre (IPCC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>Senior Accredited Supervisor - Kenya Counseling & Psychological Association (KCPA)</span>
                </li>
              </ul>
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