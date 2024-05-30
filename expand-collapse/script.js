// const buttons = document.querySelectorAll(".expand-button")

// buttons.forEach((btn) => {
//   const parent = btn.closest(".card")
//   const cardBody = parent.children[1]

//   btn.addEventListener("click", (e) => {
//     if (btn.innerText === "Expand") {
//       cardBody.classList.add("show")
//       btn.innerText = "Collapse"
//       return
//     }

//     cardBody.classList.remove("show")
//     btn.innerText = "Expand"
//   })
// })

document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return

  const parent = e.target.closest(".card")
  const cardBody = parent.querySelector(".card-body")

  cardBody.classList.toggle("show")

  e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
})
