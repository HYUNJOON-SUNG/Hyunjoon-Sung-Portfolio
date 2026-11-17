import { motion } from 'motion/react';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import type { Key } from 'react';
import type { Activity, Project, TechCategory, WorkingStyle } from '../types/portfolio';
import { fadeUp } from '../animations';

type ComponentProps<T> = T & { key?: Key };

export function SectionHeading({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-8 max-w-3xl">
      <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-5xl">{title}</h2>
    </motion.div>
  );
}

export function ActivityRow({ icon: Icon, title, subtitle, date, url }: ComponentProps<Activity>) {
  return (
    <motion.li variants={fadeUp} className="relative py-1 pl-8">
      <span className="absolute left-0 top-7 h-3 w-3 rounded-full border-2 border-emerald-700 bg-[#f7f8f3]" />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} external link`}
        className="group grid gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-white/70 md:grid-cols-[1fr_auto] md:items-center"
      >
        <div className="flex gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-emerald-50 transition-colors group-hover:border-emerald-500">
            <Icon className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h3 className="inline-flex items-center gap-2 text-lg font-bold text-stone-950 transition-colors group-hover:text-emerald-800">
              {title}
              <ExternalLink className="h-4 w-4 text-stone-400 transition-colors group-hover:text-emerald-700" />
            </h3>
            <p className="mt-1 text-sm leading-6 text-stone-600">{subtitle}</p>
          </div>
        </div>
        <span className="w-fit rounded-md border border-stone-200 bg-white/70 px-3 py-1.5 font-mono text-xs font-semibold text-stone-600">
          {date}
        </span>
      </a>
    </motion.li>
  );
}

export function TechCard({ icon: Icon, title, skills, accent }: ComponentProps<TechCategory>) {
  return (
    <motion.article variants={fadeUp} className={`rounded-lg border p-5 shadow-sm shadow-stone-200/60 ${accent}`}>
      <div className="mb-6 flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h3 className="text-lg font-bold uppercase tracking-wide text-stone-950">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-stone-200 bg-white/80 px-3 py-1.5 font-mono text-sm text-stone-700">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function WorkingStyleCard({ icon: Icon, title, description }: ComponentProps<WorkingStyle>) {
  return (
    <motion.article variants={fadeUp} className="rounded-lg border border-stone-200 bg-white/80 p-5 shadow-sm shadow-stone-200/70">
      <Icon className="mb-5 h-6 w-6 text-emerald-700" />
      <h3 className="text-lg font-bold text-stone-950">{title}</h3>
      <p className="mt-3 break-keep text-sm leading-7 text-stone-700">{description}</p>
    </motion.article>
  );
}

export function ProjectCard({ title, subtitle, date, description, image, detail, role, repo, slug }: ComponentProps<Project>) {
  return (
    <motion.article variants={fadeUp} className="grid gap-6 rounded-lg border border-stone-200 bg-white/85 p-5 shadow-sm shadow-stone-200/70 transition-colors hover:border-emerald-300 md:p-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <h4 className="break-keep text-2xl font-black tracking-tight text-stone-950">{title}</h4>
          <p className="mt-2 break-keep text-sm font-semibold text-emerald-700">{subtitle}</p>
        </div>
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} repository`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition-colors hover:border-emerald-500 hover:text-emerald-700"
          >
            <Github className="h-5 w-5" />
          </a>
        ) : null}
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100/70">
        {image ? (
          <img src={image} alt={`${title} preview`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-stone-300 bg-[linear-gradient(135deg,#f5f8f1_0%,#e7f0e8_100%)] px-5 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Project Image</span>
          </div>
        )}
      </div>

      <p className="whitespace-pre-line break-keep text-base leading-7 text-stone-700">{description}</p>

      <div className="flex flex-wrap gap-2 self-end border-t border-stone-200 pt-5 font-mono text-xs font-semibold text-stone-600">
        <span className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-stone-50 px-3 py-1.5">
          <Calendar className="h-4 w-4 text-emerald-700" />
          {date}
        </span>
        {role ? <span className="rounded-md border border-stone-200 bg-stone-50 px-3 py-1.5">{role}</span> : null}
        {detail ? (
          <a href={`/projects/${slug}`} className="ml-auto rounded-md bg-emerald-800 px-3 py-1.5 font-sans text-xs font-bold text-white transition-colors hover:bg-emerald-700">
            상세 보기
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

