"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  EUDR_LOGO,
  HeaderRightFlag1,
  HeaderRightFlag2,
} from "@/public/Home/images/svgs";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About EUDR", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industry", href: "/industry" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1E1E20] text-white relative z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[200px]">
        <div className="flex items-center justify-between h-[90px] lg:h-[120px]">
          {/* Left Logo */}
          <Link href="/" className="shrink-0">
            <EUDR_LOGO />
          </Link>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav Links */}
            <nav className="flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-[#D6C3A3] transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-[#D6C3A3] text-black px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>

            {/* Right Logos */}
            <div className="flex items-center gap-3">
              <HeaderRightFlag1 />
              <HeaderRightFlag2 />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#1E1E20] border-t border-white/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium hover:text-[#D6C3A3] transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#D6C3A3] text-black px-5 py-3 rounded-md text-sm font-semibold text-center hover:opacity-90 transition"
          >
            Contact Us
          </Link>

          <div className="flex items-center gap-3 pt-2">
            <HeaderRightFlag1 />
            <HeaderRightFlag2 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;