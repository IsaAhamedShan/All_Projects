// const form = document.querySelector('#quiz-form')
const form = document.getElementById('quiz-form')
const answers=Array.from(document.querySelectorAll(".answer"))
const alert = document.querySelector("#alert")

form.addEventListener("submit", e=>{
    e.preventDefault()
    const checkedAnswers = answers.filter(answers=>answers.checked)
    checkedAnswers.forEach(answers=>{
        const isRight = answers.value==="true"
        const qi = answers.closest('.question-item')
        if(isRight){
            qi.classList.add("correct")
            qi.classList.remove("incorrect")
        }else{
            qi.classList.add("incorrect")
            qi.classList.remove("correct")
        }
})
const allTrue = checkedAnswers.every(answer=> answer.value==='true')
// const allAnswered = checkedAnswers.length === questionItem.length
if(allTrue){
    alert.classList.add("active")
    setTimeout( ()=>{alert.classList.remove("active")} ,1100)
    }
}
)