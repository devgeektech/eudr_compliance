"use client";

import React from "react";
import { risksOfNonCompliance } from "@/src/constants";

const RisksOfNonCompliance = () => {
  return (
    <section className="relative w-full bg-[#1A1A1C] py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
         <div className="absolute inset-0 bg-[#006B2C0A] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
         <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Risks of Non-Compliance
          </h2>

          <p className="text-white text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            Failure to comply with EUDR carries significant legal and financial
            consequences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {risksOfNonCompliance.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-[#212125] rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#00000008]"
              >
                {/* Badge */}
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#BF965514] text-[#BF9655] text-xs sm:text-sm font-medium">
                  {item.severity}
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <Icon className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-semibold leading-snug pr-20">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm md:text-base leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    
    </section>
  );
};

export default RisksOfNonCompliance;