"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const GethelpwithEUDRcompliance = () => {
  const { t } = useTranslation();

  const handleAssessment = () => {
    window.open(
      process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
      "_blank"
    );
  };

  const handlePackages = () => {
    console.log("View Compliance Packages clicked");
  };

  return (
    <LastBannerSection
      title={t("eudrHelp.title")}
      description={t("eudrHelp.description")}
      primaryButton={{
        label: t("eudrHelp.primaryBtn"),
        onClick: handleAssessment,
      }}
      secondaryButton={{
        label: t("eudrHelp.secondaryBtn"),
        onClick: handlePackages,
      }}
    />
  );
};

export default GethelpwithEUDRcompliance;