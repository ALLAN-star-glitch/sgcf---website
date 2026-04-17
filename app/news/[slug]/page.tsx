import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllNews, getNewsBySlug } from '@/lib/NewsData'
import type { Metadata } from 'next'

// Generate static paths at build time
export async function generateStaticParams() {
  const articles = getAllNews()
  return articles.map((article) => ({ slug: article.slug }))
}

// Dynamic metadata for each news article (works with your static data)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Africana College of Professionals',
      description: 'The requested article could not be found.',
    }
  }

  // Use your website URL
  const websiteUrl = 'https://www.acop.co.ke'
  const articleUrl = `${websiteUrl}/news/${article.slug}`
  
  // Handle image URL (local or external)
  let articleImage = 'https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=1200&h=630&fit=crop'
  
  if (article.image) {
    if (article.image.startsWith('http')) {
      articleImage = article.image
    } else {
      articleImage = `${websiteUrl}${article.image}`
    }
  }

  return {
    title: `${article.title} | Africana College of Professionals`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: 'Africana College of Professionals',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      images: [
        {
          url: articleImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [articleImage],
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

export default async function NewsDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/news"
          className="inline-flex items-center text-orange-600 hover:text-purple-700 mb-6 transition-colors"
        >
          ← Back to News
        </Link>

        <div className="mb-8">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500">{article.date}</p>
        </div>

        {article.image && (
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl shadow-md mb-8 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-orange-600"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Ready to start your journey?
          </h3>
          <p className="text-gray-600 mb-4">
            Apply for May 2026 intake at Africana College of Professionals
          </p>
          <Link
            href="/admission"
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </article>
    </main>
  )
}