

let firstNameProfileEditValid =  document.querySelector(".firstNameProfileEditValid")
let lastNameProfileEditValid =  document.querySelector(".lastNameProfileEditValid")
let phoneNumberProfileEditValid =  document.querySelector(".phoneNumberProfileEditValid")
let submitProfileEditValid = document.querySelector("#submitProfileEditValid")


const error_firstNameProfileEdit = document.querySelector(".error_firstNameProfileEdit")
const error_lastNameProfileEdit = document.querySelector(".error_lastNameProfileEdit")
const error_phoneNumberProfileEdit = document.querySelector(".error_phoneNumberProfileEdit")
const error_submitProfileEdit = document.querySelector(".error_submitProfileEdit")

let firstNameError = false;
let lastNameError = false;
let phoneNumberError = false;


firstNameProfileEditValid.addEventListener("keyup", function(){
    if (firstNameProfileEditValid.value == ""){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "pone algo hdp";
        firstNameProfileEditValid.style.borderColor = "red";
        firstNameError = false;
    }

    else if (firstNameProfileEditValid.value.trim().length < 2){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "Tiene que ser mayor a 1";
        firstNameProfileEditValid.style.borderColor = "red";
        firstNameError = false;

    }

    else {
        error_firstNameProfileEdit.style.display = "none";
        firstNameProfileEditValid.style.borderColor = "";
        firstNameError = true;

    }
})


lastNameProfileEditValid.addEventListener("keyup", function(){
    if (lastNameProfileEditValid.value == ""){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "ponete algo rei";
        lastNameProfileEditValid.style.borderColor = "red";
        lastNameError = false;
    }

    else if (lastNameProfileEditValid.value.trim().length < 3){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "tiene que ser mayor a 3 pa";
        lastNameProfileEditValid.style.borderColor = "red";
        lastNameError = false;

    }

    else {
        error_lastNameProfileEdit.style.display = "none";
        lastNameProfileEditValid.style.borderColor = "";
        lastNameError = true;
    }
})


phoneNumberProfileEditValid.addEventListener("keyup", function(){
    if (phoneNumberProfileEditValid.value == ""){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "tiene que ser un formato valido";
        phoneNumberProfileEditValid.style.borderColor = "red";
        phoneNumberError = false;
    }

    else if (phoneNumberProfileEditValid.value.trim().length < 7 || phoneNumberProfileEditValid.value.trim().length > 16){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "entre 7 y 16";
        phoneNumberProfileEditValid.style.borderColor = "red";
        phoneNumberError = false;

    }

    else {
        error_phoneNumberProfileEdit.style.display = "none";
        phoneNumberProfileEditValid.style.borderColor = "";
        phoneNumberError = true;

    }
})

submitProfileEditValid.addEventListener("click", function(e){
    if (!firstNameError){
        error_submitProfileEdit.style.display = "block";
        error_submitProfileEdit.innerHTML = "Debe completar correctamente los campos, o actualizar los mismo";
        submitProfileEditValid.style.borderColor = "red";
        e.preventDefault()
    }
    else  if (!lastNameError){
        error_submitProfileEdit.style.display = "block";
        error_submitProfileEdit.innerHTML = "Debe completar correctamente los campos, o actualizar los mismo";
        submitProfileEditValid.style.borderColor = "red";
        e.preventDefault()
    }
    else  if (!phoneNumberError){
        error_submitProfileEdit.style.display = "block";
        error_submitProfileEdit.innerHTML = "Debe completar correctamente los campos, o actualizar los mismo";
        submitProfileEditValid.style.borderColor = "red";
        e.preventDefault()
    }

    else {
        error_submitProfileEdit.style.display = "none";

    }
})
