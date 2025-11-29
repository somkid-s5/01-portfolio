"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Project } from "@/types/project";
import { Cert } from "@/types/certificate";

interface HomeClientProps {
    initialProjects: Project[];
    initialCertificates: Cert[];
}

export default function HomeClient({ initialProjects, initialCertificates }: HomeClientProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const spotlightStyle = {
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden relative">
            {/* --- Background Effects --- */}
            <div
                className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
                style={spotlightStyle}
            ></div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
                <div className="absolute inset-0 matrix-bg pointer-events-none"></div>
            </div>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects projects={initialProjects} />
                <Skills />
                <Career />
                <Certificates initialCertificates={initialCertificates} />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
