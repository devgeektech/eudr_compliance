"use client";

import React from "react";
import FeatureSplitSection from "@/src/components/shared/FeatureSplitSection";
import MiniCTASection from "./MiniCTASection";
import { getIconComponent } from "@/src/lib/iconMap";
import {
  getStrapiMediaURL,
  type IndustrySectionItem,
} from "@/src/lib/strapi";

type Props = {
  sections: IndustrySectionItem[];
};

const IndustryDetailSections = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section) => {
        const resolvedFeatures = section.features.map((item) => ({
          icon: getIconComponent(item.iconKey),
          text: (
            <>
              <strong>{item.title}</strong> {item.text}
            </>
          ),
        }));

        return (
          <React.Fragment key={section.id}>
            <FeatureSplitSection
              pageName={section.pageName}
              title={section.title}
              description={section.description}
              features={resolvedFeatures}
              image={getStrapiMediaURL(section.image?.url)}
              background={section.background}
              imagePosition={section.imagePosition}
              iconBoxBg={section.iconBoxBg}
            />

            {section.showMiniCTAAfter && <MiniCTASection />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default IndustryDetailSections;