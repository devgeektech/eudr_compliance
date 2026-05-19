"use client";
import React from "react";
import Image from "next/image";
import { getStrapiMediaURL, type CompaniesMustDoCardItem } from "@/src/lib/strapi";
import { getIconComponent } from "@/src/lib/iconMap";
import { useTranslation } from "@/src/hooks/useTranslation";

type Props = {
  items: CompaniesMustDoCardItem[];
};

const CompaniesMustDo = ({ items }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#303032]">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5"> {t("companiesMustDo.title")}</h2>
          <p className="text-white text-lg md:text-xl leading-8">
            {t("companiesMustDo.subtitle")}
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {items.map((item) => {
    const Icon = getIconComponent(item.iconKey);
    const imageUrl = getStrapiMediaURL(item.image?.url);

    return (
   <div
  key={item.id}
  className="relative w-full aspect-[268/274] rounded-3xl overflow-hidden group"
>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={item.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-all duration-500"
          />
        )}

        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-all duration-300" />

        <div className="relative z-10 h-full flex flex-col justify-between p-6">
  {/* Top (Icon) */}
  <div>
    <div className="w-16 h-16 flex items-center justify-center">
      <Icon />
    </div>
  </div>

  {/* Bottom (Text) */}
  <div>
    <h3 className="text-white text-lg lg:text-xl font-semibold mb-2 leading-tight">
  {item.title}
</h3>
    <p className="text-white/90 text-sm leading-6">
      {item.description}
    </p>
  </div>
</div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default CompaniesMustDo;
