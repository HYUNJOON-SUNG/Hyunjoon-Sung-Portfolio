import { motion } from 'motion/react';
import type { Key } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  Calendar,
  Cloud,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Globe2,
  Mail,
  MessageCircle,
  Server,
  Terminal,
  Trophy,
  User,
  Users,
} from 'lucide-react';

type Activity = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  date: string;
  url: string;
};

type TechCategory = {
  icon: LucideIcon;
  title: string;
  skills: string[];
  accent: string;
};

type Project = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  image?: string;
  detail?: ProjectDetail;
  role?: string;
  repo: string;
  tags: string[];
  slug: string;
};

type ProjectDetail = {
  overview: string;
  responsibilities: string[];
  implementations: string[];
  techStack: string[];
  lessons?: string;
};

type ProjectGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  projects: Project[];
};

type WorkingStyle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ComponentProps<T> = T & {
  key?: Key;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const activities: Activity[] = [
  {
    icon: GraduationCap,
    title: 'Gachon University',
    subtitle: '컴퓨터공학전공',
    date: '2021.03 - PRESENT',
    url: 'https://www.gachon.ac.kr/kor/index.do',
  },
  {
    icon: Globe2,
    title: 'WFK IT Volunteer Corps',
    subtitle: 'WKT IT 해외봉사단 · 인도네시아 파견',
    date: '2025.08',
    url: 'https://www.instagram.com/wfk_codo/',
  },
  {
    icon: Users,
    title: 'Leets 6th',
    subtitle: '교내 IT 연합 동아리',
    date: '2025.09 - 2026.02',
    url: 'https://www.leets.land/',
  },
  {
    icon: Server,
    title: 'UMC 10th',
    subtitle: '대학 연합 IT 동아리, Spring Boot 파트',
    date: '2026.03 - PRESENT',
    url: 'https://umc.makeus.in/',
  },
];

const techCategories: TechCategory[] = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['Java', 'Spring Boot'],
    accent: 'text-emerald-300 border-emerald-400/40',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MySQL'],
    accent: 'text-cyan-300 border-cyan-400/40',
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    skills: ['AWS', 'Docker', 'GitHub Actions'],
    accent: 'text-amber-300 border-amber-400/40',
  },
  {
    icon: Terminal,
    title: 'Tools',
    skills: ['Notion', 'GitHub', 'Discord'],
    accent: 'text-zinc-200 border-zinc-500/50',
  },
];

const workingStyles: WorkingStyle[] = [
  {
    icon: Mail,
    title: '빠른 커뮤니케이션',
    description: '협업에서는 연락이 잘 닿는 것과 진행 상황을 꾸준히 공유하는 태도를 중요하게 생각합니다.',
  },
  {
    icon: Users,
    title: '함께 해결하는 태도',
    description: '맡은 작업을 진행하면서도 팀원이 막힌 부분이 있다면 제가 도울 수 있는 범위에서 함께 해결하려고 합니다.',
  },
  {
    icon: GraduationCap,
    title: '배우려는 자세',
    description: '아직 배워야 할 것이 많다고 생각하며, 동료들의 문제 해결 방식과 피드백을 적극적으로 배우고자 합니다.',
  },
];

