"use client"

import { useState, useEffect } from "react"

export function useTimer(initialDuration: number) {
  const [time, setTime] = useState(initialDuration)
  const [isRunning, setIsRunning] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false)
            setHasEnded(true)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, time])

  const start = () => {
    setTime(initialDuration)
    setIsRunning(true)
    setHasEnded(false)
  }

  const reset = () => {
    setTime(initialDuration)
    setIsRunning(false)
    setHasEnded(false)
  }

  return { time, isRunning, start, reset, hasEnded }
}

