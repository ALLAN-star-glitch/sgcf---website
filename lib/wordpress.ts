/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/wordpress.ts

import he from 'he';

const API_URL = process.env.WORDPRESS_API_URL;

// ============================================
// News Types (Existing)
// ============================================

export interface Author {
  node: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    nickname?: string | null;
    description: string | null;
    name: string | null;
    avatar: {
      url: string;
    } | null;
  };
}

export interface NewsCategory {
  name: string;
  slug: string;
}

export interface FeaturedImageNode {
  sourceUrl: string;
  altText: string | null;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface AttachmentNode {
  mediaItemUrl: string;
  title: string;
}

export interface Attachment {
  node: AttachmentNode;
}

export interface NewsMetadata {
  newsType: string[];
  body: string;
  eventDate: string | null;
  eventTime: string | null;
  eventVenue: string | null;
  eventLink: string | null;
  deadlineDate: string | null;
  submissionLink: string | null;
  severityLevel: string | null;
  intakeSemester: string | null;
  masomoPortalLink: string | null;
  attachment: Attachment | null;
}

export interface NewsTag {
  name: string;
  slug: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage | null;
  author: Author | null;
  newsCategories: {
    nodes: NewsCategory[];
  };
  newsTags: {
    nodes: NewsTag[];
  };
  newsMetadata: NewsMetadata;
}

interface AllNewsResponse {
  allNews: {
    nodes: NewsArticle[];
  };
}

interface SingleNewsResponse {
  news: NewsArticle | null;
}

// ============================================
// Course Types (New)
// ============================================

export interface CourseCategory {
  name: string;
  slug: string;
}

export interface CourseTag {
  name: string;
  slug: string;
}

export interface CourseDetails {
  courseType: string[];
  courseCode: string | null;
  duration: string | null;
  fee: string | null;
  intakeMonths: string[] | null;
  studyMode: string[] | null;
  leadInstructor: string | null;
  specialization: string | null;
  careerPathways: string | null;
  entryRequirements: string | null;
  syllabus: string | null;
  videoUrl: string | null;  // ← Add this
}

export interface Course {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage | null;
  courseDetails: CourseDetails;
  courseCategories: {
    nodes: CourseCategory[];
  };
  courseTags: {
    nodes: CourseTag[];
  };
}

interface AllCoursesResponse {
  courses: {
    nodes: Course[];
  };
}

interface SingleCourseResponse {
  course: Course | null;
}

// ============================================
// Shared Functions
// ============================================

async function fetchAPI<T>(
  query: string,
  { variables }: { variables?: Record<string, unknown> } = {}
): Promise<T> {
  if (!API_URL) {
    throw new Error('WORDPRESS_API_URL is not defined in environment variables');
  }

  console.log('Fetching GraphQL with query:', query.substring(0, 200));
  console.log('Variables:', variables);

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
    console.error('Full GraphQL Error:', JSON.stringify(json.errors, null, 2));
    console.error('Query that failed:', query);
    console.error('Variables:', JSON.stringify(variables, null, 2));
    throw new Error(json.errors[0]?.message || 'GraphQL query failed');
  }

  return json.data as T;
}

// Helper function to strip HTML tags for plain text
function stripHtmlTags(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

// Helper function to decode HTML entities
export function decodeHtmlEntities(text: string) {
  if (!text) return '';
  return he.decode(text);
}

// Helper function to format date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Helper function to get plain text excerpt from HTML body
export function getExcerpt(html: string, maxLength: number = 160): string {
  const plainText = stripHtmlTags(html);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
}

// Helper function to get author display name
export function getAuthorDisplayName(author: Author | null): string | null {
  if (!author?.node) return null;
  const { firstName, lastName } = author.node;
  if (firstName || lastName) {
    return `${firstName || ''} ${lastName || ''}`.trim();
  }
  return null;
}

// Helper function to get news type display name
export function getNewsTypeDisplayName(newsType: string[]): string {
  const type = newsType[0] || 'general';
  const displayNames: Record<string, string> = {
    announcement: 'Announcement',
    event: 'Event',
    alert: 'Alert',
    deadline: 'Deadline',
    admissions: 'Admissions',
    general: 'News',
    article: 'Article',
    tip: 'Tip',
    guide: 'Guide',
    interview: 'Interview',
    'thought-leadership': 'Thought Leadership',
    'success-story': 'Success Story',
  };
  return displayNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

// Helper function to get course type display name
export function getCourseTypeDisplayName(courseType: string[]): string {
  const type = courseType[0] || 'course';
  const displayNames: Record<string, string> = {
    diploma: 'Diploma',
    certificate: 'Certificate',
    'short-course': 'Short Course',
    professional: 'Professional Development',
  };
  return displayNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

// ============================================
// News Functions
// ============================================

// Get all news posts
export async function getAllNews(): Promise<NewsArticle[]> {
  const data = await fetchAPI<AllNewsResponse>(`
    query GetAllNews {
      allNews {
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
              mediaDetails {
                width
                height
              }
            }
          }
          author {
            node {
              firstName
              lastName
              description
              email
              avatar {
                url
              }
            }
          }
          newsCategories {
            nodes {
              name
              slug
            }
          }
          newsTags {
            nodes {
              name
              slug
            }
          }
          newsMetadata {
            newsType
            body
            eventDate
            eventTime
            eventVenue
            eventLink
            deadlineDate
            submissionLink
            severityLevel
            intakeSemester
            masomoPortalLink
            attachment {
              node {
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
  `);

  return data?.allNews?.nodes || [];
}

// Get single news post by slug
export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const data = await fetchAPI<SingleNewsResponse>(`
    query GetNewsBySlug($id: ID!) {
      news(id: $id, idType: SLUG) {
        id
        title
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            firstName
            lastName
            description
            email
            avatar {
              url
            }
          }
        }
        newsCategories {
          nodes {
            name
            slug
          }
        }
        newsTags {
          nodes {
            name
            slug
          }
        }
        newsMetadata {
          newsType
          body
          eventDate
          eventTime
          eventVenue
          eventLink
          deadlineDate
          submissionLink
          severityLevel
          intakeSemester
          masomoPortalLink
          attachment {
            node {
              mediaItemUrl
              title
            }
          }
        }
      }
    }
  `, { variables: { id: slug } });
  
  return data?.news || null;
}

// Get all news slugs for static generation
export async function getAllNewsSlugs(): Promise<{ slug: string }[]> {
  const news = await getAllNews();
  return news.map((article) => ({ slug: article.slug }));
}

// Get news by category slug
export async function getNewsByCategory(categorySlug: string): Promise<NewsArticle[]> {
  const allNews = await getAllNews();
  return allNews.filter((article) =>
    article.newsCategories?.nodes?.some((cat) => cat.slug === categorySlug)
  );
}

// Get news by type (from ACF newsType field)
export async function getNewsByType(newsType: string): Promise<NewsArticle[]> {
  const allNews = await getAllNews();
  return allNews.filter((article) =>
    article.newsMetadata?.newsType?.includes(newsType)
  );
}

// Check if there are recent posts (within X days)
export async function hasRecentNews(daysAgo: number = 7): Promise<boolean> {
  const allNews = await getAllNews();
  if (allNews.length === 0) return false;

  const lastPostDate = new Date(allNews[0].date);
  const daysSinceLastPost = (Date.now() - lastPostDate.getTime()) / (1000 * 60 * 60 * 24);

  return daysSinceLastPost <= daysAgo;
}

// Get recent posts for preview (limited number)
export async function getRecentNews(limit: number = 3): Promise<NewsArticle[]> {
  const allNews = await getAllNews();
  return allNews.slice(0, limit);
}

export async function getAllTags(): Promise<NewsTag[]> {
  const allNews = await getAllNews();
  const tagsMap = new Map<string, string>();
  
  allNews.forEach((article) => {
    if (article.newsTags?.nodes) {
      article.newsTags.nodes.forEach((tag) => {
        if (!tagsMap.has(tag.slug)) {
          tagsMap.set(tag.slug, tag.name);
        }
      });
    }
  });
  
  return Array.from(tagsMap.entries()).map(([slug, name]) => ({ name, slug }));
}

/// ============================================
// Course Functions (New)
// ============================================

// Get all courses
export async function getAllCourses(): Promise<Course[]> {
  const data = await fetchAPI<AllCoursesResponse>(`
    query GetAllCourses {
      courses {
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
              mediaDetails {
                width
                height
              }
            }
          }
          courseDetails {
            courseType
            courseCode
            duration
            fee
            intakeMonths
            studyMode
            leadInstructor
            specialization
            careerPathways
            entryRequirements
            syllabus
            videoUrl
          }
          courseCategories {
            nodes {
              name
              slug
            }
          }
          courseTags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `);

  return data?.courses?.nodes || [];
}

// Get single course by slug
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const data = await fetchAPI<SingleCourseResponse>(`
    query GetCourseBySlug($id: ID!) {
      course(id: $id, idType: SLUG) {
        id
        title
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        courseDetails {
          courseType
          courseCode
          duration
          fee
          intakeMonths
          studyMode
          leadInstructor
          specialization
          careerPathways
          entryRequirements
          syllabus
          videoUrl
        }
        courseCategories {
          nodes {
            name
            slug
          }
        }
        courseTags {
          nodes {
            name
            slug
          }
        }
      }
    }
  `, { variables: { id: slug } });
  
  return data?.course || null;
}

// Get all course slugs for static generation
export async function getAllCourseSlugs(): Promise<{ slug: string }[]> {
  const courses = await getAllCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

// Get courses by category slug
export async function getCoursesByCategory(categorySlug: string): Promise<Course[]> {
  const allCourses = await getAllCourses();
  return allCourses.filter((course) =>
    course.courseCategories?.nodes?.some((cat) => cat.slug === categorySlug)
  );
}

// Get courses by type (from ACF courseType field)
export async function getCoursesByType(courseType: string): Promise<Course[]> {
  const allCourses = await getAllCourses();
  return allCourses.filter((course) =>
    course.courseDetails?.courseType?.includes(courseType)
  );
}