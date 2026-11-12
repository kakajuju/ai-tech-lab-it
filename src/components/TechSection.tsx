import { SECTION, TECHNOLOGIES } from '../data/content.tsx';

const formatIndex = (i: number) => String(i + 1).padStart(2, '0');

export default function TechSection() {
  return (
    <section className="tech-section section-pad" id={SECTION.technology}>
      <div className="container tech-inner">
        <div className="tech-copy">
          <p className="eyebrow">TECHNOLOGY</p>
          <h2>
            기술로 연결하는
            <br />
            <span className="text-gradient">더 넓은 가능성.</span>
          </h2>
          <p>
            하나씩 익힌 기술은 서로 연결되어 더 큰 가능성을 만듭니다. 핵심 기술을 배우고 직접 활용해
            보세요.
          </p>
        </div>
        <ol className="tech-list">
          {TECHNOLOGIES.map(({ name, description }, i) => (
            <li key={name} className="tech-item">
              <span className="tech-index">{formatIndex(i)}</span>
              <b>{name}</b>
              <span className="tech-desc">{description}</span>
              <span className="tech-arrow" aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
