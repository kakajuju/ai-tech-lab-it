import CourseArt from './CourseArt.tsx';
import { SECTION, hrefOf, type Program } from '../data/content.tsx';

export default function ProgramCard({
  variant,
  number,
  kicker,
  artTag,
  title,
  description,
  tags,
}: Program) {
  const isData = variant === 'data';

  return (
    <article className="program-card">
      <CourseArt variant={variant} tag={artTag} />
      <div className="course-content">
        <div className={isData ? 'course-kicker blue-kicker' : 'course-kicker'}>
          <span>{kicker}</span>
          <span className="course-number">{number}</span>
        </div>
        <h3>{title}</h3>
        <p className="course-desc">{description}</p>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {/* 두 카드의 링크 텍스트가 같으므로 스크린리더용으로 과정명을 붙여 구분 */}
        <a
          className={isData ? 'course-link blue-link' : 'course-link'}
          href={hrefOf(SECTION.contact)}
          aria-label={`${title} 알아보기`}
        >
          교육 과정 알아보기 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
