'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Building2, Globe, Award, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    { icon: Trophy, title: "Best Course Award 2023", organization: "Hadong Global University", year: "2023", color: "var(--color-accent)" },
    { icon: Users, title: "Chairperson", organization: "Kiambu County - Central Kenya", year: "Present", color: "var(--color-primary)" },
    { icon: Building2, title: "Chair of Counseling Department", organization: "Africa Nazarene University", year: "Present", color: "var(--color-secondary)" },
    { icon: Award, title: "Senior Counselor Supervisor", organization: "KCPA Accredited (KCPA/0116/06)", year: "", color: "var(--color-primary)" },
    { icon: Globe, title: "NITA Certified Trainer", organization: "Workplace Mental Health Issues", year: "", color: "var(--color-accent)" },
    { icon: TrendingUp, title: "Consultant Psychologist", organization: "Governmental & NGO Organizations", year: "", color: "var(--color-secondary)" },
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
            <Trophy size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Key Achievements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Professional{' '}
            <span className="text-gradient-primary">Milestones</span>
          </h2>
          <p className="text-lg text-gray-600">
            Recognized for outstanding contributions to mental health and counseling education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all duration-300 group"
                style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${ach.color}10` }}
                >
                  <Icon size={24} style={{ color: ach.color }} />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                  {ach.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-primary)' }}>{ach.organization}</p>
                {ach.year && <p className="text-xs text-gray-400 mt-1">{ach.year}</p>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;