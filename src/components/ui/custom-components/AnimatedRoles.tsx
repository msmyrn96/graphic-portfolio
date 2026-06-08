import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const AnimatedRoles = ({ roles }: { roles: string[] }) => {
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
