import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import App from './App.tsx';
import { CONTACT_MAILTO, FOOTER_NAV, MAIN_NAV, MAIN_CONTENT_ID, SECTION } from './data/content.tsx';

const html = renderToStaticMarkup(<App />);
const attrValues = (attr: string) =>
  [...html.matchAll(new RegExp(`\\s${attr}="([^"]*)"`, 'g'))].map((m) => m[1] ?? '');

describe('페이지 구조', () => {
  const ids = new Set(attrValues('id'));

  it('모든 페이지 내부 링크(#…)의 대상이 존재', () => {
    const anchors = attrValues('href').filter((h) => h.startsWith('#') && h.length > 1);
    expect(anchors.length).toBeGreaterThan(0);
    for (const href of anchors) expect(ids, href).toContain(href.slice(1));
  });

  it('모든 섹션이 렌더되고 내비게이션 대상이 됨', () => {
    for (const id of Object.values(SECTION)) expect(ids).toContain(id);
    for (const item of [...MAIN_NAV, ...FOOTER_NAV]) expect(ids).toContain(item.target);
  });

  it('건너뛰기 링크가 가장 먼저 오고 본문을 가리킴', () => {
    expect(attrValues('href')[0]).toBe(`#${MAIN_CONTENT_ID}`);
    expect(ids).toContain(MAIN_CONTENT_ID);
  });

  it('h1은 하나', () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
  });

  it('이미지는 모두 alt 속성을 가짐', () => {
    const imgs = html.match(/<img\b[^>]*>/g) ?? [];
    for (const img of imgs) expect(img).toMatch(/\salt="/);
  });

  it('새 창 링크는 rel="noopener noreferrer"', () => {
    const blank = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? [];
    for (const a of blank) expect(a).toContain('rel="noopener noreferrer"');
  });

  it('문의 링크는 제목이 인코딩된 mailto', () => {
    expect(CONTACT_MAILTO).toMatch(/^mailto:[^?]+\?subject=[^\s]+$/);
    expect(html).toContain(CONTACT_MAILTO.replace(/&/g, '&amp;'));
  });
});
