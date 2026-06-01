import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  category?: string;
  href?: string;
};

export function ProjectCard({ title, description, icon: Icon, image, category, href }: ProjectCardProps) {
  const card = (
    <article className="card group h-full overflow-hidden">
      <div className="relative min-h-44 overflow-hidden bg-[linear-gradient(135deg,#002E7A_0%,#0B4E99_55%,#1FAF38_100%)]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex min-h-44 items-end p-6 text-white">
            <Icon size={42} />
          </div>
        )}
        {category ? (
          <span className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-navy shadow-sm">
            {category}
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <div className="grid h-11 w-11 place-items-center rounded-md bg-slate-100 text-navy">
          <Icon size={22} />
        </div>
        <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
        {href ? <p className="mt-5 text-sm font-black text-bridge">View stages</p> : null}
      </div>
    </article>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block h-full focus:outline-none focus:ring-4 focus:ring-bridge/30">
      {card}
    </Link>
  );
}
