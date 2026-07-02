"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-base-950/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-ink-50 tracking-tight"
        >
          <span className="text-teal">~</span>/{profile.name.toLowerCase()}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink-300 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-300 hover:text-teal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-300 hover:text-teal transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="hidden sm:flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-ink-200 hover:border-teal hover:text-teal transition-colors"
          >
            <FileDown size={14} />
            CV
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
