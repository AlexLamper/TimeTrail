"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface HelpProps {
  show: boolean
  onClose: () => void
}

export function Help({ show, onClose }: HelpProps) {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">How to Use TimeTrail</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <section>
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p>Welcome to TimeTrail, your interactive and customizable timer application!</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Set the Timer:</strong> Enter the desired duration in seconds using the input field.
              </li>
              <li>
                <strong>Start/Reset:</strong> Click the &quot;Start&quot; button to begin the countdown. The button changes to
                &quot;Reset&quot; while the timer is running.
              </li>
              <li>
                <strong>Watch the Journey:</strong> Observe the object moving across the screen as time progresses.
              </li>
              <li>
                <strong>Timer End:</strong> When the timer ends, you&apos;ll hear a sound and see a visual notification.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Customization</h3>
            <p>Click the gear icon in the top-right corner to access the settings menu. Here you can:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <em>Change the Theme:</em> Choose from various animated scenes.
              </li>
              <li>
                <em>Select a Font:</em> Pick your preferred font style for the timer display.
              </li>
              <li>
                <em>Toggle Button Style:</em> Switch between rounded and cornered buttons.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Full Screen Mode</h3>
            <p>
              Click the expand icon in the top-right corner to enter full screen mode. Click the minimize icon to exit
              full screen mode.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Tips for a Great Experience</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Experiment with different themes to find your perfect focus environment.</li>
              <li>Use shorter durations for quick tasks and longer ones for extended focus sessions.</li>
              <li>Try full screen mode for a more immersive experience.</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

