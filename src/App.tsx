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
  overview: string | string[];
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
    subtitle: 'WFK IT 해외봉사단 · 인도네시아 IT 교육봉사',
    date: '2025.08',
    url: 'https://www.instagram.com/wfk_codo/',
  },
  {
    icon: Users,
    title: 'Leets 6th',
    subtitle: '교내 IT 동아리 · 백엔드 파트',
    date: '2025.09 - 2026.02',
    url: 'https://www.leets.land/',
  },
  {
    icon: Server,
    title: 'UMC 10th',
    subtitle: '대학 연합 IT 동아리 · Spring Boot 시니어 코스 / 스터디 리더',
    date: '2026.03 - PRESENT',
    url: 'https://umc.makeus.in/',
  },
];

const techCategories: TechCategory[] = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['Java', 'Spring Boot'],
    accent: 'border-emerald-200 bg-emerald-50/70 text-emerald-800',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MySQL'],
    accent: 'border-teal-200 bg-teal-50/70 text-teal-800',
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    skills: ['AWS', 'Docker', 'GitHub Actions'],
    accent: 'border-lime-200 bg-lime-50/70 text-lime-800',
  },
  {
    icon: Terminal,
    title: 'Tools',
    skills: ['Notion', 'GitHub', 'Discord'],
    accent: 'border-stone-200 bg-stone-50/80 text-stone-700',
  },
];

const workingStyles: WorkingStyle[] = [
  {
    icon: Calendar,
    title: '미리 준비하고 끝까지 책임집니다',
    description: '맡은 역할이 팀 전체 일정에 영향을 준다는 점을 중요하게 생각합니다. 작업을 미리 나누어 진행하고, 마지막에 급하게 처리하기보다 여유 있게 완성도를 점검하며 마무리합니다.',
  },
  {
    icon: MessageCircle,
    title: '소통으로 함께 해결합니다',
    description: '작업 중 막히는 부분이나 진행 상황을 빠르게 공유하고, 동료의 관점과 피드백을 반영해 해결 방향을 조율합니다. 팀이 같은 맥락을 보고 움직일 수 있도록 소통하는 방식을 중요하게 생각합니다.',
  },
  {
    icon: Server,
    title: '서비스 흐름을 구조적으로 봅니다',
    description: '기능 하나를 구현할 때도 요청과 응답, 데이터 흐름, 예외 상황이 서비스 전체에 어떤 영향을 주는지 함께 고려합니다. 안정적으로 운영될 수 있는 구조를 만드는 데 관심을 두고 있습니다.',
  },
];

