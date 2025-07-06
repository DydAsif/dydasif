import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { Socials } from '@/components/sections/socials';
import { Contact } from '@/components/sections/contact';
import { ProjectPresentation } from '@/components/sections/project-presentation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <ProjectPresentation />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
