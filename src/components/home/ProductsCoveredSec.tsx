"use client";

import Image from "next/image";
import SectionBg from "@/public/Home/images/Products Covered Section.png";
import { getStrapiMediaURL, type ProductCoveredItem } from "@/src/lib/strapi";
import { useTranslation } from "@/src/hooks/useTranslation";

type Props = {
  items: ProductCoveredItem[];
};

const ProductsCoveredSec = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden">
      <Image src={SectionBg} alt="Products Covered Section" fill priority unoptimized className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[140px] 2xl:px-[220px] py-14 sm:py-16 md:py-20">
        <h2 className="text-center text-white font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {t("products.title")}
        </h2>
        {/* <p className="text-center text-white/90 mt-4 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
          {t("products.subtitle")}
        </p> */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-8">
          {items.map((item) => {
            const imageUrl = getStrapiMediaURL(item.image?.url);
            return (
              <div key={item.id} className="flex flex-col items-center text-center">
                <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] flex items-center justify-center p-2 sm:p-3 md:p-4">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={item.name}
                      width={170}
                      height={170}
                      unoptimized
                      className="object-contain w-full h-full"
                    />
                  ) : null}
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium text-white leading-snug max-w-[140px] sm:max-w-[160px]">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsCoveredSec;