const projectGroups: ProjectGroup[] = [
  {
    title: 'Team Projects',
    icon: Users,
    accent: 'text-emerald-700',
    projects: [
      {
        title: 'Emoji-Diary',
        subtitle: '가천대학교 p-실무 프로젝트 (우수상)',
        date: '2025.11',
        description: 'AI를 활용한 일기 감정 분석 및 피드백 서비스.',
        image: '/images/emoji-diary.png',
        detail: {
          overview: [
            'AI 기반 감정 분석 및 맞춤형 그림일기 생성 서비스.',
            'KoBERT 기반 7가지 감정 카테고리 분류.',
            'Gemini 기반 그림일기, 공감 피드백, 추천 콘텐츠 제공.',
            'Spring Boot 비즈니스 서버와 FastAPI AI 서버 분리 구조.',
            '교내 p-실무프로젝트 우수상 수상.',
          ],
          responsibilities: [
            '프로젝트 요구사항 구체화 및 기능 범위 정리.',
            '사용자/관리자 도메인 ERD 및 API 명세 설계/문서화.',
            '관리자 도메인 백엔드 구현.',
          ],
          implementations: [
            '관리자 대시보드 통계 API 구현.',
            '가입자 수, 일기 작성 추이, 위험 레벨 분포 집계 구현.',
            '에러 로그 필터링, 페이징, 상세 조회 API 구현.',
            '스택 트레이스 기반 오류 원인 추적 흐름 구성.',
          ],
          techStack: ['Spring Boot', 'FastAPI', 'Java', 'Python', 'MariaDB', 'Spring Security'],
          lessons: '초기 기획 단계에서 추상적인 요구사항을 사용자/관리자 기능 범위로 구체화하고, 이를 ERD와 API 명세로 문서화하면서 기능 구현 전에 서비스 전체 데이터 흐름을 먼저 정리하는 중요성을 체감했습니다. 특히 사용자 기능과 관리자 기능이 같은 데이터를 서로 다른 관점에서 사용하는 구조를 설계하며, 초기 데이터 모델링과 API 응답 형식이 이후 개발 생산성과 협업 방식에 큰 영향을 준다는 점을 배웠습니다. 또한 관리자 통계 집계와 에러 로그 추적 기능을 구현하면서 단순히 데이터를 저장하고 조회하는 것을 넘어, 운영자가 서비스 상태를 파악하고 문제 원인을 추적할 수 있도록 데이터 가시성과 유지보수성을 함께 고려하는 백엔드 개발 관점을 기를 수 있었습니다.',
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
          overview: [
            '목표 예산 관리 및 지출 분석 REST API 서버.',
            '30일 예산 기간 기반 활성/완료 상태 관리.',
            'Kakao OAuth 2.0 및 JWT 기반 인증 구조.',
            '예산 대비 지출 비율, 카테고리별 소비 분포, 캘린더 기반 통계 제공.',
          ],
          responsibilities: [
            '백엔드 파트 리드.',
            '프로젝트 초기 구조 및 개발 방향 수립.',
            'ERD 및 API 명세 설계/문서화.',
            '코드 컨벤션, Git Flow, 초기 프로젝트 세팅 정리.',
            '인증/인가, 회원 관리, 예산 기간 도메인 구현.',
          ],
          implementations: [
            'Kakao OAuth 2.0 인가 코드 기반 로그인 구현.',
            'JWT Access/Refresh Token 발급, 저장, 재발급, 로그아웃 구현.',
            '마이페이지 조회, 이름 수정, 회원 탈퇴 및 Kakao 연결 해제 구현.',
            '30일 단위 예산 기간 생성 및 활성/완료 예산 조회 구현.',
            '예산 대비 지출 합계, 절약/초과 금액, 카테고리별 지출 집계 구현.',
          ],
          techStack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Docker', 'AWS'],
          lessons: 'PM, 디자이너, 프론트엔드, 백엔드가 함께한 협업 팀 프로젝트에서 백엔드 파트 리드로 참여하며, 기획 단계의 요구사항을 ERD와 API 명세, 코드 컨벤션, Git Flow 같은 개발 기준으로 구체화하는 경험을 했습니다. 이 과정에서 초기 설계와 문서화가 단순한 정리 작업이 아니라, 팀원들이 같은 기준으로 기능을 구현하고 프론트엔드와 안정적으로 연동하기 위한 협업 기반이라는 점을 체감했습니다. 또한 Kakao OAuth 2.0과 JWT 기반 인증을 구현하며 외부 인증 제공자와의 연동 흐름, Access/Refresh Token 발급과 재발급, 로그아웃 처리 등 인증/인가 구조를 실제 서비스 흐름 안에서 이해할 수 있었습니다. 예산 기간의 활성/완료 상태, 예산 대비 지출 합계, 절약/초과 금액 계산처럼 단순 CRUD를 넘어선 도메인 규칙을 구현하면서 비즈니스 로직을 데이터 모델과 API 응답에 자연스럽게 녹이는 설계 역량도 키웠습니다.',
        },
        role: 'Backend Development',
        repo: 'https://github.com/Leets-Official/MoniFit-BE',
        tags: ['목표 예산', '지출 분석', '소비 습관', '소셜 로그인', '대시보드'],
        slug: 'monifit',
      },
      {
        title: 'After-Buy',
        subtitle: '가천대학교 졸업 프로젝트',
        date: '2026.03 - 2026.06',
        description: 'MSA 기반으로 전자제품의 구매 정보와 보증기간을 관리하고, OCR과 알림을 통해 사후 관리를 돕는 서비스.',
        image: '/images/after-buy.png',
        detail: {
          overview: [
            '전자제품 구매 정보, 영수증, 보증기간을 관리하고 OCR과 푸시 알림으로 사후 관리를 지원하는 서비스.',
            'Auth, Device, Notification, Admin API와 사용자 앱, 관리자 웹, OCR Lambda, Infra 레포로 분리된 MSA 구조.',
            'Nginx API Gateway와 Docker Compose를 기반으로 백엔드 서비스를 EC2의 단일 네트워크에서 운영.',
            'Amazon Textract 기반 OCR Lambda로 모델명, 시리얼 번호, 영수증 구매 정보를 추출해 Device Service와 연동.',
          ],
          responsibilities: [
            'MSA 기반 전체 시스템 아키텍처와 서비스 간 요청 흐름 설계.',
            '비용과 자원 제약을 고려한 단일 EC2 기반 MSA 운영 인프라 설계 및 구성.',
            'GitHub Actions와 GHCR을 이용한 서비스별 Docker 이미지 빌드 및 dev/prod 배포 파이프라인 구축.',
            'OCR Lambda 배포와 Device Service 연동에 필요한 S3, Textract, Lambda Function URL, 내부 Secret 환경 구성.',
          ],
          implementations: [
            '4개 Spring Boot 서비스(Auth, Device, Notification, Admin)를 독립 컨테이너로 실행하고 Nginx에서 각 API 경로로 라우팅.',
            'develop/main 브랜치에 따라 dev/latest 이미지를 GHCR에 푸시하고 EC2에서 대상 서비스만 pull 및 재기동하도록 GitHub Actions 워크플로우 구성.',
            '공통 Docker Compose와 dev/prod/local 오버라이드 파일을 분리해 개발 서버, 운영 서버, 로컬 실행 환경을 구분.',
            'Let\'s Encrypt 인증서 마운트, HTTP to HTTPS 리다이렉트, 헬스 체크, 컨테이너 로그 로테이션을 포함한 Nginx 운영 설정 작성.',
            'OCR Lambda 패키징 및 배포 워크플로우를 구성하고 Textract 결과를 모델명, 시리얼 번호, 구매일/가격/구매처 파서로 분리.',
            '내부 통신용 Secret과 S3/Lambda/Textract/외부 API 환경변수를 각 서비스 실행 환경에 주입.',
          ],
          techStack: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Amazon Textract', 'Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'GHCR', "Let's Encrypt"],
          lessons: 'MSA 구조에서는 기능을 서비스별로 나누는 것뿐 아니라, 각 서비스가 어떤 경로로 요청을 받고 어떤 방식으로 배포되는지까지 함께 설계되어야 한다는 점을 배웠습니다. 실제 운영 환경이라면 서비스별 인스턴스 분리, 로드 밸런서, 컨테이너 오케스트레이션 등을 고려하는 것이 일반적이지만, 학부 졸업 프로젝트에서는 비용과 자원 제약이 있어 단일 EC2에서 Docker Compose로 여러 서비스를 운영하는 절충안을 선택했습니다. 대신 서비스 책임과 배포 단위는 분리하고, Nginx를 API Gateway처럼 구성해 MSA의 구조적 경계는 유지하려고 했습니다. 또한 GitHub Actions와 GHCR 기반 배포 자동화, OCR Lambda와 S3/Textract 연동을 구성하면서 여러 레포와 서비스가 하나의 시스템처럼 동작하도록 아키텍처, 라우팅, 배포 흐름을 함께 설계하는 경험을 했습니다.',
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
    accent: 'text-teal-700',
    projects: [
      {
        title: 'Gachon Dorm Matching',
        subtitle: '개인 프로젝트',
        date: '2025.11',
        description: 'MSA 기반 기숙사 룸메이트 매칭 및 실시간 채팅 서비스.',
        image: '/images/gachon-dorm-matching.png',
        detail: {
          overview: [
            '가천대학교 학생 대상 기숙사 룸메이트 매칭 및 실시간 채팅 플랫폼.',
            '기숙사, 성별, MBTI, 생활 패턴, 선호도 기반 룸메이트 모집 게시글 작성 및 필터링 제공.',
            '매칭 신청, 수락, 거절, 자동 마감, 실시간 채팅과 알림까지 이어지는 사용자 흐름 구현.',
            'User, Match, Chat, Frontend, MySQL, Redis, Nginx를 Docker Compose로 구성한 MSA 실행 환경.',
            'Nginx에서 프론트엔드, REST API, Socket.IO WebSocket 요청을 각 서비스로 라우팅.',
          ],
          responsibilities: [
            '서비스 기획, 화면 흐름 정의, 데이터베이스 스키마 설계.',
            '회원/프로필, 게시글/매칭, 실시간 채팅 도메인을 서비스 단위로 분리한 MSA 구조 설계.',
            'Node.js/Express, FastAPI, Socket.IO 기반 백엔드 서비스와 React 프론트엔드 구현.',
            'Docker Compose 기반 로컬 실행 환경과 Nginx 리버스 프록시/API 라우팅 구성.',
          ],
          implementations: [
            'User Service에서 가천대 이메일 도메인 검증, bcrypt 비밀번호 암호화, JWT 로그인, 회원가입 시 Users/Profiles 트랜잭션 저장 구현.',
            'Match Service에서 모집 게시글 CRUD, 기숙사/성별/모집 상태 필터링, 게시글 상세 조회수 증가, 사용자별 게시글 통계 조회 구현.',
            '매칭 신청/수락/거절 흐름과 성별 일치 검증을 구현하고, 수락 시 게시글 자동 마감 및 다른 신청자 자동 거절 로직 구성.',
            'Chat Service에서 Socket.IO 기반 1:1 채팅, 채팅방 중복 방지, 첫 메시지 전송 시 채팅방 생성, 읽지 않은 메시지 수와 알림 읽음 처리 구현.',
            'React와 Material-UI 기반 프론트엔드에서 인증, 프로필, 게시글, 매칭, 채팅 화면과 API/WebSocket 연동 구현.',
            'Users, Profiles, Posts, MatchRequests, ChatRooms, ChatMessages, Notifications 테이블과 FK, Unique 제약, 조회 인덱스 설계.',
            'Docker Compose로 각 서비스를 동일 네트워크에 구성하고 Nginx에서 프론트엔드, REST API, WebSocket 요청을 라우팅.',
          ],
          techStack: ['Node.js', 'Express', 'Python', 'FastAPI', 'React', 'Material-UI', 'MySQL', 'Redis', 'Socket.IO', 'Docker', 'Docker Compose', 'Nginx'],
          lessons: '개인 프로젝트로 서비스 기획부터 프론트엔드, 백엔드, 데이터베이스, Docker 실행 환경까지 직접 구성하면서 기능 단위가 아니라 도메인 책임 단위로 시스템을 나누는 기준을 경험했습니다. 인증/프로필, 게시글/매칭, 실시간 채팅을 각각 다른 서비스로 분리하면서 각 서비스가 어떤 데이터를 소유하고 어떤 API로 연결되어야 하는지 고민할 수 있었습니다. 특히 Socket.IO 기반 실시간 채팅을 구현하며 채팅방 생성, 메시지 저장, 읽음 처리, 알림 흐름을 REST API와 WebSocket 이벤트가 함께 동작하도록 설계하는 경험을 했습니다. 또한 HTTP API와 WebSocket 요청을 Nginx에서 함께 라우팅하고, Docker Compose 네트워크 안에서 컨테이너 이름으로 통신하도록 구성하며 로컬 환경에서도 실제 서비스 운영 구조를 고려한 배치 방식을 익혔습니다. 사용자 프로필, 게시글, 매칭 신청, 채팅방, 알림이 서로 이어지는 흐름을 구현하면서 기능 구현 전에 데이터 모델과 도메인 관계를 먼저 정리하는 것이 이후 API 설계와 구현 안정성에 큰 영향을 준다는 점도 배웠습니다.',
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
    accent: 'text-lime-700',
    projects: [
      {
        title: '홍대병동',
        subtitle: '10th NE-O-RDINARY HACKATHON',
        date: '2026.05',
        description: '비주류 음악을 발굴하고 기록하며, 시간이 지나며 해당 음악의 성장률을 확인할 수 있는 음악 큐레이션 서비스.',
        image: '/images/hongdae-byeongdong.png',
        detail: {
          overview: [
            '비주류 음악을 발견하고 DIG로 기록 및 공유하는 음악 큐레이션 서비스.',
            '사용자 인증, 음악 검색, DIG 생성/상세 조회/목록 조회/검색 API를 제공하는 Spring Boot 백엔드 서버.',
            'YouTube API로 음악 영상을 검색하고 조회수, 업로드일, 썸네일 등 서비스에 필요한 메타데이터 수집.',
            'Gemini API로 YouTube 원본 제목과 채널명을 분석해 아티스트명과 곡 제목을 정제.',
            'DIG 생성 시 발굴 당시 조회수를 저장하고 이후 현재 조회수와 비교해 성장률을 갱신하는 구조.',
          ],
          responsibilities: [
            '음악 검색 및 DIG 도메인 백엔드 API 구현.',
            'YouTube API와 Gemini API를 활용한 음악 메타데이터 수집/정제 흐름 설계.',
            'DIG 생성, 조회, 검색, 성장률 갱신에 필요한 데이터 흐름 및 예외 처리 구현.',
            'GitHub Actions, Docker, GHCR, EC2 기반 배포 자동화 구성.',
          ],
          implementations: [
            'YouTube Search API와 Videos API를 조합해 음악 영상 검색 결과, 조회수, 업로드일, 썸네일을 하나의 응답으로 반환.',
            'Gemini API에 시스템 지시문과 JSON 응답 형식을 지정해 YouTube 제목/채널명에서 아티스트명과 곡 제목을 정제.',
            'DIG 생성 시 사용자, 아티스트, 곡 정보를 연결하고 중복 DIG 생성을 방지하는 저장 흐름 구현.',
            '내 DIG 목록 페이징, DIG 상세 조회, 키워드 기반 검색, 성장률 갱신 API 구현.',
            '발굴 당시 조회수와 현재 조회수를 비교해 성장률, 경과 개월 수, 배지, 설명 문구를 계산해 반환.',
            '테스트, Docker 이미지 빌드, GHCR 푸시, EC2 컨테이너 교체까지 이어지는 GitHub Actions 배포 workflow 구성.',
          ],
          techStack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Swagger', 'YouTube API', 'Gemini API', 'Docker', 'GitHub Actions', 'GHCR', 'EC2'],
          lessons: '해커톤이라는 짧은 일정 안에서 외부 API 기반 기능을 서비스 흐름에 맞게 빠르게 붙이고, 프론트엔드가 바로 사용할 수 있는 응답 형태로 정제하는 경험을 했습니다. 특히 YouTube 검색 결과처럼 원본 제목과 채널명이 일정하지 않은 데이터는 그대로 사용하기 어렵기 때문에, Gemini API를 활용하더라도 명확한 시스템 지시문, JSON 응답 형식, 실패 처리 기준을 함께 설계해야 한다는 점을 배웠습니다. 또한 DIG의 발굴 당시 조회수와 현재 조회수를 비교해 성장률을 계산하는 흐름을 구현하면서, 외부 API에서 가져온 순간의 데이터를 서비스의 도메인 가치로 연결하는 방법을 고민할 수 있었습니다. 검색 기능 구현에서 끝나지 않고 Docker 이미지 빌드, GHCR 배포, EC2 컨테이너 교체까지 자동화하면서 해커톤 환경에서도 기능 구현 이후 배포까지 이어지는 백엔드 개발 흐름을 경험했습니다.',
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
      <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-stone-950 md:text-5xl">{title}</h2>
    </motion.div>
  );
}

function ActivityRow({ icon: Icon, title, subtitle, date, url }: ComponentProps<Activity>) {
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

function TechCard({ icon: Icon, title, skills, accent }: ComponentProps<TechCategory>) {
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

function WorkingStyleCard({ icon: Icon, title, description }: ComponentProps<WorkingStyle>) {
  return (
    <motion.article variants={fadeUp} className="rounded-lg border border-stone-200 bg-white/80 p-5 shadow-sm shadow-stone-200/70">
      <Icon className="mb-5 h-6 w-6 text-emerald-700" />
      <h3 className="text-lg font-bold text-stone-950">{title}</h3>
      <p className="mt-3 break-keep text-sm leading-7 text-stone-700">{description}</p>
    </motion.article>
  );
}

const detailFields = ['프로젝트 개요', '담당 역할', '주요 구현', '사용 기술', '배운 점'] as const;

function ProjectCard({ title, subtitle, date, description, image, role, repo, slug }: ComponentProps<Project>) {
  return (
    <motion.article variants={fadeUp} className="grid gap-6 rounded-lg border border-stone-200 bg-white/85 p-5 shadow-sm shadow-stone-200/70 transition-colors hover:border-emerald-300 md:p-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <h4 className="break-keep text-2xl font-black tracking-tight text-stone-950">{title}</h4>
          <p className="mt-2 break-keep text-sm font-semibold text-emerald-700">{subtitle}</p>
        </div>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} repository`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition-colors hover:border-emerald-500 hover:text-emerald-700"
        >
          <Github className="h-5 w-5" />
        </a>
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
        <a href={`/projects/${slug}`} className="ml-auto rounded-md bg-emerald-800 px-3 py-1.5 font-sans text-xs font-bold text-white transition-colors hover:bg-emerald-700">
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

          <motion.div variants={fadeUp} className="mt-8">
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-5 py-3 font-bold text-stone-800 transition-colors hover:border-emerald-500 hover:text-emerald-800">
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

export default function App() {
  const projectPathMatch = window.location.pathname.match(/^\/projects\/([^/]+)$/);
  const selectedProject = projectPathMatch
    ? allProjects.find((project) => project.slug === projectPathMatch[1])
    : undefined;

  if (projectPathMatch) {
    return selectedProject ? <ProjectDetailPage project={selectedProject} /> : <NotFoundPage />;
  }

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
