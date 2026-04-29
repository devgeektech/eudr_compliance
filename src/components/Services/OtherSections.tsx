"use client";

import React from "react";
import { getStrapiMediaURL, type ServiceSectionItem } from "@/src/lib/strapi";
import { getIconComponent } from "@/src/lib/iconMap";
import FeatureSplitSection from "@/src/components/shared/FeatureSplitSection";

type Props = {
  sections: ServiceSectionItem[];
};

const OtherSections = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section) => {
        const resolvedFeatures = section.features.map((f) => ({
          icon: getIconComponent(f.iconKey),
          title: f.title,
          text: f.text,
        }));

        const imageUrl = getStrapiMediaURL(section.image?.url);

        return (
          <FeatureSplitSection
            key={section.id}
            title={section.title}
            description={section.description}
            features={resolvedFeatures}
            image={imageUrl}
            background={section.background}
            imagePosition={section.imagePosition}
          />
        );
      })}
    </>
  );
};

export default OtherSections;
