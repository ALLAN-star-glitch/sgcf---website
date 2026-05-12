'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, MessageCircle, ArrowRight, Video, Award, Globe, Briefcase } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Connect With{' '}
              <span className="text-gradient-primary">Dr. Susan Gitau</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Available for keynote speaking, training workshops, clinical supervision, research collaboration, and consultancy services
            </p>

            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-left">
                <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs text-gray-400">Phone / WhatsApp</p>
                  <a href="tel:+254722367619" className="text-sm hover:text-primary transition" style={{ color: 'var(--color-primary)' }}>
                    +254722367619
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-left">
                <Mail size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400">Email</p>
                  <a 
                    href="mailto:drsusangitau@sgcfoundation.org" 
                    className="text-sm hover:text-primary transition break-all"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    drsusangitau@sgcfoundation.org
                  </a>
                </div>
              </div>

              {/* Virtual Sessions */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-left">
                <Video size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs text-gray-400">Virtual Sessions</p>
                  <p className="text-sm text-gray-700">Google / Zoom / Skype</p>
                  <p className="text-xs text-gray-400">ID: Dr. Susan Gitau</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-left">
                <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm text-gray-700">Nairobi, Kenya</p>
                  <p className="text-xs text-gray-400">Available internationally</p>
                </div>
              </div>
            </div>

            {/* Professional Recognition Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">
                <Award size={12} style={{ color: 'var(--color-primary)' }} />
                Senior Accredited Supervisor - KCPA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">
                <Globe size={12} style={{ color: 'var(--color-primary)' }} />
                10+ Countries Served
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">
                <Briefcase size={12} style={{ color: 'var(--color-primary)' }} />
                PhD, MA, BA in Counseling
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                <Calendar size={18} />
                Book a Session
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ 
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
              >
                <MessageCircle size={18} />
                Send a Message
              </Link>
            </div>

            {/* Professional Memberships */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Professional Memberships: KCPA | ACA | GBV Responders Network | Kenya Red Cross Society | Kenya Association of Professional Mediators
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Available for international engagements | Virtual consultations worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;