import type { ProgramVariant } from '../data/content.tsx';

const DATA_BAR_COUNT = 7;

interface CourseArtProps {
  variant: ProgramVariant;
  tag: string;
}

/** 과정 카드 상단 장식 그래픽 — variant별로 중앙 도형만 다르고 태그·십자 표시는 공통 */
export default function CourseArt({ variant, tag }: CourseArtProps) {
  return (
    <div className={`course-art ${variant}-art`} aria-hidden="true">
      {variant === 'ai' ? (
        <>
          <div className="art-orbit" />
          <div className="art-core">AI</div>
        </>
      ) : (
        <>
          <div className="data-bars">
            {Array.from({ length: DATA_BAR_COUNT }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="data-line" />
        </>
      )}
      <span className="art-tag">{tag}</span>
      <span className="art-cross cross-a">＋</span>
      <span className="art-cross cross-b">＋</span>
    </div>
  );
}
