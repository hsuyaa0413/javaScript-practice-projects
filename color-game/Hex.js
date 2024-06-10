import Rgb from "./Rgb.js"

export default class Hex extends Rgb {
  toCss() {
    const rHex = generateHex(this.r)
    const gHex = generateHex(this.g)
    const bHex = generateHex(this.b)
    return `#${rHex}${gHex}${bHex}`
  }
}

function generateHex(decimal) {
  return decimal.toString(16)
}
