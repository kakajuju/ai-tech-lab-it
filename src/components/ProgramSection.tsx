import SectionHeading from './SectionHeading.tsx';
import ProgramCard from './ProgramCard.tsx';
import { PROGRAMS, PROGRAM_HEADING, SECTION } from '../data/content.tsx';

export default function ProgramSection() {
  return (
    <section className="program-section section-pad" id={SECTION.program}>
      <div className="container">
        <SectionHeading {...PROGRAM_HEADING} />
        <div className="program-grid">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.variant} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
