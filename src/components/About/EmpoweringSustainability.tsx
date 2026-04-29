import React from "react";
import { getIconComponent } from "@/src/lib/iconMap";
import type { SustainabilityCardItem } from "@/src/lib/strapi";

type Props = {
  cards: SustainabilityCardItem[];
};

const EmpoweringSustainability = ({ cards }: Props) => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#303032]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Empowering Sustainable Trade
          </h2>
          <p className="text-white/80 text-lg leading-8">
            We are an elite consulting firm dedicated exclusively to EU Deforestation
            Regulation (EUDR) compliance.
          </p>
          <p className="text-white/80 text-lg leading-8 mt-5">
            Our deep expertise enables us to provide end-to-end compliance support, robust
            risk mitigation strategies, and unparalleled supply chain transparency. We
            simplify complex regulatory requirements into actionable, scalable systems for
            global businesses.
          </p>
        </div>

        {/* Right Cards */}
        {cards.map((item) => {
          const Icon = getIconComponent(item.iconKey);
          return (
            <div
              key={item.id}
              className="group rounded-3xl border border-white/10 p-8 h-[400px] bg-white hover:bg-[#BF9655] transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 rounded-full bg-[#BF96551A] group-hover:bg-white transition-all duration-300 flex items-center justify-center mb-8">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-semibold text-[#1E1E1E] group-hover:text-white transition-all duration-300 mb-5">
                {item.title}
              </h3>
              <p className="text-[#555555] group-hover:text-white/90 text-lg leading-8 transition-all duration-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EmpoweringSustainability;
