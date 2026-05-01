'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Compass, Sparkles, Shield } from 'lucide-react';

const PhilosophySection = () => {
  const philosophies = [
    { icon: Heart, title: "Compassion-Centered", description: "Every client deserves to be met with genuine care and understanding." },
    { icon: Brain, title: "Evidence-Based", description: "Integrating latest research with clinical expertise for optimal outcomes." },
    { icon: Users, title: "Holistic Approach", description: "Addressing mind, body, and spirit in the healing process." },
    { icon: Compass, title: "Client-Led", description: "Honoring each person's unique journey and pace of healing." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
            <Compass size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Guiding Principles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Therapeutic{' '}
            <span className="text-gradient-primary">Philosophy</span>
          </h2>
          <p className="text-lg text-gray-600">
            A compassionate, evidence-based approach to mental health and healing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((phil, idx) => {
            const Icon = phil.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ background: 'white', border: '1px solid rgba(0, 0, 0, 0.05)' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${'var(--color-primary)'}10` }}>
                  <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {phil.title}
                </h3>
                <p className="text-sm text-gray-500">{phil.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;