"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const GetEUDRCompliantwithConfidence = () => {
  const { t } = useTranslation();

  const handleRequestInitialAssessment = () => {
    window.open(
      process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
      "_blank"
    );
  };

  const handleViewIndustryGuides = () => {
    console.log("View Industry Guides clicked");
  };

  return (
    <LastBannerSection
      title={t("cta2.title")}
      description={t("cta2.description")}
      primaryButton={{
        label: t("cta2.primary"),
        onClick: handleRequestInitialAssessment,
      }}
      secondaryButton={{
        label: t("cta2.secondary"),
        onClick: handleViewIndustryGuides,
      }}
    />
  );
};

export default GetEUDRCompliantwithConfidence;