import Image from "next/image"

interface AnimatedObjectProps {
  src: string
  progress: number
}

export function AnimatedObject({ src, progress }: AnimatedObjectProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/6 sm:h-1/5 md:h-1/4">
      <div
        className="absolute transition-transform duration-100 ease-linear"
        style={{ transform: `translateX(${progress * 100}%)` }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt="Moving object"
          width={50}
          height={50}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </div>
    </div>
  )
}

