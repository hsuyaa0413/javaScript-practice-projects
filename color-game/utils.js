export function randomNumber({ min = 0, max }) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomValueInRange(options) {
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
