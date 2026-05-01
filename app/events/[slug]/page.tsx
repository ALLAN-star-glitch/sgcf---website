import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsIncludingEvents, formatDate, decodeHtmlEntities, getSafeImageUrl, cleanExcerpt } from '@/lib/wordpress-sgcf';
import { Calendar, Clock, MapPin, ArrowLeft, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateStaticParams() {
  const allPosts = await getAllPostsIncludingEvents();
  const events = allPosts.filter(
    post => post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const allPosts = await getAllPostsIncludingEvents();
  const event = allPosts.find(p => p.slug === slug);

  if (!event) {
    return { title: 'Event Not Found' };
  }

  const description = cleanExcerpt(event.excerpt || event.sgcfArticleDetails?.body, 160);

  return {
    title: `${event.title} | SGCF Events`,
    description: description,
    openGraph: {
      title: event.title,
      description: description,
      type: 'article',
      publishedTime: event.date,
      images: event.featuredImage?.node?.sourceUrl ? [{ url: event.featuredImage.node.sourceUrl }] : [],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allPosts = await getAllPostsIncludingEvents(); // ← Use this instead!
  const event = allPosts.find(p => p.slug === slug);

  if (!event || !event.sgcfArticleDetails?.articleType?.includes('community-event')) {
    notFound();
  }

  const metadata = event.sgcfArticleDetails;
  const eventDetails = metadata?.eventDetails;
  const excerpt = cleanExcerpt(event.excerpt || metadata?.body, 160);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            opacity: 0.05
          }}
        />
        
        <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/events" className="inline-flex items-center gap-1 text-sm mb-6 hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
              <ArrowLeft size={14} /> Back to Events
            </Link>
            
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4" style={{ background: '#FEF3C7' }}>
              <Calendar size={12} style={{ color: '#F59E0B' }} />
              <span className="text-xs font-medium" style={{ color: '#F59E0B' }}>Event</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md" style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Calendar size={20} style={{ color: '#2D6A4F' }} />
                <div>
                  <p className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>Date</p>
                  <p className="font-semibold" style={{ color: '#171717' }}>{formatDate(event.date)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} style={{ color: '#2D6A4F' }} />
                <div>
                  <p className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>Time</p>
                  <p className="font-semibold" style={{ color: '#171717' }}>{eventDetails?.eventTime || 'TBA'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} style={{ color: '#2D6A4F' }} />
                <div>
                  <p className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>Venue</p>
                  <p className="font-semibold" style={{ color: '#171717' }}>{eventDetails?.eventVenue || 'Virtual'}</p>
                </div>
              </div>
            </div>
            {eventDetails?.fee && (
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart size={20} style={{ color: '#2D6A4F' }} />
                    <div>
                      <p className="text-xs" style={{ color: '#171717', opacity: 0.5 }}>Fee</p>
                      <p className="font-semibold" style={{ color: '#2D6A4F' }}>{eventDetails.fee}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {event.featuredImage?.node?.sourceUrl && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto aspect-video">
            <Image
              src={event.featuredImage.node.sourceUrl}
              alt={event.featuredImage.node.altText || event.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      {metadata?.body && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: metadata.body }} />
          </div>
        </div>
      )}

      {/* Registration CTA */}
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ background: 'var(--color-lavender)' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
            Ready to join this event?
          </h3>
          {eventDetails?.fee && (
            <p className="mb-4">Registration Fee: <strong>{eventDetails.fee}</strong></p>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
            }}
          >
            Register Now
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </main>
  );
}