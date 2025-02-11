"use client"

import Image from "next/image"

interface AnimatedObjectProps {
  src: string
  progress: number
}

export function AnimatedObject({ src, progress }: AnimatedObjectProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/6">
      <div
        className="absolute transition-transform duration-100 ease-linear"
        style={{ transform: `translateX(${progress * 100}%)` }}
      >
        <Image src={src || "/placeholder.svg"} alt="Moving object" width={300} height={300} />
      </div>
    </div>
  )
}

