"use client";

import Image from "next/image";
import BgImage from "@/public/Home/images/WhoWeHelp.jpg";
import { whoWeHelpCards } from "@/src/constants";
import { useTranslation } from "@/src/hooks/useTranslation";

const titleKeyMap: Record<string, string> = {
  "Exporters": "whoWeHelp.exporters",
  "Importers": "whoWeHelp.importers",
  "Traders": "whoWeHelp.traders",
  "Distributors": "whoWeHelp.distributors",
  "Manufacturers": "whoWeHelp.manufacturers",
  "Wood Furniture": "whoWeHelp.woodFurniture",
};

const WhoWeHelp = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden py-20">
      <Image src={BgImage} alt="Who We Help" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[140px] xl:px-[240px] text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          {t("whoWeHelp.title")}
        </h2>
        <p className="mt-4 text-center text-base md:text-lg text-white/90 max-w-3xl mx-auto">
          {t("whoWeHelp.subtitle")}
        </p>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:justify-center items-center">
          {whoWeHelpCards.map((item) => {
            const Logo = item.logo;
            return (
              <div
                key={item.title}
                className="w-full max-w-[220px] min-h-[200px] bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 shadow-md"
              >
                <div className="mb-4 flex items-center justify-center">
                  <Logo className="text-[#BF9655]" />
                </div>
                <p className="text-[#1E1E20] font-medium text-base">
                  {t(titleKeyMap[item.title] ?? item.title)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
