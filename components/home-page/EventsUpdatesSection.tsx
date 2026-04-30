'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  ArrowRight, 
  Megaphone,
  ChevronRight,
  Tag,
  Star,
  Users,
  Heart,
  Shield,
  MessageCircle
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export const EventsUpdatesSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Scrolling announcements data
  const announcements = [
    { id: 1, text: "📢 New: Online Counseling Now Available Across Kenya", link: "/services/online-counseling" },
    { id: 2, text: "🎗️ Mental Health Awareness Month - Free Webinar April 25th", link: "/events/mental-health-webinar" },
    { id: 3, text: "💚 Sliding Scale Fees Available - No One Turned Away", link: "/fees" },
    { id: 4, text: "📚 New Resource: 'Managing Anxiety at Work' Guide Available", link: "/resources/anxiety-guide" },
    { id: 5, text: "🌟 Join Our Community Support Groups - Starting May 5th", link: "/programs/support-groups" },
  ];

  // Events data
  const events = [
    {
      id: 1,
      title: "Mental Health Awareness Webinar",
      date: "2026-04-25",
      month: "APR",
      day: "25",
      time: "6:00 PM EAT",
      location: "Zoom (Virtual)",
      price: "FREE",
      isFree: true,
      isNew: false,
      category: "Webinar",
      href: "/events/mental-health-webinar",
    },
    {
      id: 2,
      title: "Couples Communication Workshop",
      date: "2026-05-10",
      month: "MAY",
      day: "10",
      time: "10:00 AM EAT",
      location: "Nairobi (In-person)",
      price: "KES 2,500",
      isFree: false,
      isNew: false,
      category: "Workshop",
      href: "/events/couples-workshop",
    },
    {
      id: 3,
      title: "Youth Anxiety Support Group",
      date: "2026-05-05",
      month: "WEEKLY",
      day: "WED",
      time: "4:00 PM EAT",
      location: "Virtual",
      price: "FREE",
      isFree: true,
      isNew: true,
      category: "Support Group",
      href: "/events/youth-anxiety-group",
    },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Might Benefit from Therapy",
      excerpt: "Recognizing when to seek help is a sign of strength, not weakness. Here are five signs that therapy could be beneficial for you.",
      date: "April 10, 2026",
      category: "Mental Health",
      readTime: "5 min read",
      image: "/blog-placeholder-1.jpg",
      href: "/blog/signs-you-need-therapy",
    },
    {
      id: 2,
      title: "New Online Counseling Sessions Now Available",
      excerpt: "Access professional counseling from the comfort of your home. Learn how our virtual sessions work and how to get started.",
      date: "April 5, 2026",
      category: "Announcement",
      readTime: "3 min read",
      image: "/blog-placeholder-2.jpg",
      href: "/blog/online-counseling",
    },
    {
      id: 3,
      title: "World Mental Health Day Event Recap",
      excerpt: "Highlights from our community outreach event, including key takeaways and resources shared with attendees.",
      date: "March 28, 2026",
      category: "Community",
      readTime: "4 min read",
      image: "/blog-placeholder-3.jpg",
      href: "/blog/wmhd-recap",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute top-0 left-0 w-full h-96"
        style={{ 
          background: 'radial-gradient(circle at 0% 0%, var(--color-lavender) 0%, transparent 70%)',
          opacity: 0.3
        }}
      />

      <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
            <Calendar size={14} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
              Stay Connected
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Events &{' '}
            <span className="text-gradient-primary">Updates</span>
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Join our community programs and stay informed with the latest mental health resources
          </p>
        </motion.div>

        {/* Scrolling Announcement Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden"
          style={{ background: 'var(--color-warm-bg)', border: '1px solid var(--color-accent)' }}
        >
          <div 
            className="flex items-center gap-3 px-4 py-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--color-accent)', opacity: 0.15 }}
              >
                <Megaphone size={16} style={{ color: 'var(--color-accent-dark)' }} />
              </div>
              <span className="text-sm font-semibold hidden sm:inline" style={{ color: 'var(--color-accent-dark)' }}>
                Announcements:
              </span>
            </div>
            
            <div className="relative flex-1 overflow-hidden">
              <div 
                className="flex gap-12 whitespace-nowrap"
                style={{
                  animation: isPaused ? 'none' : 'marquee 60s linear infinite',
                }}
              >
                {[...announcements, ...announcements].map((announcement, idx) => (
                  <Link
                    key={`${announcement.id}-${idx}`}
                    href={announcement.link}
                    className="text-sm hover:opacity-70 transition-all duration-200"
                    style={{ color: 'var(--foreground)', opacity: 0.8 }}
                  >
                    {announcement.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Upcoming Events */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', opacity: 0.1 }}
                >
                  <Calendar size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Upcoming Events
                </h3>
              </div>
              <Link 
                href="/events" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2"
                style={{ color: 'var(--color-primary)' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Event Cards */}
            <div className="space-y-4">
              {events.map((event, idx) => (
                <motion.div
                  key={event.id}
                  variants={childVariants}
                  className="group bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex gap-4">
                    {/* Date Badge */}
                    <div 
                      className="flex-shrink-0 w-16 text-center rounded-xl py-2"
                      style={{ 
                        background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                      }}
                    >
                      <div className="text-white text-xs font-semibold">{event.month}</div>
                      <div className="text-white text-xl font-bold leading-tight">{event.day}</div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>
                          {event.title}
                        </h4>
                        {event.isNew && (
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--color-accent)', color: 'var(--foreground)' }}
                          >
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-xs mb-2" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {event.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span 
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={event.isFree ? { 
                            background: 'var(--color-primary)', 
                            opacity: 0.1, 
                            color: 'var(--color-primary)' 
                          } : { 
                            background: 'var(--color-secondary)', 
                            opacity: 0.1, 
                            color: 'var(--color-secondary)' 
                          }}
                        >
                          {event.price}
                        </span>
                        <Link 
                          href={event.href}
                          className="text-sm flex items-center gap-1 transition-all group-hover:gap-2"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {event.title.includes("Support") ? "Learn more" : "Register"} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Recent Blog Posts */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--color-secondary)', opacity: 0.1 }}
                >
                  <MessageCircle size={16} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Latest Articles
                </h3>
              </div>
              <Link 
                href="/blog" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2"
                style={{ color: 'var(--color-primary)' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Blog Posts */}
            <div className="space-y-5">
              {blogPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  variants={childVariants}
                  className="group flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  {/* Thumbnail Placeholder */}
                  <div 
                    className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
                    style={{ background: 'var(--color-lavender)' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Heart size={24} style={{ color: 'var(--color-primary)', opacity: 0.3 }} />
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span 
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--color-secondary)', opacity: 0.1, color: 'var(--color-secondary)' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                      {post.title}
                    </h4>
                    <p className="text-xs mb-2 line-clamp-2" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                      {post.excerpt}
                    </p>
                    <Link 
                      href={post.href}
                      className="text-xs flex items-center gap-1 transition-all group-hover:gap-2"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Read more <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 pt-8 border-t"
          style={{ borderColor: 'var(--color-lavender)' }}
        >
          <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            Want to stay updated on all events and mental health resources?
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
              color: 'white'
            }}
          >
            <Star size={18} />
            <span>Subscribe to Our Newsletter</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* CSS Animation for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};