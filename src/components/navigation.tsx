"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/70 backdrop-blur-xl shadow-glow" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-lg font-semibold text-white">
          <span className="text-primary" aria-hidden>
            &gt;
          </span>
          SMART<span className="text-accent-lime">.SYS</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-text-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="secondary"
            href="#contact"
            className="text-xs uppercase tracking-wide"
            aria-label="Jump to contact form"
          >
            Contact
          </Button>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden">
          <div className="mx-4 mb-4 space-y-2 rounded-xl border border-white/10 bg-black/70 p-4 shadow-card">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" className="w-full" href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
