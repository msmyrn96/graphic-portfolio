"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import NavHeader from "@/components/ui/nav-header"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,5,8,0)", "rgba(5,5,8,0.92)"],
  )

  return (
    <>
      <motion.header
        style={{ backgroundColor: navBg }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="w-full mx-auto px-6 py-4 flex items-center justify-center"
          style={{
            borderBottom: scrolled
              ? "1px solid rgba(59,130,246,0.12)"
              : "1px solid transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
          }}
        >
          <motion.nav
            className="hidden md:block"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <NavHeader links={links} />
          </motion.nav>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 pt-16"
          style={{
            background: "rgba(5,5,8,0.97)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-2xl font-medium"
                style={{ color: "var(--text)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  )
}
