"use client";

import React from "react";
import Image from "next/image";
import { Tick } from "@/public/About/images/svgs";
import { useTranslation } from "@/src/hooks/useTranslation";
import {
  ledgerCards_en,
  ledgerCards_ro,
} from "@/src/constants";

const TheComplianceLedger = () => {
  const { locale, t } = useTranslation();

  const ledgerCards = locale === "ro" ? ledgerCards_ro : ledgerCards_en;

  return (
    <section className="w-full bg-[#1A1A1C] py-14 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

      {/* TITLE */}
      <div className="text-center max-w-3xl mb-10 md:mb-16">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          {t("ledger.title")}
        </h2>

        <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base leading-relaxed">
          {t("ledger.subtitle")}
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-8 md:gap-12 w-full items-center">
        {ledgerCards.map((card, index) => (
          <div
            key={card.id}
            className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg bg-[#111113]"
          >
            {/* IMAGE */}
            <div className="relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[380px] lg:min-h-full group overflow-hidden">
              <Image
                src={card.bg}
                alt="background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#BF9655D6] opacity-0 group-hover:opacity-80 transition-all duration-300 z-[1]" />

              <div className="absolute top-4 left-4 z-10">
                <card.icon />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-white text-left px-6 sm:px-10">
                {/* <p className="text-xs tracking-[2px] uppercase">
                  {t("ledger.concept")} 0{index + 1}
                </p> */}

               <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 leading-tight">
                  {card.name}
                </h3>
                <p className="text-xs sm:text-sm mt-3 opacity-90">
  {card.tagline}
</p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-[575px] bg-white p-5 sm:p-7 md:p-10 flex flex-col justify-between">
              <p className="text-gray-700">{card.title}</p>

              <div className="mt-6 space-y-3">
                {card.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Tick />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheComplianceLedger;