const MAX_RGB_VALUE = 255

export default class Rgb {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  static generate() {
    return new Rgb(
      randomNumber({ max: MAX_RGB_VALUE }),
      randomNumber({ max: MAX_RGB_VALUE }),
      randomNumber({ max: MAX_RGB_VALUE })
    )
  }

  generateSimilar(options) {
    return new Rgb(
      randomValueInRange({
        startingValue: this.r,
        maxCutoff: MAX_RGB_VALUE,
        ...options
      }),
      randomValueInRange({
        startingValue: this.g,
        maxCutoff: MAX_RGB_VALUE,
        ...options
      }),
      randomValueInRange({
        startingValue: this.b,
        maxCutoff: MAX_RGB_VALUE,
        ...options
      })
    )
  }

  toCss() {
    return `rgb(${this.r},${this.g},${this.b})`
  }
}

function randomNumber({ min = 0, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomValueInRange(options) {
  const ranges = validRanges(options)

  const range = ranges[randomNumber({ max: ranges.length - 1 })]
  return randomNumber(range)
}

function validRanges({
  startingValue,
  maxCutoff,
  withinTolerance,
  outsideTolerance
}) {
  const withinToleranceIncrementer = Math.floor(withinTolerance * maxCutoff)
  const outsideToleranceIncrementer = Math.ceil(outsideTolerance * maxCutoff)

  const aboveRangeMin = startingValue + outsideToleranceIncrementer
  const aboveRangeMax = Math.min(
    startingValue + withinToleranceIncrementer,
    maxCutoff
  )

  const belowRangeMin = Math.max(startingValue - withinToleranceIncrementer, 0)
  const belowRangeMax = startingValue - outsideToleranceIncrementer

  const ranges = []
  if (aboveRangeMax > aboveRangeMin) {
    ranges.push({ min: aboveRangeMin, max: aboveRangeMax })
  }
  if (belowRangeMax > belowRangeMin) {
    ranges.push({ min: belowRangeMin, max: belowRangeMax })
  }

  return ranges
}
