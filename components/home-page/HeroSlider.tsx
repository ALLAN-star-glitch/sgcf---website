"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "January 2026 Intake NOW OPEN! Africana College of Professioals",
    subtitle: "Home of Quality Education",
    bgImage: "/acop2026intake.jpg",
    primaryCta: "Apply Now",
    secondaryCta: "Explore Courses",
  },
  {
    id: 2,
    title: "Rooted in Faith, Driven by Excellence",
    subtitle: "",
    bgImage: "/slide2.jpeg",
    primaryCta: "",
    secondaryCta: "",
  },
  {
    id: 3,
    title: "Building Skills That Build Nations",
    subtitle: "Practical education for tomorrow's leaders.",
    bgImage: "/slide3.jpeg",
    primaryCta: "Discover Our Courses",
    secondaryCta: "",
  },
  {
    id: 4,
    title: "Join a Thriving Community of Purpose-Driven Students",
    subtitle: "Where faith meets academic excellence.",
    bgImage: "/slide4.jpeg",
    primaryCta: "Apply Now",
    secondaryCta: "",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goNext, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[60vh] sm:h-[55vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh] min-h-[400px] overflow-hidden">
      {/* MOBILE SLIDER */}
      <div
        ref={sliderRef}
        className="flex sm:hidden h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="shrink-0 w-full h-full relative snap-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* NEW RIGHT-SIDE FADE GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-2xl text-white">
                <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>

                {slide.subtitle && (
                  <p className="text-sm sm:text-base md:text-lg mb-4 opacity-95 leading-relaxed">
                    {slide.subtitle}
                  </p>
                )}

                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="flex flex-col sm:flex-row gap-3">

                    {slide.primaryCta === "Apply Now" && (
                      <a
                        href="https://form.jotform.com/253171134791556"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base"
                      >
                        {slide.primaryCta}
                      </a>
                    )}

                    {slide.primaryCta === "Discover Our Courses" && (
                      <Link
                        href="/courses"
                        className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base"
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Explore Courses" && (
                      <Link
                        href="/courses"
                        className="border-2 border-white hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden sm:block h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* NEW GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-2xl text-white">
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>

                {slide.subtitle && (
                  <p className="text-base md:text-lg lg:text-xl mb-5 opacity-95 leading-relaxed">
                    {slide.subtitle}
                  </p>
                )}

                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="flex flex-row gap-4 flex-wrap">
                    {slide.primaryCta === "Join Africana Today" && (
                      <a
                        href="https://form.jotform.com/253171134791556"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium text-center shadow-md"
                      >
                        {slide.primaryCta}
                      </a>
                    )}

                    {slide.primaryCta === "Discover Our Courses" && (
                      <Link
                        href="/courses"
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium text-center shadow-md"
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {/* ⬇️ UPDATED — NOW OPEN JOTFORM IN NEW TAB */}
                    {slide.primaryCta === "Apply Now" && (
                      <a
                        href="https://form.jotform.com/253171134791556"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium text-center shadow-md"
                      >
                        {slide.primaryCta}
                      </a>
                    )}

                    {slide.secondaryCta === "Explore Courses" && (
                      <Link
                        href="/courses"
                        className="border-2 border-white hover:bg-white/10 text-white px-6 py-2.5 rounded-full font-medium text-center shadow-md"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={goPrev}
        className="cursor-pointer hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-accent/70 hover:bg-accent backdrop-blur-md shadow-lg items-center justify-center"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        className="cursor-pointer hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-accent/70 hover:bg-accent backdrop-blur-md shadow-lg items-center justify-center"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};