"use client"

import { Row_1_Tools, Row_2_Tools } from "@/lib/data"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export type IconItem = { url: string; name: string; invert?: boolean }

const repeat = (icons: IconItem[], times = 4) =>
  Array.from({ length: times }).flatMap(() => icons)

function IconTile({ icon }: { icon: IconItem }) {
  return (
    <div
      className="h-24 w-24 flex-shrink-0 rounded-2xl flex items-center justify-center flex-col gap-2"
      title={icon.name}
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon.url}
        alt={icon.name}
        width={48}
        height={48}
        className={`object-contain${icon.invert ? " invert" : ""}`}
        loading="lazy"
      />
      <p
        className="text-[12px] font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {icon.name}
      </p>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="py-32 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16 px-6"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "var(--text)" }}
        >
          What I <span className="gradient-text">work with</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="skill-carousel overflow-hidden relative pb-3"
      >
        {/* Row 1 — scrolls left */}
        <div className="skill-row-left flex gap-5 whitespace-nowrap">
          {repeat(Row_1_Tools, 4).map((icon, i) => (
            <IconTile key={i} icon={icon} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="skill-row-right flex gap-5 whitespace-nowrap mt-6">
          {repeat(Row_2_Tools, 4).map((icon, i) => (
            <IconTile key={i} icon={icon} />
          ))}
        </div>

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-28 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-28 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--bg), transparent)",
          }}
        />
      </motion.div>
    </section>
  )
}
