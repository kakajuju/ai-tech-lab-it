import Brand from './Brand.tsx';
import { FOOTER_NAV, TAGLINE, hrefOf } from '../data/content.tsx';

const COPYRIGHT_YEAR = 2026;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Brand className="footer-brand" />
        <p>AI와 디지털 기술을 배우는 전문 교육 기관</p>
        <nav className="footer-links" aria-label="푸터 메뉴">
          {FOOTER_NAV.map(({ target, label }) => (
            <a key={target} href={hrefOf(target)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>{TAGLINE}</span>
        <span>© {COPYRIGHT_YEAR} AI TECH LAB. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
