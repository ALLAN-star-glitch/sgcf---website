'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Compass, Sparkles, Shield, BookOpen, Award, Globe, GraduationCap, Target, Feather } from 'lucide-react';

const PhilosophySection = () => {
  // Therapeutic Approaches from CV
  const therapeuticApproaches = [
    { icon: Brain, title: "Virginia Satir's Model", description: "Human Validation Process Model for loss and psycho-trauma healing, PTSD symptom reduction, and enhancement of rational thinking in traumatized communities." },
    { icon: Heart, title: "Logotherapy", description: "Meaning-centered therapy for managing workplace stress and trauma, finding purpose through suffering." },
    { icon: Target, title: "Narrative Exposure Therapy", description: "Evidence-based intervention for traumatic stress management in young people and refugee populations." },
    { icon: Compass, title: "Therapeutic Community Model", description: "Certified in behavior change using community-based therapeutic approaches from Bridges of America." },
    { icon: Shield, title: "Mindful Self-Compassion (MSC)", description: "Certified MSC trainer from USA, integrating mindfulness and self-compassion practices." },
    { icon: Users, title: "Multicultural Counseling", description: "Cross-cultural counseling intensive training and global experience across 10 countries." },
  ];

  // Specializations from CV
  const specializations = [
    "Trauma Counseling & Recovery",
    "Clinical Supervision (Senior Accredited Supervisor)",
    "SGBV Education & Intervention",
    "Combat Trauma & Secondary PTSD",
    "Crisis Intervention (PFA - COVID 19 Pandemic)",
    "Competency Based Education & Training (CBET)",
    "Marriage & Family Therapy",
    "Psychological Testing & Assessment",
    "Group Therapy & Peer Counseling",
    "Substance Use & Addiction Counseling",
  ];

  // Professional Philosophy Statement
  const philosophyStatement = {
    title: "Progressive Leader & Catalyst for Lasting, Significant Impact",
    quote: "As a counseling psychologist, my commitment is to cultivate healing, restore hope, and empower individuals and communities to overcome trauma and achieve lasting, significant change. Healing is not just about treating symptoms; it's about restoring dignity, purpose, and the belief that every person has the capacity to thrive.",
    approach: "Dr. Gitau specializes in evidence-based therapeutic approaches that bridge clinical excellence with community empowerment. Her work integrates international best practices with culturally responsive care, serving clients across Africa and globally.",
  };

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
              Professional Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Therapeutic{' '}
            <span className="text-gradient-primary">Approach</span>
          </h2>
          <p className="text-lg text-gray-600">
            Evidence-based, compassionate care rooted in global best practices
          </p>
        </motion.div>

        {/* Philosophy Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-lavender) 0%, white 100%)', border: '1px solid rgba(0, 0, 0, 0.05)' }}
        >
          <Sparkles size={32} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
            {philosophyStatement.title}
          </h3>
          <p className="text-gray-600 italic leading-relaxed max-w-2xl mx-auto">
            &quot;{philosophyStatement.quote}&quot;
          </p>
          <div className="mt-4 pt-4 border-t border-emerald-100">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              {philosophyStatement.approach}
            </p>
          </div>
          <p className="mt-4 font-semibold" style={{ color: 'var(--color-primary)' }}>
            — Dr. Susan Gitau, PhD in Counseling Psychology
          </p>
        </motion.div>

        {/* Therapeutic Approaches Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <Brain size={20} style={{ color: 'var(--color-primary)' }} />
            Therapeutic Models & Approaches
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {therapeuticApproaches.map((approach, idx) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-5 transition-all duration-300 hover:shadow-lg border"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${'var(--color-primary)'}10` }}>
                      <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{approach.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{approach.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Specializations Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Specializations List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <Award size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                Clinical Specializations
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {specializations.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <Feather size={12} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Global Impact & Professional Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <Globe size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                Global Impact
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-sm text-gray-600">Trauma counseling training for counselors and prison officers in <strong>Rwanda</strong></p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-sm text-gray-600">Guest lecturer at <strong>Georgia State University, Atlanta, USA</strong></p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-sm text-gray-600">Training in GBV intervention in <strong>Uganda</strong></p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-sm text-gray-600">Clinical supervision training for counselors in <strong>Tanzania</strong></p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-sm text-gray-600">Youth Mind Set behavior change training in <strong>South Korea</strong></p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield size={12} style={{ color: 'var(--color-primary)' }} />
                <span>Senior Accredited Supervisor - Kenya Counseling & Psychological Association (KCPA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <BookOpen size={12} style={{ color: 'var(--color-primary)' }} />
                <span>Author: &quot;Trauma recovery for IDPs in Kenya after postelection violence 2007/08&quot;</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Recognition Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-white rounded-full px-5 py-2">
            <GraduationCap size={16} style={{ color: 'var(--color-primary)' }} />
            <span className="text-xs text-gray-600">PhD in Counseling Psychology • MA Counseling Psychology • BA Commerce & Economics</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;