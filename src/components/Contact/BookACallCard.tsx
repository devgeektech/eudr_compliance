import React from "react";

import { Calender, Schedule } from "@/public/Contact/images/svgs";

const BookACallCard = () => {
  return (
    <div className="bg-[#303032] text-white rounded-xl p-6 w-full">
      {/* Icon (top-left) */}
      <div className="flex justify-start mb-4">
        <Calender  />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">Book a Call</h3>

      {/* Description */}
      <p className="text-sm text-white/80 mb-4">
        Schedule a consultation with our team at your convenience.
      </p>

      {/* Features */}
      <ul className="space-y-2 text-sm text-white/90">
        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>Quick response within 24 hours</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>30-minute free consultation</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-white mt-[2px]">✓</span>
          <span>Expert guidance tailored to your needs</span>
        </li>
      </ul>

      {/* Button */}
      <button className="mt-6 w-full bg-[#F0F3F1] text-[#BF9655] flex items-center justify-center gap-2 py-3 rounded-lg font-medium hover:opacity-90 transition">
        <Schedule/>
        Schedule Now
      </button>
    </div>
  );
};

export default BookACallCard;