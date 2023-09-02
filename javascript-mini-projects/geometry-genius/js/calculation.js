let count = 0;
// const { list } = require("postcss");

function getElementByInput(firstInput,secondInput) {
    const finputElement = document.getElementById(firstInput);
    const sinputElement = document.getElementById(secondInput);
    const finputValue = finputElement.value;
    const sinputValue = sinputElement.value;
    const result = finputValue * sinputValue;
    // finputElement.value = ''; //ADD THIS LATER
    // sinputElement.value = '';
    return result;
}
function createListItem(count, name,area){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${count}</td>
      <p class='mx-3'>${name}</P>
      <td>${area.toFixed(2)}</td>
      <p>cm<sup>2</sup></p>
      <td>
      <button class='btn btn-primary mx-3'>Convert</button>
      </td>
    `;
    return tr;
}

//USE INNERTEXT INSTEAD OF INNER HTML CAUSE ITS VULNURABLE TO XSS ATTACK
//selecting triangle input and calculating
function triangleArea(){
    count += 1;
    const result = getElementByInput('triangleFirstInput','triangleSecondInput');
    const area = 0.5*result;
    const tlist = createListItem(count,'Triangle', area);
    const calculationListElement = document.getElementById('calculationList');
    calculationListElement.appendChild(tlist);
    console.log(area);
}
function rectangleArea(){
    count += 1;
    const result = getElementByInput('rectangleFirstInput','rectangleSecondInput');
    const area = result;
    const tlist = createListItem(count,'Rectangle', area);
    const calculationListElement = document.getElementById('calculationList');
    calculationListElement.appendChild(tlist);
    console.log(area);
}
function parallelogramArea(){
    count += 1;
    const result = getElementByInput('parallelogramFirstInput','parallelogramSecondInput');
    const area = 0.5*result;
    const tlist = createListItem(count,'Parallelogram', area);
    const calculationListElement = document.getElementById('calculationList');
    calculationListElement.appendChild(tlist);
    console.log(area);
}
function rhombusArea(){
    count += 1;
    const result = getElementByInput('rhombusFirstInput','rhombusSecondInput');
    const area = result;
    const tlist = createListItem(count,'Rhombus', area);
    const calculationListElement = document.getElementById('calculationList');
    calculationListElement.appendChild(tlist);
    console.log(area);
}
function pentagonArea(){
    count += 1;
    const result = getElementByInput('pentagonFirstInput','pentagonSecondInput');
    const area = result;
    const tlist = createListItem(count,'Pentagon', area);
    const calculationListElement = document.getElementById('calculationList');
    calculationListElement.appendChild(tlist);
    console.log(area);
}

