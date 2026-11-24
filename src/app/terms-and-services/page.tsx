export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { cache } from "react";
import React from "react";
import { getTerms } from "@/src/lib/strapi-server";
import TermsAndServicesClient from "@/src/components/TermsAndServices/TermsAndServices";
import {
  extractPlainTextFromBlocks,
  truncateMetaDescription,
} from "@/src/lib/seo/extract-blocks-text";
import { buildPageMetadataFromCopy, getRoString } from "@/src/lib/seo/ro-metadata";
import { PAGE_SEO_COPY } from "@/src/lib/seo/page-seo-copy";

const loadTerms = cache(getTerms);

async function getLegalDescription(): Promise<string | undefined> {
  const terms = await loadTerms();
  const first = terms?.[0];
  if (!first?.content?.length) return undefined;

  const plain = extractPlainTextFromBlocks(first.content);
  if (!plain) return undefined;

  return truncateMetaDescription(plain);
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = PAGE_SEO_COPY["/terms-and-services"];
  const description =
    (await getLegalDescription()) || getRoString("terms.title");

  return buildPageMetadataFromCopy(
    "/terms-and-services",
    seo.title,
    description,
  );
}

const TermsPage = async () => {
  const terms = await loadTerms();

  return <TermsAndServicesClient terms={terms} />;
};

export default TermsPage;