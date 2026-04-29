import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import BookACallCard from "./BookACallCard";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#1A1A1C] py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 px-6">

        {/* LEFT - FORM */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* RIGHT - DETAILS + BOOK CALL */}
        <div className="w-full lg:w-[420px] flex flex-col gap-6">

          {/* Contact Details Card */}
          <div className="bg-[#303032] rounded-xl p-6">
            <ContactDetails />
          </div>

          {/* Book a Call */}
          <BookACallCard />

        </div>

      </div>
    </section>
  );
};

export default ContactSection;