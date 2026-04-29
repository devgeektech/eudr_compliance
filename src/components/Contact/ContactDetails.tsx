import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const contactData = [
  { icon: Mail, label: "Email", value: "info@eudrcompliancehub.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Address", value: "Haryana, India" },
  { icon: Globe, label: "Website", value: "www.eudrcompliancehub.com" },
];

const ContactDetails = () => {
  return (
    <div className="w-full text-white ">
      <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

      <div className="flex flex-col gap-5">
        {contactData.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#BF9655] rounded-lg flex-shrink-0">
                <Icon className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className="text-sm text-white/70">{item.label}</p>
                <p className="text-base font-medium break-all">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;