const projectGroups: ProjectGroup[] = [
  {
    title: 'Team Projects',
    icon: Users,
    accent: 'text-emerald-300',
    projects: [
      {
        title: 'Emoji-Diary',
        subtitle: '가천대학교 p-실무 프로젝트 (우수상)',
        date: '2025.11',
        description: 'AI를 활용한 일기 감정 분석 및 피드백 서비스.',
        image: '/images/emoji-diary.png',
        detail: {
          overview: '사용자의 일기를 AI로 감정 분석해 맞춤형 피드백을 제공하고, 감정 상태에 따른 위험도를 감지하는 서비스입니다.\n교내 p-실무프로젝트에서 우수상을 수상했습니다.',
          responsibilities: [
            '프로젝트 전체 요구사항을 분석하고 사용자 및 관리자 도메인의 기능 범위를 구체화했습니다.',
            '서비스 전체 데이터베이스 구조를 먼저 정리해 ERD 명세서를 작성하고, 프론트엔드 및 AI 서버 연동을 고려한 API 명세서를 전체 범위로 설계했습니다.',
            '전체 설계 이후에는 관리자 도메인 API 구현을 담당해 통계 조회와 에러 로그 추적 기능을 개발했습니다.',
          ],
          implementations: [
            '일기 작성, 감정 분석 결과 조회, 피드백 제공 흐름을 고려해 사용자 기능부터 관리자 기능까지 확장 가능한 데이터 구조를 설계했습니다.',
            '가입자 수, 일기 작성 추이, 사용자 위험 레벨 분포 등 핵심 지표를 조건별로 집계해 반환하는 관리자 대시보드 API를 구현했습니다.',
            '로그 레벨, 날짜, 검색어 기반 필터링과 페이징을 지원하는 에러 로그 추적 API를 구현하고, 스택 트레이스 상세 조회로 문제 원인 분석이 가능하도록 구성했습니다.',
          ],
          techStack: ['Spring Boot', 'FastAPI', 'Java', 'Python', 'MariaDB', 'Spring Security'],
          lessons: '초기 기획 단계부터 요구사항을 분석하고 데이터베이스와 API를 함께 설계하며, 단일 기능 구현을 넘어 서비스 전체의 데이터 흐름을 구조화하는 경험을 했습니다. 또한 통계 집계와 에러 모니터링 기능을 구현하면서 실제 운영 환경에서의 유지보수성과 데이터 가시성을 함께 고려하는 백엔드 개발 관점을 기를 수 있었습니다.',
        },
        role: 'Backend Development',
        repo: 'https://github.com/HYUNJOON-SUNG/Emoji-Diary',
        tags: ['AI 감정 분석', '일기', '맞춤형 피드백', '위험도 감지'],
        slug: 'emoji-diary',
      },
      {
        title: 'MoniFit',
        subtitle: 'Leets 6th 최종 프로젝트',
        date: '2025.12 - 2026.02',
        description: '사용자 중심의 목표 예산 관리 및 지출 분석 기능을 제공하는 서비스.',
        image: '/images/monifit.jpg',
        detail: {
          overview: 'MoniFit은 사용자가 설정한 30일간의 목표 예산을 추적하고, 소비 현황을 실시간으로 분석해 주는 서비스입니다. 단순한 가계부를 넘어 예산 대비 지출 비율에 따른 피드백과 매일 소비 목표 달성 시 스탬프를 제공해 건강한 소비 습관 형성을 돕습니다. 백엔드 서버는 소셜 로그인, 예산 기간 관리, 지출 내역 관리, 대시보드 통계 등 핵심 비즈니스 로직을 RESTful API로 제공합니다.',
          responsibilities: [
            '백엔드 파트 리드로 참여해 프로젝트 초기 설계와 개발 방향을 주도했습니다.',
            '데이터베이스 ERD와 API 명세서를 설계하고, 초기 프로젝트 세팅과 코드 컨벤션 및 Git Flow 정책을 정리했습니다.',
            '인증/인가, 회원 관리, 예산 기간 도메인 등 핵심 백엔드 기능을 직접 구현했습니다.',
          ],
          implementations: [
            '프로젝트 시작 단계에서 ERD와 API 명세서를 설계하고, 팀원들이 일관된 기준으로 개발할 수 있도록 코드 컨벤션과 Git Flow 정책을 수립했습니다.',
            'Kakao OAuth 2.0과 JWT 기반 소셜 로그인, 토큰 재발급, 로그아웃 기능을 구현하고 마이페이지 정보 조회, 이름 수정, 회원 탈퇴 기능을 개발했습니다.',
            '30일 단위 예산 기간 생성, 활성 예산 및 완료 예산 조회, 절약 금액과 초과 금액 계산 등 서비스의 핵심 도메인 로직을 설계하고 구현했습니다.',
          ],
          techStack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Docker', 'AWS'],
          lessons: 'PM, 디자이너, 프론트엔드, 백엔드가 모두 함께한 협업 팀 프로젝트를 처음 경험하며, 기획부터 디자인, API 설계, 기능 구현, 테스트까지 프로젝트가 어떤 흐름으로 진행되는지 큰 그림을 이해할 수 있었습니다. 초기 ERD와 API 명세서, 코드 컨벤션을 정리하면서 명확한 문서화와 개발 규칙이 팀 협업에 얼마나 중요한지도 체감했습니다. 또한 Kakao OAuth 2.0 기반 소셜 로그인을 처음 구현하며 외부 인증 제공자와의 연동 흐름, JWT 발급 및 재발급 과정 등 인증/인가 구조를 이해할 수 있었습니다. 예산 기간의 활성/만료 상태, 남은 예산 계산, 초과 여부 판단처럼 단순 CRUD를 넘어선 도메인 규칙을 구현하며 비즈니스 로직 설계 역량도 키웠습니다.',
        },
        role: 'Backend Development',
        repo: 'https://github.com/Leets-Official/MoniFit-BE',
        tags: ['목표 예산', '지출 분석', '소비 습관', '소셜 로그인', '대시보드'],
        slug: 'monifit',
      },
      {
        title: 'After-Buy',
        subtitle: '가천대학교 졸업 프로젝트',
        date: '2026.03 - PRESENT',
        description: 'MSA 기반으로 전자제품의 구매 정보와 보증기간을 관리하고, OCR과 알림을 통해 사후 관리를 돕는 서비스.',
        detail: {
          overview: 'After-Buy는 사용자가 전자제품의 구매 정보, 영수증, 보증기간을 등록하고 만료 시점을 관리할 수 있도록 돕는 프로젝트입니다. 백엔드는 인증, 제품 관리, 알림, 관리자 서비스와 OCR 처리용 Lambda로 구성된 MSA 구조이며, 각 서비스가 독립적으로 배포될 수 있도록 인프라와 CI/CD 흐름을 설계했습니다.',
          responsibilities: [
            'AWS 기반 클라우드 서비스 구성과 전체 인프라 구조 설계를 담당했습니다.',
            'MSA 서비스들을 EC2, Docker Compose, Nginx 기반 런타임 환경에서 운영할 수 있도록 배포 구조를 설계했습니다.',
            'GitHub Actions, GHCR, Docker를 활용한 서비스별 CI/CD 환경을 구축했습니다.',
            'OCR 처리용 Lambda, MySQL, S3 등 외부 클라우드/서비스 연동에 필요한 운영 환경을 정리했습니다.',
          ],
          implementations: [
            '인증, 제품 관리, 알림, 관리자 서비스를 각각 Docker 이미지로 빌드하고 GHCR에 푸시한 뒤, EC2에서 대상 서비스의 이미지를 갱신하고 컨테이너를 재기동하는 배포 흐름을 구성했습니다.',
            'develop/main 브랜치에 따라 개발/운영 이미지 태그와 배포 대상을 분리하는 GitHub Actions 배포 파이프라인을 설계했습니다.',
            '인프라 저장소에 Docker Compose와 Nginx 설정을 구성해 서비스별 컨테이너 네트워크, 포트, 리버스 프록시, HTTPS 종단 흐름을 정리했습니다.',
            'OCR 처리용 Lambda는 GitHub Actions에서 함수 코드와 파서 모듈을 패키징해 AWS Lambda에 배포하고, 필요한 환경변수까지 함께 갱신되도록 구성했습니다.',
            '서비스별 MySQL 데이터베이스, S3 이미지 저장, Lambda Function URL, Amazon Textract, Gemini API 연동을 고려해 운영 환경변수와 Secret 관리 항목을 정리했습니다.',
          ],
          techStack: ['Java 21', 'Spring Boot', 'MySQL', 'AWS', 'Lambda', 'Amazon Textract', 'Docker', 'Nginx', 'GitHub Actions'],
          lessons: '현재 진행 중인 프로젝트이므로, 프로젝트 완료 후 인프라 설계와 CI/CD 구축 과정에서의 회고를 정리할 예정입니다.',
        },
        role: 'Cloud & Infrastructure',
        repo: 'https://github.com/After-Buy',
        tags: ['MSA', 'AWS', 'CI/CD', 'Docker', '인프라'],
        slug: 'after-buy',
      },
    ],
  },
  {
    title: 'Solo Projects',
    icon: User,
    accent: 'text-cyan-300',
    projects: [
      {
        title: 'Gachon Dorm Matching',
        subtitle: '개인 프로젝트',
        date: '2025.11',
        description: 'MSA 기반 기숙사 룸메이트 매칭 및 실시간 채팅 서비스.',
        image: '/images/gachon-dorm-matching.png',
        detail: {
          overview: '가천대학교 학생들을 위한 기숙사 룸메이트 매칭 플랫폼입니다. 사용자의 기숙사, 성별, 생활 패턴, 선호도 정보를 기반으로 룸메이트 모집 게시글을 작성하고, 매칭 신청과 수락 이후 실시간 1:1 채팅으로 소통할 수 있도록 구성했습니다. 전체 시스템은 인증, 매칭, 채팅, 프론트엔드, 데이터베이스, 프록시 서버를 분리한 Docker 기반 MSA 구조입니다.',
          responsibilities: [
            '개인 프로젝트로 서비스 기획, 데이터베이스 설계, 백엔드 API 구현, 프론트엔드 연동, Docker 기반 실행 환경 구성을 전반적으로 담당했습니다.',
            '회원 인증, 프로필 관리, 게시글/매칭 도메인, 실시간 채팅 도메인을 서비스별로 분리해 MSA 구조로 설계했습니다.',
            'Docker Compose와 Nginx 리버스 프록시를 구성해 프론트엔드, 백엔드 API, 실시간 채팅 요청이 각 서비스로 라우팅되도록 구성했습니다.',
          ],
          implementations: [
            'Node.js와 Express로 학교 이메일 도메인 검증, bcrypt 비밀번호 암호화, JWT 기반 로그인과 프로필 관리 기능을 구현했습니다.',
            'Python과 FastAPI로 룸메이트 모집 게시글 CRUD, 기숙사/성별/모집 상태 필터링, 매칭 신청/수락/거절 흐름을 구현했습니다.',
            '매칭 수락 시 게시글을 자동 마감하고 다른 신청자에게 거절 알림을 남기는 도메인 로직을 구성했습니다.',
            'Node.js와 Socket.IO로 매칭 이후 1:1 채팅방 생성, 실시간 메시지 송수신, 알림 기록과 읽음 처리 흐름을 구현했습니다.',
            'Nginx 리버스 프록시를 구성해 인증, 프로필, 게시글, 매칭, 채팅, 알림, WebSocket 요청이 각 서비스로 라우팅되도록 설정했습니다.',
            'MySQL 기반으로 Users, Profiles, Posts, MatchRequests, ChatRooms, ChatMessages, Notifications 테이블 구조를 설계했습니다.',
          ],
          techStack: ['Node.js', 'Express', 'FastAPI', 'React', 'MySQL', 'Redis', 'Socket.IO', 'Docker', 'Nginx'],
          lessons: '단일 서버로 모든 기능을 구현하는 방식이 아니라 인증, 매칭, 채팅을 서비스 단위로 분리하면서 MSA 구조에서 서비스 간 책임을 나누는 기준을 경험했습니다. 또한 HTTP API와 WebSocket 요청을 Nginx에서 함께 라우팅하고 Docker Compose 네트워크 안에서 컨테이너 이름으로 통신하도록 구성하며, 로컬 개발 환경에서도 운영 구조를 고려한 서비스 배치 방식을 익혔습니다. 이 프로젝트는 AI 에이전트를 처음 활용해 개발한 프로젝트이기도 해서, 에이전트에게 어떤 단위로 작업을 맡기고 결과물을 어떻게 검증해야 하는지에 대한 감을 잡을 수 있었습니다.',
        },
        role: 'Full Stack Development',
        repo: 'https://github.com/HYUNJOON-SUNG/Gachon-Dorm-matching',
        tags: ['기숙사 매칭', '룸메이트', '실시간 채팅', 'MSA', 'Docker'],
        slug: 'gachon-dorm-matching',
      },
    ],
  },
  {
    title: 'Hackathon Projects',
    icon: Trophy,
    accent: 'text-amber-300',
    projects: [
      {
        title: '홍대병동',
        subtitle: '10th NE-O-RDINARY HACKATHON',
        date: '2026.05',
        description: '비주류 음악을 발굴하고 기록하며, 시간이 지나며 해당 음악의 성장률을 확인할 수 있는 음악 큐레이션 서비스.',
        image: '/images/hongdae-byeongdong.png',
        detail: {
          overview: '홍대병동은 비주류 음악을 발굴하고, 사용자가 발견한 음악을 DIG로 기록하며 공유할 수 있는 음악 큐레이션 서비스입니다. 백엔드는 Spring Boot 기반 API 서버로 사용자 인증, 음악 검색, DIG 생성/조회, DIG 검색 기능을 제공하며, YouTube API와 Gemini API를 활용해 음악 검색 결과와 메타데이터를 처리합니다.',
          responsibilities: [
            '백엔드 개발자로 참여해 외부 음악 API 연동과 배포 자동화 영역을 담당했습니다.',
            'YouTube API 기반 음악 검색 기능을 구현하고, 검색 결과에서 서비스에 필요한 영상 ID, 제목, 아티스트, 조회수, 업로드 날짜, 썸네일 정보를 반환하도록 구성했습니다.',
            'Gemini API를 활용해 YouTube 원본 제목과 채널명을 분석하고, 실제 아티스트명과 곡 제목을 정제하는 메타데이터 처리 흐름을 구현했습니다.',
            'GitHub Actions, Docker, GHCR, EC2를 활용한 CI/CD 파이프라인을 구축했습니다.',
          ],
          implementations: [
            '음악 검색 API를 구현해 검색어 검증 후 YouTube에서 음악 카테고리 영상을 조회하고, 최상위 검색 결과를 서비스 응답으로 변환했습니다.',
            'YouTube Search API와 Videos API를 함께 사용해 검색 결과의 영상 기본 정보와 조회수를 분리 조회한 뒤 하나의 응답으로 조합했습니다.',
            'Gemini API에 시스템 지시문과 JSON 응답 형식을 지정해 YouTube 제목/채널명에서 아티스트와 곡 제목만 안정적으로 추출하도록 구성했습니다.',
            '외부 API 키 누락, 검색 결과 없음, API 호출 실패 상황을 공통 예외 응답으로 처리해 클라이언트가 일관된 실패 응답을 받을 수 있도록 했습니다.',
            'main 브랜치 push 시 테스트 실행, Docker 이미지 빌드, GHCR 푸시, EC2 SSH 접속 후 컨테이너 재기동까지 이어지는 GitHub Actions 배포 workflow를 구성했습니다.',
            '멀티 스테이지 Dockerfile을 작성해 Gradle bootJar 결과물을 Java 17 JRE 이미지에서 실행하도록 배포 이미지를 구성했습니다.',
          ],
          techStack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Swagger', 'YouTube API', 'Gemini API', 'Docker', 'GitHub Actions', 'GHCR', 'EC2'],
          lessons: '해커톤이라는 짧은 일정 안에서 외부 API 기반 기능을 서비스 흐름에 맞게 빠르게 붙이고, 응답 형태를 프론트엔드가 바로 사용할 수 있도록 정제하는 경험을 했습니다. 특히 YouTube 검색 결과처럼 원본 데이터가 일정하지 않은 경우 Gemini를 활용해 메타데이터를 보정하면서, AI API를 단순 호출하는 것보다 명확한 출력 형식과 실패 처리 기준을 함께 설계하는 것이 중요하다는 점을 배웠습니다. 또한 CI/CD를 직접 구축하며 기능 구현 이후 배포까지 이어지는 백엔드 개발 흐름을 정리할 수 있었습니다.',
        },
        role: 'Backend Development',
        repo: 'https://github.com/neordinary-team-o/NE-O-RDINARY_THON-team-o-BE',
        tags: ['음악 큐레이션', 'YouTube API', 'Gemini API', 'CI/CD', '해커톤'],
        slug: 'hongdae-byeongdong',
      },
    ],
  },
];

