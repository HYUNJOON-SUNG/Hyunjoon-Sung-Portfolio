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
    <motion.div variants={fadeUp} className="mb-12 flex items-end gap-4 border-b-2 border-zinc-800/50 pb-6">
      <span className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 leading-none">{number}</span>
      <h2 className="text-3xl md:text-4xl font-black text-zinc-100 tracking-tight uppercase">{title}</h2>
    </motion.div>
  );
}

function ActivityRow({ title, subtitle, date }: { title: string, subtitle: string, date: string }) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-all px-4 -mx-4 rounded-xl">
      <div>
        <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 transition-all">{title}</h3>
        <p className="text-zinc-400 font-medium">{subtitle}</p>
      </div>
      <div className="mt-4 md:mt-0 font-mono text-sm text-zinc-400 bg-[#050B05]/80 px-4 py-2 rounded-full border border-emerald-900/50 shadow-inner w-fit group-hover:border-emerald-500/30 transition-colors">
        {date}
      </div>
    </motion.div>
  );
}

function TechCategory({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) {
  return (
    <motion.div variants={fadeUp} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
          <Icon className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-wide">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3 relative z-10">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-[#050505]/50 text-zinc-300 font-mono text-sm rounded-lg border border-zinc-800/80 group-hover:border-emerald-800 transition-colors hover:text-emerald-300">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, subtitle, date, desc, role, repo, index }: { title: string, subtitle: string, date: string, desc: string, role?: string, repo: string, index: string }) {
  return (
    <motion.div variants={fadeUp} className="group flex flex-col bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="p-8 md:p-10 flex-grow flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4 items-start">
            <span className="font-mono text-emerald-500 font-bold text-xl mt-1">{index}</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-zinc-100 mb-2 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">{title}</h3>
              <p className="text-teal-400/80 font-medium">{subtitle}</p>
            </div>
          </div>
          <a href={repo} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#050505]/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-black hover:border-transparent transition-all duration-300 shrink-0 hover:scale-110">
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-grow">{desc}</p>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800/50 mt-auto font-mono text-sm">
          <div className="flex items-center gap-2 text-zinc-400 bg-[#050505]/30 px-3 py-1.5 rounded-md">
            <Calendar className="w-4 h-4 text-emerald-500" />
            <span>{date}</span>
          </div>
          {role && (
            <div className="flex items-center gap-2 text-zinc-400 bg-[#050505]/30 px-3 py-1.5 rounded-md">
              <User className="w-4 h-4 text-teal-500" />
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
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-100 relative overflow-hidden">

      {/* Dynamic Gradient Background (Green Theme) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020704]">
        {/* Soft emerald glow top left */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/30 blur-[120px]" />
        {/* Soft teal glow bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-600/30 blur-[120px]" />
        {/* Soft lime glow center */}
        <div className="absolute top-[20%] left-[40%] w-[40%] h-[40%] rounded-full bg-emerald-500/20 blur-[120px]" />
        {/* Subtle grid on top of glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_80%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050905]/80 backdrop-blur-xl border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="font-black text-2xl tracking-tighter flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-transform"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">HS.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold uppercase tracking-wider text-sm rounded-full hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
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
            <span className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></span>
            <span className="font-mono text-emerald-400 font-bold tracking-widest uppercase shadow-sm">Backend & Cloud Engineer</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
            Hyunjoon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600">Sung.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-3xl border-l-[3px] border-[transparent] relative pl-6 md:pl-8 py-2">
            <div className="absolute left-[-3px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
              백엔드와 클라우드 기술을 깊이 있게 탐구하며, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 font-bold">안정적이고 확장 가능한 시스템</strong>을 구축하는 것을 지향합니다. 사용자에게 가치를 전달하는 견고한 인프라를 설계하는 것을 지향합니다.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-12">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2">
              View Projects <ChevronRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="px-8 py-4 bg-zinc-900/50 text-zinc-100 rounded-full border border-zinc-700/50 font-bold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-400 hover:bg-zinc-800 transition-all flex items-center gap-3 shadow-lg">
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

          <div className="flex flex-col gap-2 relative">
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest drop-shadow-sm">Team Projects</h3>
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                  <User className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest drop-shadow-sm">Solo Projects</h3>
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
      <footer className="border-t border-emerald-900/30 bg-[#050905]/80 backdrop-blur-lg py-12 relative overflow-hidden">
        {/* subtle footer glow */}
        <div className="absolute top-0 left-[50%] w-[50%] h-[100px] bg-emerald-500/5 blur-[80px] -translate-x-1/2 rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span className="font-black text-xl tracking-tighter text-zinc-100">HS.</span>
            <span className="text-zinc-700">|</span>
            <p className="text-zinc-500 font-mono text-sm">
              © {new Date().getFullYear()} HYUNJOON SUNG.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#050905] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" className="w-10 h-10 rounded-full bg-[#050905] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-teal-500 hover:border-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
