"use client"

import { Row_1_Tools, Row_2_Tools } from "@/lib/data"
import { repeat, useIsMobile } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { IconTile } from "./ui/custom-components/IconTile"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isMobile = useIsMobile()

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
      {!isMobile ? (
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
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{ gridTemplateColumns: "repeat(auto-fill, 110px)" }}
          className="grid grid-cols-5 gap-4 sm:grid-cols-5 wrap relative align-center justify-center"
        >
          {[...Row_1_Tools, ...Row_2_Tools].map((icon, i) => (
            <IconTile key={i} icon={icon} className="h-[110px] w-[110px]" />
          ))}
        </motion.div>
      )}
    </section>
  )
}
