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
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const transitionTimerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const { t } = useTranslation();

  const transitionBy = useCallback((step: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    const current = activeIndexRef.current;
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
      activeIndexRef.current = next;
      isAnimatingRef.current = false;
    }, TRANSITION_MS);
  }, [totalSlides]);

  const goToNext = useCallback(() => transitionBy(1), [transitionBy]);
  const goToPrev = useCallback(() => transitionBy(-1), [transitionBy]);

  useEffect(() => {
    const timer = window.setInterval(goToNext, SLIDE_DELAY_MS);
    return () => window.clearInterval(timer);
  }, [goToNext]);

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[min(100svh,820px)] h-[min(100svh,820px)]">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 z-0 bg-black" aria-hidden />
        {slides.map((img, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index === previousIndex;

          let slideClass = "pointer-events-none z-0 opacity-0";
          if (isPrevious) {
            slideClass = isTransitioning ? "z-[1] opacity-0" : "z-[1] opacity-100";
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
              aria-hidden={!isActive}
            >
              <Image
                src={img}
                alt={`Hero slide ${index + 1}`}
                fill
                priority
                loading="eager"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25" aria-hidden />
              <div className="absolute inset-0 bg-black/15" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden />
            </div>
          );
        })}

        <button
          type="button"
          onClick={goToPrev}
          aria-label={t("hero.prev")}
          className="absolute left-3 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border border-white/85 bg-transparent text-white shadow-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 sm:left-5 md:left-8 lg:left-12"
        >
          <ChevronLeft className="mx-auto size-4 stroke-[2]" stroke="currentColor" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label={t("hero.next")}
          className="absolute right-3 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border-0 bg-[#D9C5A3] text-[#1a1a1a] shadow-none transition hover:bg-[#cab896] focus-visible:ring-2 focus-visible:ring-white/30 sm:right-5 md:right-8 lg:right-12"
        >
          <ChevronRight className="mx-auto size-4 stroke-[2]" stroke="currentColor" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 flex items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-[680px] text-white">
            <h1 className="text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {t("hero.title")}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg md:text-xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1E3D32] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:px-8 sm:text-base"
              >
                {t("hero.cta1")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D9C5A3] px-7 py-3.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-95 sm:px-8 sm:text-base"
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
