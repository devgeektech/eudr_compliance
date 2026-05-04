"use client";

import { EmailUs, CallUs, Location, BusinessHours } from "@/public/Contact/images/svgs";
import { useTranslation } from "@/src/hooks/useTranslation";

const ContactDetails = () => {
  const { t } = useTranslation();

  const contactData = [
    { icon: EmailUs, labelKey: "contactDetails.email", value: "info@eudrcompliancehub.com" },
    { icon: CallUs, labelKey: "contactDetails.phone", value: "+40 123 456 789" },
    { icon: Location, labelKey: "contactDetails.address", value: "Piatra Neamt, Timisoara, Romania" },
    { icon: BusinessHours, labelKey: "contactDetails.hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
  ];

  return (
    <div className="w-full text-white">
      <h2 className="text-2xl font-bold mb-6">{t("contactDetails.title")}</h2>
      <div className="flex flex-col gap-5">
        {contactData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.labelKey} className="flex items-center gap-4">
              <div><Icon className="" /></div>
              <div>
                <p className="text-sm text-white/70">{t(item.labelKey)}</p>
                <p className="text-base font-medium break-all">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
