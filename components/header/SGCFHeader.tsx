'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Phone, Mail, Calendar, HelpCircle, ChevronDown, Award, Users, Target, Shield, Handshake, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Updated menu items for SGCF with mega menu
const sgcfMenuItems = [
  { label: 'Home', href: '/', id: 'home' },
  { 
    label: 'About', 
    href: '/about', 
    id: 'about',
    hasMegaMenu: true,
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'Dr. Susan Gitau - Founder', href: '/about/dr-susan-gitau' },
      { label: 'Our Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our Team', href: '/about/our-team' },
      { label: 'Our Approach', href: '/about/our-approach' },
      { label: 'Our Values', href: '/about/values' },
      { label: 'Partners', href: '/about/partners' },
      { label: 'Affiliations', href: '/about/affiliations' },
    ]
  },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Events', href: '/events', id: 'events' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

// Mega Menu Sections
const megaMenuSections = {
  main: {
    title: "About SGCF",
    description: "Learn more about our foundation, our mission, and the people behind our compassionate care.",
    image: "/about-founder.png",
    imageAlt: "Dr. Susan Gitau - Founder",
    founderName: "Dr. Susan Gitau",
    founderTitle: "Founder & Clinical Director",
  },
  columns: [
    {
      title: "Our Organization",
      icon: Heart,
      items: [
        { label: "About Us", href: "/about", description: "Who we are and what we stand for" },
        { label: "Our Mission & Vision", href: "/about/mission-vision", description: "Our purpose and goals" },
        { label: "Our Values", href: "/about/values", description: "What guides our work" },
        { label: "Annual Report", href: "/about/annual-report", description: "Our impact and achievements" },
      ]
    },
    {
      title: "Leadership",
      icon: Award,
      items: [
        { label: "Dr. Susan Gitau - Founder", href: "/about/dr-susan-gitau", description: "Founder & Clinical Director", highlight: true },
        { label: "Our Team", href: "/about/our-team", description: "Meet our counselors" },
        { label: "Board of Directors", href: "/about/board", description: "Our governing body" },
        { label: "Volunteer Opportunities", href: "/volunteer", description: "Join our mission" },
      ]
    },
    {
      title: "Our Work",
      icon: Shield,
      items: [
        { label: "Our Approach", href: "/about/our-approach", description: "How we help" },
        { label: "Partners", href: "/about/partners", description: "Our collaborators" },
        { label: "Affiliations", href: "/about/affiliations", description: "Professional bodies" },
        { label: "Testimonials", href: "/about/testimonials", description: "Stories of healing" },
      ]
    },
    {
      title: "Get Involved",
      icon: Handshake,
      items: [
        { label: "Support Our Work", href: "/donate", description: "Make a donation" },
        { label: "Corporate Partnerships", href: "/partnerships", description: "Partner with us" },
        { label: "Media & Press", href: "/about/press", description: "In the news" },
        { label: "Contact Us", href: "/contact", description: "Reach out to us" },
      ]
    },
  ]
};

