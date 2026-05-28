import { personalLinks } from "@/lib/data"
import { motion } from "framer-motion"

export const PersonalLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex items-center gap-5"
    >
      {personalLinks.map(({ href, icon: Icon, label }) => (
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
            borderColor: "rgba(59,130,246,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </motion.div>
  )
}
