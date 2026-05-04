"use client";

import { riskIsRealData } from "@/src/constants";
import { useTranslation } from "@/src/hooks/useTranslation";

const RiskIsReal = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('Home/images/The_Risk_Is_Real.jpg')" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {t("risk.title")}
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            {t("risk.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {riskIsRealData.map((item, idx) => {
            const Icon = item.icon;
            const HoverIcon = item.hoverIcon;

            return (
              <div
                key={idx}
                className="group bg-[#1E2A23] hover:bg-[#BF9655] rounded-xl p-7 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-5 w-fit relative">
                  <div className="group-hover:hidden"><Icon /></div>
                  <div className="hidden group-hover:block"><HoverIcon /></div>
                </div>
                <h3 className="text-white text-xl font-medium text-left">
                  {t(`risk.card${idx}.title`)}
                </h3>
                <p className="text-gray-300 group-hover:text-white/90 text-sm leading-6 mt-3 text-left">
                  {t(`risk.card${idx}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RiskIsReal;
