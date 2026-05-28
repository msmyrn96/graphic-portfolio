"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Flag, Globe } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-3xl sm:text-4xl font-bold mb-16"
          style={{ color: "var(--text)" }}
        >
          A bit about <span className="gradient-text">me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m a Software Engineer from Crete, Greece with a strong focus
            on <span style={{ color: "var(--accent-1)" }}>React</span> and
            modern frontend development. I hold an MSc in Computer Science
            specializing in Information Retrieval from the University of Crete.
          </p>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;ve worked across startups and established companies, building
            everything from SaaS platforms to{" "}
            <span style={{ color: "var(--accent-2)" }}>
              AI-powered applications
            </span>{" "}
            using LLMs like OpenAI and Claude. I care deeply about performance,
            clean architecture, and user experience.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            When not coding, I&apos;m exploring research in knowledge graphs and
            semantic web technologies — combining my academic background with
            practical engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4"
        >
          {[
            { icon: MapPin, label: "Location", value: personalInfo.location },
            {
              icon: Flag,
              label: "Nationality",
              value: personalInfo.nationalities.join(" · "),
            },
            {
              icon: Globe,
              label: "Languages",
              value: personalInfo.languages.join(" · "),
            },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              whileHover={{ borderColor: "var(--border-hover)" }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="p-2 rounded-lg"
                style={{ background: "rgba(59,130,246,0.1)" }}
              >
                <Icon size={18} style={{ color: "var(--accent-1)" }} />
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {value}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="p-4 rounded-xl"
            style={{
              background: "rgba(59,130,246,0.05)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-1)" }}>📍 </span>
              Currently at <strong style={{ color: "var(--text)" }}>
                XM
              </strong>{" "}
              as a Software Engineer — building scalable React applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
