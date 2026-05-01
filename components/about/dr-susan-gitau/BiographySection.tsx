'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Target } from 'lucide-react';

const BiographySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Heart size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Her Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              A Life Dedicated to{' '}
              <span className="text-gradient-primary">Healing</span>
            </h2>
          </motion.div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Dr. Susan Gitau&apos;s journey into clinical psychology began over 15 years ago with a 
              profound desire to help individuals navigate their most challenging life experiences. 
              Her passion for mental health was ignited during her undergraduate studies, where she 
              witnessed firsthand the transformative power of compassionate counseling.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              After completing her Master&apos;s degree in Clinical Psychology, Dr. Gitau pursued advanced 
              training in trauma recovery, earning certifications in EMDR therapy and becoming a 
              certified Mindful Self-Compassion (MSC) trainer through the Center for Mindful 
              Self-Compassion (CMSC) in the United States.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Her commitment to excellence led her to academia, where she now serves as the Chair of 
              the Counseling Department at Africa Nazarene University, mentoring the next generation 
              of mental health professionals. In 2023, she received the prestigious Best Course Award 
              from Hadong Global University for her outstanding contributions to counseling education.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Driven by a vision to make quality mental health care accessible to all, Dr. Gitau 
              founded the Susan Gitau Counseling Foundation (SGCF), a non-profit organization 
              dedicated to providing professional counseling services, community outreach, and 
              mental health education across Kenya.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 p-8 rounded-2xl text-center"
            style={{ background: 'var(--color-lavender)' }}
          >
            <Sparkles size={32} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-4" />
            <p className="text-lg italic font-serif" style={{ color: 'var(--foreground)' }}>
              &quot;Healing is not just about treating symptoms; it&apos;s about restoring hope, dignity, 
              and the belief that every person has the capacity to thrive.&quot;
            </p>
            <p className="mt-4 font-semibold" style={{ color: 'var(--color-primary)' }}>
              — Dr. Susan Gitau
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;