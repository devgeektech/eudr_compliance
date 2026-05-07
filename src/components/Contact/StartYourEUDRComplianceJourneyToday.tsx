"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const StartYourEUDRComplianceJourneyToday = () => {
  const { locale } = useTranslation();

  const handleRequestInitialAssessment = () => {
    const url =
      locale === "ro"
        ? process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_RO
        : process.env.NEXT_PUBLIC_GOOGLE_FORM_URL_EN;

    if (!url) {
      console.error("Form URL is not defined in env");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const content =
    locale === "ro"
      ? {
          title: "Începeți astăzi călătoria dvs. de conformitate EUDR",
          description:
            "Nu așteptați apropierea termenelor limită. Fiți cu un pas înaintea cerințelor EUDR cu îndrumare expertă adaptată afacerii dvs.",
          button: "Solicitați evaluare inițială",
        }
      : {
          title: "Start Your EUDR Compliance Journey Today",
          description:
            "Don't wait until deadlines approach. Get ahead of EUDR requirements with expert guidance tailored to your business needs.",
          button: "Request Initial Assessment",
        };

  return (
    <LastBannerSection
      title={content.title}
      description={content.description}
      primaryButton={{
        label: content.button,
        onClick: handleRequestInitialAssessment,
      }}
    />
  );
};

export default StartYourEUDRComplianceJourneyToday;