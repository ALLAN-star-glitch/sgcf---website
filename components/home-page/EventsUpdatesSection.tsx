'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Megaphone,
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  MessageCircle
} from 'lucide-react';

// Move data outside the component
const announcements = [
  { id: 1, text: "New: Online Counseling Now Available Across Kenya", link: "/services/online-counseling" },
  { id: 2, text: "Mental Health Awareness Month - Free Webinar April 25th", link: "/events/mental-health-webinar" },
  { id: 3, text: "Sliding Scale Fees Available - No One Turned Away", link: "/fees" },
  { id: 4, text: "New Resource: 'Managing Anxiety at Work' Guide Available", link: "/resources/anxiety-guide" },
  { id: 5, text: "Join Our Community Support Groups - Starting May 5th", link: "/programs/support-groups" },
];

const eventsData = [
  {
    id: 1,
    title: "Mental Health Awareness Webinar",
    month: "APR",
    day: "25",
    time: "6:00 PM EAT",
    location: "Zoom (Virtual)",
    price: "FREE",
    isFree: true,
    isNew: false,
    href: "/events/mental-health-webinar",
  },
  {
    id: 2,
    title: "Couples Communication Workshop",
    month: "MAY",
    day: "10",
    time: "10:00 AM EAT",
    location: "Nairobi (In-person)",
    price: "KES 2,500",
    isFree: false,
    isNew: false,
    href: "/events/couples-workshop",
  },
  {
    id: 3,
    title: "Youth Anxiety Support Group",
    month: "WEEKLY",
    day: "WED",
    time: "4:00 PM EAT",
    location: "Virtual",
    price: "FREE",
    isFree: true,
    isNew: true,
    href: "/events/youth-anxiety-group",
  },
];

const blogPostsData = [
  {
    id: 1,
    title: "5 Signs You Might Benefit from Therapy",
    excerpt: "Recognizing when to seek help is a sign of strength, not weakness. Here are five signs that therapy could be beneficial for you.",
    date: "April 10, 2026",
    category: "Mental Health",
    readTime: "5 min read",
    href: "/blog/signs-you-need-therapy",
  },
  {
    id: 2,
    title: "New Online Counseling Sessions Now Available",
    excerpt: "Access professional counseling from the comfort of your home. Learn how our virtual sessions work and how to get started.",
    date: "April 5, 2026",
    category: "Announcement",
    readTime: "3 min read",
    href: "/blog/online-counseling",
  },
  {
    id: 3,
    title: "World Mental Health Day Event Recap",
    excerpt: "Highlights from our community outreach event, including key takeaways and resources shared with attendees.",
    date: "March 28, 2026",
    category: "Community",
    readTime: "4 min read",
    href: "/blog/wmhd-recap",
  },
];

