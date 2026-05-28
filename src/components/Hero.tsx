"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useRef, useState, useEffect } from "react"
import { SparklesCore } from "@/components/ui/sparkles"

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "AI Integrator",
  "React Specialist",
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Sparkles layer — floats above the WebGL shader, below content */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={2}
        />
        {/* Radial mask so particles fade away from centre */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, black 100%)",
          }}
        />
      </div>

      {/* Bottom fade: transitions shader into the solid content background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "white",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--green)" }}
            />
            Open to new opportunities
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
              <span style={{ color: "var(--text)" }}>Hi, I&apos;m </span>
              <br />
              <span className="gradient-text">{personalInfo.shortName}</span>
              <span style={{ color: "var(--text)" }}>.</span>
            </h1>
          </motion.div>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <AnimatedRoles roles={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-1), var(--accent-2),var(--accent-3))",
                color: "#fff",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
              }}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text)",
              }}
            >
              View projects
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function AnimatedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2800,
    )
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <div className="relative h-10 sm:h-12 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-2xl sm:text-3xl font-semibold"
          style={{ color: "var(--text-secondary)" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      {/* invisible spacer keeps height stable across role lengths */}
      <span
        className="invisible text-2xl sm:text-3xl font-semibold"
        aria-hidden="true"
      >
        {roles.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
    </div>
  )
}
