import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { contact, navItems, services } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-lg bg-white px-4 py-3">
            <Logo variant="footer" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Powering Businesses Through Technology with reliable ICT solutions for Zimbabwean organizations and homes.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
              { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
              { label: "Twitter", icon: Twitter, href: "https://twitter.com" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white transition hover:border-bridge hover:bg-bridge"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-bridge">Pages</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-bridge">Services</h2>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} href="/services" className="text-sm text-slate-300 hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-bridge">Contact</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            {contact.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                <Phone size={18} className="text-bridge" />
                {phone}
              </a>
            ))}
            {contact.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={18} className="text-bridge" />
                {email}
              </a>
            ))}
            <span className="flex items-center gap-3">
              <MapPin size={18} className="text-bridge" />
              {contact.location}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TechBridge Solutions. All rights reserved.
      </div>
    </footer>
  );
}
