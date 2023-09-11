let totalMoney =0;
let count =0;
let newTotal;
let discount;
let totalDiscount;
let couponActivate = false;
function createListItem(itemName,count){
    const ol = document.createElement("ol");
    ol.innerHTML = `
    ${count}&#46&nbsp   ${itemName}
    `;
    return ol;
}
const totalPriceElement = document.getElementById('totalPrice');
const totalElement = document.getElementById('total');
const discountInput =document.getElementById('discountInput').value;
const discountElement = document.getElementById('discount');
function addProductPrice(e){
count+=1;
let itemValue = parseFloat(e.childNodes[1].childNodes[3].childNodes[5].childNodes[0].childNodes[0].nodeValue);
const itemName =  e.childNodes[1].childNodes[3].childNodes[3].childNodes[0].data;

const itembrought = createListItem(itemName,count);
const productBroughtElement =document.getElementById('productBroughtList')
productBroughtElement.appendChild(itembrought);
const totalPrice = parseFloat(totalPriceElement.innerText);
const total = parseFloat(totalElement.innerText);
if(couponActivate == true){
    itemValue = 0.8 * itemValue;
    discountElement.innerHTML = totalDiscount + (0.2*itemValue);
    totalDiscount = totalDiscount + (0.2*itemValue);
}
 newTotal = totalPrice + itemValue;
    totalPriceElement.innerText = newTotal;
    totalElement.innerHTML = newTotal;
}
function addDiscount(){

    discount = parseFloat(discountElement.innerText);
    if(couponActivate == false && discountInput=="SELL 200"){
        discount = .8*newTotal;
        couponActivate=true;
        totalDiscount = newTotal-discount;
        discountElement.innerHTML = newTotal-discount;
        totalElement.innerHTML = discount;
    }
}
