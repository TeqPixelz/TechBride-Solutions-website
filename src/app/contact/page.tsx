import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Motion";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact TechBridge Solutions in Zvishavane, Zimbabwe for Starlink installation, CCTV systems, school technology, POS systems, repairs, networking and technical support."
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-navy text-white">
        <div className="container-wide">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-green-300">Contact Us</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Get a quote or technical support from TechBridge Solutions.</h1>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="grid gap-5">
              <div className="card p-6">
                <Phone className="text-bridge" size={26} />
                <h2 className="mt-4 text-xl font-black text-ink">Phone</h2>
                <div className="mt-3 grid gap-2">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="font-bold text-slate-700 hover:text-navy">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <Mail className="text-bridge" size={26} />
                <h2 className="mt-4 text-xl font-black text-ink">Email</h2>
                <div className="mt-3 grid gap-2">
                  {contact.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="break-words font-bold text-slate-700 hover:text-navy">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <MapPin className="text-bridge" size={26} />
                <h2 className="mt-4 text-xl font-black text-ink">Location</h2>
                <p className="mt-3 font-bold text-slate-700">{contact.location}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
