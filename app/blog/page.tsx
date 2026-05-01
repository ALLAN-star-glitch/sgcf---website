import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, formatDate, getSafeImageUrl, getAuthorName, decodeHtmlEntities } from '@/lib/wordpress-sgcf';
import { Calendar, User, Clock, ArrowRight, Heart } from 'lucide-react';

export const revalidate = 60;

// Helper function to clean excerpt - removes HTML tags and decodes entities
function cleanExcerpt(text: string | null | undefined, maxLength: number = 150): string {
  if (!text) return '';
  
  // First decode HTML entities
  let cleaned = decodeHtmlEntities(text);
  
  // Remove all HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  
  // Remove extra whitespace
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // Truncate if too long
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength) + '...';
  }
  
  return cleaned;
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  // Featured post (first one)
  const featuredPost = posts.find(p => p.sgcfArticleDetails?.featuredArticle) || posts[0];
  const remainingPosts = posts.filter(p => p.id !== featuredPost?.id).slice(0, 5);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            opacity: 0.05
          }}
        />
        <div className="container-counseling relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4" style={{ background: 'var(--color-lavender)' }}>
              <Heart size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                Resources & Insights
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              Our{' '}
              <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Insights, tips, and resources for your mental wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <Image
                  src={getSafeImageUrl(featuredPost)}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">Featured</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm mb-3" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {formatDate(featuredPost.date)}
                  </span>
                  {getAuthorName(featuredPost) && (
                    <span className="flex items-center gap-1">
                      <User size={14} /> {getAuthorName(featuredPost)}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> 5 min read
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p className="mb-4 line-clamp-3" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {cleanExcerpt(featuredPost.excerpt) || 
                   cleanExcerpt(featuredPost.sgcfArticleDetails?.body, 160)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.articleCategories?.nodes?.slice(0, 2).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog/category/${cat.slug}`}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: 'var(--color-lavender)', color: 'var(--color-primary)' }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 font-semibold group"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getSafeImageUrl(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
              </Link>
              
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs mb-2" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> 4 min read
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {cleanExcerpt(post.excerpt) || 
                   cleanExcerpt(post.sgcfArticleDetails?.body, 120)}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}