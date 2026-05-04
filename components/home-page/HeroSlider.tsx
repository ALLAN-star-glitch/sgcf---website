"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Shield, Users, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Bringing Hope to the Vulnerable",
    subtitle: "Free counseling & support for vulnerable families in Kenya and beyond",
    bgImage: "/sgcf_slide1.jpg",
    primaryCta: "Support Our Work",
    secondaryCta: "Get Help",
    badge: "Community Impact",
  },
 {
    id: 2,
    title: "Education Changes Everything",
    subtitle: "Supporting students from underserved backgrounds to stay in school",
    bgImage: "/sgcf_slide2.jpg",
    primaryCta: "Sponsor a Student",
    secondaryCta: "Learn More",
    badge: "Education Access",
  },
  {
    id: 3,
    title: "Support in Festive Seasons",
    subtitle: "Providing counseling and support to those in need during the holidays",
    bgImage: "/sgcf_slide3.jpeg",
    primaryCta: "Become a Volunteer",
    secondaryCta: "",
    badge: "Youth Empowerment",
  },
  {
    id: 4,
    title: "You Are Not Alone",
    subtitle: "Professional counseling services in a safe, confidential, compassionate space",
    bgImage: "/og-image.webp",
    primaryCta: "Book a Session",
    secondaryCta: "Donate",
    badge: "Mental Wellness",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goNext, 7000);
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

  // Helper function to get gradient based on slide badge
  const getGradientStyle = (badge: string) => {
    const gradients = {
      "Community Impact": "from-[#2D6A4F]/85 via-[#1B4332]/60 to-transparent",
      "Youth Empowerment": "from-[#6D28D9]/85 via-[#4C1D95]/60 to-transparent",
      "Education Access": "from-black/70 via-[#6D28D9]/40 to-transparent", // Black blended with purple
      "Mental Wellness": "from-[#2D6A4F]/85 via-[#6D28D9]/60 to-transparent",
    };
    return gradients[badge as keyof typeof gradients] || "from-[#2D6A4F]/85 via-[#1B4332]/60 to-transparent";
  };

  // Helper function to get badge background color
  const getBadgeBgColor = (badge: string) => {
    const colors = {
      "Community Impact": "#2D6A4F",
      "Youth Empowerment": "#6D28D9",
      "Education Access": "#6D28D9", // Changed to purple to match gradient
      "Mental Wellness": "#2D6A4F",
    };
    return colors[badge as keyof typeof colors] || "#2D6A4F";
  };

  // Fallback background color if image fails to load
  const getFallbackBgColor = (badge: string) => {
    const colors = {
      "Community Impact": "#1B4332",
      "Youth Empowerment": "#4C1D95",
      "Education Access": "#1a1a1a",
      "Mental Wellness": "#1B4332",
    };
    return colors[badge as keyof typeof colors] || "#1B4332";
  };

  // Debug function to log image paths
  useEffect(() => {
    console.log("Image paths being used:", slides.map(s => s.bgImage));
  }, []);

  return (
    <section className="relative h-[70vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] min-h-[500px] overflow-hidden">
      {/* MOBILE SLIDER */}
      <div
        ref={sliderRef}
        className="flex sm:hidden h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {slides.map((slide, idx) => (
          <div key={slide.id} className="shrink-0 w-full h-full relative snap-center">
            {/* Background Image with fallback */}
            <div className="absolute inset-0">
              {!imageErrors[idx] ? (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  onError={() => setImageErrors(prev => ({ ...prev, [idx]: true }))}
                />
              ) : (
                <div 
                  className="absolute inset-0"
                  style={{ background: getFallbackBgColor(slide.badge) }}
                />
              )}
            </div>

            {/* Dynamic gradient overlay based on slide theme */}
            <div className={`absolute inset-0 bg-gradient-to-r ${getGradientStyle(slide.badge)}`}></div>

            <div className="container mx-auto px-4 h-full flex items-center relative z-20">
              <div className="max-w-2xl text-white">
                {/* Badge with themed colors */}
                <div 
                  className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-3 py-1 mb-4 border border-white/20"
                  style={{ background: `${getBadgeBgColor(slide.badge)}20` }}
                >
                  <Heart className="w-3.5 h-3.5 text-white/90" />
                  <span className="text-xs font-medium tracking-wide">{slide.badge}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base mb-5 opacity-95 leading-relaxed font-light">
                  {slide.subtitle}
                </p>

                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    {slide.primaryCta === "Support Our Work" && (
                      <Link
                        href="/donate"
                        className="text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ background: "var(--color-primary)" }}
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {slide.primaryCta === "Become a Volunteer" && (
                      <Link
                        href="/volunteer"
                        className="text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ background: "var(--color-secondary)" }}
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {slide.primaryCta === "Sponsor a Student" && (
                      <Link
                        href="/sponsorship"
                        className="px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ background: "var(--color-accent)", color: "#1a1a1a" }}
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {slide.primaryCta === "Book a Session" && (
                      <Link
                        href="/book-appointment"
                        className="text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ background: "var(--color-primary)" }}
                      >
                        {slide.primaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Get Help" && (
                      <Link
                        href="/counseling"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Learn More" && (
                      <Link
                        href="/our-work"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Donate" && (
                      <Link
                        href="/donate"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-medium text-center shadow-md text-sm sm:text-base transition-all duration-300"
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
            {/* Background Image with fallback */}
            <div className="absolute inset-0">
              {!imageErrors[index] ? (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                />
              ) : (
                <div 
                  className="absolute inset-0"
                  style={{ background: getFallbackBgColor(slide.badge) }}
                />
              )}
            </div>

            {/* Dynamic gradient overlay based on slide theme */}
            <div className={`absolute inset-0 bg-gradient-to-r ${getGradientStyle(slide.badge)}`}></div>

            <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-20">
              <div className="max-w-3xl text-white">
                <div 
                  className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20"
                  style={{ background: `${getBadgeBgColor(slide.badge)}20` }}
                >
                  {slide.badge === "Community Impact" && <Users className="w-4 h-4 text-white/90" />}
                  {slide.badge === "Youth Empowerment" && <Heart className="w-4 h-4 text-white/90" />}
                  {slide.badge === "Education Access" && <Shield className="w-4 h-4 text-white/90" />}
                  {slide.badge === "Mental Wellness" && <Calendar className="w-4 h-4 text-white/90" />}
                  <span className="text-xs uppercase tracking-wider font-semibold">{slide.badge}</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl font-light">
                  {slide.subtitle}
                </p>

                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="flex flex-row gap-4 flex-wrap">
                    {slide.primaryCta === "Support Our Work" && (
                      <Link
                        href="/donate"
                        className="group text-white px-8 py-3 rounded-full font-semibold text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
                        style={{ background: "var(--color-primary)" }}
                      >
                        {slide.primaryCta}
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}

                    {slide.primaryCta === "Become a Volunteer" && (
                      <Link
                        href="/volunteer"
                        className="group text-white px-8 py-3 rounded-full font-semibold text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
                        style={{ background: "var(--color-secondary)" }}
                      >
                        {slide.primaryCta}
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}

                    {slide.primaryCta === "Sponsor a Student" && (
                      <Link
                        href="/sponsorship"
                        className="group px-8 py-3 rounded-full font-semibold text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
                        style={{ background: "var(--color-accent)", color: "#1a1a1a" }}
                      >
                        {slide.primaryCta}
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}

                    {slide.primaryCta === "Book a Session" && (
                      <Link
                        href="/book-appointment"
                        className="group text-white px-8 py-3 rounded-full font-semibold text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
                        style={{ background: "var(--color-primary)" }}
                      >
                        {slide.primaryCta}
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}

                    {slide.secondaryCta === "Get Help" && (
                      <Link
                        href="/counseling"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-center shadow-md transition-all duration-300"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Learn More" && (
                      <Link
                        href="/our-work"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-center shadow-md transition-all duration-300"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}

                    {slide.secondaryCta === "Donate" && (
                      <Link
                        href="/donate"
                        className="border-2 border-white hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-center shadow-md transition-all duration-300"
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

      {/* Arrow Buttons */}
      <button
        onClick={goPrev}
        className="cursor-pointer hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full backdrop-blur-md shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
        style={{ background: "var(--color-primary)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        className="cursor-pointer hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full backdrop-blur-md shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
        style={{ background: "var(--color-primary)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-10" 
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            style={{ background: index === currentSlide ? "var(--color-accent)" : undefined }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};