import { SECTION, hrefOf } from '../data/content.tsx';

export default function Intro() {
  return (
    <section className="intro section-pad" id={SECTION.about}>
      <div className="container intro-inner">
        <div>
          <p className="eyebrow">ABOUT AI TECH LAB</p>
          <h2>
            배움이 실력이 되고,
            <br />
            <span className="text-gradient">실력이 미래가 되는 곳.</span>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            기술을 아는 것에서 멈추지 않고 직접 만들고 해결하는 힘까지. AI TECH LAB은 현장에서
            필요한 역량을 프로젝트 중심으로 차근차근 키우는 IT 전문 교육 기관입니다.
          </p>
          <a className="text-link" href={hrefOf(SECTION.why)}>
            우리의 교육 방식 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
