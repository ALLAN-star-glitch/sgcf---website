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
  Heart,
  TrendingUp,
  Users,
  Sparkles
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
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F6FF] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/3 to-primary/3 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 shadow-sm" style={{ background: 'white' }}>
            <Sparkles size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Stay Connected
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Events &{' '}
            <span className="bg-gradient-to-r from-[#2D6A4F] to-[#6D28D9] bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community programs and stay informed with the latest mental health resources
          </p>
        </div>

        {/* VIDEO SECTION */}
        {videoData && videoData.videoUrl && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl group">
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
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Play size={32} style={{ color: '#2D6A4F' }} className="ml-1" />
                  </div>
                </button>
              )}
              {isVideoPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-black/80"
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          
          {/* LEFT COLUMN - Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #2D6A4F15, #2D6A4F05)' }}
                >
                  <Calendar size={18} style={{ color: '#2D6A4F' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#171717' }}>
                  Upcoming Events
                </h3>
              </div>
              <Link 
                href="/events" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2 font-medium"
                style={{ color: '#2D6A4F' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Events List */}
            {events && events.length > 0 ? (
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ 
                      border: '1px solid',
                      borderColor: 'rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <div className="flex">
                      {/* Event Image */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden">
                        <Image
                          src={event.image || '/events/fallback.jpg'}
                          alt={event.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 96px, 112px"
                        />
                        {/* Date Overlay */}
                        <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm rounded-md px-1.5 py-0.5">
                          <span className="text-white text-[9px] font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-semibold text-sm sm:text-base line-clamp-1" style={{ color: '#171717' }}>
                            {event.title}
                          </h4>
                          {event.isNew && (
                            <span 
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: '#DC2626', color: 'white' }}
                            >
                              NEW
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-xs mb-2" style={{ color: '#171717', opacity: 0.6 }}>
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={10} /> {event.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span 
                            className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                            style={event.isFree ? { 
                              background: '#2D6A4F', 
                            } : { 
                              background: '#6D28D9', 
                            }}
                          >
                            {event.price}
                          </span>
                          <Link 
                            href={`/events/${event.slug}`}
                            className="text-xs flex items-center gap-1 transition-all hover:gap-2 cursor-pointer font-medium"
                            style={{ color: '#2D6A4F' }}
                          >
                            {event.title.includes("Support") ? "Learn more" : "Register"} 
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State for Events */
              <div className="bg-white rounded-xl p-10 text-center" style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#2D6A4F08' }}>
                  <CalendarIcon size={32} style={{ color: '#2D6A4F', opacity: 0.4 }} />
                </div>
                <h4 className="font-semibold text-xl mb-2" style={{ color: '#171717' }}>
                  No Upcoming Events
                </h4>
                <p className="text-sm mb-5 max-w-xs mx-auto" style={{ color: '#171717', opacity: 0.6 }}>
                  We&apos;re currently planning new events. Check back soon for workshops, webinars, and support groups.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                  style={{ color: '#2D6A4F' }}
                >
                  Get notified <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Recent Blog Posts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #6D28D915, #6D28D905)' }}
                >
                  <MessageCircle size={18} style={{ color: '#6D28D9' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#171717' }}>
                  Latest Articles
                </h3>
              </div>
              <Link 
                href="/blog" 
                className="text-sm flex items-center gap-1 transition-all hover:gap-2 font-medium"
                style={{ color: '#2D6A4F' }}
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            {/* Blog Posts */}
            {blogPosts && blogPosts.length > 0 ? (
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={post.href}
                    className="group flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
                  >
                    {/* Blog Image */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden relative bg-gray-100">
                      <Image
                        src={post.image || '/blog/fallback.jpg'}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="64px"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span 
                          className="text-xs px-2.5 py-0.5 rounded-full font-semibold text-white"
                          style={{ background: '#6D28D9' }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors" style={{ color: '#171717' }}>
                        {post.title}
                      </h4>
                      <p className="text-xs line-clamp-2" style={{ color: '#171717', opacity: 0.6 }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: '#2D6A4F' }}>
                        Read more <ArrowRight size={10} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* Empty State for Blog Posts */
              <div className="bg-white rounded-xl p-10 text-center" style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#6D28D908' }}>
                  <BookOpen size={32} style={{ color: '#6D28D9', opacity: 0.4 }} />
                </div>
                <h4 className="font-semibold text-xl mb-2" style={{ color: '#171717' }}>
                  No Articles Yet
                </h4>
                <p className="text-sm mb-5 max-w-xs mx-auto" style={{ color: '#171717', opacity: 0.6 }}>
                  Our blog is coming soon! We&apos;ll be sharing mental health insights, tips, and resources.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                  style={{ color: '#2D6A4F' }}
                >
                  Subscribe for updates <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* FEATURED STATISTICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-8 border-y" style={{ borderColor: '#2D6A4F10' }}>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm" style={{ background: '#2D6A4F10' }}>
              <Heart size={18} style={{ color: '#2D6A4F' }} />
            </div>
            <p className="text-2xl font-bold" style={{ color: '#2D6A4F' }}>500+</p>
            <p className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>Lives Transformed</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm" style={{ background: '#6D28D908' }}>
              <Users size={18} style={{ color: '#6D28D9' }} />
            </div>
            <p className="text-2xl font-bold" style={{ color: '#6D28D9' }}>15+</p>
            <p className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>Years Experience</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm" style={{ background: '#FBBF2410' }}>
              <TrendingUp size={18} style={{ color: '#F59E0B' }} />
            </div>
            <p className="text-2xl font-bold" style={{ color: '#F59E0B' }}>100%</p>
            <p className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>Confidential</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm" style={{ background: '#2D6A4F10' }}>
              <Sparkles size={18} style={{ color: '#2D6A4F' }} />
            </div>
            <p className="text-2xl font-bold" style={{ color: '#2D6A4F' }}>24/7</p>
            <p className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>Crisis Support</p>
          </div>
        </div>

        {/* SCROLLING IMAGES GALLERY */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="mt-8 pt-4">
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{ color: '#2D6A4F' }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
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
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 25vw, 20vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-white text-xs font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
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
                      width: currentGalleryIndex === idx ? '28px' : '8px',
                      background: currentGalleryIndex === idx ? '#2D6A4F' : '#2D6A4F',
                      opacity: currentGalleryIndex === idx ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>

              {isAutoScrolling && (
                <div className="flex justify-center mt-3">
                  <div className="text-[10px] flex items-center gap-1" style={{ color: '#2D6A4F', opacity: 0.5 }}>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Auto-scrolling gallery
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Social Media Links */}
        <div className="text-center mt-14 pt-6 border-t" style={{ borderColor: '#F8F6FF' }}>
          <p className="text-sm mb-4" style={{ color: '#171717', opacity: 0.7 }}>
            Follow us for daily mental health tips and updates
          </p>
          <div className="flex justify-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md" style={{ background: '#E4405F10' }}>
              <Instagram size={18} style={{ color: '#E4405F' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md" style={{ background: '#1DA1F210' }}>
              <Twitter size={18} style={{ color: '#1DA1F2' }} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md" style={{ background: '#1877F210' }}>
              <Facebook size={18} style={{ color: '#1877F2' }} />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 pt-4">
          <Link
            href="/newsletter"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md"
            style={{ 
              background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
            }}
          >
            <Star size={18} />
            <span>Subscribe to Our Newsletter</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};