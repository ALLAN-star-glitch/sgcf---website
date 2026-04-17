import { NewsCard } from '@/components/cards/NewsCard'
import { getAllNews } from '@/lib/NewsData'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// Metadata for the news listing page
export const metadata: Metadata = {
  title: 'News & Updates | Africana College of Professionals',
  description: 'Stay informed with the latest news, intake announcements, events, and success stories from Africana College of Professionals in Kenya.',
  keywords: 'Africana College news, Kenya education updates, college announcements, student success stories, course intake Kenya',
  openGraph: {
    title: 'News & Updates | Africana College of Professionals',
    description: 'Stay informed with the latest happenings, intake announcements, and success stories from Africana College of Professionals.',
    url: 'https://www.acop.co.ke/news',
    siteName: 'Africana College of Professionals',
    type: 'website',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Africana College of Professionals News and Updates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Updates | Africana College of Professionals',
    description: 'Stay informed with the latest news and announcements from Africana College.',
    images: ['https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=1200&h=630&fit=crop'],
    creator: '@acop_kenya',
    site: '@acop_kenya',
  },
  alternates: {
    canonical: 'https://www.acop.co.ke/news',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function NewsPage() {
  const newsArticles = getAllNews()

  // Featured article (first one)
  const featuredArticle = newsArticles[0]
  const remainingArticles = newsArticles.slice(1)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Stay informed with the latest happenings, intake announcements, and success stories from Africana College of Professionals
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-orange-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                {featuredArticle.image ? (
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-64 md:h-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                    <span className="text-orange-500 text-6xl">📰</span>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
                  Featured Story
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-3">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-4">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{featuredArticle.date}</span>
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Latest <span className="text-orange-500">Articles</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded"></div>
        </div>

        {remainingArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">More news articles coming soon. Stay tuned!</p>
          </div>
        )}
      </section>

      {/* CTA Section for May 2026 Intake */}
      <section className="bg-gradient-to-r from-purple-700 to-orange-600 text-white py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apply for May 2026 Intake
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Don&apos;t miss your chance to enroll in Diploma, Certificate, and professional courses at Africana College of Professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admission"
              className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}