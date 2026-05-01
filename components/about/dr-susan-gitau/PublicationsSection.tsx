'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PublicationsSection = () => {
  const publications = [
    { title: "Mindfulness-Based Interventions in Trauma Recovery", journal: "Journal of Mental Health in Kenya", year: "2024", link: "#" },
    { title: "Self-Compassion in Clinical Practice", journal: "African Journal of Psychology", year: "2023", link: "#" },
    { title: "Workplace Mental Health: A Kenyan Perspective", journal: "East African Journal of Psychiatry", year: "2022", link: "#" },
  ];

  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
            <BookOpen size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Publications & Research
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Featured{' '}
            <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Contributing to the advancement of mental health knowledge and practice
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 mb-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <FileText size={20} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{pub.title}</h3>
                  <p className="text-sm text-gray-500">{pub.journal}, {pub.year}</p>
                </div>
                <Link href={pub.link} className="text-primary hover:opacity-70 transition">
                  <ExternalLink size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;