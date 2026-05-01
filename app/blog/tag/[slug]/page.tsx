import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsByTag, getAllTags, formatDate, getSafeImageUrl } from '@/lib/wordpress-sgcf';
import { Calendar, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map(({ slug }) => ({ slug }));
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPostsByTag(slug);
  const tagName = posts[0]?.sgcfTags?.nodes?.find(t => t.slug === slug)?.name || slug;

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-counseling mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-4" style={{ color: 'var(--foreground)' }}>
            Tag: <span className="text-gradient-primary">#{tagName}</span>
          </h1>
          <p className="text-lg" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            {posts.length} article{posts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={getSafeImageUrl(post)} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs mb-2" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  <Calendar size={12} /> {formatDate(post.date)}
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                    {post.title}
                  </Link>
                </h3>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: 'var(--color-primary)' }}>
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}