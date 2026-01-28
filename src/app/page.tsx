'use client';

import { ContentManager } from '@/lib/services/ContentManager';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  // OOP: Get instance of ContentManager
  const contentManager = ContentManager.getInstance();
  
  const profile = contentManager.getProfile();
  const services = contentManager.getServices();
  const projects = contentManager.getProjects();

  return (
    <main className="min-h-screen">
      <Hero profile={profile} />
      <Services services={services} />
      <Projects projects={projects} />
      <Contact profile={profile} />
      <Footer />
    </main>
  );
}
