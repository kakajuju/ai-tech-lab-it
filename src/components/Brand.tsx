import { SECTION, hrefOf } from '../data/content.tsx';

interface BrandProps {
  className?: string;
  label?: string;
}

/** 헤더·푸터에서 공유하는 로고 링크 */
export default function Brand({ className, label }: BrandProps) {
  return (
    <a
      className={className ? `brand ${className}` : 'brand'}
      href={hrefOf(SECTION.home)}
      aria-label={label}
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        AI TECH <b>LAB</b>
      </span>
    </a>
  );
}
