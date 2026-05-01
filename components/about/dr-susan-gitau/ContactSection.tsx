'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Work With{' '}
              <span className="text-gradient-primary">Dr. Susan Gitau</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step toward healing and personal growth
            </p>
            
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

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                <Mail size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a href="mailto:dr.susan@sgcfoundation.org" className="text-sm hover:text-primary transition">dr.susan@sgcfoundation.org</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a href="tel:+254722367619" className="text-sm hover:text-primary transition">+254 722 367 619</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;