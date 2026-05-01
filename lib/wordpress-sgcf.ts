/* eslint-disable @typescript-eslint/no-explicit-any */
import he from 'he';

const API_URL = process.env.WORDPRESS_API_URL;

// ============================================
// Blog Types
// ============================================

export interface Author {
  node: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    description: string | null; 
    name: string | null;
    avatar: {
      url: string;
    } | null;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface CallToAction {
  buttonLink?: string;
  buttonText?: string;
  text?: string;
}

export interface EventDetails {
  eventDate: string | null;
  eventTime: string | null;
  eventVenue: string | null;
  fee: string | null;
}

export interface BlogMetadata {
  articleType: string[] | null;
  featuredArticle: boolean;
  authorQuote: string | null;
  callToAction: CallToAction | null;
  body: string;
  eventDetails?: EventDetails;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
  author: Author | null;
  articleCategories: {
    nodes: BlogCategory[];
  };
  sgcfTags: {
    nodes: BlogTag[];
  };
  sgcfArticleDetails: BlogMetadata;
}

// Event item type for the frontend
export interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
  time: string;
  location: string;
  price: string;
  isFree: boolean;
  isNew: boolean;
}

// Blog post item type for the frontend
export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
}

// Gallery image type
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

// Video data type
export interface VideoData {
  posterUrl: string;
  videoUrl: string;
  title: string;
}

