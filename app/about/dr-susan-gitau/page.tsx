import AchievementsSection from '@/components/about/dr-susan-gitau/AchievementsSection';
import BiographySection from '@/components/about/dr-susan-gitau/BiographySection';
import ContactSection from '@/components/about/dr-susan-gitau/ContactSection';
import CredentialsSection from '@/components/about/dr-susan-gitau/CredentialsSection';
import HeroSection from '@/components/about/dr-susan-gitau/HeroSection';
import PhilosophySection from '@/components/about/dr-susan-gitau/PhilosophySection';
import PublicationsSection from '@/components/about/dr-susan-gitau/PublicationsSection';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Dr. Susan Gitau - Founder & Clinical Director | SGCF',
  description:
    'Meet Dr. Susan Gitau, founder of Susan Gitau Counseling Foundation. With over 15 years of experience in clinical psychology, she is a certified MSC trainer, trauma healing expert, and lecturer.',
  keywords: [
    'Dr. Susan Gitau',
    'Susan Gitau Counseling Foundation',
    'clinical psychologist Kenya',
    'trauma healing expert',
    'MSC certified trainer',
    'counseling psychology Kenya',
    'mental health professional Kenya',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org/about/dr-susan-gitau',
  },
  openGraph: {
    title: 'Dr. Susan Gitau - Founder & Clinical Director | SGCF',
    description:
      'Meet Dr. Susan Gitau, founder of Susan Gitau Counseling Foundation. Expert in clinical psychology, trauma healing, and mindfulness-based therapy.',
    url: 'https://sgcfoundation.org/about/dr-susan-gitau',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'profile',
    images: [
      {
        url: 'https://sgcfoundation.org/about-founder.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Susan Gitau - Founder of Susan Gitau Counseling Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Susan Gitau - Founder & Clinical Director',
    description: 'Expert clinical psychologist, trauma healing specialist, and MSC certified trainer.',
    images: ['https://sgcfoundation.org/about-founder.png'],
  },
};

export default function DrSusanGitauPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Dr. Susan Gitau',
            givenName: 'Susan',
            familyName: 'Gitau',
            honorificPrefix: 'Dr.',
            jobTitle: 'Founder & Clinical Director',
            worksFor: {
              '@type': 'Organization',
              name: 'Susan Gitau Counseling Foundation',
              url: 'https://sgcfoundation.org',
            },
            url: 'https://sgcfoundation.org/about/dr-susan-gitau',
            sameAs: [
              'https://www.linkedin.com/in/dr-susan-gitau',
              'https://twitter.com/drsusangitau',
            ],
            knowsAbout: [
              'Clinical Psychology',
              'Trauma Healing',
              'EMDR Therapy',
              'Mindfulness-Based Therapy',
              'Cognitive Behavioral Therapy',
              'Self-Compassion Training',
            ],
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Hadong Global University',
            },
            image: 'https://sgcfoundation.org/about-founder.png',
            description: 'Dr. Susan Gitau is a renowned clinical psychologist, MSC certified trainer, and trauma healing expert with over 15 years of experience.',
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        <main className="grow">
          <HeroSection />
          <BiographySection />
          <CredentialsSection />
          <AchievementsSection />
          <PublicationsSection />
          <PhilosophySection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}