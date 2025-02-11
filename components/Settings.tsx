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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Theme</Label>
            <RadioGroup
              value={currentTheme.name}
              onValueChange={(value) => onThemeChange(themes.find((t) => t.name === value)!)}
            >
              {themes.map((theme) => (
                <div key={theme.name} className="flex items-center space-x-2">
                  <RadioGroupItem value={theme.name} id={theme.name} />
                  <Label htmlFor={theme.name}>{theme.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label>Font</Label>
            <Select value={font} onValueChange={onFontChange}>
              <SelectTrigger>
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
            <Label htmlFor="rounded-buttons">Rounded Buttons</Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

