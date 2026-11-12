import SectionHeading from './SectionHeading.tsx';
import { BENEFITS, SECTION, WHY_HEADING } from '../data/content.tsx';

export default function WhySection() {
  return (
    <section className="why-section section-pad" id={SECTION.why}>
      <div className="container">
        <SectionHeading {...WHY_HEADING} />
        <div className="benefit-grid">
          {BENEFITS.map(({ iconClass, icon, index, title, description }) => (
            <article key={index} className="benefit-card">
              <div className={`benefit-icon ${iconClass}`} aria-hidden="true">
                <span>{icon}</span>
              </div>
              <p className="benefit-index">{index}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
