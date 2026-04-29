"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "Compliance Assessment",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full rounded-[24px] bg-[#303032] p-6 sm:p-8 lg:p-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Send Us a Message
        </h2>

        <p className="mt-3 max-w-[650px] text-sm leading-6 text-white/75 sm:text-base">
          Fill out the form below and our team will get back to you promptly.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Company */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={form.company}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Subject
            </label>

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white outline-none focus:border-[#BF9655]"
            >
              <option value="Compliance Assessment">
                Compliance Assessment
              </option>
              <option value="Consultation">Consultation</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Message
          </label>

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 py-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1 h-5 w-5 rounded border-white/20"
          />

          <p className="text-sm leading-6 text-white/75">
            I agree to the privacy policy and consent to being contacted
            regarding my inquiry.
          </p>
        </div>

        {/* Button */}
       <button
  type="submit"
  className="w-full rounded-xl bg-[#BF9655] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
>
  Submit Inquiry
</button>
      </form>
    </section>
  );
};

export default ContactForm;