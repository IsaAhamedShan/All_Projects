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
function listAppend(count, name,area){
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
    count = count + 1;
    const result = getElementByInput('triangleFirstInput','triangleSecondInput');
    const area = 0.5*result;
    const calculationList = document.getElementById('calculationList');
    const tlist = listAppend(count,'Triangle', area);
    calculationList.appendChild(tlist);
    console.log(area);
}

