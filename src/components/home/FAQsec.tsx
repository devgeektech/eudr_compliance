"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FaqAccordion from "../shared/FaqAccordion";
import { ArrowRightIcon } from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQSection() {
  const pathname = usePathname();
  const isFaqPage = pathname === "/faq";

  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
  const fetchFaqs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faqs`);
      const json = await res.json();

      console.log("FAQ RESPONSE:", json);

      const data = json?.data ?? json ?? [];

      setFaqs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("FAQ fetch error:", error);
      setFaqs([]);
    } finally {
      // ✅ THIS is the key fix
      setLoading(false);
    }
  };

  fetchFaqs();
}, []);

  return (
    <section
      className="
        w-full
        px-6
        lg:px-[240px]
        py-20
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/Home/images/FAQ.jpg')",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Frequently Asked Questions
        </h2>

        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Find quick answers to common questions about EUDR compliance,
          implementation, and business readiness.
        </p>

        {/* Only on /faq */}
        {isFaqPage && (
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-[#BF9655] text-white text-sm font-semibold tracking-wide hover:opacity-90 transition"
            >
              Contact Us
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>

      {/* Accordion */}
      {loading ? (
        <p className="text-white text-center">Loading FAQs...</p>
      ) : (
        <FaqAccordion data={faqs} />
      )}
    </section>
  );
}