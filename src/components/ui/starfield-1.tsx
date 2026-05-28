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

    const resize = () => {
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
      stars = stars.map((s): Star => {
        const n = [...s] as Star
        n[0] = s[0] * rw
        n[1] = s[1] * rh
        n[3] = cx + (n[0] / n[2]) * ratio
        n[4] = cy + (n[1] / n[2]) * ratio
        return n
      })
    }

    const update = () => {
      mouse.x = (cursor.x - cx) / easing
      mouse.y = (cursor.y - cy) / easing
      stars = stars.map((s): Star => {
        const n = [...s] as Star
        n[7] = true
        n[5] = n[3]
        n[6] = n[4]
        n[0] += mouse.x >> 4
        if (n[0] > cx << 1) {
          n[0] -= w << 1
          n[7] = false
        }
        if (n[0] < -(cx << 1)) {
          n[0] += w << 1
          n[7] = false
        }
        n[1] += mouse.y >> 4
        if (n[1] > cy << 1) {
          n[1] -= h << 1
          n[7] = false
        }
        if (n[1] < -(cy << 1)) {
          n[1] += h << 1
          n[7] = false
        }
        n[2] -= speed
        if (n[2] > z) {
          n[2] -= z
          n[7] = false
        }
        if (n[2] < 0) {
          n[2] += z
          n[7] = false
        }
        n[3] = cx + (n[0] / n[2]) * ratio
        n[4] = cy + (n[1] / n[2]) * ratio
        return n
      })
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
      resize()
      update()
      draw()
      rafId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      const parent = canvas.parentElement
      if (parent) {
        cursor.x = e.pageX || e.clientX + parent.scrollLeft - parent.clientLeft
        cursor.y = e.pageY || e.clientY + parent.scrollTop - parent.clientTop
      }
    }

    setup()
    spawn()
    rafId = requestAnimationFrame(animate)

    const parent = canvas.parentElement
    if (mouseAdjust && parent) parent.addEventListener("mousemove", onMouseMove)

    return () => {
      cancelAnimationFrame(rafId)
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
