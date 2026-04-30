'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Phone, Mail, Calendar, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Updated menu items for SGCF
const sgcfMenuItems = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Get Involved', href: '/get-involved', id: 'involved' },
  { label: 'Resources', href: '/resources', id: 'resources' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

export const SGCFHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
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

  return (
    <>
      {/* Top Bar - Helpline & Quick Contact using CSS variables */}
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
                <a href="tel:+254700000000" className="hover:text-accent transition font-bold">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <a href="mailto:hello@sgcfoundation.org" className="hover:text-accent transition">
                  hello@sgcfoundation.org
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
          fixed left-0 w-full z-50 transition-all duration-500
          ${isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'top-[38px] bg-white/90 backdrop-blur-sm shadow-md py-5'
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
                    Susan Gitau
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
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      relative px-4 py-2 rounded-full transition-all duration-300
                      ${isActive 
                        ? 'font-semibold' 
                        : 'text-gray-700 hover:text-primary'
                      }
                    `}
                    style={isActive ? { color: 'var(--color-primary)' } : {}}
                  >
                    <span className="relative z-10 text-sm font-medium">
                      {item.label}
                    </span>
                    
                    {/* Animated underline effect using CSS variables */}
                    <span 
                      className={`
                        absolute inset-x-2 -bottom-1 h-0.5 rounded-full transition-transform duration-300 origin-left
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `}
                      style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              {/* Book Appointment - Primary CTA using CSS variables */}
              <Link
                href="/book-appointment"
                className="hidden md:flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-white"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                }}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>

              {/* Donate Button - Secondary using highlight color */}
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

              {/* Mobile Menu Button - Fixed: removed invalid hover property */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 w-full max-w-sm h-full bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Mobile Menu Header */}
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

              {/* Mobile Navigation */}
              <nav className="py-6 px-4">
                <ul className="space-y-2">
                  {sgcfMenuItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    
                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
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
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile Action Buttons */}
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

                  {/* Crisis Support Banner using warm-bg */}
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
                      href="tel:+254700000000"
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

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-[72px]' : 'h-[110px]'}`} />
    </>
  );
};