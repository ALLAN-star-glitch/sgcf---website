'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Target, Globe, BookOpen, Users, Award, Briefcase, GraduationCap } from 'lucide-react';

const BiographySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                Professional Biography
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              A Life Dedicated to{' '}
              <span className="text-gradient-primary">Healing & Empowerment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Progressive Leader & Catalyst for Lasting, Significant Impact
            </p>
          </motion.div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <strong className="text-gray-800">Dr. Susan Gitau</strong> is a distinguished Counseling Psychologist with a <strong>PhD in Counseling Psychology</strong> from Chuka University, Kenya. She brings over <strong>20 years of experience</strong> in mental health, trauma counseling, and community development across Africa and internationally. Her journey began with a Bachelor of Arts in Commerce and Economics from the University of Nairobi (1996), followed by a Diploma in Counseling Psychology from the Kenya Institute of Professional Development (2001-2003), and a Master of Arts in Counseling Psychology from Daystar University (2006).
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dr. Gitau completed her PhD coursework and practicum at Kenyatta University (2008-2014) before earning her doctorate by thesis from Chuka University (2014-2018). Her doctoral research focused on trauma recovery for Internally Displaced Persons following Kenya&apos;s 2007/08 post-election violence, which later became a published book. She has pursued extensive professional training including Mindful Self-Compassion (MSC) certification in the USA, Cross Cultural Counseling at Mid America Nazarene University, and Competency Based Assessment through the Mediation Training Institute International.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Her commitment to excellence led her to academia, where she has served as a <strong>Lecturer in the Counseling Psychology Department at Africa Nazarene University since 2011</strong>. In this role, she serves as a student mentor, academic advisor, and Patron of the Trauma & Crisis Response Club. She teaches Trauma Counseling, Practice of Counseling, Multicultural Counseling, Psychological Testing & Assessment, and Marriage and Family Therapy. She also serves as Research Coordination and Chair of the Counseling Psychology department.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Dr. Gitau is the <strong>Founder and Executive Director of three organizations</strong>: the International Professional Counselors Centre (IPCC) since 2006, the Susan Gitau Counseling Foundation, and the Africana College of Professionals (ACOP). She is also a Senior Accredited Supervisor with the Kenya Counseling & Psychological Association (KCPA), having been awarded the highest level of counselor supervisor status in February 2021.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Driven by a vision to make quality mental health care accessible to all, Dr. Gitau leads the <strong>Susan Gitau Counseling Foundation (SGCF)</strong>, a non-profit organization dedicated to providing professional counseling services, community outreach, and mental health education across Kenya. Under her leadership, the foundation has adopted Kianjau Primary School to enhance academic performance through counseling, coaching, and mentorship, and she has been a lead volunteer consultant with the <strong>Kenya Defence Forces since 2012</strong>, focusing on combat trauma, secondary PTSD, clinical supervision, and mental health self-care training.
            </motion.p>
          </div>

          {/* Global Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Globe size={20} style={{ color: 'var(--color-primary)' }} />
              Global Impact & International Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Rwanda & Burundi', 'USA', 'Uganda', 'England', 
                'Germany', 'Tanzania', 'South Korea', 'China', 
                'Israel', 'Egypt'
              ].map(country => (
                <div key={country} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                  <Shield size={12} style={{ color: 'var(--color-primary)' }} />
                  <span>{country}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">
              Dr. Gitau has conducted trauma counseling training in Rwanda, guest lectured at Georgia State University (USA), 
              presented at trauma conferences in Uganda and Germany, and led clinical supervision training in Tanzania.
            </p>
          </motion.div>

          {/* Current Roles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 grid md:grid-cols-2 gap-4"
          >
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 className="font-semibold text-gray-800">Academic Leadership</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">• Lecturer, Counseling Psychology - Africa Nazarene University (2011-Present)</li>
                <li className="flex items-start gap-2">• Research Coordinator & Department Chair</li>
                <li className="flex items-start gap-2">• Examiner for MA Counseling Psychology - Tangaza University College (CUEA)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 className="font-semibold text-gray-800">Professional Recognition</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">• Senior Accredited Supervisor - KCPA (February 2021)</li>
                <li className="flex items-start gap-2">• Member - GBV Responders Network</li>
                <li className="flex items-start gap-2">• Member - Kenya Red Cross Society</li>
                <li className="flex items-start gap-2">• Member - Kenya Association of Professional Mediators</li>
              </ul>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 p-8 rounded-2xl text-center"
            style={{ background: 'var(--color-lavender)' }}
          >
            <Sparkles size={32} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-4" />
            <p className="text-lg italic font-serif" style={{ color: 'var(--foreground)' }}>
              &quot;Healing is not just about treating symptoms; it&apos;s about restoring hope, dignity, 
              and the belief that every person has the capacity to thrive. As mental health professionals, 
              we must cultivate ties with communities, empower the next generation, and create lasting, 
              significant impact.&quot;
            </p>
            <p className="mt-4 font-semibold" style={{ color: 'var(--color-primary)' }}>
              — Dr. Susan Gitau, PhD in Counseling Psychology
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;