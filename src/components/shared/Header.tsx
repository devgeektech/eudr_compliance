"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EUDR_LOGO } from "@/public/Home/images/svgs";
import HeaderLanguageSelector from "./HeaderLanguageSelector";
import { useTranslation } from "@/src/hooks/useTranslation";

const NAV_KEYS = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.industry", href: "/industry" },
  { key: "nav.faq", href: "/faq" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  return (
    <header className="w-full bg-[#1E1E20] text-white sticky top-0 z-50">
      <div className="max-w-[1440px] py-5 sm:py-5 md:py-2 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="h-[78px] sm:h-[85px] lg:h-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="w-[120px] sm:w-[140px] lg:w-auto">
              <EUDR_LOGO />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <nav className="flex items-center gap-5 xl:gap-7">
              {NAV_KEYS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-sm xl:text-[15px] font-medium transition ${
                      active ? "text-[#D6C3A3]" : "text-white hover:text-[#D6C3A3]"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="bg-[#D6C3A3] text-black px-5 xl:px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition"
            >
              {t("nav.contact")}
            </Link>

            <HeaderLanguageSelector />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`lg:hidden fixed left-0 right-0 top-[78px] sm:top-[85px] bg-[#1E1E20] border-t border-white/10 transition-all duration-300 overflow-visible ${
    menuOpen
      ? "max-h-screen opacity-100 pointer-events-auto"
      : "max-h-0 opacity-0 pointer-events-none"
  }`}
>
        <div className="px-5 sm:px-6 py-6 flex flex-col gap-5">
          {NAV_KEYS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition ${
                  active ? "text-[#D6C3A3]" : "text-white hover:text-[#D6C3A3]"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#D6C3A3] text-black py-3 rounded-md text-sm font-semibold text-center hover:opacity-90 transition"
          >
            {t("nav.contact")}
          </Link>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <HeaderLanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
