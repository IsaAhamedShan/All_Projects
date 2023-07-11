//select all elements
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
const list = document.querySelector('#list')

//when i submit a form add new element (e=> means 1 arguments)

form.addEventListener("submit",e=>{
    e.preventDefault()
    console.log(input.value)
    //
    // create new items
    const item = document.createElement('div')
    item.innerText= input.value
    item.classList.add('list-item')

    console.log(item)

    //add that item to list

    list.appendChild(item)
    //clear input
    input.value=""
    
    //setup event listener to delete item when click
    item.addEventListener('click',()=>{
        // list.removeChild(item)
        item.remove()
    })




})