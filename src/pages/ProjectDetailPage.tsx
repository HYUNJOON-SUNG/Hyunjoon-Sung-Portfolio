import { motion } from 'motion/react';
import { ArrowLeft, Github } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { fadeUp, stagger } from '../animations';

const detailFields = ['프로젝트 개요', '담당 역할', '주요 구현', '사용 기술', '배운 점'] as const;

export function ProjectDetailPage({ project }: { project: Project }) {
  const details = project.detail
    ? {
        '프로젝트 개요': project.detail.overview,
        '담당 역할': project.detail.responsibilities,
        '주요 구현': project.detail.implementations,
        '사용 기술': project.detail.techStack,
        '배운 점': project.detail.lessons,
      }
    : undefined;

  return (
    <div className="site-background min-h-screen text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#2f6f4e10_1px,transparent_1px),linear-gradient(to_bottom,#2f6f4e10_1px,transparent_1px)] bg-[size:56px_56px]" />
      <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <a href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-4 py-2 font-bold text-stone-800 transition-colors hover:border-emerald-400 hover:text-emerald-800">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </a>

        <motion.section initial="hidden" animate="visible" variants={stagger} className="mt-12">
          <motion.p variants={fadeUp} className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Project Detail</motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 break-keep text-4xl font-black tracking-tight text-stone-950 md:text-6xl">{project.title}</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 break-keep text-lg font-semibold text-stone-600">{project.subtitle}</motion.p>

          {project.image ? (
            <motion.img
              variants={fadeUp}
              src={project.image}
              alt={`${project.title} preview`}
              className="mt-10 w-full rounded-lg border border-stone-200 shadow-sm shadow-stone-200/70"
            />
          ) : null}

          <motion.div variants={fadeUp} className="mt-10 grid gap-5">
            {detailFields.map((field) => (
              <section key={field} className="min-h-36 rounded-lg border border-dashed border-stone-300 bg-white/80 p-5">
                <h2 className="text-lg font-bold text-stone-950">{field}</h2>
                {details ? (
                  Array.isArray(details[field]) ? (
                    field === '사용 기술' ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {details[field].map((item) => (
                          <span key={item} className="rounded-md bg-emerald-50 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-stone-700 marker:text-emerald-700">
                        {details[field].map((item) => (
                          <li key={item} className="break-keep pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    <p className="mt-4 whitespace-pre-line break-keep text-sm leading-7 text-stone-700">{details[field]}</p>
                  )
                ) : null}
              </section>
            ))}
          </motion.div>

          {project.repo ? (
            <motion.div variants={fadeUp} className="mt-8">
              <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-emerald-500 hover:text-emerald-800">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </motion.div>
          ) : null}
        </motion.section>
      </main>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="site-background min-h-screen px-5 py-16 text-stone-900">
      <div className="mx-auto max-w-3xl">
        <a href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-4 py-2 font-bold text-stone-800 transition-colors hover:border-emerald-400 hover:text-emerald-800">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </a>
        <h1 className="mt-10 text-4xl font-black">Project Not Found</h1>
      </div>
    </div>
  );
}

