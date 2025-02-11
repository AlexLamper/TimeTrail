"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings } from "@/components/Settings"
import { Help } from "@/components/Help"
import { AnimatedObject } from "@/components/AnimatedObject"
import { useTimer } from "@/hooks/useTimer"
import { formatTime } from "@/utils/formatTime"
import { Cog, HelpCircle, Maximize, Minimize } from "lucide-react"
import { getContrastColor } from "@/utils/getContrastColor"

const APP_NAME = "TimeTrail"

const themes = [
  { name: "Car on Road", object: "/images/PixelCar.png", background: "/images/City1/Bright/City1.png" },
  { name: "Train in Mountains", object: "/images/train.png", background: "/images/mountain-railway.jpg" },
  { name: "Boat in Ocean", object: "/images/boat.png", background: "/images/ocean.jpg" },
  { name: "Spaceship in Space", object: "/images/spaceship.png", background: "/images/space.jpg" },
]

export default function Home() {
  const [duration, setDuration] = useState(60)
  const [theme, setTheme] = useState(themes[0])
  const [font, setFont] = useState("font-mono")  // Updated to 'Monospace'
  const [roundedButtons, setRoundedButtons] = useState(true)
  const { time, isRunning, start, reset, hasEnded } = useTimer(duration)
  const [progress, setProgress] = useState(0)

  const [showSettings, setShowSettings] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [contrastColor, setContrastColor] = useState("white")
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.src = theme.background
    img.onload = () => {
      const color = getContrastColor(img)
      setContrastColor(color)
    }
  }, [theme])

  useEffect(() => {
    let animationFrame: number
    const startTime = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
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

  useEffect(() => {
    if (hasEnded) {
      // Play sound
      const audio = new Audio("/notification.mp3")
      audio.play()

      // Visual notification
      alert("Timer has ended!")
    }
  }, [hasEnded])

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullScreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }, [])

  const buttonClass = `${roundedButtons ? "rounded-full" : "rounded-md"} bg-[#171D2A] hover:bg-[#494B42] hover:text-white text-white`

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${font}`}
      style={{ backgroundImage: `url(${theme.background})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute top-4 left-4 text-3xl font-bold px-4 py-2 rounded-lg bg-opacity-60 bg-gray-800 border border-gray-600" style={{ color: contrastColor }}>
        {APP_NAME}
      </div>
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button variant="outline" size="icon" className={buttonClass} onClick={() => setShowSettings(true)}>
          <Cog className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className={buttonClass} onClick={() => setShowHelp(true)}>
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className={buttonClass} onClick={toggleFullScreen}>
          {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </Button>
      </div>

      <div className="z-10 text-center">
        <div
          className="text-[12rem] font-extrabold px-8 mb-8 pb-2 rounded-2xl bg-gray-900 bg-opacity-95 shadow-lg tracking-wide"
          style={{ color: contrastColor }}
        >
          {formatTime(time)}
        </div>
        <div className="flex space-x-4 justify-center">
          <Input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-28 h-14 text-xl bg-white bg-opacity-80"
          />
          <Button onClick={isRunning ? reset : start} className={`${buttonClass} h-14 px-8 text-xl hover:bg-[#494B42]`}>
            {isRunning ? "Reset" : "Start"}
          </Button>
        </div>
      </div>

      <AnimatedObject src={theme.object} progress={progress} />

      <Settings
        show={showSettings}
        onClose={() => setShowSettings(false)}
        themes={themes}
        currentTheme={theme}
        onThemeChange={setTheme}
        font={font}
        onFontChange={setFont}
        roundedButtons={roundedButtons}
        onRoundedButtonsChange={setRoundedButtons}
      />

      <Help show={showHelp} onClose={() => setShowHelp(false)} />
    </main>
  )
}
