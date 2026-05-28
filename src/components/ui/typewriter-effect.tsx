"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

type Word = {
  text: string
  className?: string
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: Word[]
  className?: string
  cursorClassName?: string
}) => {
  const wordsArray = words.map((word) => ({ ...word, text: word.text.split("") }))
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" },
      )
    }
  }, [isInView, animate])

  return (
    <div className={cn("font-bold text-center", className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                initial={{ opacity: 0, width: 0 }}
                className={cn("opacity-0 hidden text-[var(--text)]", word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-[0.8em] align-middle", cursorClassName)}
        style={{ background: "var(--accent-1)" }}
      />
    </div>
  )
}

export const TypewriterEffectSmooth = ({
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
  const wordsArray = words.map((word) => ({ ...word, text: word.text.split("") }))

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span key={`char-${index}`} className={cn("text-[var(--text)]", word.className)}>
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  )

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-1"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear", delay: 0.3 }}
      >
        <div className={cn("font-bold whitespace-nowrap", textClassName)}>
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[3px]", cursorClassName)}
        style={{ background: "var(--accent-1)" }}
      />
    </div>
  )
}
