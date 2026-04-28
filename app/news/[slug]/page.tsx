import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getNewsBySlug, getAllNewsSlugs, formatDate, decodeHtmlEntities, getAllNews } from '@/lib/wordpress'
import type { Metadata } from 'next'
import { Calendar, MapPin, Link as LinkIcon, AlertTriangle, Download, ChevronRight, Clock, Eye, MessageCircle, TrendingUp, Mail, Phone, Map, Award, Sparkles, FolderOpen, FileText, Tag } from 'lucide-react'
import { ShareButtons } from '@/components/ShareButtons'

// Generate static paths at build time from WordPress
export async function generateStaticParams() {
  const articles = await getAllNewsSlugs()
  return articles.map((article) => ({ slug: article.slug }))
}

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

// Helper to get category display name
function getCategoryDisplayName(categories: { name: string; slug: string }[] | undefined): string {
  if (!categories || categories.length === 0) return 'News'
  const categoryName = categories[0].name
  const displayNames: Record<string, string> = {
    admissions: 'Admissions',
    events: 'Events',
    blog: 'Blog',
    news: 'News',
  }
  return displayNames[categoryName.toLowerCase()] || categoryName
}

// Helper to get category badge color
function getCategoryColor(categories: { name: string; slug: string }[] | undefined): string {
  if (!categories || categories.length === 0) return 'bg-orange-600'
  const categorySlug = categories[0].slug.toLowerCase()
  const colors: Record<string, string> = {
    admissions: 'bg-green-600',
    events: 'bg-purple-600',
    blog: 'bg-blue-600',
    news: 'bg-orange-600',
  }
  return colors[categorySlug] || 'bg-orange-600'
}

// Generate metadata with OG image
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getNewsBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Africana College of Professionals',
      description: 'The requested article could not be found.',
    }
  }

  const websiteUrl = 'https://www.acop.co.ke'
  const articleUrl = `${websiteUrl}/news/${article.slug}`
  
  let ogImageUrl = `${websiteUrl}/acoplogo.jpg`
  
  if (article.featuredImage?.node?.sourceUrl) {
    ogImageUrl = article.featuredImage.node.sourceUrl
    if (ogImageUrl.startsWith('/')) {
      ogImageUrl = `https://cms.acop.co.ke${ogImageUrl}`
    }
  }
  
  const description = article.excerpt 
    ? decodeHtmlEntities(article.excerpt).replace(/<[^>]*>/g, '').substring(0, 160)
    : article.newsMetadata?.body 
      ? decodeHtmlEntities(article.newsMetadata.body).replace(/<[^>]*>/g, '').substring(0, 160)
      : article.title

  return {
    title: `${article.title} | Africana College of Professionals`,
    description: description,
    openGraph: {
      title: article.title,
      description: description,
      url: articleUrl,
      siteName: 'Africana College of Professionals',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    alternates: { canonical: articleUrl },
  }
}

