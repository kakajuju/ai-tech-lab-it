import Brand from './Brand.tsx';
import { MAIN_NAV, SECTION, hrefOf } from '../data/content.tsx';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand label="AI TECH LAB 홈" />
        <nav className="main-nav" aria-label="주요 메뉴">
          {MAIN_NAV.map(({ target, label }) => (
            <a key={target} href={hrefOf(target)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={hrefOf(SECTION.contact)}>
          교육 문의 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
