import type { Metadata } from "next";
import { cache } from "react";
import React from "react";
import PrivacyPolicyPage from "@/src/components/PrivacyPolicy/PrivacyPolicy";
import {
  extractPlainTextFromBlocks,
  truncateMetaDescription,
} from "@/src/lib/seo/extract-blocks-text";
import { buildPageMetadataFromCopy, getRoString } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";
import { getPrivacyPolicies } from "@/src/lib/strapi-server";

const loadPrivacyPolicies = cache(getPrivacyPolicies);

async function getLegalDescription(): Promise<string | undefined> {
  const policies = await loadPrivacyPolicies();
  const first = policies?.[0];
  if (!first?.content?.length) return undefined;

  const plain = extractPlainTextFromBlocks(first.content);
  if (!plain) return undefined;

  return truncateMetaDescription(plain);
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = PAGE_SEO_COPY["/privacy-policy"];
  const description =
    (await getLegalDescription()) || getRoString("privacy.title");

  return buildPageMetadataFromCopy("/privacy-policy", seo.title, description);
}

const Page = async () => {
  const policies = await loadPrivacyPolicies();

  return (
    <div>
      <PrivacyPolicyPage policies={policies} />
    </div>
  );
};

export default Page;