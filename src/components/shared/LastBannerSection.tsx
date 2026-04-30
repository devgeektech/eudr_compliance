
"use client";

import React from "react";
import Image from "next/image";

import BannerBg from "@/public/About/images/lastSectionBanner.png";

type ButtonItem = {
  label: string;
  onClick?: () => void;
  href?: string;
};

type LastBannerSectionProps = {
  title: string;
  description: string;
  primaryButton: ButtonItem;
  secondaryButton?: ButtonItem;
};

const LastBannerSection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
}: LastBannerSectionProps) => {
  const renderButton = (
    button: ButtonItem,
    bgClass: string,
    textClass: string
  ) => {
    if (button.href) {
      return (
        <a
          href={button.href}
          className={`px-6 md:px-8 h-12 rounded-full flex items-center justify-center font-medium text-sm md:text-base transition-all duration-300 hover:scale-[1.03] ${bgClass} ${textClass}`}
        >
          {button.label}
        </a>
      );
    }

    return (
      <button
        onClick={button.onClick}
        className={`px-6 md:px-8 h-12 rounded-full flex items-center justify-center font-medium text-sm md:text-base transition-all duration-300 hover:scale-[1.03] ${bgClass} ${textClass}`}
      >
        {button.label}
      </button>
    );
  };

  return (
    <section className="relative w-full min-h-[430px] md:min-h-[520px] overflow-hidden">
      {/* Background */}
      <Image
        src={BannerBg}
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#7D6135BA]" />

      {/* Content */}
      <div className="relative z-10 min-h-[430px] md:min-h-[520px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight max-w-4xl">
          {title}
        </h2>

        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mt-4 md:mt-5 max-w-2xl">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          {renderButton(primaryButton, "bg-[#1E2A23]", "text-white")}

          {secondaryButton &&
  renderButton(secondaryButton, "bg-[#D6C3A3]", "text-[#1A1A1C]")}
        </div>
      </div>
    </section>
  );
};

export default LastBannerSection;