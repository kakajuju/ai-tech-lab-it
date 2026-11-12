import type { ReactNode } from 'react';

/** 페이지 내 섹션 앵커 — 헤더/푸터/CTA 링크가 같은 값을 공유하도록 단일 소스로 관리 */
export const SECTION = {
  home: 'home',
  about: 'about',
  program: 'program',
  why: 'why',
  technology: 'technology',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

export const MAIN_CONTENT_ID = 'main-content';

export const hrefOf = (id: SectionId) => `#${id}`;

export interface NavItem {
  target: SectionId;
  label: string;
}

export const MAIN_NAV: readonly NavItem[] = [
  { target: SECTION.about, label: 'ABOUT' },
  { target: SECTION.program, label: 'PROGRAM' },
  { target: SECTION.technology, label: 'TECHNOLOGY' },
  { target: SECTION.contact, label: 'CONTACT' },
];

export const FOOTER_NAV: readonly NavItem[] = [
  { target: SECTION.program, label: '교육 과정' },
  { target: SECTION.contact, label: '교육 문의' },
];

export type ProgramVariant = 'ai' | 'data';

export interface Program {
  variant: ProgramVariant;
  number: string;
  kicker: string;
  artTag: string;
  title: string;
  description: string;
  tags: readonly string[];
}

export const PROGRAMS: readonly Program[] = [
  {
    variant: 'ai',
    number: '01',
    kicker: 'AI DEVELOPMENT',
    artTag: '01 / INTELLIGENCE',
    title: 'AI 인공지능 개발자 과정',
    description:
      '파이썬 기초부터 머신러닝과 AI 모델 활용까지, 실무형 인공지능 개발 역량을 쌓습니다.',
    tags: ['Python', '머신러닝', 'AI 모델', '실무 프로젝트'],
  },
  {
    variant: 'data',
    number: '02',
    kicker: 'DATA ANALYTICS',
    artTag: '02 / DATA INSIGHT',
    title: '데이터 분석 전문가 과정',
    description:
      '데이터 전처리와 시각화부터 분석 실습까지, 데이터에서 의미 있는 인사이트를 발견합니다.',
    tags: ['Python 분석', '데이터 처리', '시각화', '실무 프로젝트'],
  },
];

export interface Benefit {
  iconClass: string;
  icon: string;
  index: string;
  title: string;
  description: string;
}

export const BENEFITS: readonly Benefit[] = [
  {
    iconClass: 'icon-practical',
    icon: '↗',
    index: '01 / HANDS-ON',
    title: '실무 중심 기술 교육',
    description: '기초 지식에 머물지 않고 실무에 필요한 기술을 단계적으로 익힙니다.',
  },
  {
    iconClass: 'icon-project',
    icon: '▤',
    index: '02 / PROJECT BASED',
    title: '프로젝트 기반 학습',
    description: '직접 프로젝트를 수행하며 기술을 활용하고 문제를 해결하는 힘을 기릅니다.',
  },
  {
    iconClass: 'icon-future',
    icon: '✳',
    index: '03 / NEXT TECHNOLOGY',
    title: '미래 기술 역량 강화',
    description: 'AI와 데이터 기술을 바탕으로 변화하는 산업에 필요한 역량을 개발합니다.',
  },
];

export interface Technology {
  name: string;
  description: string;
}

export const TECHNOLOGIES: readonly Technology[] = [
  { name: 'Python', description: 'PROGRAMMING LANGUAGE' },
  { name: 'Machine Learning', description: 'PREDICTIVE MODELS' },
  { name: 'Deep Learning', description: 'NEURAL NETWORKS' },
  { name: 'Data Analytics', description: 'DATA-DRIVEN INSIGHT' },
  { name: 'AI Technology', description: 'INTELLIGENT SYSTEMS' },
];

const CONTACT_EMAIL = 'hello@aitechlab.example';
const CONTACT_SUBJECT = 'AI TECH LAB 교육 문의';

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`;

export const TAGLINE = 'THE FUTURE IS BUILT WITH AI';

export interface SectionCopy {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}

export const PROGRAM_HEADING: SectionCopy = {
  eyebrow: 'OUR PROGRAM',
  title: '미래 기술을 실무 역량으로',
  description: (
    <>
      처음 시작하는 분도 탄탄한 기초부터
      <br />
      실전 프로젝트까지 경험할 수 있습니다.
    </>
  ),
};

export const WHY_HEADING: SectionCopy = {
  eyebrow: 'WHY AI TECH LAB',
  title: (
    <>
      배움의 방식을 바꾸면
      <br />
      가능성의 크기도 달라집니다.
    </>
  ),
  description: (
    <>
      기초를 넘어 현장으로 이어지는
      <br />
      AI TECH LAB만의 학습 경험을 만나보세요.
    </>
  ),
};
