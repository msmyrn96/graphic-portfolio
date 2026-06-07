"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { projects, personalInfo } from "@/lib/data"
import { GithubIcon } from "./Icons"
import { useIsMobile } from "@/lib/utils"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isMobile = useIsMobile()
  const githubButtonText = isMobile
    ? "GitHub"
    : "Check my GitHub for more projects"

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto" ref={ref}>
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
          Things I&apos;ve <span className="gradient-text">built</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            inView={inView}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: projects.length * 0.12 + 0.2 }}
        className="mt-12 flex justify-center"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "var(--text)",
          }}
        >
          <GithubIcon size={17} />
          {githubButtonText}
        </a>
      </motion.div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0]
  index: number
  inView: boolean
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group block p-6 rounded-2xl relative overflow-hidden cursor-pointer"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)" }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(59,130,246,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 relative w-full">
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-2 right-2"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight
              size={18}
              style={{
                color: "white",
                background:
                  "linear-gradient(135deg, var(--accent-1), var(--accent-2),var(--accent-3))",
                padding: "2px",
                borderRadius: "4px",
              }}
            />
          </motion.div>
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            className="rounded-lg object-cover"
          />
        </div>

        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
          {project.period}
        </p>
        <h3
          className="text-lg font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(59,130,246,0.08)",
                color: "var(--accent-3)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
