import { motion } from 'motion/react';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { activities, projectGroups, techCategories, workingStyles } from '../data/portfolio';
import { fadeUp, stagger } from '../animations';
import { ActivityRow, ProjectCard, SectionHeading, TechCard, WorkingStyleCard } from '../components/PortfolioComponents';

export default function HomePage() {
  return (
    <div className="site-background min-h-screen text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#2f6f4e10_1px,transparent_1px),linear-gradient(to_bottom,#2f6f4e10_1px,transparent_1px)] bg-[size:56px_56px]" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-[#fafaf6]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="font-mono text-xl font-black tracking-tight text-emerald-900">
            HS.
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-stone-600 md:flex">
            <a href="#working-style" className="transition-colors hover:text-emerald-800">Style</a>
            <a href="#affiliations" className="transition-colors hover:text-emerald-800">Affiliations</a>
            <a href="#tech" className="transition-colors hover:text-emerald-800">Tech</a>
            <a href="#projects" className="transition-colors hover:text-emerald-800">Projects</a>
            <a href="#contact" className="transition-colors hover:text-emerald-800">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-stone-600 transition-colors hover:text-emerald-800">
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" aria-label="Send email" className="text-stone-600 transition-colors hover:text-emerald-800">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-stone-200 px-5 py-2 md:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-sm font-semibold text-stone-600">
            <a href="#working-style" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-800">Style</a>
            <a href="#affiliations" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-800">Affiliations</a>
            <a href="#tech" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-800">Tech</a>
            <a href="#projects" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-800">Projects</a>
            <a href="#contact" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-emerald-50 hover:text-emerald-800">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-7xl px-5 pt-40 pb-24 md:pt-32">
        <motion.section initial="hidden" animate="visible" variants={stagger} className="grid min-h-[calc(100vh-12rem)] content-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_26rem]">
          <div>
            <motion.p variants={fadeUp} className="mb-6 font-mono text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">
              Backend & Cloud Engineer
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-5xl break-keep text-4xl font-black tracking-tight text-stone-950 sm:text-7xl lg:text-8xl">
              Hyunjoon Sung
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 md:break-keep md:text-xl">
              백엔드와 클라우드 인프라를 중심으로 공부하고 있는 성현준입니다.
              <br className="hidden md:block" />
              안정적으로 운영될 수 있는 서비스 구조를 이해하고 구현하며,
              <br className="hidden md:block" />
              실제 사용자에게 제공되는 서비스의 출시와 운영, 수익화까지 경험하는 것을 목표로 하고 있습니다.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a href="#projects" className="rounded-lg bg-emerald-800 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-emerald-700">
                View Projects
              </a>
              <a href="#contact" className="rounded-lg bg-emerald-100 px-5 py-3 text-center font-bold text-emerald-900 ring-1 ring-emerald-200 transition-colors hover:bg-emerald-200">
                Contact
              </a>
              <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-emerald-400 hover:text-emerald-800 sm:col-span-1">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside variants={fadeUp} className="rounded-lg border border-stone-200 bg-white/85 p-5 shadow-sm shadow-stone-200/70 lg:translate-y-12">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
              <img
                src="/images/profile.jpg"
                alt="Hyunjoon Sung profile"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Currently Learning</p>
            <div className="mt-5 space-y-4 break-keep text-sm leading-7 text-stone-700">
              <p>Spring Boot 기반 API 설계와 안정적인 데이터 처리 흐름</p>
              <p>AWS, Docker, GitHub Actions를 활용한 배포와 운영 자동화</p>
              <p>팀 프로젝트에서 필요한 커뮤니케이션과 백엔드 협업 방식</p>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section id="working-style" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="scroll-mt-24 py-20">
          <SectionHeading eyebrow="01 / Collaboration" title="Working Style" />
          <div className="grid gap-4 md:grid-cols-3">
            {workingStyles.map((style) => (
              <WorkingStyleCard key={style.title} {...style} />
            ))}
          </div>
        </motion.section>

        <motion.section id="affiliations" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="scroll-mt-24 py-20">
          <SectionHeading eyebrow="02 / Activity" title="Affiliations & Activity" />
          <ul className="relative before:absolute before:bottom-5 before:left-[5px] before:top-5 before:w-px before:bg-stone-200">
            {activities.map((activity) => (
              <ActivityRow key={activity.title} {...activity} />
            ))}
          </ul>
        </motion.section>

        <motion.section id="tech" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="scroll-mt-24 py-20">
          <SectionHeading eyebrow="03 / Stack" title="Main Tech Stack" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((category) => (
              <TechCard key={category.title} {...category} />
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="scroll-mt-24 py-20">
          <SectionHeading eyebrow="04 / Work" title="Projects" />
          <div className="space-y-12">
            {projectGroups.map(({ title, icon: Icon, accent, projects }) => (
              <motion.div key={title} variants={fadeUp}>
                <div className="mb-5 flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${accent}`} />
                  <h3 className="text-xl font-black uppercase tracking-wide text-stone-950">{title}</h3>
                </div>
                <div className="grid items-start gap-4 lg:grid-cols-2">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="scroll-mt-24 py-20">
          <div className="grid gap-8 rounded-lg border border-stone-200 bg-white/85 p-6 shadow-sm shadow-stone-200/70 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <SectionHeading eyebrow="05 / Contact" title="Contact" />
              <p className="max-w-2xl break-keep text-base leading-7 text-stone-700">
                프로젝트, 개발, 협업에 관해 함께 이야기해 보고 싶은 내용이 있다면 편하게 연락해 주세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="mailto:tjdguswns1941@gachon.ac.kr" className="inline-flex max-w-full items-center gap-2 rounded-lg bg-emerald-800 px-5 py-3 font-bold text-white transition-colors hover:bg-emerald-700">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="break-all text-left">tjdguswns1941@gachon.ac.kr</span>
              </a>
              <a href="https://discord.com/users/399590862193033226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-emerald-400 hover:text-emerald-800">
                <MessageCircle className="h-5 w-5" />
                Discord
              </a>
              <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-emerald-400 hover:text-emerald-800">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} HYUNJOON SUNG.</p>
          <p>tjdguswns1941@gachon.ac.kr · Discord</p>
        </div>
      </footer>
    </div>
  );
}
