export function getContrastColor(img: HTMLImageElement): string {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return "white"
  
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0, img.width, img.height)
  
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
  
    let r = 0,
      g = 0,
      b = 0
  
    for (let i = 0; i < data.length; i += 4) {
      r += data[i]
      g += data[i + 1]
      b += data[i + 2]
    }
  
    r = Math.floor(r / (data.length / 4))
    g = Math.floor(g / (data.length / 4))
    b = Math.floor(b / (data.length / 4))
  
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
  
    return brightness > 128 ? "black" : "white"
  }
  
  