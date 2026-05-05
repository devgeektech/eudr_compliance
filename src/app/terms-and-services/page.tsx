export const dynamic = "force-dynamic";

import React from "react";
import { getTerms } from "@/src/lib/strapi-server";
import TermsAndServicesClient from "@/src/components/TermsAndServices/TermsAndServices";

const TermsPage = async () => {
  const terms = await getTerms();

  return <TermsAndServicesClient terms={terms} />;
};

export default TermsPage;