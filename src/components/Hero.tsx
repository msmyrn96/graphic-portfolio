"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useRef, useState, useEffect } from "react"
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot"

const SPLINE_SCENE =
  "https://prod.spline.design/OHmdeHoIC4z7vVGi/scene.splinecode"

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full-Stack Developer",
  "AI Integrator",
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
      style={{
        background:
          "linear-gradient(to bottom, #09090b 0%, #04111f 38%, #061630 68%, #0c1f52 88%)",
      }}
    >
      {/* Vertical grid lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          display: "grid",
          gridTemplateColumns:
            "clamp(28px, 10vw, 120px) 1fr clamp(28px, 10vw, 120px)",
        }}
      >
        <div />
        <div />
      </div>

      {/* Bottom radial portal glow */}
      <div
        className="absolute bottom-[-90px] lg:bottom-[-150px] left-1/2 -translate-x-1/2 h-[500px] w-[700px] md:w-[1100px] lg:h-[750px] lg:w-full pointer-events-none rounded-[100%]"
        style={{
          background:
            "radial-gradient(closest-side, #09090b 82%, rgba(14,105,252,0.45))",
        }}
      />

      {/* Left atmospheric blur */}
      <div
        className="absolute left-[4vw] top-16 hidden md:block aspect-square w-[32vw] rounded-full pointer-events-none"
        style={{
          background: "var(--accent-1)",
          opacity: 0.12,
          filter: "blur(100px)",
        }}
      />

      {/* Bottom fade into content sections */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen lg:min-h-0 py-28 lg:py-0">
          {/* Left — text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-10 lg:mb-0 xl:mb-0"
              style={{
                background: "rgba(14,105,252,0.1)",
                border: "1px solid rgba(14,105,252,0.25)",
                color: "var(--text-secondary)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--green)" }}
              />
              Open to new opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="w-[50%] block md:block lg:hidden xl:hidden"
            >
              <img
                src="/images/computer.png"
                alt="Hi wave"
                className="w-full h-auto mx-auto scale-[3]"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-5 mt-4"
              style={{ color: "var(--text)" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.shortName}</span>
              <span>.</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 w-full"
            >
              <AnimatedRoles roles={roles} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(14,105,252,0.35)",
                }}
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  color: "var(--text)",
                }}
              >
                View projects
              </a>
            </motion.div>
          </div>

          {/* Right — Spline 3D scene (desktop only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative hidden lg:block h-[640px]"
          >
            {/* Left-edge blend so the 3D canvas merges into the gradient */}
            <div
              className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
              style={{
                background: "transparent",
              }}
            />
            <InteractiveRobotSpline
              scene={SPLINE_SCENE}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
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
      1500,
    )
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <div className="relative h-10 sm:h-12 flex items-center justify-center lg:justify-start">
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
      {/* invisible spacer keeps height stable across role text lengths */}
      <span
        className="invisible text-2xl sm:text-3xl font-semibold"
        aria-hidden="true"
      >
        {roles.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
    </div>
  )
}
