"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail } from "lucide-react"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { headingWords } from "@/lib/data"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-6xl mx-auto grid grid md:grid-cols-2"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <TypewriterEffectSmooth
          words={headingWords}
          className="justify-center mb-4"
          textClassName="text-3xl sm:text-4xl"
          cursorClassName="h-8 sm:h-10"
        />
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <form
          className="mb-8 p-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-opacity-50"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <div className="mb-4 text-left">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--text)" }}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-opacity-50"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--text)" }}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-opacity-50"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--text)" }}
            >
              Your Message
              <span className="px-2 text-xs text-[var(--accent-1)]">
                (optional)
              </span>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-opacity-50"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                value={formData.message}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <motion.button
            className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
              color: "#fff",
              boxShadow:
                "0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(59,130,246,0.1)",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 0 60px rgba(59,130,246,0.5), 0 0 100px rgba(59,130,246,0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={22} />
            Say hello
          </motion.button>
        </form>
        {/* Primary CTA */}
      </motion.div>
    </section>
  )
}
