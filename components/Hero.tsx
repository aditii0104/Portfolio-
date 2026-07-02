"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

// Nodes/edges for the faint agent-graph backdrop — a quiet nod to the
// multi-agent systems (Data-Swarm) this person actually builds.
const NODES = [
  { x: 70, y: 60 }, { x: 230, y: 40 }, { x: 400, y: 90 },
  { x: 560, y: 50 }, { x: 150, y: 180 }, { x: 340, y: 220 },
  { x: 520, y: 200 }, { x: 90, y: 300 }, { x: 460, y: 320 },
];
const EDGES = [
  [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [5, 6], [2, 6], [4, 7], [5, 8],
];

function AgentGraphBackdrop() {
  return (
    <svg
      viewBox="0 0 620 380"
      className="absolute right-0 top-0 h-full w-full max-w-3xl opacity-[0.18] md:opacity-[0.22]"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#5EEAD4"
          strokeWidth="1"
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 5 : 3.5}
          fill={i % 3 === 0 ? "#F2C94C" : "#5EEAD4"}
          className="animate-pulse-soft"
          style={{ animationDelay: `${(i % 5) * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

function TypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    const speed = deleting ? 40 : 65;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % profile.roles.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-teal">
      {text}
      <span className="inline-block w-[2px] h-6 md:h-8 bg-teal ml-1 align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid-fade pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <AgentGraphBackdrop />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs sm:text-sm text-ink-500 mb-6 flex items-center gap-2"
        >
          <span className="text-amber">agent@aditi</span>
          <span>:~$</span>
          <span className="text-ink-300">whoami</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink-50 max-w-3xl text-balance"
        >
          {profile.name}, building as a{" "}
          <span className="block mt-1">
            <TypedRoles />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          className="mt-6 max-w-xl text-ink-300 text-base md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-500"
        >
          <MapPin size={13} className="text-ink-500" />
          {profile.location} · open to in-person & hybrid roles
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 font-mono text-sm font-medium text-base-950 hover:bg-teal-600 transition-colors"
          >
            View Projects
            <ArrowDown size={15} />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink-200 hover:border-teal hover:text-teal transition-colors"
          >
            <FileDown size={15} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
