"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface NavLink {
  label: string
  href: string
}

interface PillPosition {
  left: number
  width: number
  opacity: number
}

interface TabProps {
  href: string
  children: React.ReactNode
  setPosition: React.Dispatch<React.SetStateAction<PillPosition>>
  onClick?: () => void
}

function Tab({ href, children, setPosition, onClick }: TabProps) {
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft })
      }}
      className="relative z-10 list-none hover:!text-black"
    >
      <a
        href={href}
        onClick={onClick}
        className="block cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white mix-blend-difference select-none md:px-5 md:py-2.5 md:text-[11px]"
      >
        {children}
      </a>
    </li>
  )
}

function Cursor({ position }: { position: PillPosition }) {
  return (
    <motion.li
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={position as any}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      className="pointer-events-none absolute top-1 z-0 h-[calc(100%-8px)] rounded-full list-none"
      style={{
        background:
          "linear-gradient(135deg, var(--accent-1), var(--accent-2),var(--accent-3))",
      }}
      aria-hidden="true"
    />
  )
}

interface NavHeaderProps {
  links: NavLink[]
  onLinkClick?: () => void
}

export default function NavHeader({ links, onLinkClick }: NavHeaderProps) {
  const [position, setPosition] = useState<PillPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      className="relative flex w-fit items-center rounded-full p-1 gap-4"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(59,130,246,0.25)",
        backdropFilter: "blur(12px)",
      }}
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      role="menubar"
    >
      {links.map((link) => (
        <Tab
          key={link.href}
          href={link.href}
          setPosition={setPosition}
          onClick={onLinkClick}
        >
          {link.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  )
}
