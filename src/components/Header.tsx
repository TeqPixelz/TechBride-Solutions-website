"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, navItems } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <nav className="container-wide flex min-h-20 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-navy text-white" : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm font-bold text-navy">
            <Phone size={18} className="text-bridge" />
            {contact.phones[0]}
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle mobile navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-bold ${
                  pathname === item.href ? "bg-navy text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
