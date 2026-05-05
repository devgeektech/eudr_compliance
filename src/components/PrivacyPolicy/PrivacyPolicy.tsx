"use client";

import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";
import { renderBlocks } from "@/src/lib/helpers/renderBlocks";
import { Block } from "@/src/lib/helpers/renderBlocks";

/* ✅ Define types */


type PrivacyPolicy = {
  id: number;
  title: string;
  content: Block[];
};

interface Props {
  policies: PrivacyPolicy[];
}

/* ✅ Use types in component */
const PrivacyPolicyPage: React.FC<Props> = ({ policies }) => {
  const { t } = useTranslation();

  if (!policies?.length) {
    return <div className="p-10 text-center">No data found</div>;
  }

  return (
    <section className="w-full py-16 px-4 bg-[#303032]">
      <div className="max-w-4xl mx-auto text-white">

        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          {t("privacy.title")}
        </h1>

        {policies.map((item: PrivacyPolicy) => (
          <div key={item.id} className="mb-10">
            <h2 className="text-xl text-[#BF9655] mb-4">
              {item.title}
            </h2>

            {renderBlocks(item.content)}
          </div>
        ))}

      </div>
    </section>
  );
};

export default PrivacyPolicyPage;