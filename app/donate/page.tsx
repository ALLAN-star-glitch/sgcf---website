'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DonatePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Heart size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Support Our Mission
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Make a{' '}
              <span className="text-gradient-primary">Donation</span>
            </h1>
          </motion.div>
        </div>

        {/* Donation Image with Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/donate.webp"
              alt="Donation steps - M-PESA Paybill 123456 Account SGCFOUNDATION"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 p-4 rounded-xl"
          style={{ background: 'var(--color-lavender)' }}
        >
          <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            <Heart size={14} style={{ color: 'var(--color-highlight)' }} className="inline mr-1" />
            Thank you for supporting mental health in our community. Every contribution makes a difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
}