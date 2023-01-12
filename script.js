var email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4a5f6a"; 
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";

});

var password = document.getElementById('password');
