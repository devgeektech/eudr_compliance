"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LastBannerSection from "../shared/LastBannerSection";
import { useTranslation } from "@/src/hooks/useTranslation";

const StillHaveQuestions = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleBookCall = () => {
    router.push("/book-a-call");
  };

  return (
    <div>
      <LastBannerSection
        title={t("cta3.title")}
        description={t("cta3.description")}
        primaryButton={{
          label: t("cta3.primary"),
          onClick: handleContact,
        }}
        secondaryButton={{
          label: t("cta3.secondary"),
          onClick: handleBookCall,
        }}
      />
    </div>
  );
};

export default StillHaveQuestions;