export const SGCFHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const aboutButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node) &&
          aboutButtonRef.current && !aboutButtonRef.current.contains(event.target as Node)) {
        setOpenMegaMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOpenMegaMenu(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Click handler for mega menu toggle
  const handleMegaMenuClick = () => {
    setOpenMegaMenu(!openMegaMenu);
  };

  return (
    <>
      {/* Top Bar - Helpline & Quick Contact */}
      <div 
        className="hidden md:block text-white text-sm" 
        style={{ 
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Heart size={14} className="text-highlight-light" />
                <span className="font-medium">24/7 Crisis Helpline:</span>
                <a href="tel:+254722367619" className="hover:text-accent transition font-bold">
                  +254722367619
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <a href="mailto:info@sgcfoundation.org" className="hover:text-accent transition">
                  info@sgcfoundation.org
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/crisis-support" className="flex items-center space-x-1 hover:text-accent transition">
                <HelpCircle size={14} />
                <span>Crisis Support</span>
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/donate" className="flex items-center space-x-1 hover:text-accent transition">
                <Heart size={14} />
                <span>Donate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`
          fixed left-0 w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-sm
          ${isScrolled 
            ? 'top-0 shadow-lg py-3' 
            : 'top-0 md:top-[38px] shadow-md py-4 md:py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo + Brand */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className={`
                relative rounded-2xl overflow-hidden transition-all duration-300
                ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}
              `}>
                <Image
                  src="/sgcf-logo.png"
                  alt="Susan Gitau Counseling Psychology"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className={`
                  font-bold tracking-tight transition-all duration-300
                  ${isScrolled ? 'text-lg' : 'text-xl'}
                `}>
                  <span className="text-gradient-primary">
                    Susan Gitau Counseling Foundation
                  </span>
                </h1>
                <p className="text-xs text-gray-500 -mt-0.5">
                  Counseling Psychology
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {sgcfMenuItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                const hasMegaMenu = item.hasMegaMenu;
                
                return (
                  <div
                    key={item.label}
                    ref={hasMegaMenu ? aboutButtonRef : null}
                    className="relative"
                  >
                    {/* Button wrapper for click handling */}
                    <div
                      onClick={hasMegaMenu ? handleMegaMenuClick : undefined}
                      className="cursor-pointer"
                    >
                      <Link
                        href={item.href}
                        className={`
                          relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1
                          ${isActive 
                            ? 'font-semibold' 
                            : 'text-gray-700 hover:text-primary'
                          }
                        `}
                        style={isActive ? { color: 'var(--color-primary)' } : {}}
                        onClick={(e) => {
                          // If it has mega menu, prevent navigation and just toggle menu
                          if (hasMegaMenu) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span className="relative z-10 text-sm font-medium">
                          {item.label}
                        </span>
                        {hasMegaMenu && (
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-300 ${openMegaMenu ? 'rotate-180' : ''}`}
                            style={{ color: isActive ? 'var(--color-primary)' : '#6B7280' }}
                          />
                        )}
                        
                        <span 
                          className={`
                            absolute inset-x-2 -bottom-1 h-0.5 rounded-full transition-transform duration-300 origin-left
                            ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                          `}
                          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
                        />
                      </Link>
                    </div>

                    {/* Mega Menu Dropdown - Opens on click */}
                    {hasMegaMenu && openMegaMenu && (
                      <motion.div
                        ref={megaMenuRef}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 transform -translate-x-1/2 mt-1 w-[880px] bg-white rounded-xl shadow-2xl overflow-hidden z-50"
                        style={{ 
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          top: isScrolled ? '56px' : '100px',
                          pointerEvents: 'auto'
                        }}
                      >
                        {/* Decorative Top Bar */}
                        <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                        
                        <div className="p-5">
                          {/* Main Section with Image and Name */}
                          <div className="flex gap-5 mb-5 pb-4 border-b border-gray-100">
                            {/* Founder Image with Name Below - CLICKABLE */}
                            <Link 
                              href="/about/dr-susan-gitau"
                              className="flex-shrink-0 w-28 text-center group block"
                              onClick={() => setOpenMegaMenu(false)}
                            >
                              <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md bg-gray-100 mx-auto transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={megaMenuSections.main.image}
                                  alt={megaMenuSections.main.imageAlt}
                                  width={112}
                                  height={112}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                              <div className="mt-2">
                                <p className="text-xs font-bold text-gray-800 group-hover:text-primary transition-colors">Dr. Susan Gitau</p>
                                <p className="text-[10px] text-primary">Founder & Director</p>
                              </div>
                            </Link>
                                                        
                            {/* Description */}
                            <div className="flex-1">
                              <h3 className="text-lg font-bold font-serif mb-1" style={{ color: '#171717' }}>
                                {megaMenuSections.main.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                {megaMenuSections.main.description}
                              </p>
                              <Link 
                                href="/about" 
                                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:gap-2 transition-all"
                                onClick={() => setOpenMegaMenu(false)}
                              >
                                Learn more about us <ArrowRight size={12} />
                              </Link>
                            </div>
                          </div>

                          {/* Column Grid */}
                          <div className="grid grid-cols-4 gap-4">
                            {megaMenuSections.columns.map((column, idx) => {
                              const Icon = column.icon;
                              return (
                                <div key={idx}>
                                  <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-gray-100">
                                    <Icon size={14} style={{ color: 'var(--color-primary)' }} />
                                    <h4 className="font-semibold text-xs uppercase tracking-wide text-gray-600">
                                      {column.title}
                                    </h4>
                                  </div>
                                  <ul className="space-y-1.5">
                                    {column.items.map((item) => (
                                      <li key={item.label}>
                                        <Link
                                          href={item.href}
                                          className={`
                                            block group transition-all duration-200
                                            ${item.highlight 
                                              ? 'bg-primary/10 rounded-md p-1.5 -mx-1.5' 
                                              : ''
                                            }
                                          `}
                                          onClick={() => setOpenMegaMenu(false)}
                                        >
                                          <div className={`
                                            font-medium text-xs transition-colors
                                            ${item.highlight 
                                              ? 'text-primary' 
                                              : 'text-gray-700 group-hover:text-primary'
                                            }
                                          `}>
                                            {item.label}
                                          </div>
                                          {item.description && (
                                            <div className="text-[10px] text-gray-400 mt-0.5 group-hover:text-gray-500 transition-colors">
                                              {item.description}
                                            </div>
                                          )}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom CTA Bar */}
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-5 py-3 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-medium text-gray-800">
                                Have questions about our foundation?
                              </p>
                              <p className="text-[10px] text-gray-500">We&apos;re here to help you understand our mission and work.</p>
                            </div>
                            <Link
                              href="/contact"
                              className="px-3 py-1.5 bg-primary text-white text-xs rounded-full font-medium hover:bg-primary-dark transition-all hover:shadow-md"
                              onClick={() => setOpenMegaMenu(false)}
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                href="/book-appointment"
                className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-white"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                <Calendar size={18} />
                <span>Appointment</span>
              </Link>

              <Link
                href="/donate"
                className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:bg-opacity-10"
                style={{ 
                  border: '2px solid var(--color-highlight)',
                  color: 'var(--color-highlight)'
                }}
              >
                <Heart size={18} />
                <span>Donate</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-lg"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Submenu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 w-full max-w-sm h-full bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 relative rounded-full overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-secondary-light))' }}
                    >
                      <Image
                        src="/sgcf-logo.png"
                        alt="SGCF Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Susan Gitau</h3>
                      <p className="text-xs text-gray-500">Counseling Psychology</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="py-6 px-4">
                <ul className="space-y-2">
                  {sgcfMenuItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    const hasSubmenu = item.submenu && item.submenu.length > 0;
                    const isAboutItem = item.label === 'About';
                    
                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {hasSubmenu && isAboutItem ? (
                          <>
                            <button
                              onClick={() => setOpenMobileSubmenu(!openMobileSubmenu)}
                              className={`
                                flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all
                                ${isActive 
                                  ? 'font-semibold' 
                                  : 'text-gray-600 hover:bg-gray-50'
                                }
                              `}
                              style={isActive ? { 
                                background: 'var(--color-lavender)',
                                color: 'var(--color-primary)'
                              } : {}}
                            >
                              <span>{item.label}</span>
                              <ChevronRight 
                                size={18} 
                                className={`transition-transform duration-300 ${openMobileSubmenu ? 'rotate-90' : ''}`}
                              />
                            </button>
                            
                            {/* Mobile Submenu Items */}
                            <AnimatePresence>
                              {openMobileSubmenu && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-4 mt-1 space-y-1 border-l-2 pl-3 overflow-hidden"
                                  style={{ borderColor: 'var(--color-lavender)' }}
                                >
                                  {item.submenu?.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-3 py-2 text-sm text-gray-500 hover:text-primary transition-colors rounded-lg"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`
                              flex items-center justify-between px-4 py-3 rounded-xl transition-all
                              ${isActive 
                                ? 'font-semibold' 
                                : 'text-gray-600 hover:bg-gray-50'
                              }
                            `}
                            style={isActive ? { 
                              background: 'var(--color-lavender)',
                              color: 'var(--color-primary)'
                            } : {}}
                          >
                            <span>{item.label}</span>
                            {isActive && (
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: 'var(--color-primary)' }}
                              />
                            )}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/book-appointment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full text-white py-3 rounded-xl font-semibold transition"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                  </Link>
                  
                  <Link
                    href="/donate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-semibold transition"
                    style={{ 
                      border: '2px solid var(--color-highlight)',
                      color: 'var(--color-highlight)'
                    }}
                  >
                    <Heart size={18} />
                    <span>Make a Donation</span>
                  </Link>

                  <div 
                    className="mt-6 p-4 rounded-xl border"
                    style={{ 
                      background: 'var(--color-warm-bg)',
                      borderColor: 'var(--color-accent)'
                    }}
                  >
                    <p 
                      className="text-sm font-medium mb-2"
                      style={{ color: 'var(--color-accent-dark)' }}
                    >
                      Need immediate help?
                    </p>
                    <a 
                      href="tel:+254722367619"
                      className="flex items-center justify-center space-x-2 w-full text-white py-2 rounded-lg font-semibold transition"
                      style={{ background: 'var(--color-highlight)' }}
                    >
                      <Phone size={16} />
                      <span>Call Crisis Helpline</span>
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};