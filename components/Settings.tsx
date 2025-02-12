"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface SettingsProps {
  show: boolean
  onClose: () => void
  themes: { name: string; object: string; background: string }[]
  currentTheme: { name: string; object: string; background: string }
  onThemeChange: (theme: { name: string; object: string; background: string }) => void
  font: string
  onFontChange: (font: string) => void
  roundedButtons: boolean
  onRoundedButtonsChange: (rounded: boolean) => void
}

export function Settings({
  show,
  onClose,
  themes,
  currentTheme,
  onThemeChange,
  font,
  onFontChange,
  roundedButtons,
  onRoundedButtonsChange,
}: SettingsProps) {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-base sm:text-lg font-medium">Theme</Label>
            <RadioGroup
              value={currentTheme.name}
              onValueChange={(value) => onThemeChange(themes.find((t) => t.name === value)!)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {themes.map((theme) => (
                <div key={theme.name} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
                  <RadioGroupItem value={theme.name} id={theme.name} />
                  <Label htmlFor={theme.name} className="text-sm sm:text-base">
                    {theme.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label className="text-base sm:text-lg font-medium">Font</Label>
            <Select value={font} onValueChange={onFontChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="font-sans">Sans-serif</SelectItem>
                <SelectItem value="font-serif">Serif</SelectItem>
                <SelectItem value="font-mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="rounded-buttons" checked={roundedButtons} onCheckedChange={onRoundedButtonsChange} />
            <Label htmlFor="rounded-buttons" className="text-sm sm:text-base">
              Rounded Buttons
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

