"use client";

import React from "react";
import InfoCard from "@/src/components/shared/InfoCard";
import { useTranslation } from "@/src/hooks/useTranslation";
import { whyChooseUsDataEN, whyChooseUsDataRO } from "@/src/constants";

const WhyChooseUs = () => {
  const { locale } = useTranslation();

  const data = locale === "ro" ? whyChooseUsDataRO : whyChooseUsDataEN;

  return (
    <section className="w-full bg-[#1A1A1C] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[90%] xl:max-w-[75%]">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => {
            const Icon = item.icon;

            return (
              <InfoCard
                key={item.id}
                icon={<Icon />}
                title={item.title}
                description={item.description}
                hideIconBg
                className="w-full min-h-[240px] max-w-full lg:max-w-[460px] mx-auto"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;