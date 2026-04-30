'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Users, 
  Shield, 
  Sparkles,
  ArrowRight,
  Calendar,
  Phone,
  Clock,
  MapPin,
  CheckCircle,
  ChevronRight,
  BookOpen,
  Baby,
  Briefcase,
  Moon,
  Sun,
  Flower2
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesGridSection />
      <HowItWorksSection />
      <SpecializationsSection />
      <FAQsSection />
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
              <Heart size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              Professional{' '}
              <span className="text-gradient-primary">Counseling</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Compassionate, evidence-based support for every stage of your healing journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Grid Section
const ServicesGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs. We'll work together to navigate anxiety, depression, life transitions, and personal growth.",
      longDescription: "Individual therapy provides a confidential space where you can explore your thoughts, feelings, and behaviors with a trained professional. Together, we'll identify patterns, develop coping strategies, and work toward your personal goals.",
      icon: Heart,
      color: "var(--color-primary)",
      features: [
        "Anxiety & Depression management",
        "Self-discovery and personal growth",
        "Life transitions and adjustments",
        "Stress and burnout recovery",
        "Grief and loss counseling",
        "Self-esteem and confidence building"
      ],
      duration: "50-60 minutes",
      frequency: "Weekly or bi-weekly",
      href: "/services/individual-therapy"
    },
    {
      id: 2,
      title: "Couples Counseling",
      description: "Strengthen communication, rebuild trust, and deepen your connection. Supporting couples through every stage of their relationship.",
      longDescription: "Couples counseling helps partners navigate challenges, improve communication, and rebuild intimacy. Whether you're facing conflict, considering separation, or simply want to strengthen your bond, we provide a neutral, supportive space.",
      icon: Users,
      color: "var(--color-secondary)",
      features: [
        "Conflict resolution strategies",
        "Trust and infidelity recovery",
        "Premarital counseling",
        "Communication improvement",
        "Intimacy and connection building",
        "Parenting alignment"
      ],
      duration: "75-90 minutes",
      frequency: "Weekly or bi-weekly",
      href: "/services/couples-counseling"
    },
    {
      id: 3,
      title: "Trauma Recovery",
      description: "Evidence-based approaches to help you heal from past experiences and reclaim your life with confidence and resilience.",
      longDescription: "Trauma recovery uses specialized evidence-based approaches like EMDR to help you process painful experiences and reduce their lasting impact. Healing is possible, and you don't have to do it alone.",
      icon: Shield,
      color: "var(--color-accent-dark)",
      features: [
        "EMDR Therapy",
        "PTSD and complex trauma support",
        "Childhood trauma healing",
        "Sexual assault recovery",
        "Accident and disaster trauma",
        "Vicarious trauma support"
      ],
      duration: "60-90 minutes",
      frequency: "Weekly",
      href: "/services/trauma-recovery"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div className="p-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}10` }}
                  >
                    <Icon size={28} style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Clock size={12} style={{ color: service.color }} />
                      <span style={{ color: 'var(--foreground)', opacity: 0.6 }}>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} style={{ color: service.color }} />
                      <span style={{ color: 'var(--foreground)', opacity: 0.6 }}>{service.frequency}</span>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                    style={{ color: service.color }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: "01",
      title: "Reach Out",
      description: "Contact us for a free 15-20 minute consultation to discuss your needs and answer your questions.",
      icon: Phone
    },
    {
      number: "02",
      title: "Schedule",
      description: "Book your first session at a time that works for you - flexible evening and weekend appointments available.",
      icon: Calendar
    },
    {
      number: "03",
      title: "Begin Healing",
      description: "Start your journey in a safe, confidential space where you'll be heard, supported, and empowered.",
      icon: Heart
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
            <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            How It{' '}
            <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Three simple steps to begin your healing journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                    style={{ background: 'white' }}
                  >
                    <Icon size={28} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'var(--color-primary)', color: 'white' }}
                  >
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Specializations Section
const SpecializationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const specializations = [
    { name: "Anxiety & Panic Disorders", icon: Moon },
    { name: "Depression & Mood Disorders", icon: Sun },
    { name: "Grief & Loss", icon: Flower2 },
    { name: "Relationship Issues", icon: Users },
    { name: "Parenting Support", icon: Baby },
    { name: "Workplace Stress", icon: Briefcase },
    { name: "Life Transitions", icon: Sparkles },
    { name: "Self-Esteem & Confidence", icon: Heart }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Areas of{' '}
            <span className="text-gradient-primary">Specialization</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Expertise across a wide range of mental health concerns
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ background: 'var(--color-lavender)' }}
              >
                <Icon size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm" style={{ color: 'var(--foreground)' }}>{spec.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



// FAQs Section
const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long is each therapy session?",
      answer: "Individual therapy sessions are 50-60 minutes. Couples counseling and trauma recovery sessions are typically 75-90 minutes to allow for deeper work."
    },
    {
      question: "How often should I attend sessions?",
      answer: "Most clients attend weekly sessions, especially in the beginning. As you make progress, we may transition to bi-weekly or monthly sessions based on your needs."
    },
    {
      question: "Do you offer online counseling?",
      answer: "Yes! We offer secure, confidential video sessions for clients who prefer online counseling or cannot attend in person."
    },
    {
      question: "Is therapy confidential?",
      answer: "Absolutely. All sessions are completely confidential within legal and ethical boundaries. Your privacy and trust are our highest priority."
    },
    {
      question: "Do you accept insurance?",
      answer: "We provide receipts that you can submit to your insurance for reimbursement. Please check with your provider about outpatient mental health coverage."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee."
    }
  ];

  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Frequently Asked{' '}
            <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Everything you need to know about our counseling services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="mb-4 border-b pb-4"
              style={{ borderColor: `${'var(--color-primary)'}20` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left py-2"
              >
                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                  {faq.question}
                </span>
                <ChevronRight 
                  size={18} 
                  style={{ color: 'var(--color-primary)' }}
                  className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : ''}`}
                />
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 pl-4"
                >
                  <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
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
            Ready to Begin Your{' '}
            <span className="text-gradient-primary">Healing Journey?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Take the first step today. Schedule a free consultation and discover how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
              }}
            >
              <Calendar size={18} />
              <span>Book Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+254700000000"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                border: '2px solid var(--color-highlight)',
                color: 'var(--color-highlight)'
              }}
            >
              <Phone size={18} />
              <span>Call Crisis Helpline</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};