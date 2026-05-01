import { Metadata } from 'next';
import MissionVisionContent from '@/components/about/mission-vision/MissionVisionContent';

export const metadata: Metadata = {
  title: 'Our Mission & Vision | Susan Gitau Counseling Foundation',
  description:
    'Discover the mission and vision of Susan Gitau Counseling Foundation. We are committed to providing accessible, compassionate mental health support to individuals, families, and communities across Kenya.',
  keywords: [
    'SGCF mission',
    'SGCF vision',
    'mental health mission Kenya',
    'counseling foundation mission',
    'Susan Gitau Foundation mission',
    'mental health vision',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org/about/mission-vision',
  },
  openGraph: {
    title: 'Our Mission & Vision | SGCF',
    description:
      'Committed to providing accessible, compassionate mental health support to individuals, families, and communities across Kenya.',
    url: 'https://sgcfoundation.org/about/mission-vision',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'website',
    images: [
      {
        url: 'https://sgcfoundation.org/mission-vision-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SGCF Mission & Vision',
      },
    ],
  },
};

export default function MissionVisionPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Susan Gitau Counseling Foundation',
            url: 'https://sgcfoundation.org',
            mission: 'To provide accessible, professional, and compassionate mental health counseling that empowers individuals, couples, and families to overcome challenges, heal from trauma, and live fulfilling lives.',
            foundingDate: '2015',
            areaServed: 'Kenya',
            sameAs: [
              'https://www.facebook.com/sgcfoundation',
              'https://www.instagram.com/sgcfoundation',
              'https://twitter.com/sgcfoundation',
            ],
          }),
        }}
      />

      <MissionVisionContent />
    </>
  );
}