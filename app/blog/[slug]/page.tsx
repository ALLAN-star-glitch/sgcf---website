import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, formatDate, decodeHtmlEntities, getAuthorName, getSafeImageUrl } from '@/lib/wordpress-sgcf';
import { Calendar, User, Clock, ArrowLeft, Heart, Tag, FolderOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  function cleanText(text: string) {
    return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }

  const description = post.excerpt 
    ? cleanText(decodeHtmlEntities(post.excerpt)).substring(0, 160)
    : cleanText(decodeHtmlEntities(post.sgcfArticleDetails?.body || '')).substring(0, 160);

  return {
    title: `${post.title} | SGCF Blog`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      url: `https://sgcfoundation.org/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: post.author?.node?.name ? [post.author.node.name] : [],
      images: post.featuredImage?.node?.sourceUrl ? [{ url: post.featuredImage.node.sourceUrl }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const metadata = post.sgcfArticleDetails;
  const readingTime = Math.ceil((metadata?.body?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200);
  const authorName = getAuthorName(post);
  
  const author = post.author?.node;
  const authorAvatar = author?.avatar?.url;
  const authorBio = author?.description;

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
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm mb-6 hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-4" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {formatDate(post.date)}
              </span>
              {authorName && (
                <span className="flex items-center gap-1">
                  <User size={14} /> {authorName}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={14} /> {readingTime} min read
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6" style={{ color: 'var(--foreground)' }}>
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto aspect-video">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Author Quote */}
      {metadata?.authorQuote && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-3xl mx-auto p-6 rounded-2xl text-center" style={{ background: 'var(--color-lavender)' }}>
            <Heart size={24} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-3" />
            <p className="text-lg italic" style={{ color: 'var(--foreground)' }}>
              &quot;{decodeHtmlEntities(metadata.authorQuote)}&quot;
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--color-primary)' }}>
              — {authorName || 'Susan Gitau'}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: metadata?.body || '' }} />
        </div>
      </div>

      {/* Author Bio Section */}
      {(authorName || authorBio || authorAvatar) && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--color-lavender)' }}>
              {authorAvatar ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={authorAvatar}
                    alt={authorName || 'Author'}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-primary)', opacity: 0.1 }}>
                  <User size={28} style={{ color: 'var(--color-primary)' }} />
                </div>
              )}
              
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--foreground)' }}>
                  Written by {authorName || 'SGCF Team'}
                </h3>
                {authorBio && (
                  <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {decodeHtmlEntities(authorBio)}
                  </p>
                )}
                {!authorBio && authorName && (
                  <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {authorName} is a mental health professional at the Susan Gitau Counselling Foundation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories & Tags */}
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-6">
            {post.articleCategories?.nodes?.length > 0 && (
              <div className="flex items-center gap-2">
                <FolderOpen size={16} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {post.articleCategories.nodes.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog/category/${cat.slug}`}
                      className="text-sm px-2 py-1 rounded-full hover:opacity-70 transition"
                      style={{ background: 'var(--color-lavender)', color: 'var(--color-primary)' }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {post.sgcfTags?.nodes?.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag size={16} style={{ color: 'var(--color-secondary)' }} />
                <span className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {post.sgcfTags.nodes.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/blog/tag/${tag.slug}`}
                      className="text-sm px-2 py-1 rounded-full hover:opacity-70 transition"
                      style={{ background: 'var(--color-secondary)10', color: 'var(--color-secondary)' }}
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {metadata?.callToAction?.buttonText && (
        <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ background: 'var(--color-lavender)' }}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              {decodeHtmlEntities(metadata.callToAction.text || 'Ready to Begin Your Healing Journey?')}
            </h3>
            <Link
              href={metadata.callToAction.buttonLink || '/book-appointment'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
              }}
            >
              {metadata.callToAction.buttonText}
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}