// Get related articles (by WordPress category)
async function getRelatedArticles(currentSlug: string, currentCategories: { slug: string }[] | undefined, currentId: string) {
  const allNews = await getAllNews()
  const currentCategorySlug = currentCategories?.[0]?.slug
  
  if (!currentCategorySlug) return []
  
  return allNews
    .filter(article => 
      article.slug !== currentSlug && 
      article.newsCategories?.nodes?.some(cat => cat.slug === currentCategorySlug)
    )
    .slice(0, 3)
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getNewsBySlug(slug)

  if (!article) {
    notFound()
  }

  const metadata = article.newsMetadata
  const primaryType = metadata?.newsType?.[0] || 'general'
  const isEvent = primaryType === 'event'
  const isAlert = primaryType === 'alert'
  const isDeadline = primaryType === 'deadline'
  const isAdmissions = primaryType === 'admissions'
  
  const categoryName = getCategoryDisplayName(article.newsCategories?.nodes)
  const categoryColor = getCategoryColor(article.newsCategories?.nodes)
  
  const authorName = article.author?.node?.firstName || article.author?.node?.lastName
    ? `${article.author?.node?.firstName || ''} ${article.author?.node?.lastName || ''}`.trim()
    : article.author?.node?.name || null
  
  const formattedDate = formatDate(article.date)
  const decodedBody = decodeHtmlEntities(metadata?.body || '')
  
  const readingTime = Math.ceil(decodedBody.replace(/<[^>]*>/g, '').split(/\s+/).length / 200)
  const wordCount = decodedBody.replace(/<[^>]*>/g, '').split(/\s+/).length
  
  const relatedArticles = await getRelatedArticles(slug, article.newsCategories?.nodes, article.id)
  const authorBio = article.author?.node?.description || null

  function getExcerptFromBody(body: string, maxLength: number): string {
    const plainText = body.replace(/<[^>]*>/g, '')
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength) + '...'
  }

  const typeColors: Record<string, { bg: string; text: string; light: string }> = {
    event: { bg: 'bg-purple-600', text: 'text-purple-700', light: 'bg-purple-50' },
    alert: { bg: 'bg-red-600', text: 'text-red-700', light: 'bg-red-50' },
    deadline: { bg: 'bg-orange-600', text: 'text-orange-700', light: 'bg-orange-50' },
    admissions: { bg: 'bg-green-600', text: 'text-green-700', light: 'bg-green-50' },
    general: { bg: 'bg-orange-600', text: 'text-orange-700', light: 'bg-orange-50' },
  }

  const typeColor = typeColors[primaryType] || typeColors.general
  const severityColors = {
    critical: 'bg-red-50 border-red-500 text-red-800',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/news" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm group">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to News
            </Link>
            
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white ${categoryColor}`}>
              {categoryName}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {authorName && (
                <div className="flex items-center gap-2">
                  {article.author?.node?.avatar?.url && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white/30">
                      <Image src={article.author.node.avatar.url} alt={authorName} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <span>By {authorName}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Column */}
            <article className="lg:w-2/3">
              <div className="bg-white rounded-2xl">
                {/* Alert Banner */}
                {isAlert && metadata?.severityLevel && (
                  <div className={`mb-8 p-5 rounded-xl border-l-4 ${severityColors[metadata.severityLevel as keyof typeof severityColors] || severityColors.warning} flex items-start gap-3`}>
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Important Announcement</h3>
                      <p className="text-sm">Please read this carefully for important information.</p>
                    </div>
                  </div>
                )}

                {/* Featured Image */}
                {article.featuredImage?.node?.sourceUrl && (
                  <div className="mb-10">
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={article.featuredImage.node.sourceUrl}
                        alt={article.featuredImage.node.altText || article.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-3 italic">
                      {article.featuredImage.node.altText || article.title}
                    </p>
                  </div>
                )}

                {/* Event Details Card */}
                {isEvent && (metadata?.eventDate || metadata?.eventVenue || metadata?.eventLink) && (
                  <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-700">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Event Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {metadata?.eventDate && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          <span>{metadata.eventDate}</span>
                          {metadata.eventTime && <span>• {metadata.eventTime}</span>}
                        </div>
                      )}
                      {metadata?.eventVenue && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-600" />
                          <span>{metadata.eventVenue}</span>
                        </div>
                      )}
                      {metadata?.eventLink && (
                        <div className="flex items-center gap-2">
                          <LinkIcon className="w-4 h-4 text-purple-600" />
                          <a href={metadata.eventLink} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Event Link</a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Deadline Banner */}
                {isDeadline && (metadata?.deadlineDate || metadata?.submissionLink) && (
                  <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-orange-700">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      Application Deadline
                    </h3>
                    {metadata?.deadlineDate && <p className="text-2xl font-bold text-orange-600 mb-3">{metadata.deadlineDate}</p>}
                    {metadata?.submissionLink && (
                      <a href={metadata.submissionLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">Apply Now →</a>
                    )}
                  </div>
                )}

                {/* Admissions Banner */}
                {isAdmissions && (
                  <div className="bg-green-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-green-700">
                      <Award className="w-5 h-5 text-green-600" />
                      {metadata?.intakeSemester || 'Admissions Open'}
                    </h3>
                    <p className="text-gray-600 mb-3">Take the first step towards your professional career</p>
                    {metadata?.masomoPortalLink && (
                      <a href={metadata.masomoPortalLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">Apply via Portal →</a>
                    )}
                  </div>
                )}

                {/* Main Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100 prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-orange-600 prose-ul:text-gray-600 prose-ul:list-disc prose-ul:pl-5 prose-strong:text-gray-800 prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:italic prose-img:rounded-xl prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: decodedBody }}
                />
              </div>
            </article>

            {/* Right Sidebar - Using Brand Colors */}
            <aside className="lg:w-1/3 space-y-6">
              <ShareButtons title={article.title} shareText='Share this article' />

              {/* Attachment Card */}
              {metadata?.attachment?.node?.mediaItemUrl && (
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-800">Download Resource</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Download the attached document for more information about this article.
                  </p>
                  <a
                    href={metadata.attachment.node.mediaItemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    {metadata.attachment.node.title || 'Download Attachment'}
                  </a>
                </div>
              )}

              {/* Tags Section - Moved to Sidebar */}
              {article.newsTags?.nodes?.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-orange-500" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.newsTags.nodes.map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/news/tag/${tag.slug}`}
                        className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm hover:bg-orange-100 hover:text-orange-600 transition-colors"
                      >
                        #{tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Card */}
              {authorName && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    {article.author?.node?.avatar?.url && (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-orange-100">
                        <Image src={article.author.node.avatar.url} alt={authorName} fill className="object-cover" unoptimized />
                      </div>
                    )}
                    <h3 className="font-bold text-xl text-gray-800">{authorName}</h3>
                    <p className="text-gray-500 text-sm mt-1">{article.author?.node?.nickname || 'Staff Writer'}</p>
                    {authorBio && <p className="text-gray-500 text-xs mt-2">{authorBio}</p>}
                  </div>
                </div>
              )}

              {/* Categories Section */}
              {article.newsCategories?.nodes?.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-orange-500" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.newsCategories.nodes.map((cat) => (
                      <Link key={cat.slug} href={`/news?category=${cat.slug}`} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-orange-100 hover:text-orange-600 transition-colors">
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Stats Card */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Reading Time</span>
                    <span className="font-semibold text-gray-800">{readingTime} minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Word Count</span>
                    <span className="font-semibold text-gray-800">{wordCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Category</span>
                    <span className="font-semibold text-orange-600">{categoryName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Last Updated</span>
                    <span className="font-semibold text-gray-800">{formattedDate}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  Need More Info?
                </h3>
                <div className="space-y-3">
                  <Link href="/contact" className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Mail className="w-4 h-4 text-orange-600" />
                    </div>
                    <span>Email Us</span>
                  </Link>
                  <Link href="/contact" className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Phone className="w-4 h-4 text-orange-600" />
                    </div>
                    <span>Call Us</span>
                  </Link>
                  <Link href="/contact" className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Map className="w-4 h-4 text-orange-600" />
                    </div>
                    <span>Visit Campus</span>
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orange-500" />
                    You May Also Like
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link key={related.id} href={`/news/${related.slug}`} className="group flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                        {related.featuredImage?.node?.sourceUrl && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={related.featuredImage.node.sourceUrl} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2 text-sm">{related.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{formatDate(related.date)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/news" className="inline-flex items-center text-orange-600 text-sm font-medium mt-4 hover:text-purple-700 transition-colors">
                    Browse All News
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-white/80 text-sm mb-4">Get the latest updates and news directly in your inbox.</p>
                <div className="flex flex-col gap-2">
                  <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white" />
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">Subscribe</button>
                </div>
                <p className="text-white/60 text-xs mt-3">No spam, unsubscribe anytime.</p>
              </div>

              {/* CTA Card */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 text-center">
                <h3 className="font-bold text-gray-800 mb-2">🚀 Ready to Apply?</h3>
                <p className="text-gray-600 text-sm mb-4">Start your journey at Africana College today</p>
                <Link href="https://form.jotform.com/253171134791556" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors w-full text-center">
                  Apply Now
                </Link>
              </div>
            </aside>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-orange-600 to-purple-700 rounded-2xl text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Start Your Professional Journey Today</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Join Africana College of Professionals and take the first step towards a rewarding career</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://form.jotform.com/253171134791556" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </Link>
              <Link href="/courses" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}