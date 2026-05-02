// app/book-appointment/BookingFormClient.tsx
'use client';

import { Calendar, Clock, Shield, Phone, Mail, Sparkles, Heart, Users } from 'lucide-react';
import { useState } from 'react';

export default function BookingFormClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const bookingPageUrl = 'https://cms.acop.co.ke/booking';

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10 h-[500px] opacity-30"
        style={{
          background: 'radial-gradient(circle at 10% 20%, var(--color-lavender) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>Connect With Us</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you&apos;re seeking compassionate counseling or want to partner with us in transforming lives through philanthropy, we&apos;re here to help.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Shield, text: '100% Confidential' },
            { icon: Clock, text: 'Flexible Scheduling' },
            { icon: Heart, text: 'Community Impact' },
            { icon: Users, text: '15+ Years Experience' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
              <item.icon size={16} className="text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Iframe Container with Loading State */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white">
            {/* Decorative Top Bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            
            {/* Loading Skeleton */}
            {isLoading && !iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
                {/* Animated Spinner */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart size={24} className="text-primary animate-pulse" />
                  </div>
                </div>
                
                {/* Loading Text */}
                <div className="mt-6 text-center">
                  <p className="text-gray-700 font-medium">Loading booking form...</p>
                  <p className="text-gray-400 text-sm mt-1">Please wait while we prepare your secure form.</p>
                </div>
                
                {/* Loading Progress Indicator */}
                <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full animate-loading-bar" 
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            )}

            {/* Error State */}
            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Calendar size={32} className="text-red-500" />
                </div>
                <p className="text-gray-700 font-medium">Unable to load booking form</p>
                <p className="text-gray-400 text-sm mt-1 mb-4">Please try again or call us directly.</p>
                <button
                  onClick={() => {
                    setIframeError(false);
                    setIsLoading(true);
                    // Force iframe reload
                    const iframe = document.querySelector('iframe');
                    if (iframe) {
                      iframe.src = bookingPageUrl;
                    }
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
            
            <iframe
              src={bookingPageUrl}
              width="100%"
              height="750"
              className="w-full transition-opacity duration-300"
              style={{ 
                minHeight: '700px', 
                border: 'none',
                opacity: isLoading ? 0 : 1
              }}
              title="SGCF Appointment Booking & Philanthropy Inquiry Form"
              allow="payment"
              loading="lazy"
              onLoad={() => {
                setIsLoading(false);
                setIframeError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setIframeError(true);
              }}
            />
          </div>
        </div>

        {/* Footer Help Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>Need help? Call us at </span>
              <a href="tel:+254722367619" className="text-primary font-semibold hover:underline">
                +254722367619
              </a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:info@sgcfoundation.org" className="text-primary hover:underline">
                info@sgcfoundation.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation for loading bar */}
      <style jsx>{`
        @keyframes loading-progress {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 80%;
            margin-left: 10%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}