//select all elements
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
const list = document.querySelector('#list')

//when i submit a form add new element (e=> means 1 arguments)

form.addEventListener("submit",e=>{
    e.preventDefault()

    const item = document.createElement('div')
    // create new items
    createItemBody(item)
    //add that item to list
    addItem(item)
    //setup event listener to delete item when click
    item.addEventListener('click',()=>{
        // list.removeChild(item)
        item.remove()
    })

})

function createItemBody(item){
    item.innerText= input.value
    item.classList.add('list-item')
}
function addItem(item){
    list.appendChild(item)
    //clear input
    input.value=""
}