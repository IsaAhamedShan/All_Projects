const modal = document.querySelector("#modal")
const closeBtn = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")
const openBtn = document.querySelector("#open-modal-btn")

openBtn.addEventListener("click",()=>{
    // e.preventDefault()
    modal.classList.add("open")
    overlay.classList.add("open")
    // console.log("added")
})
closeBtn.addEventListener("click",()=>{
    // e.preventDefault()
    modal.classList.remove("open")
    overlay.classList.remove("open")
    // console.log("added")
})
overlay.addEventListener("click",()=>{
    // e.preventDefault()
    modal.classList.remove("open")
    overlay.classList.remove("open")
    // console.log("added")
})