"use client";

import { motion } from "framer-motion";
import { FileDown, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="~/aditi/about" title="About & Experience" />

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-ink-300 text-base md:text-lg leading-relaxed">
              {profile.summary}
            </p>

            <a
              href={profile.resumeHref}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-base-950 hover:bg-amber-600 transition-colors"
            >
              <FileDown size={15} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-line bg-base-900/60 p-5">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={16} className="text-teal" />
                <p className="font-mono text-xs text-teal">education</p>
              </div>
              <p className="font-display font-bold text-ink-50">
                {profile.education.degree}
              </p>
              <p className="text-sm text-ink-500">
                {profile.education.school} · {profile.education.period}
              </p>
            </div>

            {profile.experience.map((exp) => (
              <div
                key={exp.org}
                className="rounded-xl border border-line bg-base-900/60 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-amber" />
                  <p className="font-mono text-xs text-amber">experience</p>
                </div>
                <p className="font-display font-bold text-ink-50">
                  {exp.role} · {exp.org}
                </p>
                <p className="text-sm text-ink-500 mb-2">{exp.period}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-ink-300 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
