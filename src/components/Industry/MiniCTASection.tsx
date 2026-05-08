"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const MiniCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[220px] overflow-hidden md:h-[240px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Industry/images/MiniCTAStrip.jpg"
          alt="Eligibility CTA Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-center gap-5 px-4 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-16 xl:px-24">
        
        {/* Left Side */}
        <div className="max-w-[760px]">
          <h2 className="text-xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl lg:text-[46px]">
            {t("mini_CTA.title")}
          </h2>

          <p className="mt-2 max-w-[620px] text-xs leading-relaxed text-white/90 sm:text-sm md:text-lg">
            {t("mini_CTA.description")}
          </p>
        </div>

        {/* Right Side Button */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#1E2A23] px-5 text-center text-xs font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#25352c] sm:h-[50px] sm:px-7 sm:text-sm md:h-[56px] md:px-8 md:text-base"
          >
            {t("mini_CTA.button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniCTASection;