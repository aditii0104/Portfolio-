"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col rounded-xl border border-line bg-base-900/60 p-6 hover:border-teal/40 transition-colors"
    >
      {project.featured && (
        <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-amber px-2.5 py-0.5 font-mono text-[11px] font-medium text-base-950">
          <Sparkles size={11} />
          flagship build
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink-50">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-[11px] text-teal border border-teal/30 rounded-full px-2 py-0.5">
          {project.category}
        </span>
      </div>

      <p className="mt-3 text-sm text-ink-500 leading-relaxed">
        <span className="text-ink-300">Problem: </span>
        {project.problem}
      </p>

      <p className="mt-3 text-sm text-ink-300 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-ink-300 bg-base-800 border border-line rounded px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 pt-4 border-t border-line">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-300 hover:text-teal transition-colors"
          >
            <Github size={14} />
            Source
          </a>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-300 hover:text-teal transition-colors"
          >
            {project.demoLabel ?? "Live Demo"}
            <ArrowUpRight size={13} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-700">
            {project.demoLabel ?? "Demo"} — coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
