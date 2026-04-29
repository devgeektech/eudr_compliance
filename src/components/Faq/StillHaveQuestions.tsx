
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LastBannerSection from "../shared/LastBannerSection";

const StillHaveQuestions = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleBookCall = () => {
    router.push("/book-a-call");
  };

  return (
    <div>
      <LastBannerSection
        title="Still have questions?"
        description="Can't find the answer you're looking for? Our team of regulatory experts is ready to help you navigate the complexities of EUDR."
        primaryButton={{
          label: "Contact Us",
          onClick: handleContact,
        }}
        secondaryButton={{
          label: "Book a Call",
          onClick: handleBookCall,
        }}
      />
    </div>
  );
};

export default StillHaveQuestions;