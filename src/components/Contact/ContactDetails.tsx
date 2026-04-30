import React from "react";
import { EmailUs, CallUs, Location,BusinessHours } from "@/public/Contact/images/svgs";

const contactData = [
  { icon: EmailUs, label: "Email", value: "info@eudrcompliancehub.com" },
  { icon: CallUs, label: "Phone", value: "+40 123 456 789" },
  { icon: Location, label: "Address", value: "Piatra Neamt, Timisoara, Romania" },
  { icon: BusinessHours, label: "Business Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
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
              <div className="">
                <Icon className="" />
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