const allProjects = projectGroups.flatMap((group) => group.projects);

function SectionHeading({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-8 max-w-3xl">
      <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-zinc-50 md:text-5xl">{title}</h2>
    </motion.div>
  );
}

function ActivityRow({ icon: Icon, title, subtitle, date, url }: ComponentProps<Activity>) {
  return (
    <motion.li variants={fadeUp} className="relative py-1 pl-8">
      <span className="absolute left-0 top-7 h-3 w-3 rounded-full border-2 border-emerald-300 bg-[#111317]" />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} external link`}
        className="group grid gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-zinc-900/70 md:grid-cols-[1fr_auto] md:items-center"
      >
        <div className="flex gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 transition-colors group-hover:border-emerald-300">
            <Icon className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <h3 className="inline-flex items-center gap-2 text-lg font-bold text-zinc-50 transition-colors group-hover:text-emerald-300">
              {title}
              <ExternalLink className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-emerald-300" />
            </h3>
            <p className="mt-1 text-sm leading-6 text-zinc-400">{subtitle}</p>
          </div>
        </div>
        <span className="w-fit rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs font-semibold text-zinc-300">
          {date}
        </span>
      </a>
    </motion.li>
  );
}

function TechCard({ icon: Icon, title, skills, accent }: ComponentProps<TechCategory>) {
  return (
    <motion.article variants={fadeUp} className={`rounded-lg border bg-zinc-950/70 p-5 ${accent}`}>
      <div className="mb-6 flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h3 className="text-lg font-bold uppercase tracking-wide text-zinc-50">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-sm text-zinc-300">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function WorkingStyleCard({ icon: Icon, title, description }: ComponentProps<WorkingStyle>) {
  return (
    <motion.article variants={fadeUp} className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5">
      <Icon className="mb-5 h-6 w-6 text-amber-300" />
      <h3 className="text-lg font-bold text-zinc-50">{title}</h3>
      <p className="mt-3 break-keep text-sm leading-7 text-zinc-300">{description}</p>
    </motion.article>
  );
}

const detailFields = ['프로젝트 개요', '담당 역할', '주요 구현', '사용 기술', '배운 점'] as const;

function ProjectCard({ title, subtitle, date, description, image, role, repo, slug }: ComponentProps<Project>) {
  return (
    <motion.article variants={fadeUp} className="grid gap-6 rounded-lg border border-zinc-800 bg-zinc-950/75 p-5 transition-colors hover:border-zinc-600 md:p-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <h4 className="break-keep text-2xl font-black tracking-tight text-zinc-50">{title}</h4>
          <p className="mt-2 break-keep text-sm font-semibold text-cyan-300">{subtitle}</p>
        </div>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} repository`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-colors hover:border-emerald-300 hover:text-emerald-300"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40">
        {image ? (
          <img src={image} alt={`${title} preview`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-zinc-700 bg-[linear-gradient(135deg,#18181b_0%,#09090b_100%)] px-5 text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Project Image</span>
          </div>
        )}
      </div>

      <p className="whitespace-pre-line break-keep text-base leading-7 text-zinc-300">{description}</p>

      <div className="flex flex-wrap gap-2 self-end border-t border-zinc-800 pt-5 font-mono text-xs font-semibold text-zinc-400">
        <span className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-1.5">
          <Calendar className="h-4 w-4 text-emerald-300" />
          {date}
        </span>
        {role ? <span className="rounded-md border border-zinc-800 px-3 py-1.5">{role}</span> : null}
        <a href={`/projects/${slug}`} className="ml-auto rounded-md bg-zinc-100 px-3 py-1.5 font-sans text-xs font-bold text-zinc-950 transition-colors hover:bg-cyan-200">
          상세 보기
        </a>
      </div>
    </motion.article>
  );
}

function ProjectDetailPage({ project }: { project: Project }) {
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
    <div className="site-background min-h-screen text-zinc-100 selection:bg-emerald-300 selection:text-zinc-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:56px_56px]" />
      <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <a href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 font-bold text-zinc-100 transition-colors hover:border-zinc-500">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </a>

        <motion.section initial="hidden" animate="visible" variants={stagger} className="mt-12">
          <motion.p variants={fadeUp} className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Project Detail</motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 break-keep text-4xl font-black tracking-tight text-zinc-50 md:text-6xl">{project.title}</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 break-keep text-lg font-semibold text-zinc-400">{project.subtitle}</motion.p>

          {project.image ? (
            <motion.img
              variants={fadeUp}
              src={project.image}
              alt={`${project.title} preview`}
              className="mt-10 aspect-video w-full rounded-lg border border-zinc-800 object-cover"
            />
          ) : null}

          <motion.div variants={fadeUp} className="mt-10 grid gap-5">
            {detailFields.map((field) => (
              <section key={field} className="min-h-36 rounded-lg border border-dashed border-zinc-800 bg-zinc-950/70 p-5">
                <h2 className="text-lg font-bold text-zinc-100">{field}</h2>
                {details ? (
                  Array.isArray(details[field]) ? (
                    field === '사용 기술' ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {details[field].map((item) => (
                          <span key={item} className="rounded-md bg-zinc-900 px-3 py-1.5 font-mono text-xs font-semibold text-zinc-300 ring-1 ring-zinc-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                        {details[field].map((item) => (
                          <li key={item} className="break-keep">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    <p className="mt-4 whitespace-pre-line break-keep text-sm leading-7 text-zinc-300">{details[field]}</p>
                  )
                ) : null}
              </section>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 font-bold text-zinc-100 transition-colors hover:border-emerald-300 hover:text-emerald-300">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="site-background min-h-screen px-5 py-16 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <a href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 font-bold text-zinc-100 transition-colors hover:border-zinc-500">
          <ArrowLeft className="h-4 w-4" />
          Projects
        </a>
        <h1 className="mt-10 text-4xl font-black">Project Not Found</h1>
      </div>
    </div>
  );
}

export default function App() {
  const projectPathMatch = window.location.pathname.match(/^\/projects\/([^/]+)$/);
  const selectedProject = projectPathMatch
    ? allProjects.find((project) => project.slug === projectPathMatch[1])
    : undefined;

  if (projectPathMatch) {
    return selectedProject ? <ProjectDetailPage project={selectedProject} /> : <NotFoundPage />;
  }

  return (
    <div className="site-background min-h-screen text-zinc-100 selection:bg-emerald-300 selection:text-zinc-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:56px_56px]" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-[#111317]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="font-mono text-xl font-black tracking-tight text-zinc-50">
            HS.
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-zinc-400 md:flex">
            <a href="#working-style" className="transition-colors hover:text-zinc-50">Style</a>
            <a href="#affiliations" className="transition-colors hover:text-zinc-50">Affiliations</a>
            <a href="#tech" className="transition-colors hover:text-zinc-50">Tech</a>
            <a href="#projects" className="transition-colors hover:text-zinc-50">Projects</a>
            <a href="#contact" className="transition-colors hover:text-zinc-50">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-zinc-400 transition-colors hover:text-zinc-50">
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:tjdguswns1941@gachon.ac.kr" aria-label="Send email" className="text-zinc-400 transition-colors hover:text-zinc-50">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-zinc-800 px-5 py-2 md:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-sm font-semibold text-zinc-400">
            <a href="#working-style" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50">Style</a>
            <a href="#affiliations" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50">Affiliations</a>
            <a href="#tech" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50">Tech</a>
            <a href="#projects" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50">Projects</a>
            <a href="#contact" className="shrink-0 rounded-md px-3 py-2 transition-colors hover:bg-zinc-900 hover:text-zinc-50">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-7xl px-5 pt-40 pb-24 md:pt-32">
        <motion.section initial="hidden" animate="visible" variants={stagger} className="grid min-h-[calc(100vh-12rem)] content-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_26rem]">
          <div>
            <motion.p variants={fadeUp} className="mb-6 font-mono text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              Backend & Cloud Engineer
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-5xl break-keep text-5xl font-black tracking-tight text-zinc-50 sm:text-7xl lg:text-8xl">
              Hyunjoon Sung
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-3xl break-keep text-lg leading-8 text-zinc-300 md:text-xl">
              백엔드와 클라우드 인프라를 중심으로 공부하고 있는 성현준입니다.
              <br />
              안정적으로 운영될 수 있는 서비스 구조를 이해하고 구현하기 위해 꾸준히 경험을 쌓고 있습니다.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-emerald-300 px-5 py-3 font-bold text-zinc-950 transition-colors hover:bg-emerald-200">
                View Projects
              </a>
              <a href="#contact" className="rounded-lg bg-cyan-300 px-5 py-3 font-bold text-zinc-950 transition-colors hover:bg-cyan-200">
                Contact
              </a>
              <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 font-bold text-zinc-100 transition-colors hover:border-zinc-500">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside variants={fadeUp} className="rounded-lg border border-zinc-800 bg-zinc-950/75 p-5 lg:translate-y-12">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <img
                src="/images/profile1.jpg"
                alt="Hyunjoon Sung profile"
                className="profile-photo-primary absolute inset-0 h-full w-full object-cover object-center"
              />
              <img
                src="/images/profile2.jpg"
                alt="Hyunjoon Sung profile alternate"
                className="profile-photo-secondary absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Currently Learning</p>
            <div className="mt-5 space-y-4 break-keep text-sm leading-7 text-zinc-300">
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
          <ul className="relative before:absolute before:bottom-5 before:left-[5px] before:top-5 before:w-px before:bg-zinc-800">
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
                  <h3 className="text-xl font-black uppercase tracking-wide text-zinc-50">{title}</h3>
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
          <div className="grid gap-8 rounded-lg border border-zinc-800 bg-zinc-950/75 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <SectionHeading eyebrow="05 / Contact" title="Contact" />
              <p className="max-w-2xl break-keep text-base leading-7 text-zinc-300">
                프로젝트, 개발, 협업에 관해 함께 이야기해 보고 싶은 내용이 있다면 편하게 연락해 주세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="mailto:tjdguswns1941@gachon.ac.kr" className="inline-flex max-w-full items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-bold text-zinc-950 transition-colors hover:bg-cyan-200">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="break-all text-left">tjdguswns1941@gachon.ac.kr</span>
              </a>
              <a href="https://discord.com/users/399590862193033226" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 font-bold text-zinc-100 transition-colors hover:border-amber-300 hover:text-amber-300">
                <MessageCircle className="h-5 w-5" />
                Discord
              </a>
              <a href="https://github.com/HYUNJOON-SUNG" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 font-bold text-zinc-100 transition-colors hover:border-zinc-500">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} HYUNJOON SUNG.</p>
          <p>tjdguswns1941@gachon.ac.kr · Discord</p>
        </div>
      </footer>
    </div>
  );
}
