'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  Coffee,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <HeroSection />
      <MissionVisionSection />
      <FounderSection />
      <ValuesSection />
      <ApproachSection />
      <CredentialsSection />
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
                Our Story
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              About{' '}
              <span className="text-gradient-primary">Susan Gitau Counseling Foundation</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Dedicated to healing minds, restoring hope, and 
              transforming lives through compassionate counseling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const cards = [
    {
      title: "Our Mission",
      description: "To provide accessible, professional, and compassionate mental health counseling that empowers individuals, couples, and families to overcome challenges, heal from trauma, and live fulfilling lives.",
      icon: Heart,
      color: "var(--color-primary)"
    },
    {
      title: "Our Vision",
      description: "A society where mental health is prioritized, stigma is eliminated, and every person has access to quality psychological care regardless of their background or circumstances.",
      icon: Shield,
      color: "var(--color-secondary)"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ borderTop: `4px solid ${card.color}` }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${card.color}10` }}
                >
                  <Icon size={28} style={{ color: card.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: card.color }}>
                  {card.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Founder Section
const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const credentials = [
    "Licensed Clinical Psychologist",
    "Certified Trauma Specialist (EMDR)",
    "Member - Kenya Psychological Association",
    "Certificate in Cognitive Behavioral Therapy",
    "MA in Clinical Psychology - University of Nairobi",
    "15+ Years of Clinical Experience"
  ];

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-founder.png"
                alt="Susan Gitau - Founder and Lead Psychologist"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10"
              style={{ background: 'var(--color-primary)', opacity: 0.1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
              <Users size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Meet Dr. Susan Gitau
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Compassionate Care You{' '}
              <span className="text-gradient-primary">Can Trust</span>
            </h2>
            
            <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              With over 15 years of experience in clinical psychology, Susan Gitau has dedicated her career 
              to helping individuals, couples, and families navigate life&apos;s most challenging moments.
            </p>
            
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Her approach is rooted in empathy, evidence-based practice, and a deep belief in every person&apos;s 
              capacity for healing and growth. Susan creates a safe, non-judgmental space where clients feel 
              heard, valued, and empowered to make meaningful changes in their lives.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
              }}
            >
              <Calendar size={18} />
              <span>Book a Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const values = [
    {
      title: "Compassion",
      description: "We approach every client with genuine care, empathy, and unconditional positive regard.",
      icon: Heart,
      color: "var(--color-primary)"
    },
    {
      title: "Confidentiality",
      description: "Your privacy and trust are sacred. We maintain the highest standards of confidentiality.",
      icon: Shield,
      color: "var(--color-secondary)"
    },
    {
      title: "Excellence",
      description: "We continuously update our skills and use evidence-based practices for the best outcomes.",
      icon: Award,
      color: "var(--color-accent)"
    },
    {
      title: "Accessibility",
      description: "We offer sliding scale fees, flexible scheduling, and both online and in-person sessions.",
      icon: Users,
      color: "var(--color-primary)"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
            <BookOpen size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Our Core Values
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            What Guides{' '}
            <span className="text-gradient-primary">Our Work</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            These principles shape every interaction and guide our commitment to your wellbeing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${value.color}10` }}
                >
                  <Icon size={28} style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Therapeutic Approach Section
const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const approaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Helps identify and change negative thought patterns and behaviors.",
      percentage: 90
    },
    {
      name: "EMDR (Eye Movement Desensitization and Reprocessing)",
      description: "Highly effective for trauma and PTSD treatment.",
      percentage: 85
    },
    {
      name: "Person-Centered Therapy",
      description: "Creates a supportive environment for self-discovery and growth.",
      percentage: 95
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Integrates present-moment awareness for stress reduction.",
      percentage: 80
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'white' }}>
              <Award size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Therapeutic Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Evidence-Based{' '}
              <span className="text-gradient-primary">Methods</span>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Susan integrates multiple therapeutic modalities tailored to each client&apos;s unique needs, 
              ensuring the most effective and personalized care possible.
            </p>
            
            <div className="space-y-4">
              {approaches.map((approach, idx) => (
                <div key={approach.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      {approach.name}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--color-primary)' }}>
                      {approach.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ background: `${'var(--color-primary)'}20` }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${approach.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
                    />
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Coffee size={24} style={{ color: 'var(--color-primary)' }} />
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                What to Expect
              </h3>
            </div>
            <div className="space-y-4">
              {[
                "Initial consultation (free, 15-20 min) to discuss your needs",
                "Comprehensive assessment to understand your unique situation",
                "Collaborative goal-setting for your therapeutic journey",
                "Regular sessions with ongoing evaluation and adjustment",
                "Evidence-based interventions tailored to your progress"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Credentials & Affiliations Section
const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const affiliations = [
    "Kenya Psychological Association (KPA)",
    "Kenya Counselling Association (KCA)",
    "EMDR International Association",
    "African Mental Health Research Initiative"
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Professional{' '}
            <span className="text-gradient-primary">Affiliations</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Committed to excellence through continuous learning and professional collaboration.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {affiliations.map((affiliation, idx) => (
            <motion.div
              key={affiliation}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-xl px-6 py-3 shadow-md"
              style={{ border: '1px solid', borderColor: `${'var(--color-primary)'}20` }}
            >
              <span className="font-medium" style={{ color: 'var(--color-primary)' }}>
                {affiliation}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-16 md:py-20" style={{ background: 'var(--color-lavender)' }}>
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
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
              }}
            >
              <Calendar size={18} />
              <span>Book Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)'
              }}
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};