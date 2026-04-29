
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
    <section className="w-full py-20 bg-[#303032]">
      <div className="px-6 lg:px-[240px]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffff]">What We Do</h2>
          <p className="mt-4 text-base md:text-lg text-[#ffff]">
            Comprehensive EUDR compliance services tailored to your business needs
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((item) => {
            const Logo = getIconComponent(item.iconKey);
            const bgImageUrl = getStrapiMediaURL(item.bgImage?.url);
            return (
              <div
                key={item.id}
                className="relative min-h-[250px] rounded-[12px] overflow-hidden group"
              >
                {bgImageUrl && (
                  <Image
                    src={bgImageUrl}
                    alt={item.title}
                    unoptimized
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="mb-6">
                      <Logo />
                    </div>
                    <h3 className="text-2xl font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
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
