"use client";

import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const TailoredComplianceAcrossIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#1A1A1C] py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[75%] mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          {t("industry.tailored.title")}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[980px] mx-auto text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
          {t("industry.tailored.desc")}
        </p>

      </div>
    </section>
  );
};

export default TailoredComplianceAcrossIndustries;