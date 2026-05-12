'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Shield, CheckCircle, GraduationCap, Heart, Brain, Globe, FileText, Briefcase, Calendar } from 'lucide-react';

const CredentialsSection = () => {
  // Education data from CV
  const education = [
    { degree: "PhD in Counseling Psychology", institution: "University of Chuka – Meru County, Kenya", period: "2014-2018", note: "PhD by Thesis" },
    { degree: "PhD Course Work & Practicum", institution: "Kenyatta University", period: "2008-2014" },
    { degree: "Master of Arts in Counseling Psychology", institution: "Daystar University", period: "2006", note: "Included Field Practicum and Thesis" },
    { degree: "Bachelor of Arts in Commerce and Economics", institution: "University of Nairobi", period: "1996" },
    { degree: "Diploma in Counseling Psychology", institution: "Kenya Institute of Professional Development", period: "2001-2003", note: "Specialized in practice of counseling" },
  ];

  // Professional Training data from CV
  const professionalTraining = [
    { title: "PFA intervention during COVID 19 Pandemic", organization: "AMREF & Kenya Red Cross Society (KRCS)", year: "2020" },
    { title: "Africa Business Club Conference and Symposium", organization: "Harvard University – Massachusetts, USA", year: "2020" },
    { title: "Cross Cultural Counseling Intensive Immersion Training", organization: "Mid America Nazarene University", year: "2019" },
    { title: "Mindful Self Compassion MSC", organization: "USA", year: "2018" },
    { title: "Training Workshop on Competency Based Assessment", organization: "Mediation Training Institute International (USA)", year: "2017" },
    { title: "Certificate in Mediation Course", organization: "TVET Curriculum Development Assessment Certification Council", year: "2017" },
    { title: "Training of Trainers Course in Competency Based Education & Training", organization: "TVET CDACC", year: "2016" },
    { title: "Certificate in Therapeutic Community Model in Behavior Change", organization: "Bridges of America (Orlando, USA)", year: "2016" },
    { title: "Certificate in HIV Testing and Counseling", organization: "NASCOP", year: "2005" },
    { title: "Certificate in Training of Trainers & Facilitators (TOT/TOF)", organization: "NACADA", year: "2002" },
  ];

  // Professional Associations from CV
  const associations = [
    { category: "Private Sector", members: ["Bidco Oil Africa Ltd", "Jungle Nuts Ltd", "Match Electricals", "Munene Industries", "Via Africa Ltd"] },
    { category: "Government/NGO", members: ["Bridges of America Trauma Therapists (BOA)", "Christian and Scientific Association of Kenya (CSAK)", "Gender Based Violence (GBV) Responders Network", "Kenya Counseling & Psychological Association (KCPA)", "Kenya Red Cross Society", "Kenya Association of Professionals Mediators", "Kenyatta Trust"] },
    { category: "Education Sector", members: ["Dau La Elimu Education platform - KTN News", "Africana College of Professionals", "Kenyatta Girls Secondary School", "Chania Boys High School", "TVET/CDACC", "Pendekezo Letu (PKL) Girls Rehabilitation Centre", "Forum for African Women Educationists"] },
  ];

  // Core Competencies from CV
  const coreCompetencies = [
    'Sustainable Development', 'Global Experience', 'Training & Facilitation', 'Resource Mobilization',
    'Project Management', 'Entrepreneurship', 'SGBV Education', 'Research', 'Organization Leadership',
    'Youth Leadership & Development', 'Human Resource', 'Global Mental Health', 'Community Development',
    'Talent Nurturing', 'Curriculum Development', 'Public Relations', 'Organization Culture',
    'Conference Management', 'Consultancy', 'Clinical Supervision'
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
              Education & Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Qualifications &{' '}
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600">
            PhD in Counseling Psychology | Senior Accredited Supervisor | 20+ Years of Excellence
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Academic Achievements</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-emerald-200 pl-4 py-1" style={{ borderLeftColor: 'var(--color-primary)' }}>
                  <p className="font-semibold text-gray-800">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs text-gray-400">{edu.period}</span>
                    {edu.note && <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{edu.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Two Column Layout for Training and Associations */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Professional Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <BookOpen size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Professional Training</h3>
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {professionalTraining.map((training, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2 text-sm border-b border-gray-100 pb-2">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{training.title}</p>
                    <p className="text-xs text-gray-500">{training.organization}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{training.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Associations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <Users size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Professional Associations</h3>
            </div>
            <div className="space-y-4">
              {associations.map((assoc, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-emerald-700 text-sm mb-2">{assoc.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {assoc.members.map((member, midx) => (
                      <span key={midx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-md mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
              <Brain size={20} style={{ color: 'var(--color-primary)' }} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((skill, idx) => (
              <span 
                key={idx}
                className="text-sm bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Computer Skills and Awards Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <FileText size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Computer Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MS Word', 'Excel', 'PowerPoint', 'Statistical Package for Social Sciences (SPSS)'].map((skill, idx) => (
                <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${'var(--color-primary)'}10` }}>
                <Award size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Awards & Recognition</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Senior Accredited Supervisor status</p>
                  <p className="text-xs text-gray-500">Kenya Counseling & Psychological Association (KCPA) - February 2021</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Highest level of counselor supervisor</p>
                  <p className="text-xs text-gray-500">Kenya Counseling & Psychological Association - 2020</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Experience Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <Globe size={18} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium text-gray-700">Global Experience:</span>
            <span className="text-sm text-gray-600">Rwanda | USA | Uganda | England | Germany | Tanzania | South Korea | China | Israel | Egypt</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsSection;