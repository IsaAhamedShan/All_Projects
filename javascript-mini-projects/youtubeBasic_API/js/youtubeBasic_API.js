const navBar = function (){
    const urlNavBaR = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(urlNavBaR)
    .then(res => res.json())
    .then(navData =>makeNavBar(navData.data))
}
navBar();

const videoList = function(category) {
const urlVideoList = `https://openapi.programming-hero.com/api/videos/category/${category}`;
fetch(urlVideoList)
.then(res=>res.json())
.then(data=>{
    makeCards(data.data);
}
);
}


function sortByViewsDescending(a, b) {
  const viewsA = parseInt(a.others.views.replace(/[^0-9]/g, ''), 10); // Extract and parse views as numbers
  const viewsB = parseInt(b.others.views.replace(/[^0-9]/g, ''), 10); // Extract and parse views as numbers

  return viewsB > viewsA; // Sort in descending order
}

// Sort the data by views (high to low)

const videoListSort = async function() {
  const urlVideoList = `https://openapi.programming-hero.com/api/videos/category/1000`;

    const response = await fetch(urlVideoList);
    const data = await response.json();

    data.data.sort(sortByViewsDescending);
    console.log(data.data.sort(sortByViewsDescending));

    makeCards(data.data);
};


videoList(1000)

const makeNavBar = (navData)=>{
const headElement = document.getElementById('headerElement');

const d = document.createElement('div');
d.innerHTML = `
<div class="flex flex-wrap justify-between py-10 border-b-2 mb-8">
        <p class="font-bold text-3xl text-black">Goriber Youtube</p>
        <button class="btn btn-primary btn-wide" onclick="videoListSort()">Sort By view</button>
        <button class="btn btn-primary">Blog</button>
      </div>
      <div class="flex justify-center [&>*]:px-8 [&>*]:mx-6">
        <button class="btn btn-primary" onclick="videoList(${navData[0].category_id})">${navData[0].category}</button>
        <button class="btn btn-primary" onclick="videoList(${navData[1].category_id})">${navData[1].category}</button>
        <button class="btn btn-primary" onclick="videoList(${navData[2].category_id})">${navData[2].category}</button>
        <button class="btn btn-primary" onclick="videoList(${navData[3].category_id})">${navData[3].category}</button>
      </div>
`
headElement.append(d)
}
function showError(){
  const cardList = document.getElementById('cardList');
  const li = document.createElement('li');
li.innerHTML =
`<div class="h-[75vh] flex justify-center items-center">

  <h1 class="text-5xl">Oops!! Sorry, There is no content here </h1>
</div>`


cardList.appendChild(li);
}

const  makeCards = (data)=>{
const cardList = document.getElementById('cardList');
cardList.textContent='';
if(data.length==0){
  return showError();
}
data.forEach(item=> {

const li = document.createElement('li');
li.innerHTML = `
<div class="card card-normal max-w-[22rem] h-[336px] bg-white shadow-xl m-4 relative">
        <figure><img src="${item.thumbnail}" alt="profile pic" class="rounded-xl w-full min-h-[220px]" /></figure>
        <p class="absolute left-[245px] top-[180px] bg-slate-900 text-white px-1">${showUploadTime(item)}</p>
        <div class="px-0 py-4 flex flex-row ">
                <img src="${item.authors[0].profile_picture}" class="w-[2.5rem] h-[2.5rem] rounded-full" alt="">
          <div class="px-4">
              <h2 class="card-title">${item.title}</h2>
              <p>${item.authors[0].profile_name}</p>
              <p>${item.others.views} views</p>
          </div>
        </div>
      </div>
`
cardList.appendChild(li);

});

}

function showUploadTime(item) {
let diff = item.others.posted_date;
let formatted = '';
const years = Math.floor(diff / 31556926000 ).toFixed(0);
if (years >= 1) {
  formatted += `${years} year${years > 1 ? 's' : ''} `;
  diff = diff - (years*31556926000)
  return formatted+' ago';
}

const months = Math.floor(diff / 2629800000).toFixed(0);
if (months >= 1){
  formatted += `${months} month${months > 1 ? 's' : ''} `
  // diff = diff - (months*2629800000)
  return formatted+' ago ';

};

const weeks = Math.floor(diff / (86400000*7)).toFixed(0);
if (weeks>=1 ){
 formatted += `${weeks} week${weeks > 1 ? 's' : ''} `
// diff = diff - (weeks*(7*86400000))
return formatted+' ago ';
};

const hours = Math.floor(diff / 3600).toFixed(0);
if (hours >= 1){
  formatted += `${hours} hour${hours > 1 ? 's' : ''} `;
  // diff = diff - (hours*3600)
  return formatted+' ago ';
}

const mins = Math.floor(diff / 60).toFixed(0);
if (mins >=1){
  formatted += `${mins} min `;
  // diff = diff - (mins*60)
}
return formatted;
}
