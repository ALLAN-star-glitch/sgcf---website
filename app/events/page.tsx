import Link from 'next/link';
import Image from 'next/image';
import { getAllEvents, formatDate, getSafeImageUrl } from '@/lib/wordpress-sgcf';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: '#F8F6FF' }}>
            <Calendar size={14} style={{ color: '#2D6A4F' }} />
            <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
              Upcoming Events
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4" style={{ color: '#171717' }}>
            Events &{' '}
            <span className="text-gradient-primary">Workshops</span>
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: '#171717', opacity: 0.7 }}>
            Join us for transformative mental health events and community programs
          </p>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <Link href={`/events/${event.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || '/events/fallback.jpg'}
                      alt={event.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {event.isNew && (
                      <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs mb-2" style={{ color: '#171717', opacity: 0.6 }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {event.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    <Link href={`/events/${event.slug}`} className="hover:text-primary transition-colors" style={{ color: '#171717' }}>
                      {event.title}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} style={{ color: '#2D6A4F', opacity: 0.6 }} />
                    <span className="text-xs" style={{ color: '#171717', opacity: 0.6 }}>{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ background: '#2D6A4F10', color: '#2D6A4F' }}
                    >
                      {event.price}
                    </span>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                      style={{ color: '#2D6A4F' }}
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No upcoming events at this time. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}