interface AllBlogPostsResponse {
  sGCFArticles: {
    nodes: BlogPost[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

interface SingleBlogPostResponse {
  sGCFArticle: BlogPost | null;
}

// ============================================
// Helper Functions
// ============================================

async function fetchAPI<T>(
  query: string,
  { variables }: { variables?: Record<string, unknown> } = {}
): Promise<T> {
  if (!API_URL) {
    throw new Error('WORDPRESS_API_URL is not defined in environment variables');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error('GraphQL Error:', JSON.stringify(json.errors, null, 2));
    throw new Error(json.errors[0]?.message || 'GraphQL query failed');
  }

  return json.data as T;
}

function stripHtmlTags(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

export function decodeHtmlEntities(text: string) {
  if (!text) return '';
  return he.decode(text);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getExcerpt(html: string, maxLength: number = 160): string {
  const plainText = stripHtmlTags(html);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
}

export function cleanExcerpt(text: string | null | undefined, maxLength: number = 150): string {
  if (!text) return '';
  
  let cleaned = decodeHtmlEntities(text);
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength) + '...';
  }
  
  return cleaned;
}

export function getSafeImageUrl(post: BlogPost): string {
  if (post.featuredImage?.node?.sourceUrl) {
    return post.featuredImage.node.sourceUrl;
  }
  return '/blog-placeholder.jpg';
}

export function getAuthorName(post: BlogPost): string | null {
  const author = post.author?.node;
  if (!author) return null;
  
  if (author.firstName || author.lastName) {
    return `${author.firstName || ''} ${author.lastName || ''}`.trim();
  }
  return author.name;
}

// ============================================
// Blog Functions (Excluding Events)
// ============================================

// Get all blog posts (excluding events)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await fetchAPI<AllBlogPostsResponse>(`
    query GetAllBlogPosts {
      sGCFArticles(first: 100) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              firstName
              lastName
              name
              description
              avatar {
                url
              }
            }
          }
          articleCategories {
            nodes {
              id
              name
              slug
            }
          }
          sgcfTags {
            nodes {
              id
              name
              slug
            }
          }
          sgcfArticleDetails {
            articleType
            featuredArticle
            authorQuote
            callToAction {
              buttonLink
              buttonText
            }
            body
            eventDetails {
              eventTime
              eventVenue
              fee
            }
          }
        }
      }
    }
  `);

  // Filter out events (articles with articleType containing 'community-event')
  const allPosts = data?.sGCFArticles?.nodes || [];
  return allPosts.filter(
    post => !post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
}

// Get all posts including events (for internal use)
export async function getAllPostsIncludingEvents(): Promise<BlogPost[]> {
  const data = await fetchAPI<AllBlogPostsResponse>(`
    query GetAllPostsIncludingEvents {
      sGCFArticles(first: 100) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              firstName
              lastName
              name
              description
              avatar {
                url
              }
            }
          }
          articleCategories {
            nodes {
              id
              name
              slug
            }
          }
          sgcfTags {
            nodes {
              id
              name
              slug
            }
          }
          sgcfArticleDetails {
            articleType
            featuredArticle
            authorQuote
            callToAction {
              buttonLink
              buttonText
            }
            body
            eventDetails {
              eventTime
              eventVenue
              fee
            }
          }
        }
      }
    }
  `);

  return data?.sGCFArticles?.nodes || [];
}

// Get single blog post by slug (excluding events)
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllBlogPosts();
  const post = allPosts.find(p => p.slug === slug);
  
  if (!post) return null;
  
  const data = await fetchAPI<SingleBlogPostResponse>(`
    query GetBlogPostById($id: ID!) {
      sGCFArticle(id: $id, idType: DATABASE_ID) {
        id
        title
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            firstName
            lastName
            name
            description
            avatar {
              url
            }
          }
        }
        articleCategories {
          nodes {
            id
            name
            slug
          }
        }
        sgcfTags {
          nodes {
            id
            name
            slug
          }
        }
        sgcfArticleDetails {
          articleType
          featuredArticle
          authorQuote
          callToAction {
            buttonLink
            buttonText
          }
          body
        }
      }
    }
  `, { variables: { id: post.id } });
  
  return data?.sGCFArticle || null;
}

// Get all blog slugs for static generation (excluding events)
export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Get blog posts by category slug (excluding events)
export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.articleCategories?.nodes?.some((cat) => cat.slug === categorySlug)
  );
}

// Get blog posts by tag slug (excluding events)
export async function getBlogPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.sgcfTags?.nodes?.some((tag) => tag.slug === tagSlug)
  );
}

// Get all unique categories (from all posts including events for completeness)
export async function getAllCategories(): Promise<BlogCategory[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const categoriesMap = new Map<string, BlogCategory>();
  
  allPosts.forEach((post) => {
    if (post.articleCategories?.nodes) {
      post.articleCategories.nodes.forEach((cat) => {
        if (!categoriesMap.has(cat.slug)) {
          categoriesMap.set(cat.slug, cat);
        }
      });
    }
  });
  
  return Array.from(categoriesMap.values());
}

// Get all unique tags (from all posts including events for completeness)
export async function getAllTags(): Promise<BlogTag[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const tagsMap = new Map<string, BlogTag>();
  
  allPosts.forEach((post) => {
    if (post.sgcfTags?.nodes) {
      post.sgcfTags.nodes.forEach((tag) => {
        if (!tagsMap.has(tag.slug)) {
          tagsMap.set(tag.slug, tag);
        }
      });
    }
  });
  
  return Array.from(tagsMap.values());
}

// Get featured posts (excluding events)
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((post) => post.sgcfArticleDetails?.featuredArticle === true)
    .slice(0, limit);
}

// Get posts by type (excluding events)
export async function getPostsByType(type: string, limit: number = 10): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((post) => post.sgcfArticleDetails?.articleType?.includes(type))
    .slice(0, limit);
}

// ============================================
// Events Functions
// ============================================

// Get recent events (by articleType = 'community-event')
export async function getRecentEvents(limit: number = 3): Promise<EventItem[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const eventPosts = allPosts.filter(
    post => post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  
  return eventPosts.slice(0, limit).map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 150),
    image: getSafeImageUrl(post),
    href: `/events/${post.slug}`,
    time: post.sgcfArticleDetails?.eventDetails?.eventTime || 'TBA',
    location: post.sgcfArticleDetails?.eventDetails?.eventVenue || 'Virtual',
    price: post.sgcfArticleDetails?.eventDetails?.fee || 'FREE',
    isFree: post.sgcfArticleDetails?.eventDetails?.fee === 'FREE',
    isNew: new Date(post.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }));
}

// Get ALL events
export async function getAllEvents(): Promise<EventItem[]> {
  const allPosts = await getAllPostsIncludingEvents();
  const eventPosts = allPosts.filter(
    post => post.sgcfArticleDetails?.articleType?.includes('community-event')
  );
  
  return eventPosts.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 150),
    image: getSafeImageUrl(post),
    href: `/events/${post.slug}`,
    time: post.sgcfArticleDetails?.eventDetails?.eventTime || 'TBA',
    location: post.sgcfArticleDetails?.eventDetails?.eventVenue || 'Virtual',
    price: post.sgcfArticleDetails?.eventDetails?.fee || 'FREE',
    isFree: post.sgcfArticleDetails?.eventDetails?.fee === 'FREE',
    isNew: new Date(post.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }));
}

// Get recent blog posts (excluding events) - WITH CATEGORIES
export async function getRecentPosts(limit: number = 3): Promise<BlogPostItem[]> {
  const allPosts = await getAllBlogPosts();
  
  // Debug: Log what categories are coming from WordPress
  console.log('=== DEBUG: Blog Posts Categories ===');
  allPosts.slice(0, limit).forEach(post => {
    console.log(`Post: ${post.title}`);
    console.log(`Categories:`, post.articleCategories?.nodes);
    console.log(`Category name:`, post.articleCategories?.nodes?.[0]?.name);
  });
  
  return allPosts.slice(0, limit).map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: cleanExcerpt(post.excerpt || post.sgcfArticleDetails?.body, 100),
    date: formatDate(post.date),
    category: post.articleCategories?.nodes?.[0]?.name || 'General',
    readTime: `${Math.ceil((post.sgcfArticleDetails?.body?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200)} min read`,
    image: getSafeImageUrl(post),
    href: `/blog/${post.slug}`
  }));
}

// Get gallery images (from ACF options page or gallery field)
export async function getGalleryImages(): Promise<GalleryImage[]> {
  // TODO: Fetch from custom ACF Options Page
  // For now, return empty array
  return [];
}

// Get video data (from ACF options page)
export async function getVideoData(): Promise<VideoData | null> {
  // TODO: Fetch from custom ACF Options Page
  // For now, return null
  return null;
}