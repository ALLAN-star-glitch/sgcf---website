'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft,
  Star,
  MessageCircle,
  Play,
  Pause,
  Instagram,
  Twitter,
  Facebook,
  Calendar as CalendarIcon,
  BookOpen,
  Heart
} from 'lucide-react';

// Define types
interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  href: string;
  time: string;
  location: string;
  price: string;
  isFree: boolean;
  isNew: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface VideoData {
  posterUrl: string;
  videoUrl: string;
  title: string;
}

interface EventsUpdatesSectionProps {
  events: Event[];
  blogPosts: BlogPost[];
  galleryImages: GalleryImage[];
  videoData: VideoData | null;
}

export const EventsUpdatesSection = ({ 
  events, 
  blogPosts, 
  galleryImages, 
  videoData 
}: EventsUpdatesSectionProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  // Auto-scroll gallery
  useEffect(() => {
    if (isAutoScrolling && galleryImages.length > 0) {
      scrollIntervalRef.current = setInterval(() => {
        setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    }
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, [isAutoScrolling, galleryImages.length]);

  const nextGalleryImage = () => {
    setIsAutoScrolling(false);
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const prevGalleryImage = () => {
    setIsAutoScrolling(false);
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  if (!isClient) {
    return (
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F6FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Loading updates...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F6FF]">
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

        {/* VIDEO SECTION */}
        {videoData && videoData.videoUrl && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-video bg-gray-900">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={videoData.posterUrl}
                src={videoData.videoUrl}
                onEnded={() => setIsVideoPlaying(false)}
              />
              {!isVideoPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play size={32} style={{ color: '#2D6A4F' }} className="ml-1" />
                  </div>
                </button>
              )}
              {isVideoPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center transition-all duration-300 hover:bg-black/70"
                >
                  <Pause size={16} className="text-white" />
                </button>
              )}
            </div>
            <div className="p-4 bg-white" style={{ borderTop: `3px solid #2D6A4F` }}>
              <p className="text-sm font-medium text-center" style={{ color: '#2D6A4F' }}>
                {videoData.title || 'Watch: Understanding Mental Health - A Message from Susan Gitau'}
              </p>
            </div>
          </div>
        )}

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
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

            {/* Events List or Empty State */}
            {events.length > 0 ? (
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ 
                      border: '1px solid',
                      borderColor: 'rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="flex">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                        <Image
                          src={event.image || '/events/fallback.jpg'}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-semibold text-sm sm:text-base" style={{ color: '#171717' }}>
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
                        
                        <div className="flex flex-wrap gap-2 text-xs mb-2" style={{ color: '#171717', opacity: 0.6 }}>
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={10} /> {event.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
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
                            className="text-xs flex items-center gap-1 transition-all group-hover:gap-2 cursor-pointer"
                            style={{ color: '#2D6A4F' }}
                          >
                            {event.title.includes("Support") ? "Learn more" : "Register"} <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State for Events */
              <div className="bg-white rounded-xl p-8 text-center" style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#2D6A4F10' }}>
                  <CalendarIcon size={28} style={{ color: '#2D6A4F', opacity: 0.5 }} />
                </div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#171717' }}>
                  No Upcoming Events
                </h4>
                <p className="text-sm mb-4" style={{ color: '#171717', opacity: 0.6 }}>
                  We&apos;re currently planning new events. Check back soon for workshops, webinars, and support groups.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                  style={{ color: '#2D6A4F' }}
                >
                  Get notified when events are announced <ArrowRight size={12} />
                </Link>
              </div>
            )}
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

            {/* Blog Posts or Empty State */}
            {blogPosts.length > 0 ? (
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group flex gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden relative">
                      <Image
                        src={post.image || '/blog/fallback.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
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
                      <h4 className="font-semibold text-sm mb-1 transition-colors line-clamp-1" style={{ color: '#171717' }}>
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
            ) : (
              /* Empty State for Blog Posts */
              <div className="bg-white rounded-xl p-8 text-center" style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#6D28D910' }}>
                  <BookOpen size={28} style={{ color: '#6D28D9', opacity: 0.5 }} />
                </div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#171717' }}>
                  No Articles Yet
                </h4>
                <p className="text-sm mb-4" style={{ color: '#171717', opacity: 0.6 }}>
                  Our blog is coming soon! We&apos;ll be sharing mental health insights, tips, and resources.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                  style={{ color: '#2D6A4F' }}
                >
                  Subscribe for updates <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* SCROLLING IMAGES GALLERY */}
        {galleryImages.length > 0 && (
          <div className="mt-8 pt-4 border-t" style={{ borderColor: '#2D6A4F20' }}>
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#2D6A4F' }}>
                Moments of Healing
              </h3>
              <p className="text-sm" style={{ color: '#171717', opacity: 0.6 }}>
                A glimpse into our community and compassionate care
              </p>
            </div>

            <div className="relative">
              <button
                onClick={prevGalleryImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ color: '#2D6A4F' }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ color: '#2D6A4F' }}
              >
                <ChevronRight size={20} />
              </button>

              <div className="overflow-hidden px-8">
                <div 
                  className="flex gap-4 transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentGalleryIndex * 25}%)` }}
                >
                  {[...galleryImages, ...galleryImages].map((image, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-[calc(25%-12px)] group cursor-pointer"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                        <div className="relative aspect-square">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-white text-xs font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoScrolling(false);
                      setCurrentGalleryIndex(idx);
                      setTimeout(() => setIsAutoScrolling(true), 5000);
                    }}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: currentGalleryIndex === idx ? '24px' : '8px',
                      background: currentGalleryIndex === idx ? '#2D6A4F' : '#2D6A4F',
                      opacity: currentGalleryIndex === idx ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>

              {isAutoScrolling && (
                <div className="flex justify-center mt-3">
                  <div className="text-[10px] flex items-center gap-1" style={{ color: '#2D6A4F', opacity: 0.5 }}>
                    <span>●</span> Auto-scrolling gallery
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Social Media Links */}
        <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: '#F8F6FF' }}>
          <p className="text-sm mb-4" style={{ color: '#171717', opacity: 0.7 }}>
            Follow us for daily mental health tips and updates
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: '#E4405F10' }}>
              <Instagram size={18} style={{ color: '#E4405F' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: '#1DA1F210' }}>
              <Twitter size={18} style={{ color: '#1DA1F2' }} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: '#1877F210' }}>
              <Facebook size={18} style={{ color: '#1877F2' }} />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 pt-4">
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