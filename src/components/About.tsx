"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Flag, Globe } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { ImageOnBlur } from "./ui/custom-components/ImageOnBlur"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto align-center"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12"
          style={{ color: "var(--text)" }}
        >
          A bit about <span className="gradient-text">me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a Software Engineer from Crete, Greece with a strong
              focus on <span style={{ color: "var(--accent-1)" }}>React</span>{" "}
              and modern frontend development. I hold an MSc in Computer Science
              specializing in Information Retrieval from the University of
              Crete.
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;ve worked across startups and established companies,
              building everything from{" "}
              <span style={{ color: "var(--accent-2)" }}>SaaS platforms</span>{" "}
              to{" "}
              <span style={{ color: "var(--accent-2)" }}>
                AI-powered applications
              </span>
              . I care deeply about performance, clean architecture, and user
              experience. I&apos;have done research in knowledge graphs and
              semantic web technologies — combining my academic background with
              practical engineering.
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              When not coding, I enjoy exploring new technologies and creating
              side projects that challenge me to learn and grow. The rest of my
              time is spent on traveling and watching sports.
            </p>
          </div>

          <motion.div
            className="p-4 rounded-xl w-fit"
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
              as a Software Engineer.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-4"
        >
          <ImageOnBlur imgSrc="/images/about_image-min.png" />
        </motion.div>
      </div>
    </section>
  )
}
