"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube, FaPlay } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { formatDate, getNewsTypeDisplayName, NewsArticle } from "@/lib/wordpress";

interface NewsSectionProps {
  newsArticles: NewsArticle[];
}

export const NewsSection = ({ newsArticles }: NewsSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Campus Life & Highlights
          </h2>
          <p className="text-gray-600">
            Discover the stories shaping our community of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FEATURED VIDEO CARD */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* COVER IMAGE + PLAY ICON */}
            <div className="relative aspect-video cursor-pointer" onClick={() => setOpen(true)}>
              <Image
                src="/banner2.jpeg"
                alt="Africana Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg animate-color-spread">
                  <FaPlay size={30} className="text-primary" />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-playfair text-lg font-bold mb-1">
                A Glimpse into Africana&apos;s Purpose-Driven Learning
              </h3>
              <p className="text-sm text-gray-600">
                Experience the unique blend of faith and academic excellence that
                defines Africana College.
              </p>

              <div className="border-t border-gray-200 pt-3 flex flex-col gap-2">
                <h4 className="font-semibold">Dr. Susan Gitau</h4>
                <p className="text-sm text-gray-600">
                  Director, Africana College of Professionals
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/susan-gitau-phd-7a80b0117/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <FaLinkedin size={20} color="#0077B5" />
                  </a>
                  <a
                    href="https://x.com/DrSusanGitau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <SiX size={20} color="#1DA1F2" />
                  </a>
                  <a
                    href="https://www.instagram.com/dr.susangitau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <FaInstagram size={20} color="#C13584" />
                  </a>
                  <a
                    href="https://www.youtube.com/@dr.susangitau662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <FaYoutube size={20} color="#FF0000" />
                  </a>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Watch Dr. Susan Gitau talk about Africana College of Professionals.
                </p>

                <Link
                  href="/about"
                  className="mt-3 inline-block bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-full text-center font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* NEWS CARDS - FROM PROPS */}
          <div className="space-y-6">
            {newsArticles.map((article) => {
              const metadata = article.newsMetadata;
              const featuredImage = metadata?.featuredImage?.node?.mediaItemUrl;
              const newsType = getNewsTypeDisplayName(metadata?.newsType || []);
              const excerpt = metadata?.excerpt 
                ? metadata.excerpt.substring(0, 100) 
                : metadata?.body?.replace(/<[^>]*>/g, '').substring(0, 100);

              return (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-24 h-24 shrink-0">
                    <Image
                      src={featuredImage || "/placeholder.jpg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-orange-600 uppercase">
                        {newsType}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="font-medium text-primary mb-1 line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {excerpt}...
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-xs font-medium text-accent hover:text-accent/80 mt-2 inline-block"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PROMO CARD */}
          <div className="bg-linear-to-br from-accent to-accent/80 rounded-xl shadow-md overflow-hidden text-white p-6 flex flex-col items-center text-center gap-6">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                🎓 January 2026 Intake - Now Open!
              </h3>
              <p className="mb-6">Start Your Purpose Journey with Africana.</p>
            </div>

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/may-intake.jpg"
                alt="Promotional Banner Image"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <Link
              href="https://form.jotform.com/253171134791556"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-lavender px-8 py-3 rounded-full font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-black rounded-xl shadow-xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-2 shadow-xl hover:bg-gray-700 transition z-10 cursor-pointer"
              aria-label="Close video"
            >
              ✕
            </button>

            <div className="relative pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/63CvxPVPMTs?autoplay=1&controls=1&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer w-full text-center bg-primary text-white py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};