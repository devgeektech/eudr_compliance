"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";

const StartYourEUDRComplianceJourneyToday = () => {
  const handleRequestInitialAssessment = () => {
    console.log("Request Initial Assessment clicked");
  };

  return (
    <LastBannerSection
      title="Start Your EUDR Compliance Journey Today"
      description="Don't wait until deadlines approach. Get ahead of EUDR requirements with expert guidance tailored to your business needs."
      primaryButton={{
        label: "Request Initial Assessment",
        onClick: handleRequestInitialAssessment,
      }}
    />
  );
};

export default StartYourEUDRComplianceJourneyToday;