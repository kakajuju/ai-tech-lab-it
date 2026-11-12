import HeroVisual from './HeroVisual.tsx';
import { SECTION, TAGLINE, hrefOf } from '../data/content.tsx';

export default function Hero() {
  return (
    <section className="hero" id={SECTION.home}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> AI &amp; DIGITAL TECHNOLOGY ACADEMY
          </p>
          <h1>
            AI 시대를 선도하는
            <br />
            <span>혁신의 기술</span>을 시작하세요
          </h1>
          <p className="hero-description">
            인공지능과 데이터 기술의 기초부터 실무 프로젝트까지.
            <br />
            AI TECH LAB에서 미래를 설계하세요.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={hrefOf(SECTION.program)}>
              교육 과정 확인하기 <span aria-hidden="true">→</span>
            </a>
            <a className="button button-ghost" href={hrefOf(SECTION.contact)}>
              교육 상담 문의
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" aria-hidden="true" /> {TAGLINE}
          </div>
        </div>
        <HeroVisual />
        <a className="scroll-cue" href={hrefOf(SECTION.about)}>
          <span aria-hidden="true" /> SCROLL TO EXPLORE
        </a>
      </div>
    </section>
  );
}
