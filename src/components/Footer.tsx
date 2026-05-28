"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { PersonalLinks } from "./ui/custom-components/PersonalLinks"

export default function Footer() {
  return (
    <footer
      className="py-6 px-6 border-t"
      style={{ borderColor: "rgba(59,130,246,0.1)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "var(--text)" }}>{personalInfo.name}</span> ·
          Built with Next.js & Framer Motion
        </motion.p>
        <PersonalLinks />
      </div>
    </footer>
  )
}
