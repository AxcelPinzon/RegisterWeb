console.log("Hello World")
let btnRegister = document.querySelector ("#btnRegister");
let txtUsername = document.querySelector ("#txtUsername");
let txtPassword = document.querySelector ("#txtPassword");
let txtConfirm = document.querySelector ("#txtConfirm");
let txtAge = document.querySelector ("#txtAge");


btnRegister.onclick = function(){
    register(txtUsername.value, txtPassword.value, txtConfirm.value, txtAge.value);
} 

function register (username, password, confirmPassword, age){
    console.log(username, password, confirmPassword, age);
}