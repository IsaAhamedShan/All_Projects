const checking = async(searchText)=>{
    const loadingIcon = document.getElementById('loading');
    loadingIcon.innerHTML = `
    <div class="bg-gray-300 flex justify-center items-center h-[100vh]"><span class="loading loading-dots loading-lg "></span></div>
    `
    const file = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await file.json()
    loadingIcon.innerHTML = ''
    // console.log(data)
    displayPhones(data.data)//here data.data is details of phones
}

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click',()=>{
    const inputField = document.getElementById('inputField');

    const v = inputField.value;
    checking(v)
    inputField.value='';
})
checking('iphone')
const  displayPhones = (phones)=>{
    const lists = document.getElementById('phone-container');
    lists.textContent=''
    phones.forEach(item=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="card card-normal w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
        <img src= ${item.image} id ="" alt="Iphone" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${item.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
        <button class="btn btn-primary" id="${item.slug}" onclick="showDetails('${item.slug}')">Show Details</button>
        </div>
        </div>
        </div>
        `
        lists.appendChild(li)
    })
}


const showDetails = async(phoneSlug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    // const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
    const file = await fetch(url);
    const data = await file.json()
    addDialog(data.data)
    console.log(data.data)
}
function addDialog(item) {
    //after clicking "show details" creating the dialog and appending it to the 'dialog's div' and showing the dialog.

    const listDialog = document.getElementById('phone-container');
    const li = document.createElement('li')
    li.innerHTML = `
    <dialog data-modal class="max-w-[40rem] p-6 rounded-lg bg-slate-500 shadow-lg [&>*]:py-2">
        <img class="m-auto" src="${item.image}" alt="Phone's pic" />
        <h3 class="text-3xl font-bold">${item.name}</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p>Storage: ${item.mainFeatures.storage}</p>
        <p>Display Size: ${item.mainFeatures.displaySize}</p>
        <p>Chip set: ${item.mainFeatures.chipSet}</p>
        <p>Memory: ${item.mainFeatures.memory}</p>
        <p>Slug: ${item.slug}</p>
        <p>Release Date: ${item.releaseDate}</p>
        <p>Brand: ${item.brand}</p>
        <div class=" flex justify-end"><button class="btn btn-primary btn-md" id="closeModal">Close</button></div>
      </dialog>
    `
    listDialog.appendChild(li)
    const theModal = document.querySelector("[data-modal]")
    theModal.showModal();
    //close the modal
    const closeBtn = document.getElementById('closeModal')
    closeBtn.addEventListener('click', () =>{
    theModal.close()
    li.remove()

    })
}

 