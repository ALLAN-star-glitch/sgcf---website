'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Shield, CheckCircle, GraduationCap, Heart, Brain } from 'lucide-react';

const CredentialsSection = () => {
  const credentials = [
    { icon: GraduationCap, title: "Academic Qualifications", items: ["MA in Clinical Psychology - University of Nairobi", "PhD in Counseling Psychology"] },
    { icon: Award, title: "Certifications", items: ["MSC Certified Teacher (CMSC – USA)", "Certified EMDR Practitioner", "Certified Trauma Specialist"] },
    { icon: Shield, title: "Professional Memberships", items: ["Kenya Psychological Association (KPA)", "Kenya Counselling Association (KCA)", "EMDR International Association"] },
    { icon: Heart, title: "Specializations", items: ["Trauma Recovery", "Mindfulness-Based Therapy", "Cognitive Behavioral Therapy", "Couples Counseling"] },
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
            <Award size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Professional Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Qualifications &{' '}
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600">
            A commitment to excellence through continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${'var(--color-primary)'}10` }}>
                  <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                  {cred.title}
                </h3>
                <ul className="space-y-2">
                  {cred.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;