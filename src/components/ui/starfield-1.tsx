"use client"

import { useEffect, useRef } from "react"

// [x, y, z, screenX, screenY, prevX, prevY, visible]
type Star = [number, number, number, number, number, number, number, boolean]

interface StarfieldProps {
  starColor?: string
  bgColor?: string
  mouseAdjust?: boolean
  easing?: number
  speed?: number
  quantity?: number
}

export function Starfield({
  starColor = "rgba(255,255,255,0.8)",
  bgColor = "rgba(9,9,11,1)",
  mouseAdjust = false,
  easing = 1,
  speed = 0.5,
  quantity = 1200,
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const ratio = quantity / 2
    const cursor = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }
    let w = 0,
      h = 0,
      cx = 0,
      cy = 0,
      z = 0,
      colorRatio = 0
    let stars: Star[] = []
    let rafId: number

    const measure = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      cx = Math.round(w / 2)
      cy = Math.round(h / 2)
      z = (w + h) / 2
      colorRatio = 1 / z
      if (cursor.x === 0) cursor.x = cx
      if (cursor.y === 0) cursor.y = cy
    }

    const setup = () => {
      measure()
      canvas.width = w
      canvas.height = h
      ctx.fillStyle = bgColor
      ctx.strokeStyle = starColor
    }

    const spawn = () => {
      stars = Array.from(
        { length: quantity },
        (): Star => [
          Math.random() * w * 2 - cx * 2,
          Math.random() * h * 2 - cy * 2,
          Math.round(Math.random() * z),
          0,
          0,
          0,
          0,
          true,
        ],
      )
    }

    const applyResize = () => {
      const prevW = canvas.width
      const prevH = canvas.height
      measure()
      if (prevW === w && prevH === h) return
      const rw = w / prevW
      const rh = h / prevH
      canvas.width = w
      canvas.height = h
      ctx.fillStyle = bgColor
      ctx.strokeStyle = starColor
      for (const s of stars) {
        s[0] *= rw
        s[1] *= rh
        s[3] = cx + (s[0] / s[2]) * ratio
        s[4] = cy + (s[1] / s[2]) * ratio
      }
    }

    const ro = new ResizeObserver(applyResize)
    const parent = canvas.parentElement
    if (parent) ro.observe(parent)

    const update = () => {
      mouse.x = (cursor.x - cx) / easing
      mouse.y = (cursor.y - cy) / easing
      for (const s of stars) {
        s[7] = true
        s[5] = s[3]
        s[6] = s[4]
        s[0] += mouse.x >> 4
        if (s[0] > cx << 1) { s[0] -= w << 1; s[7] = false }
        if (s[0] < -(cx << 1)) { s[0] += w << 1; s[7] = false }
        s[1] += mouse.y >> 4
        if (s[1] > cy << 1) { s[1] -= h << 1; s[7] = false }
        if (s[1] < -(cy << 1)) { s[1] += h << 1; s[7] = false }
        s[2] -= speed
        if (s[2] > z) { s[2] -= z; s[7] = false }
        if (s[2] < 0) { s[2] += z; s[7] = false }
        s[3] = cx + (s[0] / s[2]) * ratio
        s[4] = cy + (s[1] / s[2]) * ratio
      }
    }

    const draw = () => {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, w, h)
      ctx.strokeStyle = starColor
      for (const s of stars) {
        if (s[5] > 0 && s[5] < w && s[6] > 0 && s[6] < h && s[7]) {
          ctx.lineWidth = (1 - colorRatio * s[2]) * 2
          ctx.beginPath()
          ctx.moveTo(s[5], s[6])
          ctx.lineTo(s[3], s[4])
          ctx.stroke()
          ctx.closePath()
        }
      }
    }

    const animate = () => {
      update()
      draw()
      rafId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (parent) {
        cursor.x = e.pageX || e.clientX + parent.scrollLeft - parent.clientLeft
        cursor.y = e.pageY || e.clientY + parent.scrollTop - parent.clientTop
      }
    }

    setup()
    spawn()
    rafId = requestAnimationFrame(animate)

    if (mouseAdjust && parent) parent.addEventListener("mousemove", onMouseMove)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      if (mouseAdjust && parent)
        parent.removeEventListener("mousemove", onMouseMove)
    }
  }, [bgColor, starColor, easing, speed, quantity, mouseAdjust])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}
