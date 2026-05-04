"use client";

import React, { useState } from "react";
import { submitContactForm } from "@/src/lib/strapi";
import { useTranslation } from "@/src/hooks/useTranslation";

const ContactForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "Compliance Assessment",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, company, subject, message, agree } = form;
    setStatus({ type: "", message: "" });

    if (!fullName || !email || !company || !subject || !message) {
      setStatus({ type: "error", message: t("contactForm.errorFields") });
      return;
    }
    if (!agree) {
      setStatus({ type: "error", message: t("contactForm.errorPolicy") });
      return;
    }

    try {
      await submitContactForm({ fullName, email, company, subject, message });
      setStatus({ type: "success", message: t("contactForm.successMsg") });
      setForm({ fullName: "", email: "", company: "", subject: "Compliance Assessment", message: "", agree: false });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: t("contactForm.errorGeneral") });
    }
    setTimeout(() => setStatus({ type: "", message: "" }), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="w-full rounded-[24px] bg-[#303032] p-6 sm:p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {t("contactForm.title")}
        </h2>
        <p className="mt-3 max-w-[650px] text-sm leading-6 text-white/75 sm:text-base">
          {t("contactForm.subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t("contactForm.fullName")}</label>
            <input
              type="text"
              name="fullName"
              placeholder={t("contactForm.fullNamePlaceholder")}
              required
              value={form.fullName}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t("contactForm.email")}</label>
            <input
              required
              type="email"
              name="email"
              placeholder={t("contactForm.emailPlaceholder")}
              value={form.email}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t("contactForm.company")}</label>
            <input
              type="text"
              name="company"
              placeholder={t("contactForm.companyPlaceholder")}
              required
              value={form.company}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t("contactForm.subject")}</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 text-white outline-none focus:border-[#BF9655]"
            >
              <option className="text-[#BF9655]" value="Compliance Assessment">{t("contactForm.subject1")}</option>
              <option className="text-[#BF9655]" value="Consultation">{t("contactForm.subject2")}</option>
              <option className="text-[#BF9655]" value="General Inquiry">{t("contactForm.subject3")}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">{t("contactForm.message")}</label>
          <textarea
            name="message"
            rows={6}
            placeholder={t("contactForm.messagePlaceholder")}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#F2F3FF14] px-4 py-4 text-white placeholder:text-white/45 outline-none focus:border-[#BF9655]"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1 h-5 w-5 rounded border-white/20"
          />
          <p className="text-sm leading-6 text-white/75">{t("contactForm.agree")}</p>
        </div>

        <button
          type="submit"
          disabled={!form.agree}
          className={`w-full rounded-xl px-8 py-4 text-sm font-semibold text-white transition ${
            form.agree ? "bg-[#BF9655] hover:opacity-90" : "bg-[#BF9655]/40 cursor-not-allowed"
          }`}
        >
          {t("contactForm.submit")}
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
