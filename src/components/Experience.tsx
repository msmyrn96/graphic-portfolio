"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionLabel } from "./About";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text)" }}>
          Where I&apos;ve{" "}
          <span className="gradient-text">worked</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
          style={{
            background: "linear-gradient(to bottom, var(--accent-1), transparent)",
            opacity: 0.3,
          }}
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <ExperienceCard key={job.company + job.period} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  job,
  index,
  inView,
}: {
  job: (typeof experience)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="md:pl-16 relative"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-4.5 top-6 w-3 h-3 rounded-full border-2 hidden md:block"
        style={{
          borderColor: job.current ? "var(--accent-1)" : "var(--text-muted)",
          background: job.current ? "var(--accent-1)" : "var(--bg)",
          boxShadow: job.current ? "0 0 10px var(--accent-1)" : "none",
          left: "18px",
        }}
      />

      <motion.div
        className="p-6 rounded-2xl transition-all duration-300 card-glow"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
        whileHover={{ borderColor: "var(--border-hover)", y: -2 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase size={14} style={{ color: "var(--accent-1)" }} />
              <span className="text-xs" style={{ color: "var(--accent-1)" }}>
                {job.role}
              </span>
              {job.current && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(52,211,153,0.15)",
                    color: "var(--green)",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
              {job.company}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              {job.period}
            </p>
            <div className="flex items-center gap-1 justify-end mt-1">
              <MapPin size={12} style={{ color: "var(--text-muted)" }} />
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {job.location}
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {job.bullets.map((bullet, bi) => (
            <li key={bi} className="flex items-start gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ background: "var(--accent-2)" }}
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {bullet}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
