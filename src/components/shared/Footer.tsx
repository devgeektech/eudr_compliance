"use client";

import Link from "next/link";
import { EUDR_LOGO, Mail, Phone, Location } from "@/public/Home/images/svgs";
import { useTranslation } from "@/src/hooks/useTranslation";
import { LinkedIn } from "@/public/Home/images/svgs";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#131315] text-white pt-14 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Left Side */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <EUDR_LOGO />
          </div>
          <p className="text-white leading-7 text-sm max-w-sm">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">{t("footer.quickLinks")}</h3>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/" className="hover:text-[#BF9655] transition-all">{t("footer.home")}</Link></li>
            <li><Link href="/about" className="hover:text-[#BF9655] transition-all">{t("footer.about")}</Link></li>
            <li><Link href="/services" className="hover:text-[#BF9655] transition-all">{t("footer.services")}</Link></li>
            <li><Link href="/industry" className="hover:text-[#BF9655] transition-all">{t("footer.industries")}</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-5">{t("footer.support")}</h3>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/faq" className="hover:text-[#BF9655] transition-all">{t("footer.faq")}</Link></li>
            <li><Link href="/contact" className="hover:text-[#BF9655] transition-all">{t("footer.contactLink")}</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#BF9655] transition-all">{t("footer.privacy")}</Link></li>
            <li><Link href="/terms-and-services" className="hover:text-[#BF9655] transition-all">{t("footer.terms")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
  <h3 className="text-lg font-semibold mb-5">
    {t("footer.contact")}
  </h3>

  <div className="space-y-4 text-white text-sm">
    
    <div className="flex items-start gap-3">
      <Mail className="text-[#BF9655] mt-0.5 shrink-0" />
      <span className="break-words">contact@eudrcompliance.com</span>
    </div>

    <div className="flex items-start gap-3">
      <Phone className="text-[#BF9655] mt-0.5 shrink-0" />
      <span>+40 752 212 832</span>
    </div>

    <div className="flex items-start gap-3">
      <Location className="text-[#BF9655] mt-0.5 shrink-0" />
      <span>Orăștie, Hunedoara, Romania</span>
    </div>
  </div>

  {/* LinkedIn */}
 <div className="mt-6 flex justify-center">
  <a
    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center rounded-full hover:opacity-80 transition"
  >
    <LinkedIn className="text-[#BF9655]" />
  </a>
</div>
</div>

      </div>

      {/* Bottom */}
   <div className="border-t border-white/10 mt-12 pt-6">
  <div className="w-full mx-auto flex  sm:flex-row items-center justify-center  text-sm text-white">
    
    {/* Left */}
    <p className="text-center">
      {t("footer.copyright")}
    </p>

    {/* Right */}
    {/* <a
      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition"
    >
      <LinkedIn className="text-[#BF9655]" />
    </a> */}

  </div>
</div>
    </footer>
  );
};

export default Footer;
