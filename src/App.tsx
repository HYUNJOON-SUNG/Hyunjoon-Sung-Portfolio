import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  Mail,
  Server,
  Cloud,
  Database,
  Terminal,
  Code2,
  Users,
  Calendar,
  User,
  GraduationCap,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// --- Components ---
function SectionHeading({ title, number }: { title: string, number: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 flex items-end gap-4 border-b-2 border-zinc-800 pb-6">
      <span className="text-4xl md:text-5xl font-mono font-bold text-emerald-500 leading-none">{number}</span>
      <h2 className="text-3xl md:text-4xl font-black text-zinc-100 tracking-tight uppercase">{title}</h2>
    </motion.div>
  );
}

function ActivityRow({ title, subtitle, date }: { title: string, subtitle: string, date: string }) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors px-4 -mx-4">
      <div>
        <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 font-medium">{subtitle}</p>
      </div>
      <div className="mt-4 md:mt-0 font-mono text-sm text-zinc-500 bg-zinc-900 px-3 py-1 border border-zinc-800 w-fit">
        {date}
      </div>
    </motion.div>
  );
}

function TechCategory({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) {
  return (
    <motion.div variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-8 h-8 text-emerald-500" />
        <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-wide">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-black text-zinc-300 font-mono text-sm border border-zinc-800 group-hover:border-zinc-700 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, subtitle, date, desc, role, repo, index }: { title: string, subtitle: string, date: string, desc: string, role?: string, repo: string, index: string }) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-emerald-500 transition-all duration-300 relative">
      <div className="p-8 md:p-10 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4 items-start">
            <span className="font-mono text-emerald-500 font-bold text-xl mt-1">{index}</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-zinc-100 mb-2 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
              <p className="text-zinc-400 font-medium">{subtitle}</p>
            </div>
          </div>
          <a href={repo} target="_blank" rel="noreferrer" className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-grow">{desc}</p>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800 mt-auto font-mono text-sm">
          <div className="flex items-center gap-2 text-zinc-400">
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>{date}</span>
          </div>
          {role && (
            <div className="flex items-center gap-2 text-zinc-400">
              <User className="w-4 h-4 text-emerald-500" />
              <span>{role}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">

      {/* Brutalist Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="font-black text-2xl tracking-tighter flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-emerald-500"></div>
            HS.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-black font-bold uppercase tracking-wider text-sm hover:bg-emerald-400 transition-colors">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </motion.div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32 space-y-40">

        {/* Hero Section */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={stagger}
          className="relative"
        >
          <motion.div variants={slideIn} className="flex items-center gap-4 mb-8">
            <span className="w-16 h-1 bg-emerald-500"></span>
            <span className="font-mono text-emerald-500 font-bold tracking-widest uppercase">Backend & Cloud Engineer</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
            Hyunjoon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Sung.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-3xl border-l-4 border-zinc-800 pl-6 md:pl-8 py-2">
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
              백엔드와 클라우드 기술을 깊이 있게 탐구하며, <strong className="text-zinc-100 font-bold">안정적이고 확장 가능한 시스템</strong>을 구축하는 것을 지향합니다. 사용자에게 가치를 전달하는 견고한 인프라를 설계하는 것을 지향합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-12">
            <a href="#projects" className="px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center gap-2">
              View Projects <ChevronRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900 text-zinc-100 border border-zinc-800 font-bold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-3">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* Affiliations Section */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={stagger}
        >
          <SectionHeading number="01" title="Affiliations" />

          <div className="flex flex-col">
            <ActivityRow
              title="Gachon University"
              subtitle="Dept. of Computer Engineering"
              date="2021.03 - PRESENT"
            />
            <ActivityRow
              title="Leets 6th"
              subtitle="Campus IT Club"
              date="2025.09 - 2026.02"
            />
            <ActivityRow
              title="WFK IT Volunteer Corps"
              subtitle="Overseas IT Volunteer"
              date="2025.08"
            />
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={stagger}
        >
          <SectionHeading number="02" title="Tech Stack" />

          <div className="grid md:grid-cols-3 gap-6">
            <TechCategory
              icon={Server}
              title="Backend"
              skills={['Java', 'Spring Boot', 'MySQL']}
            />
            <TechCategory
              icon={Cloud}
              title="Infra"
              skills={['AWS', 'Docker', 'GitHub Actions']}
            />
            <TechCategory
              icon={Terminal}
              title="Tools"
              skills={['Notion', 'GitHub', 'Discord']}
            />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={stagger}
          className="scroll-mt-32"
        >
          <SectionHeading number="03" title="Projects" />

          <div className="space-y-16">
            {/* Team Projects */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest">Team Projects</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <ProjectCard
                  index="T.1"
                  title="Emoji-Diary"
                  subtitle="감정 분석 일기 서비스"
                  date="2025.11"
                  desc="AI를 활용한 일기 감정 분석 및 피드백 서비스. (교내 p-실무 프로젝트)"
                  role="Backend Developer"
                  repo="https://github.com/HYUNJOON-SUNG/Emoji-Diary"
                />
                <ProjectCard
                  index="T.2"
                  title="MoniFit"
                  subtitle="소비습관 관리 서비스"
                  date="2025.01 - 2025.02"
                  desc="건강한 소비 습관 형성을 돕는 자산 관리 서비스"
                  role="Backend Developer"
                  repo="https://github.com/Leets-Official/MoniFit-BE"
                />
              </div>
            </motion.div>

            {/* Solo Projects */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <User className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest">Solo Projects</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <ProjectCard
                  index="S.1"
                  title="Dorm Matching"
                  subtitle="기숙사 매칭 플랫폼"
                  date="2025.11"
                  desc="MSA 기반 기숙사 룸메이트 매칭 및 실시간 채팅 서비스"
                  repo="https://github.com/HYUNJOON-SUNG/Gachon-Dorm-matching"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-emerald-500"></div>
            <span className="font-black text-xl tracking-tighter text-zinc-100">HS.</span>
            <span className="text-zinc-700">|</span>
            <p className="text-zinc-500 font-mono text-sm">
              © {new Date().getFullYear()} HYUNJOON SUNG.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}




