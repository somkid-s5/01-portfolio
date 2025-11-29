"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/lib/siteConfig";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Only track sections if we are on the home page
            if (window.location.pathname === '/') {
                const sections = navLinks
                    .filter(link => link.href.startsWith('/#'))
                    .map((link) => link.href.substring(2)); // Remove '/#'

                const current = sections.find((section) => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top >= 0 && rect.top <= 300;
                    }
                    return false;
                });
                if (current) setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "py-4 glass-panel border-b-0 bg-black/50" : "py-4 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
                    <span className="text-emerald-500 font-mono group-hover:animate-pulse">_</span>
                    SMART
                    <span className="text-lime-400">.SYS</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((item) => {
                        const isHashLink = item.href.startsWith('/#');
                        const sectionId = isHashLink ? item.href.substring(2) : item.href.substring(1);
                        // Simple active check: if hash link, check activeSection. If page link, check pathname (needs usePathname hook, but for now let's keep it simple or add usePathname)
                        // Actually, let's just check if activeSection matches for hash links.
                        // For page links, we can check if window.location.pathname starts with the href (in a real app use usePathname)

                        const isActive = isHashLink
                            ? activeSection === sectionId
                            : false; // We'll rely on Next.js Link for page navigation, but here we are using <a> tags. 
                        // Let's stick to <a> for now as requested, but we should probably use Next.js <Link> for internal routing.

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`text-sm uppercase tracking-widest font-mono hover:text-emerald-400 transition-colors duration-300 ${isActive
                                    ? "text-emerald-400"
                                    : "text-gray-500"
                                    }`}
                            >
                                <span className="text-emerald-500/50 mr-1">&gt;</span>
                                {item.label}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
