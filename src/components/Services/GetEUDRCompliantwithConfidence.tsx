"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const GetEUDRCompliantwithConfidence = () => {
  const { t, locale } = useTranslation();

  const handleRequestInitialAssessment = () => {
    const url =
      locale === "ro"
        ? process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_RO
        : process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_EN;

    if (!url) {
      console.error("Google Form URL is not defined in env");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
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