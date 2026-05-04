/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import { HeroSection } from '@/components/home-page/HeroSection';
import { ProgramsSection } from '@/components/home-page/ProgramsSection';
import { EventsUpdatesSection } from '@/components/home-page/EventsUpdatesSection';
import { getGalleryImages, getRecentEvents, getRecentPosts, getVideoData } from '@/lib/wordpress-sgcf';
import { HeroSlider } from '@/components/home-page/HeroSlider';
import { SuccessStoriesSection } from '@/components/home-page/SuccessStoriesSection';
import { GallerySection } from '@/components/home-page/GallerySection';
import { AboutServicesSection } from '@/components/home-page/ServicesSection';

export const revalidate = 60;

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Susan Gitau Counseling Foundation | Professional Mental Health Services in Kenya',
  description:
    'Susan Gitau Counseling Foundation (SGCF) provides professional, compassionate mental health counseling services in Kenya. Specializing in individual therapy, couples counseling, trauma recovery, and community wellness programs.',
  keywords: [
    'counseling Kenya',
    'mental health services Kenya',
    'therapy Nairobi',
    'trauma counseling',
    'couples therapy Kenya',
    'individual counseling',
    'Susan Gitau',
    'mental wellness Kenya',
    'support groups Kenya',
    'online counseling Kenya',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org',
  },
  openGraph: {
    title: 'Susan Gitau Counseling Foundation | Healing Minds, Restoring Hope',
    description:
      'Susan Gitau Counseling Foundation (SGCF) is a non-profit organization dedicated to transforming lives through compassionate care, professional counseling, and community empowerment.',
    url: 'https://sgcfoundation.org',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'website',
    locale: 'en_KE',
    images: [
      {
        url: 'https://sgcfoundation.org/sgcf_slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Susan Gitau Counseling Foundation - Healing Minds, Restoring Hope',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susan Gitau Counseling Foundation | Professional Mental Health Services',
    description: 'Susan Gitau Counseling Foundation (SGCF) is a non-profit organization dedicated to transforming lives through compassionate care, professional counseling, and community empowerment.',
    images: ['https://sgcfoundation.org/sgcf_slide1.jpg'],
    creator: '@sgcfoundation',
    site: '@sgcfoundation',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  category: 'mental health',
};

export default async function Home() {
  // Fetch data on the server
  const [events, blogPosts, galleryImages, videoData] = await Promise.all([
    getRecentEvents(3),
    getRecentPosts(3),
    getGalleryImages(),
    getVideoData(),
  ]);

  // Structured Data for Organization (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NonprofitOrganization',
    name: 'Susan Gitau Counseling Foundation',
    alternateName: 'SGCF',
    url: 'https://sgcfoundation.org',
    logo: 'https://sgcfoundation.org/logo.png',
    description:
      'Susan Gitau Counseling Foundation provides professional, compassionate mental health counseling services in Kenya, including individual therapy, couples counseling, trauma recovery, and community wellness programs.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Dr. Susan Gitau',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254722367619',
      contactType: 'customer service',
      availableLanguage: ['English', 'Swahili'],
    },
    sameAs: [
      'https://www.facebook.com/sgcfoundation',
      'https://www.instagram.com/sgcfoundation',
      'https://twitter.com/sgcfoundation',
      'https://www.linkedin.com/company/sgcfoundation',
    ],
    areaServed: 'Kenya',
    nonprofitType: 'NonprofitType',
  };

  // Structured Data for Website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Susan Gitau Counseling Foundation',
    url: 'https://sgcfoundation.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sgcfoundation.org/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Structured Data for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'CounselingService',
    name: 'Susan Gitau Counseling Foundation',
    description: 'Professional mental health counseling services in Kenya.',
    provider: {
      '@type': 'Organization',
      name: 'Susan Gitau Counseling Foundation',
    },
    areaServed: 'Kenya',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Counseling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Individual Therapy',
            description: 'One-on-one counseling sessions for anxiety, depression, and personal growth.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Couples Counseling',
            description: 'Relationship therapy for couples at any stage.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trauma Recovery',
            description: 'Specialized therapy for trauma and PTSD recovery.',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div>
        <HeroSlider />
       <AboutServicesSection />
        <EventsUpdatesSection
          events={events}
          blogPosts={blogPosts}
          galleryImages={galleryImages}
          videoData={videoData}
        />
       <GallerySection />
      </div>
    </>
  );
}