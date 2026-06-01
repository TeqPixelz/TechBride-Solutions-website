import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TechBridge Solutions services including Starlink, CCTV, school systems, POS systems, websites, repairs, ID cards and networking solutions."
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad bg-navy text-white">
        <div className="container-wide max-w-5xl">
          <Reveal>
            <p className="eyebrow text-green-300">Services</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">ICT solutions that keep your operations connected, secure and productive.</h1>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="What We Do"
              title="From installation to repair and ongoing support."
              copy="Choose TechBridge Solutions for practical technology services delivered with attention to quality, uptime and long-term value."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.03}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-wide rounded-lg bg-navy px-6 py-12 text-center text-white sm:px-10">
          <Reveal>
            <h2 className="text-3xl font-black sm:text-4xl">Need a custom technology solution?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">Tell us what you want to achieve and we will recommend a practical setup for your site, budget and timeline.</p>
            <Link href="/contact" className="btn-primary mt-7">
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
