// get form element
const emailForm = document.querySelector("#email-form");

// add submit event listener
emailForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  // make AJAX request to run PHP script
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "send_mail.php", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // display result in #result div
      document.querySelector("#result").innerHTML = xhr.responseText;
    } else {
      console.log("Error sending email.");
    }
  };
  xhr.send();
});
