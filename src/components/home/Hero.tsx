"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/src/hooks/useTranslation";

import HeroImage from "@/public/Home/images/Hero Section.jpg";
import HeroImage2 from "@/public/Home/images/Hero_Banner-1.jpg";
import HeroImage3 from "@/public/Home/images/Hero_Banner-2.jpg";

const slides = [HeroImage, HeroImage2, HeroImage3];
const SLIDE_DELAY_MS = 8000;
const TRANSITION_MS = 1200;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = slides.length;
  const transitionTimerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  const { t } = useTranslation();

  // ✅ FIXED transition logic (no ref desync)
  const transitionBy = useCallback((step: number) => {
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    const current = activeIndex;
    const next = (current + step + totalSlides) % totalSlides;

    setPreviousIndex(current);
    setActiveIndex(next);
    setIsTransitioning(false);

    frameRef.current = window.requestAnimationFrame(() => {
      setIsTransitioning(true);
    });

    transitionTimerRef.current = window.setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, TRANSITION_MS);
  }, [activeIndex, totalSlides]);

  const goToNext = useCallback(() => transitionBy(1), [transitionBy]);
  const goToPrev = useCallback(() => transitionBy(-1), [transitionBy]);

  // ✅ Autoplay
  useEffect(() => {
    const timer = window.setInterval(() => {
      transitionBy(1);
    }, SLIDE_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [transitionBy]);

  // ✅ Cleanup
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[min(100svh,820px)] h-[min(100svh,820px)]">
      <div className="relative h-full w-full">

        {/* Background fallback */}
        <div className="absolute inset-0 z-0 bg-black" aria-hidden />

        {slides.map((img, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index === previousIndex;

          let slideClass = "pointer-events-none z-0 opacity-0";

          if (isPrevious) {
            slideClass = isTransitioning
              ? "z-[1] opacity-0"
              : "z-[1] opacity-100";
          }

          if (isActive) {
            slideClass =
              previousIndex !== null && !isTransitioning
                ? "z-[2] opacity-0"
                : "z-[2] opacity-100";
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${slideClass}`}
            >
              <Image
                src={img}
                alt={`Hero slide ${index + 1}`}
                fill
                priority
                className="object-cover object-center"
              />

              {/* ✅ FIXED overlays (no click blocking) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />
            </div>
          );
        })}

        {/* PREV */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label={t("hero.prev")}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full border border-white/85 text-white hover:bg-[#cab896]  sm:left-5 md:left-8 lg:left-12"
        >
          <ChevronLeft className="mx-auto size-4" />
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={goToNext}
          aria-label={t("hero.next")}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 size-10 rounded-full border border-white/85 text-white hover:bg-[#cab896] sm:right-5 md:right-8 lg:right-12"
        >
          <ChevronRight className="mx-auto size-4" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center">
        <div className="pointer-events-none mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-[680px] text-white">

            <h1 className="text-[2rem] font-bold sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {t("hero.title")}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/95">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}
                target="_blank"
                className="rounded-full bg-[#1E3D32] px-7 py-3.5 text-white"
              >
                {t("hero.cta1")}
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-[#D9C5A3] px-7 py-3.5 text-black"
              >
                {t("hero.cta2")}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;