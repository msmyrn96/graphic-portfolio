"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { useRef } from "react";

const roles = ["Software Engineer", "Frontend Developer", "AI Integrator", "React Specialist"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
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
              background: "rgba(129,140,248,0.1)",
              border: "1px solid rgba(129,140,248,0.25)",
              color: "var(--accent-1)",
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
              <span style={{ color: "var(--text)" }}>Hi, I&apos;m{" "}</span>
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
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                color: "#fff",
                boxShadow: "0 0 20px rgba(129,140,248,0.3)",
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

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-5"
          >
            {[
              { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
              { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              { href: personalInfo.portfolio, icon: ExternalLink, label: "Old Portfolio" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg transition-all duration-200"
                style={{
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{
                  scale: 1.1,
                  color: "var(--accent-1)",
                  borderColor: "rgba(129,140,248,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
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
  );
}

function AnimatedRoles({ roles }: { roles: string[] }) {
  return (
    <div className="overflow-hidden h-10 sm:h-12">
      <motion.div
        animate={{ y: roles.map((_, i) => `-${i * 100}%`) }}
        transition={{
          duration: roles.length * 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          times: roles.map((_, i) => i / roles.length),
        }}
      >
        {roles.map((role) => (
          <div key={role} className="h-10 sm:h-12 flex items-center">
            <span
              className="text-2xl sm:text-3xl font-semibold"
              style={{ color: "var(--text-secondary)" }}
            >
              {role}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
