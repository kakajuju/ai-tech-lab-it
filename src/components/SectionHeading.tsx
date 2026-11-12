import type { SectionCopy } from '../data/content.tsx';

export default function SectionHeading({ eyebrow, title, description }: SectionCopy) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
