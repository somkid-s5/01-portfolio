'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Career from '@/components/Career';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Project } from '@/types/project';
import { Cert } from '@/types/certificate';
import { Reveal } from '@/components/ui/Reveal';

interface HomeClientProps {
  initialProjects: Project[];
  initialCertificates: Cert[];
}

export default function HomeClient({ initialProjects, initialCertificates }: HomeClientProps) {
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
          <Certificates initialCertificates={initialCertificates} />
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
