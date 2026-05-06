"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const MiniCTASection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-center items-center overflow-hidden h-[150px] md:min-h-[200px]">
      
      {/* Background Image */}
      <Image
        src="/Industry/images/MiniCTAStrip.jpg"
        alt="Eligibility CTA Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (optional — add bg if needed) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full px-6 sm:px-10 md:px-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        
        {/* Left Content */}
        <div className="max-w-[760px]">
          <h2 className="text-white text-3xl sm:text-4xl md:text-[46px] font-semibold leading-tight">
            {t("mini_CTA.title")}
          </h2>

          <p className="mt-4 text-white/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-[620px]">
            {t("mini_CTA.description")}
          </p>
        </div>

        {/* Right Button */}
        <div className="shrink-0">
          <button className="bg-[#1E2A23] cursor-pointer hover:bg-[#25352c] transition-all duration-300 text-white px-8 md:px-5 h-[58px] rounded-full text-sm sm:text-base font-medium tracking-wide">
            {t("mini_CTA.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCTASection;