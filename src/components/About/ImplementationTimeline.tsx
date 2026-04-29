"use client";

import React from "react";
import { implementationTimeline } from "@/src/constants";

const ImplementationTimeline = () => {
  return (
    <section className="w-full bg-[#131416] py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Implementation Timeline
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            Step-by-step timeline for implementing EUDR requirements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 md:mt-20">
          {/* Desktop Horizontal Center Line */}
         <div className="hidden  lg:block absolute top-[130px] left-[8%] right-[8%] h-[2px] bg-[#BF9655]/30 z-0" />

          {/* Mobile Vertical Line */}
  {/* <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-[#BF9655]/25 z-0" /> */}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {implementationTimeline.map((item) => (
              <div key={item.id} className="relative pt-8 z-10">
                {/* Number Circle */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#BF9655] border-1 border-white flex items-center justify-center text-white text-xl font-semibold shadow-lg">
                  {item.number}
                </div>

                {/* Card */}
                <div className="bg-[#212125] hover:bg-[#BF9655] transition-all duration-300 rounded-2xl px-7 md:px-8 pt-12 pb-8 min-h-[200px] text-center group">
                  {/* Date */}
                  <p className="text-[#BF9655] group-hover:text-white text-sm md:text-base font-medium">
                    {item.date}
                  </p>

                  {/* Title */}
                  <h3 className="text-white text-lg md:text-xl font-semibold mt-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 group-hover:text-white text-sm md:text-base mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationTimeline;