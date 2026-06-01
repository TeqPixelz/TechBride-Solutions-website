import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { sectors, whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TechBridge Solutions, a Zimbabwean ICT company providing technology solutions for businesses, schools, healthcare facilities, government institutions and homes."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad bg-navy text-white">
        <div className="container-wide">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-green-300">About Us</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Technology services built for Zimbabwean businesses and communities.</h1>
            <p className="mt-6 text-lg leading-9 text-white/82">
              TechBridge Solutions is a Zimbabwean technology company providing innovative ICT solutions for businesses, schools, healthcare facilities, government institutions and homes.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <CheckCircle2 size={32} className="text-bridge" />
              <h2 className="mt-5 text-2xl font-black text-ink">Mission</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">To empower businesses and communities through reliable technology solutions.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full p-8">
              <CheckCircle2 size={32} className="text-bridge" />
              <h2 className="mt-5 text-2xl font-black text-ink">Vision</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">To become Zimbabwe&apos;s leading technology solutions provider.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Who We Serve" title="Dependable ICT support across essential sectors." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Reveal key={sector.title} delay={index * 0.04}>
                <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-navy text-white">
                    <sector.icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-ink">{sector.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Our Promise" title="Professional, affordable and responsive from first call to final support." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-lg bg-slate-50 p-5 text-center">
                <item.icon className="mx-auto text-bridge" size={28} />
                <h3 className="mt-4 text-sm font-black text-ink">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
