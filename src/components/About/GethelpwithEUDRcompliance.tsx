"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const GethelpwithEUDRcompliance = () => {
  const { t, locale } = useTranslation();

  const handleAssessment = () => {
    const url =
      locale === "ro"
        ? process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_RO
        : process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_EN;

    window.open(url, "_blank");
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