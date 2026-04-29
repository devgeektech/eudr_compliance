"use client";

import React from "react";
import LastBannerSection from "@/src/components/shared/LastBannerSection";

const GethelpwithEUDRcompliance = () => {
  const handleAssessment = () => {
    console.log("Request Initial Assessment clicked");
  };

  const handlePackages = () => {
    console.log("View Compliance Packages clicked");
  };

  return (
    <LastBannerSection
      title="Get Help with EUDR Compliance"
      description="Don't navigate the complexity alone. Our consultants and digital audit tools ensure your supply chain is ready for the future."
      primaryButton={{
        label: "Request Initial Assessment",
        onClick: handleAssessment,
      }}
      secondaryButton={{
        label: "View Compliance Packages",
        onClick: handlePackages,
      }}
    />
  );
};

export default GethelpwithEUDRcompliance;