"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";

const GetEUDRCompliantwithConfidence = () => {
  const handleRequestInitialAssessment = () => {
    console.log("Request Initial Assessment clicked");
  };


  const handleViewIndustryGuides = () => {
    console.log("View Industry Guides clicked");
  };

  return (
    <LastBannerSection
      title="Get EUDR Compliant with Confidence"
      description="We help businesses across industries implement EUDR requirements efficiently. Start your compliance journey today with expert guidance."
      primaryButton={{
        label: "Request Initial Assessment",
        onClick: handleRequestInitialAssessment,
      }}
      secondaryButton={{
        label: "View Industry Guides",
        onClick: handleViewIndustryGuides,
      }}
    />
  );
};

export default GetEUDRCompliantwithConfidence;