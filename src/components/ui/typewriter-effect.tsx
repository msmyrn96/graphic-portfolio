"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect, useState } from "react"

type Word = {
  text: string
  className?: string
}

/**
 * Shows the first word statically, then cycles through every word —
 * typing each one in, holding, erasing it, and moving to the next (looping forever).
 */
export const TypewriterRotatingWord = ({
  words,
  className,
  textClassName,
  cursorClassName,
}: {
  words: Word[]
  className?: string
  textClassName?: string
  cursorClassName?: string
}) => {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"static" | "erase" | "type" | "hold">(
    "static",
  )

  // Pause on the static first word, and on each fully-typed word, before erasing.
  useEffect(() => {
    if (phase !== "static" && phase !== "hold") return
    const delay = phase === "static" ? 1600 : 1800
    const timer = setTimeout(() => setPhase("erase"), delay)
    return () => clearTimeout(timer)
  }, [phase])

  const word = words[index]

  return (
    <span
      className={cn("inline-flex items-baseline flex flex-wrap", className)}
    >
      <span
        className={cn(
          "inline-block whitespace-nowrap font-bold text-[var(--text)]",
          textClassName,
        )}
      >
        Let's&nbsp;
      </span>
      <motion.span
        className="inline-block overflow-hidden whitespace-nowrap align-bottom"
        initial={false}
        animate={{ width: phase === "erase" ? 0 : "auto" }}
        transition={
          phase === "static"
            ? { duration: 0 }
            : { duration: 0.45, ease: "easeInOut" }
        }
        onAnimationComplete={() => {
          if (phase === "erase") {
            setIndex((i) => (i + 1) % words.length)
            setPhase("type")
          } else if (phase === "type") {
            setPhase("hold")
          }
        }}
      >
        <span
          className={cn(
            "inline-block font-bold text-[var(--text)]",
            textClassName,
            word.className,
          )}
        >
          {word.text}
        </span>
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[3px] ml-1 self-stretch",
          cursorClassName,
        )}
        style={{ background: "var(--accent-1)" }}
      />
    </span>
  )
}
