import Rgb from "./Rgb.js"

const COLOR_MAP = {
  rgb: Rgb
}

const DIFFICULTY_MAP = {
  easy: { withinTolerance: 1, outsideTolerance: 0.2 },
  medium: { withinTolerance: 0.5, outsideTolerance: 0.2 },
  hard: { withinTolerance: 0.3, outsideTolerance: 0.2 }
}

document.addEventListener("change", e => {
  if (e.target.matches('input[type="radio"]')) render()
})

const colorGrid = document.querySelector("[data-color-grid]")
const colorStringElement = document.querySelector("[data-color-string]")
const resultsElement = document.querySelector("[data-results]")

function render() {
  const format = document.querySelector('[name="format"]:checked').value
  const difficulty = document.querySelector('[name="difficulty"]:checked').value
  const { colors, correctColor } = generateColors({ format, difficulty })

  colorGrid.innerHTML = ""
  colorStringElement.textContent = correctColor.toCss()
  resultsElement.classList.add("hide")
  const colorElements = colors.map(color => {
    const element = document.createElement("button")
    element.style.backgroundColor = color.toCss()
    return { color, element }
  })
  colorElements.forEach(color => {
    const element = document.createElement("button")
    element.style.backgroundColor = color.toCss()
    colorGrid.appendChild(element)
  })
}

render()

function generateColors({ format, difficulty }) {
  const colorClass = COLOR_MAP[format]
  const difficultyRules = DIFFICULTY_MAP[difficulty]

  const correctColor = colorClass.generate()
  const colors = [correctColor]
  for (let i = 0; i < 5; i++) {
    colors.push(correctColor.generateSimilar(difficultyRules))
  }

  return { colors, correctColor }
}

const rgb = Rgb.generate()
console.log(
  rgb,
  rgb.generateSimilar({ withinTolerance: 0.3, outsideTolerance: 0.2 })
)
