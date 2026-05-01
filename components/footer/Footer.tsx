'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Book Appointment", href: "/book-appointment" },
    { name: "Donate", href: "/donate" },
    { name: "Crisis Support", href: "/crisis-support" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    { name: "Individual Therapy", href: "/services/individual-therapy" },
    { name: "Couples Counseling", href: "/services/couples-counseling" },
    { name: "Trauma Recovery", href: "/services/trauma-recovery" },
    { name: "Online Counseling", href: "/services/online-counseling" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", color: "#1877F2" },
    { icon: Instagram, href: "https://instagram.com", color: "#E4405F" },
    { icon: Twitter, href: "https://twitter.com", color: "#1DA1F2" },
    { icon: Linkedin, href: "https://linkedin.com", color: "#0A66C2" },
  ];

  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-highlight))' }}
      />

      {/* Background Decoration */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ background: 'var(--color-primary)', opacity: 0.03 }}
      />
      <div 
        className="absolute top-20 left-0 w-80 h-80 rounded-full blur-3xl -z-10"
        style={{ background: 'var(--color-secondary)', opacity: 0.03 }}
      />

      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Brand & Tagline */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src="/sgcf-logo.png"
                  alt="Susan Gitau Counseling Foundation"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>
                Susan Gitau
              </span>
            </Link>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Healing minds, restoring hope through compassionate, professional counseling services.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: `${social.color}10` }}
                  >
                    <Icon size={16} style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--foreground)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm transition-all hover:gap-2"
                    style={{ color: 'var(--foreground)', opacity: 0.7 }}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--color-primary)' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--foreground)' }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1 text-sm transition-all hover:gap-2"
                    style={{ color: 'var(--foreground)', opacity: 0.7 }}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--color-primary)' }} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--foreground)' }}>
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Crisis Helpline (24/7)</p>
                  <a href="tel:+254722367619" className="text-sm font-semibold" style={{ color: 'var(--color-highlight)' }}>
                    +254722367619
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Email</p>
                  <a href="mailto:info@sgcfoundation.org" className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    info@sgcfoundation.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Location</p>
                  <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Imara Plaza<br />
                    Thika, Kenya
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} style={{ color: 'var(--color-primary)' }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Office Hours</p>
                  <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Mon-Fri: 9 AM - 7 PM<br />
                    Sat: 10 AM - 4 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: `${'var(--color-primary)'}20` }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart size={18} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Subscribe to our newsletter for mental health tips and updates
              </span>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 sm:w-64 px-4 py-2 rounded-l-full border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: `${'var(--color-primary)'}30`,
                  background: 'white'
                }}
              />
              <button
                className="px-4 py-2 rounded-r-full text-white transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: `${'var(--color-primary)'}20` }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              © {currentYear} Susan Gitau Counseling Foundation. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:underline" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:underline" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};