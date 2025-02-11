"use client"

import { useState, useEffect } from "react"

export function useAnimation(isRunning: boolean, duration: number) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsedTime = timestamp - startTime
      const newProgress = Math.min(elapsedTime / (duration * 1000), 1)
      setProgress(newProgress)

      if (newProgress < 1 && isRunning) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    if (isRunning) {
      animationFrame = requestAnimationFrame(animate)
    } else {
      setProgress(0)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [isRunning, duration])

  return progress
}

