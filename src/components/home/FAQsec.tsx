"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FaqAccordion from "../shared/FaqAccordion";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "@/src/hooks/useTranslation";
import { FaqItem } from "@/src/lib/strapi";

type Props = {
  faqs: FaqItem[];
};

export default function FAQSection({ faqs }: Props) {
  const pathname = usePathname();
  const isFaqPage = pathname === "/faq";
  const { t } = useTranslation();

  return (
    <section
      className="w-full px-6 lg:px-[240px] py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Home/images/FAQ.jpg')" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          {t("faq.title")}
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          {t("faq.subtitle")}
        </p>

        {isFaqPage && (
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-[#BF9655] text-white text-sm font-semibold tracking-wide hover:opacity-90 transition"
            >
              {t("faq.contact")}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>

      <FaqAccordion data={faqs} />
    </section>
  );
}
