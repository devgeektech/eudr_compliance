"use client";

import { useMemo } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { LeftArrow } from "@/public/Home/images/svgs";
import HeroImage from "@/public/Home/images/Hero Section.jpg";
import HeroImage2 from "@/public/Home/images/Hero_Banner-1.jpg";
import HeroImage3 from "@/public/Home/images/Hero_Banner-2.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const slides = [HeroImage, HeroImage2, HeroImage3];

const Hero = () => {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="relative w-full h-[700px]">
      
      <Carousel plugins={[autoplay]} opts={{ loop: true }} className="w-full h-full">
        <CarouselContent>
          {slides.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[700px]">
                {/* Background Image */}
                <Image
                  src={img}
                  alt={`Hero Slide ${index + 1}`}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/35" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-6 lg:left-16 h-12 w-12 border-none bg-transparent shadow-none hover:bg-white/10 text-white">
          <LeftArrow className="h-6 w-6 text-white" />
        </CarouselPrevious>

        <CarouselNext className="right-6 lg:right-16 h-12 w-12 border-none bg-transparent shadow-none hover:bg-white/10 text-white">
          <LeftArrow className="h-6 w-6 text-white rotate-180" />
        </CarouselNext>
      </Carousel>

      {/*  GLOBAL HERO CONTENT (always on top of slides) */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-[240px] w-full">
          <div className="max-w-[650px] text-white">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              EUDR Compliance Made Simple for Your Business
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              Expert guidance and full due-diligence support to ensure your
              products meet every requirement of the EU Deforestation Regulation (EUDR).
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#1E2A23] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                Get a Free Assessment
              </button>
            <Link href="/contact">
              <button className="bg-[#D6C3A3] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                Contact Us
              </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;