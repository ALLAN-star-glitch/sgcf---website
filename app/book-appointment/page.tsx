'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageCircle,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookAppointmentPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission - Replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes - replace with actual form handling
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const services = [
    { value: "individual", label: "Individual Therapy (50-60 min) - KES 3,500" },
    { value: "couples", label: "Couples Counseling (75-90 min) - KES 5,000" },
    { value: "trauma", label: "Trauma Recovery (60-90 min) - KES 4,500" },
    { value: "not-sure", label: "Not sure yet - Free consultation" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return days;
  };

  const availableDays = getNextDays();

  return (
    <div className="bg-white min-h-screen mt-16">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Calendar size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Schedule a Session
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
              Book an{' '}
              <span className="text-gradient-primary">Appointment</span>
            </h1>
            <p className="text-base sm:text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Take the first step toward healing. Schedule your session today.
            </p>
          </motion.div>
        </div>

        {/* Form and Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Form Column - 2/3 width */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              style={{ border: `1px solid ${'var(--color-primary)'}20` }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Appointment Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      First Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                        style={{ 
                          borderColor: `${'var(--color-primary)'}30`,
                          background: 'white'
                        }}
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: `${'var(--color-primary)'}30`,
                        background: 'white'
                      }}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                        style={{ 
                          borderColor: `${'var(--color-primary)'}30`,
                          background: 'white'
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                        style={{ 
                          borderColor: `${'var(--color-primary)'}30`,
                          background: 'white'
                        }}
                        placeholder="+254722367619"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Select Service *
                  </label>
                  <div className="relative">
                    <Heart size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all appearance-none"
                      style={{ 
                        borderColor: `${'var(--color-primary)'}30`,
                        background: 'white'
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                    <ChevronRight size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90" style={{ color: `${'var(--color-primary)'}60` }} />
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all appearance-none"
                      style={{ 
                        borderColor: `${'var(--color-primary)'}30`,
                        background: 'white'
                      }}
                    >
                      <option value="">Select a date</option>
                      {availableDays.map(day => (
                        <option key={day.value} value={day.value}>{day.label}</option>
                      ))}
                    </select>
                    <ChevronRight size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90" style={{ color: `${'var(--color-primary)'}60` }} />
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: `${'var(--color-primary)'}60` }} />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all appearance-none"
                      style={{ 
                        borderColor: `${'var(--color-primary)'}30`,
                        background: 'white'
                      }}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <ChevronRight size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90" style={{ color: `${'var(--color-primary)'}60` }} />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Additional Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageCircle size={18} className="absolute left-3 top-3" style={{ color: `${'var(--color-primary)'}60` }} />
                    <textarea
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ 
                        borderColor: `${'var(--color-primary)'}30`,
                        background: 'white'
                      }}
                      placeholder="Any specific concerns or questions you'd like to share?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                  }}
                >
                  {formStatus === 'submitting' ? (
                    <>Processing...</>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      Appointment Request Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertCircle size={18} />
                      Error, Please Try Again
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      Request Appointment
                    </>
                  )}
                </button>

                <p className="text-xs text-center mt-4" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
                  We&apos;ll confirm your appointment within 24 hours via email or phone.
                  <br />Free cancellation up to 24 hours before your session.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Info Column - 1/3 width */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Session Info */}
              <div className="bg-white rounded-2xl p-5 shadow-lg" style={{ border: `1px solid ${'var(--color-primary)'}20` }}>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                  <Clock size={18} style={{ color: 'var(--color-primary)' }} />
                  Session Information
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Individual Therapy</span>
                    <span className="font-medium" style={{ color: 'var(--color-primary)' }}>KES 3,500 / 50-60 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Couples Counseling</span>
                    <span className="font-medium" style={{ color: 'var(--color-secondary)' }}>KES 5,000 / 75-90 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Trauma Recovery</span>
                    <span className="font-medium" style={{ color: 'var(--color-accent-dark)' }}>KES 4,500 / 60-90 min</span>
                  </li>
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-5 shadow-lg" style={{ border: `1px solid ${'var(--color-primary)'}20` }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--foreground)' }}>
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Free 15-min consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Safe, confidential environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: 'var(--color-primary)' }} className="mt-0.5" />
                    <span style={{ color: 'var(--foreground)', opacity: 0.7 }}>Online or in-person sessions</span>
                  </li>
                </ul>
              </div>

              {/* Crisis Support */}
              <div 
                className="rounded-2xl p-5 text-center"
                style={{ background: 'var(--color-warm-bg)', border: `2px solid var(--color-highlight)` }}
              >
                <Heart size={24} style={{ color: 'var(--color-highlight)' }} className="mx-auto mb-2" />
                <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--foreground)' }}>
                  Need Immediate Support?
                </h3>
                <p className="text-xs mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Call our 24/7 Crisis Helpline
                </p>
                <a
                  href="tel:+254722367619"
                  className="inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  <Phone size={14} />
                  +254722367619
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}