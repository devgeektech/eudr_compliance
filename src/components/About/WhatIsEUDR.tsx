"use client";

import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";
import { getIconComponent } from "@/src/lib/iconMap";
import type { AboutStatItem, AboutFeatureItem } from "@/src/lib/strapi";

type Props = {
  stats: AboutStatItem[];
  features: AboutFeatureItem[];
};

const WhatIsEUDR = ({ stats, features }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#1A1A1C]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t("about.title")}
          </h2>

          <div className="space-y-1 text-white text-lg">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          <div className="mt-7">
            {features.map((item) => {
              const Icon = getIconComponent(item.iconKey);
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <Icon className="w-10 h-10 shrink-0 mt-1" />
                  <p className="text-white text-lg leading-8">
                    {item.text} {/* comes from Strapi → already localized */}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 items-end">
          {stats.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[680px] h-[120px] bg-white rounded-2xl px-8 flex flex-col justify-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-[#BF9655]">
                {item.title} {/* Strapi */}
              </h3>
              <p className="text-[#2C2C2C] text-base mt-2 text-left">
                {item.description} {/* Strapi */}
              </p>
            </div>
          ))}

          <div className="w-full max-w-[680px] min-h-[140px] bg-[#534124] rounded-2xl px-8 py-7 flex items-center">
            <p className="text-white text-base leading-8 text-left">
              {t("about.highlight")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsEUDR;