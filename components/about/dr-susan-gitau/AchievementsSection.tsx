'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Building2, Globe, Award, TrendingUp, BookOpen, Briefcase, Heart, Shield, GraduationCap, Calendar, Star } from 'lucide-react';

const AchievementsSection = () => {
  // Leadership Roles from CV
  const leadershipRoles = [
    { icon: Briefcase, title: "Founder & Executive Director", organization: "Susan Gitau Counseling Foundation (SGCF)", year: "Present", color: "var(--color-primary)" },
    { icon: Briefcase, title: "Founder & Executive Director", organization: "International Professional Counselors Centre (IPCC)", year: "2006-Present", color: "var(--color-accent)" },
    { icon: Briefcase, title: "Founder & Executive Director", organization: "Africana College of Professionals (ACOP)", year: "Present", color: "var(--color-secondary)" },
    { icon: Users, title: "Senior Accredited Supervisor", organization: "Kenya Counseling & Psychological Association (KCPA)", year: "2021-Present", color: "var(--color-primary)" },
  ];

  // Academic Leadership from CV
  const academicLeadership = [
    { icon: Building2, title: "Lecturer - Counseling Psychology", organization: "Africa Nazarene University", year: "2011-Present", color: "var(--color-primary)" },
    { icon: GraduationCap, title: "Research Coordinator & Department Chair", organization: "Africa Nazarene University", year: "Present", color: "var(--color-accent)" },
    { icon: BookOpen, title: "Patron - Trauma & Crisis Response Club", organization: "Africa Nazarene University", year: "", color: "var(--color-secondary)" },
    { icon: Shield, title: "Examiner - MA Counseling Psychology", organization: "Tangaza University College (CUEA)", year: "2014-Present", color: "var(--color-primary)" },
  ];

  // Awards & Recognition from CV
  const awardsRecognition = [
    { icon: Trophy, title: "Senior Accredited Supervisor (SAS)", organization: "Kenya Counseling & Psychological Association", year: "February 2021", color: "var(--color-accent)", note: "Highest level of counselor supervisor" },
    { icon: Award, title: "Senior Supervisor Status", organization: "Kenya Counseling & Psychological Association", year: "2020", color: "var(--color-primary)" },
  ];

  // Key Partnerships & Projects from CV
  const keyProjects = [
    { icon: Shield, title: "Kenya Defence Forces Partnership", description: "Lead volunteer consultant since 2012 - Combat trauma, secondary PTSD, clinical supervision", year: "2012-Present", color: "var(--color-primary)" },
    { icon: Users, title: "Kianjau Primary School Adoption", description: "Enhancing academic performance through counseling, coaching, and mentorship", year: "", color: "var(--color-accent)" },
    { icon: Heart, title: "Kakuma Refugee Camp", description: "Psychological debriefing of child counselors and case managers - Lutheran World Federation", year: "2015", color: "var(--color-secondary)" },
    { icon: TrendingUp, title: "Bidco Africa Oil Company", description: "Group therapy using Logotherapy for workplace stress and trauma management", year: "2015", color: "var(--color-primary)" },
    { icon: Building2, title: "KCA University", description: "Established counseling unit and developed Diploma module in counseling psychology", year: "2008-2012", color: "var(--color-accent)" },
  ];

  // TVET & Curriculum Development from CV
  const curriculumDevelopment = [
    { title: "TVET/CDACC Certificate & Diploma curriculum - Counseling Psychology", organization: "KCPA Partnership", year: "2016-Present" },
    { title: "MA Child and Adolescent Concentration program", organization: "Africa Nazarene University", year: "2012-2013" },
    { title: "Clinical Supervision Manual (in use by TAPCAP)", organization: "Africa Nazarene University", year: "2014" },
    { title: "Clinical Supervision Manual", organization: "Tanzania Association Professional Counselors and Psychologists", year: "2013" },
    { title: "Positive Discipline Handbook for Teachers", organization: "Ministry of Education & Save the Children", year: "2015" },
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
              Professional Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Leadership &{' '}
            <span className="text-gradient-primary">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cultivating ties with boards, clients, regulators, employees and communities worldwide
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <Briefcase size={20} style={{ color: 'var(--color-primary)' }} />
            Leadership Roles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${role.color}10` }}
                  >
                    <Icon size={20} style={{ color: role.color }} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{role.title}</h4>
                  <p className="text-xs" style={{ color: 'var(--color-primary)' }}>{role.organization}</p>
                  {role.year && <p className="text-xs text-gray-400 mt-1">{role.year}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Academic Leadership */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} />
            Academic Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {academicLeadership.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${role.color}10` }}
                  >
                    <Icon size={20} style={{ color: role.color }} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{role.title}</h4>
                  <p className="text-xs" style={{ color: 'var(--color-primary)' }}>{role.organization}</p>
                  {role.year && <p className="text-xs text-gray-400 mt-1">{role.year}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <Trophy size={20} style={{ color: 'var(--color-primary)' }} />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {awardsRecognition.map((award, idx) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${award.color}10` }}
                    >
                      <Icon size={20} style={{ color: award.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{award.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--color-primary)' }}>{award.organization}</p>
                      {award.note && <p className="text-xs text-gray-500 mt-1">{award.note}</p>}
                      <p className="text-xs text-gray-400 mt-1">{award.year}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Projects & Partnerships */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <Heart size={20} style={{ color: 'var(--color-primary)' }} />
            Key Projects & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {keyProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-5 border hover:shadow-md transition-all"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}10` }}
                    >
                      <Icon size={20} style={{ color: project.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{project.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                      {project.year && <p className="text-xs text-gray-400 mt-1">{project.year}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Curriculum Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border"
          style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
            Curriculum & Manual Development
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {curriculumDevelopment.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm">
                <Star size={12} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.organization} • {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Impact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-white rounded-full px-6 py-3 shadow-sm border border-emerald-100">
            <Globe size={18} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium text-gray-700">Global Impact:</span>
            <span className="text-sm text-gray-600">10+ Countries • 20+ Years Experience • 50+ Training Programs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;