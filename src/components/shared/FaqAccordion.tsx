// src/components/ui/Accordion.tsx

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  data: AccordionItem[];
};

const FaqAccordion = ({ data = [] }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border border-white/20 rounded-xl overflow-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className={`
            bg-[#373737]
            text-white
            ${index !== data.length - 1 ? "border-b border-white/20" : ""}
          `}
        >
          {/* Question */}
          <button
            onClick={() => toggle(index)}
            className="
              w-full
              px-6
              py-5
              flex
              items-center
              justify-between
              text-left
            "
          >
            <span className="text-base md:text-lg font-medium pr-4">
              {item.question}
            </span>

            <ChevronDown
              className={`
                w-5 h-5 shrink-0 transition-transform duration-300
                ${openIndex === index ? "rotate-180" : ""}
              `}
            />
          </button>

          {/* Answer */}
          <div
            className={`
              overflow-hidden transition-all duration-300
              ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="px-6 pb-5">
              <p className="text-sm md:text-base text-white/80 leading-7">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;