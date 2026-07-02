"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="~/aditi/skills"
          title="Skills Matrix"
          description="The stack I reach for, grouped the way I actually use it — from model orchestration down to the cloud it runs on."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="rounded-xl border border-line bg-base-900/60 p-5"
            >
              <p className="font-mono text-[11px] text-teal mb-1">
                {group.eyebrow}
              </p>
              <h3 className="font-display font-bold text-ink-50 mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] text-ink-300 border border-line rounded px-2 py-1 hover:border-amber/50 hover:text-amber transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
