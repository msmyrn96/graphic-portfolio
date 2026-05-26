"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { SectionLabel } from "./About";

const categories = [
  { label: "Frontend", key: "frontend" as const, color: "var(--accent-1)" },
  { label: "Backend & Data", key: "backend" as const, color: "var(--accent-2)" },
  { label: "DevOps & Tools", key: "tools" as const, color: "var(--accent-3)" },
  { label: "AI & LLMs", key: "ai" as const, color: "var(--green)" },
  { label: "Other", key: "other" as const, color: "#94a3b8" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text)" }}>
          What I{" "}
          <span className="gradient-text">work with</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: ci * 0.1 }}
            className="p-6 rounded-2xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
              />
              <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[cat.key].map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.04 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)",
                  }}
                  whileHover={{
                    background: "rgba(129,140,248,0.1)",
                    borderColor: "rgba(129,140,248,0.3)",
                    color: "var(--text)",
                    scale: 1.05,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
