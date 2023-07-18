// const form = document.querySelector('#quiz-form')
const form = document.getElementById('quiz-form')
const answers=Array.from(document.querySelectorAll(".answer"))
const alert = document.querySelector("#alert")
// console.log(answers)

form.addEventListener("submit", e=>{
    e.preventDefault()
    const checkedAnswers = answers.filter(answer=>answer.checked)
checkedAnswers.forEach(answer=>{
    const isCorrect = answer.value==="true"
    const questionItem = answer.closest('.question-item')
    
    if(isCorrect){
        questionItem.classList.add('correct')
        questionItem.classList.remove('incorrect') 
    }
    else{
        questionItem.classList.add('incorrect')
        questionItem.classList.remove('correct')

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