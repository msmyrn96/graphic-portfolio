"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import { education, publications } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <SectionLabel>Education & Research</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text)" }}>
          Academic{" "}
          <span className="gradient-text">background</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Degrees
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-5 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg mt-0.5" style={{ background: "rgba(129,140,248,0.1)" }}>
                    <GraduationCap size={16} style={{ color: "var(--accent-1)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight mb-1" style={{ color: "var(--text)" }}>
                      {edu.degree}
                    </p>
                    <p className="text-xs mb-1" style={{ color: "var(--accent-1)" }}>
                      {edu.institution}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {edu.location} · {edu.year}
                    </p>
                    {edu.thesis && (
                      <a
                        href={edu.thesisUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs mt-2 flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                        style={{ color: "var(--accent-3)" }}
                      >
                        <ExternalLink size={11} />
                        <span className="truncate">{edu.thesis.slice(0, 50)}…</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="block p-5 rounded-2xl transition-all duration-200 group"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                whileHover={{ borderColor: "var(--border-hover)", y: -2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg mt-0.5 shrink-0" style={{ background: "rgba(167,139,250,0.1)" }}>
                    <ExternalLink size={14} style={{ color: "var(--accent-2)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug mb-2 group-hover:text-white transition-colors duration-200" style={{ color: "var(--text)" }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                      {pub.institution}
                    </p>
                    <p className="text-xs" style={{ color: "var(--accent-2)", opacity: 0.7 }}>
                      {pub.date}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
