

let firstNameProfileEditValid =  document.querySelector(".firstNameProfileEditValid")
let lastNameProfileEditValid =  document.querySelector(".lastNameProfileEditValid")
let phoneNumberProfileEditValid =  document.querySelector(".phoneNumberProfileEditValid")
let imgProfileEditValid = document.querySelector("#imgProfileEditValid")

let submitProfileEditValid = document.querySelector("#submitProfileEditValid")



const error_firstNameProfileEdit = document.querySelector(".error_firstNameProfileEdit")
const error_lastNameProfileEdit = document.querySelector(".error_lastNameProfileEdit")
const error_phoneNumberProfileEdit = document.querySelector(".error_phoneNumberProfileEdit")
const error_imgProfileEdit = document.querySelector(".error_imgProfileEdit")


const error_submitProfileEdit = document.querySelector(".error_submitProfileEdit")



let errorsProfileEdit = [];


firstNameProfileEditValid.addEventListener("keyup", function(){
    if (firstNameProfileEditValid.value == ""){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "pone algo hdp";
        firstNameProfileEditValid.style.borderColor = "red";
        errors.push("pone algo hdp")
        
    }

    else if (firstNameProfileEditValid.value.trim().length < 2){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "Tiene que ser mayor a 1";
        firstNameProfileEditValid.style.borderColor = "red";
        errors.push("tiene que ser mayor a 1")
        

    }

    else {
        error_firstNameProfileEdit.style.display = "none";
        firstNameProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf("pone algo hdp" || "tiene que ser mayor a 1")
        errorsProfileEdit.splice(profileEditSinError)
        

    }
})


lastNameProfileEditValid.addEventListener("keyup", function(){
    if (lastNameProfileEditValid.value == ""){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "ponete algo rei";
        lastNameProfileEditValid.style.borderColor = "red";
        errors.push("ponete algo rei")
        
    }

    else if (lastNameProfileEditValid.value.trim().length < 3){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "tiene que ser mayor a 3 pa";
        lastNameProfileEditValid.style.borderColor = "red";
        errors.push("tiene que ser mayor a 3 pa")
       

    }

    else {
        error_lastNameProfileEdit.style.display = "none";
        lastNameProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf("ponete algo rei" || "tiene que ser mayor a 3 pa")
        errorsProfileEdit.splice(profileEditSinError)
        
    }
})


phoneNumberProfileEditValid.addEventListener("keyup", function(){
    if (phoneNumberProfileEditValid.value == ""){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "tiene que ser un formato valido";
        phoneNumberProfileEditValid.style.borderColor = "red";
        errors.push("tiene que ser un formato valido")
        
    }

    else if (phoneNumberProfileEditValid.value.trim().length < 7 || phoneNumberProfileEditValid.value.trim().length > 16){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "entre 7 y 16";
        phoneNumberProfileEditValid.style.borderColor = "red";
        errors.push("entre 7 y 16")
        

    }

    else {
        error_phoneNumberProfileEdit.style.display = "none";
        phoneNumberProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf("entre 7 y 16" || "tiene que ser mayor a 3 pa")
        errorsProfileEdit.splice(profileEditSinError)
       

    }
})

imgProfileEditValid.addEventListener('change', function () {

    let inputValue = this.value;

    let fileExtension = inputValue.split('.');
    let extension = fileExtension[1];

    let allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    let extensionMatch = false;

    allowedExtensions.forEach(extensionA => {
        if (extensionA == extension) {
            extensionMatch = true;
        }
    })

    if (!extensionMatch) {
        error_imgProfileEdit.style.display = "block"
        imgProfileEditValid.style.color = "red";
        error_imgProfileEdit.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        errors.push("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errorImagenEdit = false;
        errors.push("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)")

   } else {
        error_imgProfileEdit.style.display = "none";
        imgProfileEditValid.style.color = "green";
        let profileEditSinError = errorsProfileEdit.indexOf("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errorsProfileEdit.splice(profileEditSinError);
        errorImagenEdit = true

    }
});







submitProfileEditValid.addEventListener('click', function (event) {
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].length > 0 ) {
            error_submitProfileEdit.style.display = 'block'
            error_submitProfileEdit.innerHTML = "Debes completar las casillas correctamente , y luego volver a enviar el formulario"
            event.preventDefault();
        }

    }
 if(!errorImagenEdit){
        
    imgProfileEditValid.style.color = "red";
    imgProfileEditValid.style.fontSize = "large";
        error_imgProfileEdit.style.display ="block" 
        error_imgProfileEdit.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        event.preventDefault();
    }

    if(!errors[0]){
        error_fieldPeSend.style.display = 'none'

    }
   
})
