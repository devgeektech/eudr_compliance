"use client";

import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const TailoredComplianceAcrossIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#1A1A1C] py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 text-center">
        
        {/* Title */}
        <h2 className="mx-auto max-w-[1000px] text-xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t("industry.tailored.title")}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[980px] text-xs leading-relaxed text-white/80 sm:mt-5 sm:text-sm md:mt-6 md:text-base lg:text-lg">
          {t("industry.tailored.desc")}
        </p>

      </div>
    </section>
  );
};

export default TailoredComplianceAcrossIndustries;