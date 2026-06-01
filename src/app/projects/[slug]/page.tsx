import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projectDetails } from "@/data/site";

type ProjectSlug = keyof typeof projectDetails;

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug as ProjectSlug];

  if (!detail) {
    return {};
  }

  return {
    title: detail.eyebrow,
    description: detail.intro
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const detail = projectDetails[slug as ProjectSlug];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <section className="section-pad bg-navy text-white">
        <div className="container-wide">
          <Reveal className="max-w-4xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-green-300 hover:text-white">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
            <p className="eyebrow mt-8 text-green-300">{detail.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{detail.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/82">{detail.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeader eyebrow="Project Stages" title={detail.sectionTitle} />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {detail.stages.map((project, index) => (
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
            <h2 className="text-3xl font-black text-ink sm:text-4xl">{detail.cta}</h2>
            <Link href="/contact" className="btn-primary mt-7">
              {detail.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
