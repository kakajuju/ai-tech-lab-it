import { MAIN_CONTENT_ID } from '../data/content.tsx';

export default function SkipLink() {
  return (
    <a className="skip-link" href={`#${MAIN_CONTENT_ID}`}>
      본문 바로가기
    </a>
  );
}
