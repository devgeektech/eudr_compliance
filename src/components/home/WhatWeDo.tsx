"use client";

import React from "react";
import Image from "next/image";
import { getStrapiMediaURL, type WhatWeDoCardItem } from "@/src/lib/strapi";
import { getIconComponent } from "@/src/lib/iconMap";

type Props = {
  items: WhatWeDoCardItem[];
};

const WhatWeDo = ({ items }: Props) => {
  return (
    <section className="w-full bg-[#303032] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            What We Do
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
            Comprehensive EUDR compliance services tailored to your business
            needs
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {items.map((item) => {
            const Logo = getIconComponent(item.iconKey);
            const bgImageUrl = getStrapiMediaURL(item.bgImage?.url);

            return (
              <div
                key={item.id}
                className="relative min-h-[260px] sm:min-h-[280px] md:min-h-[300px] rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                {bgImageUrl && (
                  <Image
                    src={bgImageUrl}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 h-full p-5 sm:p-6 lg:p-8 flex flex-col justify-between text-white">
                  <div>
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5">
                      <Logo />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;