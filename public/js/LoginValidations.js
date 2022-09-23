

let LoginEmailValidation = document.querySelector('#LoginEmailValidation');
let LoginPasswordValidation = document.querySelector('.LoginPasswordValidation');
let sendLoginForm = document.querySelector(".sendLoginForm")

const error_fieldLoginPassword = document.querySelector('.error_fieldLoginPassword')
const error_fieldLoginEmail = document.querySelector('.error_fieldLoginEmail')
const errorSubmitLogin = document.querySelector('.errorSubmitLogin')


let errorPassword = false;
let errorEmail = false;

LoginPasswordValidation.addEventListener('keyup', function () {
        if (LoginPasswordValidation.value == "") {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "No debes dejar este campo sin llenar";
            errorPassword = false;
        } else if (LoginPasswordValidation.value.length < 8) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Los caracteres deben superar los 8";
            errorPassword = false;

        } else if (!LoginPasswordValidation.value.match(/(?=.*?[a-z])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "debe contener un nimusolsjklsf";
            errorPassword = false;

        } else if (!LoginPasswordValidation.value.match(/(?=.*?[A-Z])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "debe contener un mayuscula";
            errorPassword = false;

        } else if (!LoginPasswordValidation.value.match(/(?=.*?[.#?!@$%^&*-])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "debe contener un caracter especail (#?!@$%^&*-)";
            errorPassword = false;

        } else {
            error_fieldLoginPassword.style.display = "none"
            LoginPasswordValidation.style.borderColor = ""
            errorPassword = true;
        }

    }

)

LoginEmailValidation.addEventListener('keyup', function () {
    var matchEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

        if (LoginEmailValidation.value == "") {
            error_fieldLoginEmail.style.display = "block"
            LoginEmailValidation.style.borderColor = "red"
            error_fieldLoginEmail.innerHTML = "No debes dejar este campo sin llenar";
            errorEmail = false;
    

        } 
        else if(!LoginEmailValidation.value.match(matchEmail)){
            error_fieldLoginEmail.style.display = "block"
            LoginEmailValidation.style.borderColor = "red"
            error_fieldLoginEmail.innerHTML = "debe ser un formato valido";
            errorEmail = false;
        }
        
        
        else {
            error_fieldLoginEmail.style.display = "none"
            LoginEmailValidation.style.borderColor = ""
            errorEmail = true;
        }

    }

)

sendLoginForm.addEventListener("click", function(e){
   
    if(!errorPassword && !errorEmail){
        errorSubmitLogin.style.display = "block",
        errorSubmitLogin.innerHTML = "debe completar correctamente los campos";
        e.preventDefault()
    }
    else if(!errorPassword){
        errorSubmitLogin.style.display = "block",
        errorSubmitLogin.innerHTML = "debe completar correctamente el campo password";
        e.preventDefault()
    }
    else if(!errorEmail){
        errorSubmitLogin.style.display = "block",
        errorSubmitLogin.innerHTML = "debe completar correctamente el camo email";
        e.preventDefault()
    }

   
  

})