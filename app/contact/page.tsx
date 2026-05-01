'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission - Replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes - replace with actual form handling
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="bg-white">
      <HeroSection />
      <ContactFormSection handleSubmit={handleSubmit} formStatus={formStatus} />
       <ContactInfoSection />
      <MapSection />
      <CTASection />
    </div>
  );
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          opacity: 0.03
        }}
      />
      
      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <MessageCircle size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              Let&apos;s{' '}
              <span className="text-gradient-primary">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Reach out today. We&apos;re here to listen, support, and guide you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Section
const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254722367619", "+254722367619"],
      description: "24/7 Crisis Helpline Available",
      action: "tel:+254722367619",
      color: "var(--color-primary)"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sgcfoundation.org", "support@sgcfoundation.org"],
      description: "Response within 24 hours",
      action: "mailto:info@sgcfoundation.org",
      color: "var(--color-secondary)"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Karen Medical Centre, Suite 204", "Nairobi, Kenya"],
      description: "By appointment only",
      action: "https://maps.google.com",
      color: "var(--color-accent-dark)"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  borderTop: `4px solid ${method.color}`
                }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${method.color}10` }}
                >
                  <Icon size={28} style={{ color: method.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {method.title}
                </h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {detail}
                  </p>
                ))}
                <p className="text-xs mt-2" style={{ color: method.color }}>
                  {method.description}
                </p>
                <Link
                  href={method.action}
                  className="inline-flex items-center gap-1 text-sm mt-4 transition-all hover:gap-2"
                  style={{ color: method.color }}
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactFormSection = ({ handleSubmit, formStatus }: { 
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formStatus: 'idle' | 'submitting' | 'success' | 'error';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                Send us a Message
              </h2>
              <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                We&apos;ll respond within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: `${'var(--color-primary)'}30`,
                      background: 'white'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: `${'var(--color-primary)'}30`,
                      background: 'white'
                    }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: `${'var(--color-primary)'}30`,
                      background: 'white'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Preferred Contact Method
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: `${'var(--color-primary)'}30`,
                      background: 'white'
                    }}
                  >
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Service Interested In
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: `${'var(--color-primary)'}30`,
                    background: 'white'
                  }}
                >
                  <option>Individual Therapy</option>
                  <option>Couples Counseling</option>
                  <option>Trauma Recovery</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ 
                    borderColor: `${'var(--color-primary)'}30`,
                    background: 'white'
                  }}
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                {formStatus === 'submitting' ? (
                  <>Sending...</>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    Error, Please Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-center mt-4" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                Your information is confidential. We respect your privacy.
              </p>
            </form>
          </motion.div>

          {/* Right Column - Office Hours & Emergency Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Office Hours
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b" style={{ borderColor: `${'var(--color-primary)'}20` }}>
                  <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Monday - Friday</span>
                  <span className="font-medium" style={{ color: 'var(--color-primary)' }}>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b" style={{ borderColor: `${'var(--color-primary)'}20` }}>
                  <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Saturday</span>
                  <span className="font-medium" style={{ color: 'var(--color-primary)' }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Sunday</span>
                  <span className="font-medium" style={{ color: 'var(--color-secondary)' }}>Closed</span>
                </div>
              </div>
              <p className="text-xs mt-4" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                * Evening and weekend appointments available upon request
              </p>
            </div>

            {/* Emergency Contact */}
            <div 
              className="rounded-2xl p-6 text-center"
              style={{ background: 'var(--color-warm-bg)', border: `2px solid var(--color-highlight)` }}
            >
              <Heart size={32} style={{ color: 'var(--color-highlight)' }} className="mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                24/7 Crisis Helpline
              </h3>
              <p className="mb-3" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                If you&apos;re in crisis and need immediate support
              </p>
              <a
                href="tel:+254722367619"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ background: 'var(--color-highlight)' }}
              >
                <Phone size={18} />
                <span>+254722367619</span>
              </a>
              <p className="text-xs mt-4" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                For life-threatening emergencies, please call 999 or visit your nearest hospital.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Facebook, color: "#1877F2", link: "https://facebook.com" },
                  { icon: Instagram, color: "#E4405F", link: "https://instagram.com" },
                  { icon: Twitter, color: "#1DA1F2", link: "https://twitter.com" },
                  { icon: Linkedin, color: "#0A66C2", link: "https://linkedin.com" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ background: `${social.color}10` }}
                    >
                      <Icon size={18} style={{ color: social.color }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Map Section
const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Find{' '}
            <span className="text-gradient-primary">Us</span>
          </h2>
          <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Conveniently located in Karen, Nairobi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Google Maps Embed - Replace with actual coordinates */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789012!2d36.71234567890123!3d-1.312345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f2f2f2f2f2f%3A0x2f2f2f2f2f2f2f2f!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SGCF Location Map"
          />
        </motion.div>

        <div className="text-center mt-6">
          <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            📍 Karen Medical Centre, Lang&apos;ata Road, Nairobi, Kenya
          </p>
          <p className="text-sm mt-1" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            🅿️ Ample parking available • Wheelchair accessible
          </p>
        </div>
      </div>
    </section>
  );
};


// CTA Section
const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Ready to Start Your{' '}
            <span className="text-gradient-primary">Healing Journey?</span>
          </h2>
          <p className="text-lg mb-6" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            You don&apos;t have to face it alone. Reach out today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
            }}
          >
            <Calendar size={18} />
            <span>Book Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};