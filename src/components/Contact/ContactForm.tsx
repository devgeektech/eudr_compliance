"use client";

import React, { useState } from "react";
import { submitContactForm } from "@/src/lib/strapi"; // adjust path

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "Compliance Assessment",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState<{
  type: "success" | "error" | "";
  message: string;
}>({
  type: "",
  message: "",
});


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { fullName, email, company, subject, message, agree } = form;

  // Reset status
  setStatus({ type: "", message: "" });

  if (!fullName || !email || !company || !subject || !message) {
    setStatus({
      type: "error",
      message: "Please fill in all fields.",
    });
    return;
  }

  if (!agree) {
    setStatus({
      type: "error",
      message: "Please accept the privacy policy.",
    });
    return;
  }

  try {
    await submitContactForm({
      fullName,
      email,
      company,
      subject,
      message,
    });

    setStatus({
      type: "success",
      message: "Your message has been sent successfully!",
    });

    setForm({
      fullName: "",
      email: "",
      company: "",
      subject: "Compliance Assessment",
      message: "",
      agree: false,
    });
  } catch (err) {
    console.error(err);

    setStatus({
      type: "error",
      message: "Something went wrong. Please try again.",
    });
  }
  setTimeout(() => {
  setStatus({ type: "", message: "" });
}, 3000);
};
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



  return (
      <div className="w-full rounded-[24px] bg-[#303032] p-6 sm:p-8 lg:p-10">
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
              required
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
            required
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
              required
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
              <option  className="text-[#BF9655]" value="Compliance Assessment">
                Compliance Assessment
              </option>
              <option className="text-[#BF9655]" value="Consultation">Consultation</option>
              <option  className="text-[#BF9655]" value="General Inquiry">General Inquiry</option>
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
            required
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
  disabled={!form.agree}
  className={`w-full rounded-xl px-8 py-4 text-sm font-semibold text-white transition
    ${
      form.agree
        ? "bg-[#BF9655] hover:opacity-90"
        : "bg-[#BF9655]/40 cursor-not-allowed"
    }`}
>
  Submit Inquiry
</button>

{status.message && (
  <div
    className={`mb-6 text-sm font-medium px-4 py-3 rounded-lg ${
      status.type === "success"
        ? "bg-green-500/10 text-green-400 border border-green-500/30"
        : "bg-red-500/10 text-red-400 border border-red-500/30"
    }`}
  >
    {status.message}
  </div>
)}
      </form>
    </div>
  );
};

export default ContactForm;