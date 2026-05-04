"use client";

import InfoCard from "../shared/InfoCard";
import { getIconComponent } from "@/src/lib/iconMap";
import type { WhatWeOfferCardItem } from "@/src/lib/strapi";
import { useTranslation } from "@/src/hooks/useTranslation";

type Props = {
  items: WhatWeOfferCardItem[];
};

const WhatWeOffer = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#1A1A1C] py-20 px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[75%]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">{t("whatWeOffer.title")}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
            {t("whatWeOffer.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {items.map((item) => {
            const Icon = getIconComponent(item.iconKey);
            return (
              <InfoCard
                key={item.id}
                icon={<Icon />}
                title={item.title}
                description={item.description}
                className="w-full max-w-[464px] min-h-[280px]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
