// app/book-appointment/page.tsx
import type { Metadata } from 'next';
import { Calendar, Clock, Shield, Phone, Mail, Sparkles, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book an Appointment | Counseling & Philanthropy Inquiries | SGCF',
  description:
    'Schedule confidential counseling sessions with licensed therapists or inquire about philanthropy partnerships, school outreach programs, and workplace wellness initiatives at Susan Gitau Counseling Foundation.',
  keywords: [
    'book counseling appointment Kenya',
    'therapy appointment online',
    'mental health counseling Nairobi',
    'SGCF philanthropy partnerships',
    'corporate wellness programs Kenya',
    'school mental health outreach',
    'community support groups Kenya',
    'trauma therapy appointment',
    'couples counseling Kenya',
    'EMDR therapy Nairobi',
    'workplace mental health programs',
    'SGCF community impact',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org/book-appointment',
  },
  openGraph: {
    title: 'Book an Appointment | Counseling & Philanthropy | SGCF',
    description:
      'Schedule confidential counseling sessions or partner with us in transforming lives through mental health programs, school outreach, and workplace wellness initiatives.',
    url: 'https://sgcfoundation.org/book-appointment',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'website',
    images: [
      {
        url: 'https://sgcfoundation.org/og-booking.png',
        width: 1200,
        height: 630,
        alt: 'Book an Appointment with Susan Gitau Counseling Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book an Appointment | SGCF',
    description: 'Schedule counseling or inquire about philanthropy partnerships.',
    images: ['https://sgcfoundation.org/og-booking.jpg'],
  },
};

export default function BookAppointmentPage() {
  const bookingPageUrl = 'https://cms.acop.co.ke/booking';

  // JSON-LD Structured Data for Booking Page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Book an Appointment | Susan Gitau Counseling Foundation',
    description:
      'Schedule confidential counseling sessions or inquire about philanthropy partnerships, school outreach programs, and workplace wellness initiatives.',
    url: 'https://sgcfoundation.org/book-appointment',
    mainEntity: {
      '@type': 'Organization',
      name: 'Susan Gitau Counseling Foundation',
      url: 'https://sgcfoundation.org',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+254722367619',
        contactType: 'customer service',
        availableLanguage: ['English', 'Swahili'],
      },
      sameAs: [
        'https://www.facebook.com/susangitaucounseling',
        'https://twitter.com/sgcfoundation',
        'https://www.linkedin.com/company/susan-gitau-counseling-foundation',
      ],
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book Appointment',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sgcfoundation.org/book-appointment',
        inLanguage: 'en',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  };

  // FAQ Structured Data for Booking Questions
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I book a counseling appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book a counseling appointment directly through our online booking form. Simply select your preferred service, choose a date and time, and provide your contact information. You can also call our crisis helpline at +254722367619 for assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer online therapy sessions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer both online and in-person counseling sessions. Our online therapy platform provides a secure, confidential environment for individuals, couples, and trauma recovery sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can my organization partner with SGCF for philanthropy programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Organizations can partner with us through our corporate wellness programs, school outreach initiatives, or community support groups. Use our booking form to select "Philanthropy & Partnerships" and our team will contact you to discuss collaboration opportunities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of counseling sessions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SGCF offers sliding scale fees based on income, and we also provide pro-bono services for those in financial need. Contact us for specific pricing information or to inquire about our community support programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my information kept confidential?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. All counseling sessions and personal information are protected under client-therapist confidentiality agreements and Kenyan mental health privacy laws. Our booking system is fully encrypted and secure.',
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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

          {/* Iframe Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white">
              {/* Decorative Top Bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              
              <iframe
                src={bookingPageUrl}
                width="100%"
                height="750"
                className="w-full"
                style={{ minHeight: '700px', border: 'none' }}
                title="SGCF Appointment Booking & Philanthropy Inquiry Form"
                allow="payment"
                loading="lazy"
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
      </div>
    </>
  );
}