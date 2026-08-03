import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
