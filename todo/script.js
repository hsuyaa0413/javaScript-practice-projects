const form = document.querySelector("form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-items")

  list.appendChild(item)

  input.value = ""

  item.addEventListener("click", () => {
    item.remove()
  })
})
