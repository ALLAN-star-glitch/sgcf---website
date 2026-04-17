'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NewsArticle } from '@/lib/NewsData'
import { FiCalendar, FiBookOpen, FiArrowRight } from 'react-icons/fi'

type NewsCardProps = {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  const categoryColors = {
    Intake: 'bg-orange-100 text-orange-700',
    Event: 'bg-purple-100 text-purple-700',
    'Success Story': 'bg-green-100 text-green-700',
    Announcement: 'bg-blue-100 text-blue-700',
  }

  const colorClass = categoryColors[article.category] || 'bg-gray-100 text-gray-700'

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-purple-100">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiBookOpen className="w-12 h-12 text-orange-400" />
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClass}`}>
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <FiCalendar className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm hover:text-purple-700 transition-colors"
        >
          Read full story
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}