const checking = async()=>{

    const file = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await file.json()
    // console.log(data)
    displayPhones(data.data)//here data.data is details of phones
}
checking()
const  displayPhones = (phones)=>{
    const lists = document.getElementById('phone-container');
    phones.forEach(item=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="card card-normal w-96 bg-white shadow-xl">
                <figure class="px-10 pt-10">
                  <img src= ${item.image} alt="Iphone" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">${item.phone_name}</h2>
                  <p>There are many variations of passages of available, but the majority have suffered</p>
                  <div class="card-actions">
                    <button class="btn btn-primary" onclick="checking()">Show Details</button>
                  </div>
                </div>
              </div>
        `
    lists.appendChild(li)
    })
}