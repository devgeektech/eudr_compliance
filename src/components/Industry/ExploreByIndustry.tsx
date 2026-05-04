"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getExploreIndustries } from "@/src/lib/strapi-client";
import { getIconComponent } from "@/src/lib/iconMap";
import type { ExploreIndustryItem } from "@/src/lib/strapi-shared";
import { LOCALE_CHANGED_EVENT } from "@/src/lib/i18n-locale";

const ExploreByIndustry = () => {
  const [cards, setCards] = useState<ExploreIndustryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const list = await getExploreIndustries();
      setCards(list || []);
      setLoading(false);
    };

    load();
    const onLocale = () => {
      load();
    };
    window.addEventListener(LOCALE_CHANGED_EVENT, onLocale);
    return () => window.removeEventListener(LOCALE_CHANGED_EVENT, onLocale);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <Image
        src="/Home/images/WhoWeHelp.jpg"
        alt="Explore by Industry Background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-[75%] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            Explore By Industries
          </h2>

          <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-[760px] mx-auto">
            Select your industry to learn how EUDR impacts your business.
          </p>
        </div>

        {/* Cards */}
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-items-center">
            {cards.map((item) => {
  const Icon = getIconComponent(item.iconKey);

  return (
    <div key={item.id} className="w-full max-w-[268px] min-h-[175px] bg-white rounded-2xl px-5 py-6 flex flex-col items-center text-center shadow-lg">
      
      <div className="p-3 rounded-full bg-[#BF9655] text-white mb-4">
        {Icon ? <Icon /> : null}
      </div>

      <h3 className="text-[#1A1A1C] text-base sm:text-lg font-semibold">
        {item.title}
      </h3>

      <p className="mt-2 text-[#303032]/80 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
})}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreByIndustry;