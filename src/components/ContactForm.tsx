"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `Service: ${formData.get("service")}`,
      "",
      `${formData.get("message")}`
    ].join("\n");
    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent("Website quote request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input required name="name" className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none ring-bridge/20 transition focus:border-bridge focus:ring-4" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone
          <input required name="phone" className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none ring-bridge/20 transition focus:border-bridge focus:ring-4" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
        Email
        <input type="email" name="email" className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none ring-bridge/20 transition focus:border-bridge focus:ring-4" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
        Service Needed
        <select name="service" className="rounded-md border border-slate-200 px-4 py-3 font-normal outline-none ring-bridge/20 transition focus:border-bridge focus:ring-4">
          <option>Starlink Installation</option>
          <option>CCTV Systems</option>
          <option>School Technology</option>
          <option>POS Systems</option>
          <option>Website Development</option>
          <option>Repairs & Support</option>
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea required name="message" rows={5} className="resize-none rounded-md border border-slate-200 px-4 py-3 font-normal outline-none ring-bridge/20 transition focus:border-bridge focus:ring-4" />
      </label>
      {sent ? <p className="mt-5 rounded-md bg-green-50 px-4 py-3 text-sm font-bold text-green-700">Thank you. Your email app should open with the message prepared.</p> : null}
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Message
        <Send size={18} />
      </button>
    </form>
  );
}
