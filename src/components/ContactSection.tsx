import { CONTACT_MAILTO, SECTION } from '../data/content.tsx';

export default function ContactSection() {
  return (
    <section className="contact-section" id={SECTION.contact}>
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-inner">
        <p className="eyebrow">YOUR FUTURE STARTS HERE</p>
        <h2>
          다음 가능성,
          <br />
          <span>지금 시작하세요.</span>
        </h2>
        <p>AI 기술 전문가로 성장할 준비가 되셨나요?</p>
        <a className="button button-primary contact-button" href={CONTACT_MAILTO}>
          교육 과정 문의하기 <span aria-hidden="true">↗</span>
        </a>
        <small>이 링크는 이메일 문의 초안을 엽니다. 실제 접수 서버는 연결되어 있지 않습니다.</small>
      </div>
    </section>
  );
}
