import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="card group h-full p-6">
      <div className="grid h-12 w-12 place-items-center rounded-md bg-navy text-white transition group-hover:bg-bridge">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
