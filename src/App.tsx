import SkipLink from './components/SkipLink.tsx';
import SiteHeader from './components/SiteHeader.tsx';
import Hero from './components/Hero.tsx';
import Intro from './components/Intro.tsx';
import ProgramSection from './components/ProgramSection.tsx';
import WhySection from './components/WhySection.tsx';
import TechSection from './components/TechSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import SiteFooter from './components/SiteFooter.tsx';
import { MAIN_CONTENT_ID } from './data/content.tsx';

export default function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id={MAIN_CONTENT_ID} tabIndex={-1}>
        <Hero />
        <Intro />
        <ProgramSection />
        <WhySection />
        <TechSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
