import React from "react";
import { getIconComponent } from "@/src/lib/iconMap";
import type { AboutStatItem, AboutFeatureItem } from "@/src/lib/strapi";

type Props = {
  stats: AboutStatItem[];
  features: AboutFeatureItem[];
};

const WhatIsEUDR = ({ stats, features }: Props) => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#1A1A1C]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">What is EUDR?</h2>
          <div className="space-y-1 text-white text-lg">
            <p>
              The European Union Deforestation Regulation (EUDR) is a landmark legislative
              framework designed to ensure that products placed on the EU market do not
              contribute to global deforestation or forest degradation. It forms a key pillar
              of the European Green Deal, reinforcing the EU&apos;s commitment to sustainable
              and responsible sourcing practices worldwide.
            </p>
            <p>
              By placing accountability directly on companies, the regulation shifts
              environmental responsibility into the corporate boardroom. Businesses must
              actively monitor, assess, and manage their supply chains to ensure compliance,
              making sustainability a core part of operational and strategic decision-making.
            </p>
            <p>
              The regulation requires that any operator or trader placing commodities on the
              EU market, or exporting them, must demonstrate that products do not originate
              from land deforested after December 31, 2020. This represents a fundamental
              transformation in global supply chain transparency, going far beyond traditional
              reporting requirements.
            </p>
          </div>
          <div className="mt-7">
            {features.map((item) => {
              const Icon = getIconComponent(item.iconKey);
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <Icon className="w-10 h-10 shrink-0 mt-1" />
                  <p className="text-white text-lg leading-8">{item.text}</p>
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
              <h3 className="text-4xl font-bold text-[#BF9655]">{item.title}</h3>
              <p className="text-[#2C2C2C] text-base mt-2 text-left">{item.description}</p>
            </div>
          ))}
          <div className="w-full max-w-[680px] min-h-[140px] bg-[#534124] rounded-2xl px-8 py-7 flex items-center">
            <p className="text-white text-base leading-8 text-left">
              The EUDR stands among the most impactful environmental trade regulations ever
              introduced, influencing global supply chains across six continents and reshaping
              how businesses source, monitor, and ensure sustainability compliance worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEUDR;
