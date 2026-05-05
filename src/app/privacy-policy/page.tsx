import React from "react";
import PrivacyPolicyPage from "@/src/components/PrivacyPolicy/PrivacyPolicy";
import { getPrivacyPolicies } from "@/src/lib/strapi-server";

const Page = async () => {
  const policies = await getPrivacyPolicies();

  return (
    <div>
      <PrivacyPolicyPage policies={policies} />
    </div>
  );
};

export default Page;