export const EventsUpdatesSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-rotate announcements every 5 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      nextAnnouncement();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentAnnouncementIndex]);

  const nextAnnouncement = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
      setIsFading(false);
    }, 300);
  };

  const prevAnnouncement = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
      setIsFading(false);
    }, 300);
  };

  const goToAnnouncement = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentAnnouncementIndex(index);
      setIsFading(false);
    }, 300);
  };

  if (!isClient) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
            <Calendar size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Stay Connected
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Events &{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #6D28D9 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Updates
            </span>
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: '#171717', opacity: 0.7 }}>
            Join our community programs and stay informed with the latest mental health resources
          </p>
        </div>

        {/* Fading Announcement Carousel */}
        <div 
          className="mb-12 rounded-2xl overflow-hidden"
          style={{ background: '#FEF3C7', border: '1px solid #FBBF24' }}
        >
          <div className="flex items-center gap-3 px-4 py-4">
            {/* Megaphone Icon */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#FBBF24', opacity: 0.15 }}
              >
                <Megaphone size={16} style={{ color: '#F59E0B' }} />
              </div>
              <span className="text-sm font-semibold hidden sm:inline" style={{ color: '#F59E0B' }}>
                Announcement:
              </span>
            </div>
            
            {/* Fading Announcement Text */}
            <div className="flex-1 min-h-[60px] flex items-center">
              <Link
                href={currentAnnouncement.link}
                className={`text-sm transition-all duration-300 hover:opacity-70 cursor-pointer block w-full ${
                  isFading ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}
                style={{ color: '#171717', opacity: 0.8 }}
              >
                {currentAnnouncement.text}
              </Link>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={prevAnnouncement}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                style={{ background: '#FBBF24', opacity: 0.8, color: '#171717' }}
                aria-label="Previous announcement"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextAnnouncement}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                style={{ background: '#FBBF24', opacity: 0.8, color: '#171717' }}
                aria-label="Next announcement"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 pb-3">
            {announcements.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToAnnouncement(idx)}
                className="h-1.5 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  background: '#F59E0B',
                  opacity: idx === currentAnnouncementIndex ? 1 : 0.3,
                  width: idx === currentAnnouncementIndex ? '24px' : '8px',
                }}
                aria-label={`Go to announcement ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#2D6A4F', opacity: 0.1 }}
                >
                  <Calendar size={16} style={{ color: '#2D6A4F' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#171717' }}>
                  Upcoming Events
                </h3>
              </div>
              <Link 
                href="/events" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2"
                style={{ color: '#2D6A4F' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-16 text-center rounded-xl py-2"
                      style={{ 
                        background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
                      }}
                    >
                      <div className="text-white text-xs font-semibold">{event.month}</div>
                      <div className="text-white text-xl font-bold leading-tight">{event.day}</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="font-semibold text-base" style={{ color: '#171717' }}>
                          {event.title}
                        </h4>
                        {event.isNew && (
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: '#FBBF24', color: '#171717' }}
                          >
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-xs mb-2" style={{ color: '#171717', opacity: 0.6 }}>
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
                            background: '#2D6A4F', 
                            opacity: 0.1, 
                            color: '#2D6A4F' 
                          } : { 
                            background: '#6D28D9', 
                            opacity: 0.1, 
                            color: '#6D28D9' 
                          }}
                        >
                          {event.price}
                        </span>
                        <Link 
                          href={event.href}
                          className="text-sm flex items-center gap-1 transition-all group-hover:gap-2 cursor-pointer"
                          style={{ color: '#2D6A4F' }}
                        >
                          {event.title.includes("Support") ? "Learn more" : "Register"} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Recent Blog Posts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#6D28D9', opacity: 0.1 }}
                >
                  <MessageCircle size={16} style={{ color: '#6D28D9' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#171717' }}>
                  Latest Articles
                </h3>
              </div>
              <Link 
                href="/blog" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2"
                style={{ color: '#2D6A4F' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className="space-y-5">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  className="group flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div 
                    className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center"
                    style={{ background: '#F8F6FF' }}
                  >
                    <Heart size={24} style={{ color: '#2D6A4F', opacity: 0.3 }} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span 
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: '#6D28D9', opacity: 0.1, color: '#6D28D9' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1 transition-colors" style={{ color: '#171717' }}>
                      {post.title}
                    </h4>
                    <p className="text-xs mb-2 line-clamp-2" style={{ color: '#171717', opacity: 0.6 }}>
                      {post.excerpt}
                    </p>
                    <Link 
                      href={post.href}
                      className="text-xs flex items-center gap-1 transition-all hover:gap-2 cursor-pointer"
                      style={{ color: '#2D6A4F' }}
                    >
                      Read more <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: '#F8F6FF' }}>
          <p className="mb-4" style={{ color: '#171717', opacity: 0.7 }}>
            Want to stay updated on all events and mental health resources?
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            style={{ 
              background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
            }}
          >
            <Star size={18} />
            <span>Subscribe to Our Newsletter</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};