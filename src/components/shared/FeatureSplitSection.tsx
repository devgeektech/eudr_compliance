"use client";

import React from "react";
import Image from "next/image";

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title?: string;
  text: string | React.ReactNode;
};

type FeatureSplitSectionProps = {
  pageName?: string;
  title: string;
  description: React.ReactNode;
  features: readonly FeatureItem[];
  image: string;
  background?: "dark" | "charcoal";
  imagePosition?: "left" | "right";

  /* NEW */
  iconBoxBg?: string;
};

const FeatureSplitSection = ({
  pageName,
  title,
  description,
  features,
  image,
  background = "charcoal",
  imagePosition = "right",
  iconBoxBg = "bg-[#BF9655]",
}: FeatureSplitSectionProps) => {
  const bgClass =
    background === "dark" ? "bg-[#1A1A1C]" : "bg-[#303032]";

  const imageBlock = (
    <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        unoptimized
        className="object-cover"
      />
    </div>
  );

  const contentBlock = (
    <div>
      {/* Page Name */}
      {pageName && (
        <div className="flex items-center gap-4 mb-5">
          <div className="w-[2px] h-7 bg-[#BF9655]" />
          <span className="text-[#BF9655] text-sm sm:text-base font-medium uppercase tracking-[2px]">
            {pageName}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mt-5">
        {description}
      </p>

      {/* Features */}
      <div className="mt-8 space-y-6">
        {features.slice(0, 3).map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-start gap-4">
              {/* Icon Box */}
              <div
                className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${iconBoxBg}`}
              >
                <Icon className="text-white" />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-white text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className={`w-full ${bgClass}`}>
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-[140px] 2xl:px-[240px] py-14 md:py-20 lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSplitSection;