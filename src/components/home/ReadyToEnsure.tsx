"use client";

import Image from "next/image";
import Link from "next/link";
import BgImage from "@/public/Home/images/ReadyToEnsureSec.jpg";
import { useTranslation } from "@/src/hooks/useTranslation";

const ReadyToEnsure = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
      <Image src={BgImage} alt="Ready To Ensure" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-[240px] py-20 text-white flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          {t("ready.title")}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
          {t("ready.subtitle")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-6 cursor-pointer  py-3 rounded-lg bg-[#BF9655] text-white font-medium hover:opacity-90 transition">
            {t("ready.bookCall")}
          </button>
          <Link href="/contact">
            <button className="px-6  cursor-pointer py-3 rounded-lg bg-white text-[#1E1E20] font-medium hover:bg-gray-100 transition">
              {t("ready.contact")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToEnsure;
