"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  GraduationCap,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
} from "lucide-react"
import { education, publications } from "@/lib/data"

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="education" className="py-32 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Academic <span className="gradient-text">background</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* ── Degrees — vertical timeline ── */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Degrees
          </h3>

          <div className="relative">
            {/* Animated line */}
            <motion.div
              className="absolute left-[9px] top-4 w-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent-1), rgba(14,105,252,0.08))",
                transformOrigin: "top",
                height: "calc(100% - 32px)",
              }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            />

            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={edu.degree} className="relative pl-9">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-[18px] w-[18px] h-[18px] rounded-full flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.25,
                      type: "spring",
                      stiffness: 220,
                    }}
                    style={{
                      background: "var(--bg)",
                      border: "2px solid var(--accent-1)",
                      boxShadow: "0 0 10px rgba(14,105,252,0.45)",
                    }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ background: "var(--accent-1)" }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: 0.55 + i * 0.25,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)" }}
                    className="p-5 rounded-2xl cursor-default"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="p-1.5 rounded-lg shrink-0"
                        style={{ background: "rgba(14,105,252,0.1)" }}
                      >
                        <GraduationCap
                          size={13}
                          style={{ color: "var(--accent-1)" }}
                        />
                      </div>
                      <span
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: "rgba(14,105,252,0.1)",
                          color: "var(--accent-2)",
                          border: "1px solid rgba(14,105,252,0.2)",
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>

                    <p
                      className="text-sm font-semibold leading-snug mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-xs font-medium mb-0.5"
                      style={{ color: "var(--accent-1)" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {edu.location}
                    </p>

                    {edu.thesis && (
                      <div
                        className="mt-3 pt-3 space-y-2"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span style={{ color: "var(--text-muted)" }}>
                            Thesis:{" "}
                          </span>
                          {edu.thesis}
                        </p>
                        <a
                          href={edu.thesisUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium group/link"
                          style={{ color: "var(--accent-2)" }}
                        >
                          <ExternalLink size={11} />
                          <span>View Thesis</span>
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
                          />
                        </a>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Publications ── */}
        <div>
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Publications
          </h3>

          <div className="space-y-4">
            {publications.map((pub, i) => {
              const isMScThesis = pub.thesis === "MSc"
              return (
                <motion.a
                  key={pub.title}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: 0.4 + i * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)" }}
                  className="group block p-5 rounded-2xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg mt-0.5 shrink-0"
                      style={{ background: "rgba(14,105,252,0.1)" }}
                    >
                      <BookOpen
                        size={14}
                        style={{ color: "var(--accent-2)" }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Category badge */}
                      <span
                        className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2"
                        style={{
                          background: "rgba(78,154,247,0.08)",
                          color: "var(--accent-3)",
                          border: "1px solid rgba(78,154,247,0.15)",
                        }}
                      >
                        {isMScThesis ? "Master's Thesis" : "Bachelor's Thesis"}
                      </span>

                      <p
                        className="text-sm font-medium leading-snug mb-2 transition-colors duration-200 group-hover:text-white"
                        style={{ color: "var(--text)" }}
                      >
                        {pub.title}
                      </p>

                      <p
                        className="text-xs mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {pub.institution}
                      </p>

                      <div className="flex items-center justify-between">
                        <p
                          className="text-xs"
                          style={{ color: "var(--accent-2)", opacity: 0.65 }}
                        >
                          {pub.date}
                        </p>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                          style={{ color: "var(--accent-2)" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
