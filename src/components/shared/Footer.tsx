import React from "react";
import {
  EUDR_LOGO,
  Mail,
  Phone,
  Location,
} from "@/public/Home/images/svgs";

const Footer = () => {
  return (
   <footer className="w-full bg-[#131315] text-white pt-14 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Side */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <EUDR_LOGO />
          </div>

          <p className="text-white leading-7 text-sm max-w-sm">
            Helping businesses navigate EUDR compliance with confidence.
            From risk assessments to implementation, we simplify the
            journey toward sustainable trade.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-white text-sm">
            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                About EUDR
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Industries
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Support</h3>

          <ul className="space-y-3 text-white text-sm">
            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#BF9655] transition-all">
                Terms & Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact</h3>

          <div className="space-y-4 text-white text-sm">
            <div className="flex items-start gap-3">
              <Mail className=" text-[#BF9655] mt-0.5" />
              <span>info@eudrcompliancehub.com</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className=" text-[#BF9655] mt-0.5" />
              <span>+40 123 456 789</span>
            </div>

            <div className="flex items-start gap-3">
              <Location className=" text-[#BF9655] mt-0.5" />
              <span>Piatra Neamt, Timisoara, Romania</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 EUDR Compliance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;