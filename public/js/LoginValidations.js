let LoginEmailValidation = document.querySelector('#LoginEmailValidation');
let LoginPasswordValidation = document.querySelector('.LoginPasswordValidation');

const error_fieldLoginPassword = document.querySelector('.error_fieldLoginPassword')
const error_fieldLoginEmail = document.querySelector('.error_fieldLoginEmail')


let errorPassword = false;

LoginPasswordValidation.addEventListener('keyup', function(){
if(LoginPasswordValidation.value == ""){
    error_fieldLoginPassword.style.display = "block"
    LoginPasswordValidation.style.borderColor = "red"
    error_fieldLoginPassword.innerHTML = "No debes dejar este campo sin llenar";
    errorPassword = false;
}else if(LoginPasswordValidation.value.length < 8){
    error_fieldLoginPassword.style.display = "block"
    LoginPasswordValidation.style.borderColor = "red"
    error_fieldLoginPassword.innerHTML = "Los caracteres deben superar los 8";
    errorPassword = false;

}
else if(!LoginPasswordValidation.value.match(/(?=.*?[a-z])/)){
    error_fieldLoginPassword.style.display = "block"
    LoginPasswordValidation.style.borderColor = "red"
    error_fieldLoginPassword.innerHTML = "debe contener un nimusolsjklsf";
    errorPassword = false;

}else if(!LoginPasswordValidation.value.match(/(?=.*?[A-Z])/)){
    error_fieldLoginPassword.style.display = "block"
    LoginPasswordValidation.style.borderColor = "red"
    error_fieldLoginPassword.innerHTML = "debe contener un mayuscula";
    errorPassword = false;

}else if(!LoginPasswordValidation.value.match(/(?=.*?[.#?!@$%^&*-])/)){
    error_fieldLoginPassword.style.display = "block"
    LoginPasswordValidation.style.borderColor = "red"
    error_fieldLoginPassword.innerHTML = "debe contener un caracter especail (#?!@$%^&*-)";
    errorPassword = false;

}else{
    error_fieldLoginPassword.style.display = "none"
    LoginPasswordValidation.style.borderColor = ""
     errorPassword = true;
}

}

)
