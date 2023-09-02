const email = document.getElementById('email');

const password = document.getElementById('password');

const form = document.getElementById('form');
const btn = document.getElementById('btn-submit');
btn.addEventListener("click", (e) =>{
    const passwordValue = password.value;
    const emailValue = email.value;
    console.log(passwordValue, emailValue);
    console.log('sdf');
    if(email.value==="isaahmedshan190138@gmail.com" && password.value ==="secret"){
        console.log('valid');
    }
    else{
        e.preventDefault();
        alert("invalid email or password");
    }

})