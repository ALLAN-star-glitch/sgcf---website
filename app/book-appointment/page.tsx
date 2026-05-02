// app/book-appointment/page.tsx
import type { Metadata } from 'next';
import BookingFormClient from './BookingFormClient';


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
    images: ['https://sgcfoundation.org/og-booking.png'],
  },
};

export default function BookAppointmentPage() {
  // The main page component just renders the client-side interactive part.
  return <BookingFormClient />;
}