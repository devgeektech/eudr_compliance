import React from "react";
import { getPrivacyPolicies } from "@/src/lib/strapi-server";
import { renderBlocks } from "@/src/lib/helpers/renderBlocks";


console.log("PAGE RENDERED");
const PrivacyPolicyPage = async () => {
    console.log("PAGE RENDERED");
  const policies = await getPrivacyPolicies();

  if (!policies.length) {
    return <div className="p-10 text-center">No data found</div>;
  }

  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#303032] ">
      <div className="max-w-4xl mx-auto text-[#ffff]">

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Privacy & Policy
        </h1>

        {/* Sections from Strapi */}
        {policies.map((item) => (
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

export default PrivacyPolicyPage;