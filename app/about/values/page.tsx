import ValuesContent from '@/components/about/values/ValuesContent';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Our Values | Susan Gitau Counseling Foundation',
  description:
    'Discover the core values that guide Susan Gitau Counseling Foundation: Compassion, Confidentiality, Excellence, Accessibility, Empowerment, and Integrity.',
  keywords: [
    'SGCF values',
    'counseling foundation values',
    'mental health values Kenya',
    'compassion in counseling',
    'confidentiality mental health',
    'SGCF core values',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org/about/values',
  },
  openGraph: {
    title: 'Our Values | SGCF',
    description:
      'Discover the core values that guide our work: Compassion, Confidentiality, Excellence, Accessibility, Empowerment, and Integrity.',
    url: 'https://sgcfoundation.org/about/values',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'website',
    images: [
      {
        url: 'https://sgcfoundation.org/values-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SGCF Core Values',
      },
    ],
  },
};

export default function ValuesPage() {
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
            description: 'A non-profit organization dedicated to providing accessible, compassionate mental health support.',
            foundingDate: '2015',
            areaServed: 'Kenya',
          }),
        }}
      />

      <ValuesContent />
    </>
  );
}