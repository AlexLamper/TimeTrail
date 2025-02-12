"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface TimerEndedScreenProps {
  onReset: () => void
}

export function TimerEndedScreen({ onReset }: TimerEndedScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4 sm:px-0"
    >
      <div className="bg-white rounded-lg p-6 sm:p-8 text-center max-w-xs sm:max-w-sm md:max-w-md">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Time&apos;s Up!
        </motion.h2>
        <motion.p
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 mb-6 text-sm sm:text-base"
        >
          Your timer has ended. Great job staying focused!
        </motion.p>
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
          <Button onClick={onReset} size="lg" className="w-full sm:w-auto">
            Start New Timer
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

