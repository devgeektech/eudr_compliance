// src/components/landing page/ReadyToEnsure.tsx

import React from "react";
import Image from "next/image";

import BgImage from "@/public/Home/images/ReadyToEnsureSec.jpg";
import Link from "next/link";

const ReadyToEnsure = () => {
  return (
    <section className="relative w-full min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background */}
      <Image
        src={BgImage}
        alt="Ready To Ensure"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-[240px] py-20 text-white flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to ensure your EUDR <br/>Compliance?
        </h2>

        {/* Text */}
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
          Book a free assessment today and take the first step toward risk-free operations.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          
          <button className="px-6 py-3 rounded-lg bg-[#BF9655] text-white font-medium hover:opacity-90 transition">
            Book a Call
          </button>
        <Link href="/contact">
          <button className="px-6 py-3 rounded-lg bg-white text-[#1E1E20] font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ReadyToEnsure;