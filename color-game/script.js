import Rgb from "./Rgb.js"

function render() {
  const format = document.querySelector('[name="format"]:checked').value
  const difficulty = document.querySelector('[name="difficulty"]:checked').value
  generateColors({ format, difficulty })
}

function generateColors() {}

const rgb = Rgb.generate()
console.log(
  rgb,
  rgb.generateSimilar({ withinTolerance: 0.3, outsideTolerance: 0.2 })
)
