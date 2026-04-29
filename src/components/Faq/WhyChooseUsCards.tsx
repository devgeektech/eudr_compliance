"use client";

import React, { useEffect, useState } from "react";
import InfoCard from "@/src/components/shared/InfoCard";
import { getWhyChooseUsCards } from "@/src/lib/strapi";
import { getIconComponent } from "@/src/lib/iconMap";
import type { WhyChooseUsCardItem } from "@/src/lib/strapi";

const WhyChooseUs = () => {
  const [cards, setCards] = useState<WhyChooseUsCardItem[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getWhyChooseUsCards();
      setCards(data);
    };

    load();
  }, []);

  return (
    <section className="w-full bg-[#1A1A1C] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[90%] xl:max-w-[75%]">
        <div className="mb-12 text-center">
        

     
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {
            const Icon = getIconComponent(item.iconKey);

            return (
              <InfoCard
                key={item.id}
                icon={<Icon />}
                title={item.title}
                description={item.description}
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