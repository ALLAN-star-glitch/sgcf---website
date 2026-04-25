// lib/NewsData.ts
import { getAllNews, getNewsBySlug, hasRecentNews, NewsArticle } from './wordpress';

// Re-export types
export type { NewsArticle };

// Get all news articles from WordPress
export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  try {
    const articles = await getAllNews();
    return articles;
  } catch (error) {
    console.error('Failed to fetch from WordPress:', error);
    return []; // Return empty array instead of falling back to missing file
  }
}

// Get single news article by slug
export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const article = await getNewsBySlug(slug);
    return article;
  } catch (error) {
    console.error('Failed to fetch from WordPress:', error);
    return null;
  }
}

// Check if there are recent news articles
export async function hasRecentNewsArticles(daysAgo: number = 7): Promise<boolean> {
  try {
    return await hasRecentNews(daysAgo);
  } catch (error) {
    console.error('Failed to check recent news:', error);
    return false;
  }
}