export const dynamic = "force-dynamic";

import React from "react";
import { getTerms } from "@/src/lib/strapi";
import { renderBlocks } from "@/src/lib/helpers/renderBlocks";

const TermsAndServicesPage = async () => {
  console.log("TERMS PAGE RENDERED");

  const terms = await getTerms();

  if (!terms.length) {
    return <div className="p-10 text-center">No data found</div>;
  }

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#303032]">
      <div className="max-w-4xl mx-auto text-[#ffff]">

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Terms & Services
        </h1>

        {/* Sections */}
        {terms.map((item) => (
          <div key={item.id} className="mb-10">
            <h2 className="text-xl text-[#BF9655] md:text-2xl font-semibold mb-4">
              {item.title}
            </h2>

            {renderBlocks(item.content)}
          </div>
        ))}

      </div>
    </section>
  );
};

export default TermsAndServicesPage;