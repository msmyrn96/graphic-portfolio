"use client"

import { useRef, useEffect } from "react"

interface ParticleNetworkProps {
  className?: string
  particleColor?: string
  lineColor?: string
  lineNearMouseColor?: string
  mouseRadius?: number
}

export default function ParticleNetwork({
  className,
  particleColor = "rgba(59, 130, 246, 0.75)",
  lineColor = "rgba(59, 130, 246,",
  lineNearMouseColor = "rgba(255, 255, 255,",
  mouseRadius = 160,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const ctx = el.getContext("2d")
    if (!ctx) return

    // non-null aliases for use inside nested class / functions
    const cv = el as HTMLCanvasElement
    const cx = ctx as CanvasRenderingContext2D

    let rafId: number
    const mouse = { x: null as number | null, y: null as number | null }

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number

      constructor() {
        this.size = Math.random() * 1.5 + 0.5
        this.x = Math.random() * (cv.width - this.size * 4) + this.size * 2
        this.y = Math.random() * (cv.height - this.size * 4) + this.size * 2
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
      }

      update() {
        if (this.x > cv.width  || this.x < 0) this.vx *= -1
        if (this.y > cv.height || this.y < 0) this.vy *= -1

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius
            this.x -= (dx / dist) * force * 4
            this.y -= (dy / dist) * force * 4
          }
        }

        this.x += this.vx
        this.y += this.vy
      }

      draw() {
        cx.beginPath()
        cx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        cx.fillStyle = particleColor
        cx.fill()
      }
    }

    let particles: Particle[] = []

    function init() {
      particles = []
      const count = Math.floor((cv.width * cv.height) / 9000)
      for (let i = 0; i < count; i++) particles.push(new Particle())
    }

    function connect() {
      const threshold = (cv.width / 7) * (cv.height / 7)
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distSq = dx * dx + dy * dy
          if (distSq < threshold) {
            const opacity = Math.max(0, (1 - distSq / threshold) * 0.55)
            const nearMouse =
              mouse.x !== null && mouse.y !== null &&
              Math.hypot(particles[a].x - mouse.x, particles[a].y - mouse.y) < mouseRadius

            cx.strokeStyle = nearMouse
              ? `${lineNearMouseColor} ${opacity * 0.9})`
              : `${lineColor} ${opacity})`
            cx.lineWidth = 0.8
            cx.beginPath()
            cx.moveTo(particles[a].x, particles[a].y)
            cx.lineTo(particles[b].x, particles[b].y)
            cx.stroke()
          }
        }
      }
    }

    function animate() {
      rafId = requestAnimationFrame(animate)
      cx.clearRect(0, 0, cv.width, cv.height)
      particles.forEach((p) => { p.update(); p.draw() })
      connect()
    }

    function resize() {
      cv.width  = cv.offsetWidth
      cv.height = cv.offsetHeight
      init()
    }

    function onMouseMove(e: MouseEvent) {
      const rect = cv.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onMouseLeave() { mouse.x = null; mouse.y = null }

    const ro = new ResizeObserver(resize)
    ro.observe(cv)
    cv.addEventListener("mousemove", onMouseMove)
    cv.addEventListener("mouseleave", onMouseLeave)

    resize()
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      cv.removeEventListener("mousemove", onMouseMove)
      cv.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [particleColor, lineColor, lineNearMouseColor, mouseRadius])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? "absolute inset-0 w-full h-full"}
    />
  )
}
