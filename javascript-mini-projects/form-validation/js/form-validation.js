const form = document.querySelector("#form-validation");
// console.log(form)
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const termAgree = document.querySelector("#termAgree");
const errorContainer = document.querySelector(".error");
const errorTitle = document.querySelector(".error-title");
const errorList = document.querySelector(".errorList");

form.addEventListener("submit", (e) => {
  const isChecked = termAgree.checked;
  const errorMessage = [];
  clearErrorMessage();
  if (username.value.length < 6) {
    errorMessage.push("Username must be atleast 6 letter");
  }
  if (password.value.length < 8 && passwordConfirm.value.length < 8) {
    errorMessage.push("Password length should be aleast 8 letters");
  } else if (password.value !== passwordConfirm.value) {
    errorMessage.push("Password Mismatch");
  }

  if (!isChecked) {
    errorMessage.push("Must agree on term");
  }
  // if(username[0].input.value <6){
  //     console.log("less than 6")
  // }
  // console.log(errorList.length)
  if (errorMessage.length > 0) {
    showError(errorMessage);
    e.preventDefault();
  }
});
function clearErrorMessage() {
  // errorList.innerHTML=""  //or we can do

  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
}

function showError(errorMessage) {
  errorMessage.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorList.appendChild(li);
    errorContainer.classList.add("show");
    errorTitle.classList.add("show");
  });
}
