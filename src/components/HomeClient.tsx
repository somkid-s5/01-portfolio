'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Career from '@/components/sections/Career';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { Project } from '@/types/project';
import { Certification } from '@/types/certification';
import { Reveal } from '@/components/ui/Reveal';

interface HomeClientProps {
  initialProjects: Project[];
  initialCertifications: Certification[];
}

export default function HomeClient({ initialProjects, initialCertifications }: HomeClientProps) {
  return (
    <div className="min-h-screen text-white selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden relative">
      <main className="pb-24 md:pb-0">
        <Reveal width="100%">
          <Hero />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <About />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Projects projects={initialProjects} />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Career />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Certifications initialCertifications={initialCertifications} />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Skills />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
