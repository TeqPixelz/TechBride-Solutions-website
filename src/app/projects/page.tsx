import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "View TechBridge Solutions project categories including Starlink installations, CCTV installations, school siren systems, POS systems, website projects and ID card production."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-pad bg-navy text-white">
        <div className="container-wide">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-green-300">Projects</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Practical technology deployments for real working environments.</h1>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Our Work" title="Focused projects across connectivity, security, systems and digital services." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-3xl font-black text-ink sm:text-4xl">Ready to start your next project?</h2>
            <Link href="/contact" className="btn-primary mt-7">
              Talk to TechBridge
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
