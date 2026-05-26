"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { SectionLabel } from "./About";

const contactLinks = [
  {
    label: "Email me",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Best for project inquiries",
  },
  {
    label: "GitHub",
    value: "@msmyrn96",
    href: personalInfo.github,
    icon: GithubIcon,
    description: "See my open-source work",
  },
  {
    label: "LinkedIn",
    value: "Emmanouil Smyrnakis",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    description: "Professional network",
  },
  {
    label: "Portfolio (legacy)",
    value: "msmyrn96.github.io",
    href: personalInfo.portfolio,
    icon: ExternalLink,
    description: "Previous version",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Let&apos;s{" "}
          <span className="gradient-text">work together</span>
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to
          be part of your vision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {/* Primary CTA */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-semibold text-lg mb-6 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
            color: "#fff",
            boxShadow: "0 0 40px rgba(129,140,248,0.3), 0 0 80px rgba(129,140,248,0.1)",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(129,140,248,0.5), 0 0 100px rgba(129,140,248,0.15)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail size={22} />
          Say hello
          <ArrowUpRight
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>

        {/* Other links */}
        <div className="grid grid-cols-2 gap-4">
          {contactLinks.slice(1).map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                whileHover={{
                  borderColor: "var(--border-hover)",
                  y: -2,
                }}
              >
                <div className="p-2 rounded-lg" style={{ background: "rgba(129,140,248,0.08)" }}>
                  <Icon size={16} style={{ color: "var(--accent-1)" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium" style={{ color: "var(--text)" }}>
                    {link.label}
                  </p>
                  <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                    {link.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "var(--accent-1)" }}
                />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
