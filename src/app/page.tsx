import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { projects, services, testimonials, whyChooseUs } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-navy">
        <Image src="/images/techbridge-hero.png" alt="TechBridge Solutions technology services" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,46,122,0.96)_0%,rgba(0,46,122,0.82)_42%,rgba(0,46,122,0.25)_100%)]" />
        <div className="container-wide relative z-10 flex min-h-[calc(100svh-5rem)] items-center px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-green-300">TechBridge Solutions</p>
            <h1 className="heading-xl mt-5">Powering Businesses Through Technology</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Providing Starlink Internet Solutions, CCTV Systems, School Technology, POS Systems, Website Development, ICT Repairs, Networking Solutions and Technical Support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
                <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Complete ICT Solutions Under One Trusted Team"
              copy="From internet connectivity and security systems to repairs, websites, and business automation, TechBridge Solutions delivers practical technology built around your needs."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.03}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="heading-lg mt-3">Reliable technology partner for businesses, schools, and homes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine professional installation, responsive support, and practical pricing to keep your systems working when they matter most.
            </p>
            <Link href="/about" className="btn-primary mt-7">
              Learn More
              <ArrowRight size={18} />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-bridge text-white">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-black text-ink">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Projects" title="Technology Work That Solves Real Problems" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-green-300">About</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Zimbabwean ICT solutions for modern organizations.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-9 text-white/82">
              TechBridge Solutions is a Zimbabwean technology company providing innovative ICT solutions for businesses, schools, healthcare facilities, government institutions and homes.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["To empower businesses and communities through reliable technology solutions.", "To become Zimbabwe's leading technology solutions provider."].map((text, index) => (
                <div key={text} className="rounded-lg border border-white/15 bg-white/8 p-5">
                  <CheckCircle2 className="text-bridge" size={24} />
                  <h3 className="mt-4 font-black">{index === 0 ? "Mission" : "Vision"}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Testimonials" title="Trusted For Practical, Responsive Support" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.05}>
                <figure className="card h-full p-6">
                  <blockquote className="text-base leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</blockquote>
                  <figcaption className="mt-5 border-t border-slate-200 pt-4">
                    <p className="font-black text-ink">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
