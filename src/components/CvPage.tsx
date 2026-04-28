import { Approach } from "./Approach";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HowIWork } from "./HowIWork";
import { Impact } from "./Impact";
import { Nav } from "./Nav";
import { SelectedSystems } from "./SelectedSystems";
import { content as allContent } from "@/content";
import type { Locale } from "@/lib/locale";

interface CvPageProps {
  locale: Locale;
}

export function CvPage({ locale }: CvPageProps) {
  const c = allContent[locale];
  return (
    <>
      <Nav locale={locale} copy={c.nav} status={c.hero.status} />
      <main id="top">
        <Hero locale={locale} copy={c.hero} />
        <Approach copy={c.approach} />
        <Impact copy={c.impact} />
        <Experience copy={c.experience} />
        <HowIWork copy={c.howIWork} />
        <SelectedSystems copy={c.systems} />
        <Contact locale={locale} copy={c.contact} />
      </main>
      <Footer copy={c.footer} />
    </>
  );
}
