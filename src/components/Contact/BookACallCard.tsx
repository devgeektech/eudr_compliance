"use client";

import { Calender, Schedule } from "@/public/Contact/images/svgs";
import { useTranslation } from "@/src/hooks/useTranslation";

const BookACallCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#303032] text-white rounded-xl p-6 w-full">
      <div className="flex justify-start mb-4">
        <Calender />
      </div>
      <h3 className="text-xl font-semibold mb-2">{t("bookCall.title")}</h3>
      <p className="text-sm text-white/80 mb-4">{t("bookCall.subtitle")}</p>

      <ul className="space-y-2 text-sm text-white/90">
        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>{t("bookCall.feature1")}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>{t("bookCall.feature2")}</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>{t("bookCall.feature3")}</span>
        </li>
      </ul>

      <button className="mt-6 w-full cursor-pointer bg-[#F0F3F1] text-[#BF9655] flex items-center justify-center gap-2 py-3 rounded-lg font-medium hover:opacity-90 transition">
        <Schedule />
        {t("bookCall.button")}
      </button>
    </div>
  );
};

export default BookACallCard;
