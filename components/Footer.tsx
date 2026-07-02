import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-700">
          designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-500 hover:text-teal transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-500 hover:text-teal transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-500 hover:text-teal transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
