"use client";

import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

type PageHeroBannerProps = {
  titleKey: string;
};

const PageHeroBanner = ({ titleKey }: PageHeroBannerProps) => {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/About/images/About_Us_Banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-center px-4">
        {t(titleKey)}
      </h1>
    </section>
  );
};

export default PageHeroBanner;