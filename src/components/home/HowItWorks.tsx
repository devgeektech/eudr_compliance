import React from "react";
import { getIconComponent } from "@/src/lib/iconMap";
import type { HowItWorksStepItem } from "@/src/lib/strapi";

type Props = {
  items: HowItWorksStepItem[];
};

const HowItWorks = ({ items }: Props) => {
  return (
    <section className="w-full bg-[#1A1A1C] py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">How It Works</h2>
        <p className="text-white mt-3 max-w-2xl mx-auto">
          A structured 6-step process designed to simplify compliance and streamline execution.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
        {items.map((item, idx) => {
          const Icon = getIconComponent(item.iconKey);
          return (
            <div
              key={item.id}
              className="
                group relative
                bg-[#212125] hover:bg-[#BF9655]
                rounded-lg p-8 text-center
                border border-[#373737]
                cursor-pointer transition-all duration-300
              "
            >
              <div
                className="
                  absolute -top-4 right-5
                  w-10 h-10 rounded-full
                  bg-[#BF9655] group-hover:bg-white
                  flex items-center justify-center
                  text-white group-hover:text-[#BF9655]
                  font-semibold text-sm transition-all duration-300
                "
              >
                {String(idx + 1)}
              </div>
              <div className="flex justify-center mb-5">
                <Icon className="text-[#BF9655] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-white text-xl font-medium">{item.title}</h3>
              <p className="text-white group-hover:text-white/90 text-sm mt-3 leading-6">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
