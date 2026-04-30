'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Phone, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient using CSS variables */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          opacity: 0.05
        }}
      />
      
      {/* Decorative Elements - Subtle Nature Shapes */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl z-0"
        style={{ background: 'var(--color-primary)', opacity: 0.08 }}
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl z-0"
        style={{ background: 'var(--color-secondary)', opacity: 0.08 }}
      />
      
      {/* Main Container */}
      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'var(--color-lavender)' }}
            >
              <Shield size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Trusted Mental Health Professional
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-tight tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Your Journey to{' '}
              <span className="text-gradient-primary">Mental Wellness</span>
              <br />
              Begins Here
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
            >
              Professional counseling services in a safe, confidential, and 
              compassionate environment. You don&apos;t have to face life&apos;s challenges alone.
            </motion.p>

            {/* Trust Signals - Small row of icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
            >
              {["100% Confidential", "Licensed Therapist", "Evidence-Based", "Culturally Sensitive"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-sm">
                  <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--foreground)', opacity: 0.6 }}>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
            >
              {/* Primary CTA - Book Appointment */}
              <Link
                href="/book-appointment"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                <Calendar size={20} />
                <span>Book an Appointment</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA - Crisis Helpline with Pulse Animation */}
              <Link
                href="tel:+254700000000"
                className="btn-helpline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Phone size={18} />
                <span>24/7 Crisis Helpline</span>
              </Link>
            </motion.div>

            {/* Small disclaimer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-xs mt-6 text-center lg:text-left"
              style={{ color: 'var(--foreground)', opacity: 0.4 }}
            >
              For emergencies, please call your local emergency number or visit the nearest hospital.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN - Illustration / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
             {/* Main Illustration - Therapy Room Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="/hero-therapy-room.png"
                    alt="Calm therapy room with natural light"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                />
                </div>
              
              {/* Floating Card 1 - Trust Indicator */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
                style={{ background: 'white' }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', opacity: 0.1 }}
                >
                  <Shield size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>Safe & Confidential</p>
                  <p className="text-[10px]" style={{ color: 'var(--foreground)', opacity: 0.5 }}>Your privacy matters</p>
                </div>
              </motion.div>

              {/* Floating Card 2 - Appointment Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
                style={{ background: 'white' }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-accent)', opacity: 0.1 }}
                >
                  <Calendar size={16} style={{ color: 'var(--color-accent-dark)' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>Flexible Scheduling</p>
                  <p className="text-[10px]" style={{ color: 'var(--foreground)', opacity: 0.5 }}>Evening & weekend slots</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Decoration - using CSS variable for color */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="var(--background)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};