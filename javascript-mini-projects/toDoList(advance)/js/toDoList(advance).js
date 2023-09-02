//add to do
//user will type some text in the input and will click
//the add todo button
const form = document.querySelector('#new-todo-form')
const todoInput= document.querySelector('#todo-input')
const list= document.querySelector('#list')
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = 'ADVANCE_TODO_LIST'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos= loadTodos()
todos.forEach(todo=> renderToDo(todo))


form.addEventListener('submit',e=>{
e.preventDefault()

const todoName = todoInput.value
if(todoName==="") return
const newTodo={
    name:todoName,
    complete:false,
    id: new Date().valueOf().toString()
}
todos.push(newTodo)
renderToDo(newTodo)
saveTodos()

todoInput.value=""
})

list.addEventListener('change', e=>{
    if(! e.target.matches('[data-list-item-checkbox]')) return

    //get the todo that is clicked on and toogle the complete
    // property to equal to the checkbox value
    const parent =  e.target.closest('.list-item')
    const todoId = parent.dataset.todoId
    const todo = todos.find(t => t.id === todoId)
    todo.complete = e.target.checked
    //save our updated todo
    saveTodos()
    })
function renderToDo(todo)   {
const templateClone = template.content.cloneNode(true)
const listItem = templateClone.querySelector(".list-item")
listItem.dataset.todoId = todo.id
const textElement = templateClone.querySelector('[data-list-item-text]')
textElement.innerHTML = todo.name
const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
checkbox.checked=todo.complete

list.appendChild(templateClone)
}
//save todo

function saveTodos(){
localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}
//load todo
function loadTodos(){
const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
return JSON.parse(todosString) || []

}

// delete todos

list.addEventListener('click',e=>{
if(!e.target.matches('[data-button-delete]')) return

const parent =  e.target.closest('.list-item')
const todoId = parent.dataset.todoId
parent.remove()
todos = todos.filter(todo=> todo.id !==todoId)
//save our updated todo
saveTodos()
})