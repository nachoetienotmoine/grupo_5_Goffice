

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
let errorImagenEdit = false;

firstNameProfileEditValid.addEventListener("keyup", function(){
    if (firstNameProfileEditValid.value == ""){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "El campo FirstName no puede estar vacio";
        firstNameProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("El campo FirstName no puede estar vacio")
        
    }

    else if (firstNameProfileEditValid.value.trim().length < 2){
        error_firstNameProfileEdit.style.display = "block";
        error_firstNameProfileEdit.innerHTML = "El campo firstName tiene que ser mayor a 1";
        firstNameProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("El campo firstName tiene que ser mayor a 1")
        

    }

    else {
        error_firstNameProfileEdit.style.display = "none";
        firstNameProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf( "El campo FirstName no puede estar vacio"|| "El campo firstName tiene que ser mayor a 1")
        errorsProfileEdit.splice(profileEditSinError)
        

    }
})


lastNameProfileEditValid.addEventListener("keyup", function(){
    if (lastNameProfileEditValid.value == ""){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "El campo LastName no puede estar vacio";
        lastNameProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("ponete algo rei")
        
    }

    else if (lastNameProfileEditValid.value.trim().length < 3){
        error_lastNameProfileEdit.style.display = "block";
        error_lastNameProfileEdit.innerHTML = "El campo LastName tiene que ser mayor a 3";
        lastNameProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("El campo LastName tiene que ser mayor a 3")
       

    }

    else {
        error_lastNameProfileEdit.style.display = "none";
        lastNameProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf("El campo LastName no puede estar vacio" || "El campo LastName tiene que ser mayor a 3")
        errorsProfileEdit.splice(profileEditSinError)
        
    }
})


phoneNumberProfileEditValid.addEventListener("keyup", function(){
    if (phoneNumberProfileEditValid.value == ""){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "El campo phoneNumber no puede estar vacio";
        phoneNumberProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("El campo phoneNumber no puede estar vacio")
        
    }

    else if (phoneNumberProfileEditValid.value.trim().length < 7 || phoneNumberProfileEditValid.value.trim().length > 16){
        error_phoneNumberProfileEdit.style.display = "block";
        error_phoneNumberProfileEdit.innerHTML = "El campo phoneNumber debe contener entre 7 y 16 caracteres";
        phoneNumberProfileEditValid.style.borderColor = "red";
        errorsProfileEdit.push("El campo phoneNumber debe contener entre 7 y 16 caracteres")
        

    }

    else {
        error_phoneNumberProfileEdit.style.display = "none";
        phoneNumberProfileEditValid.style.borderColor = "";
        let profileEditSinError = errorsProfileEdit.indexOf("El campo phoneNumber no puede estar vacio" || "El campo phoneNumber debe contener entre 7 y 16 caracteres")
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
        errorsProfileEdit.push("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errorImagenEdit = false;
        errorsProfileEdit.push("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)")

   } else {
        error_imgProfileEdit.style.display = "none";
        imgProfileEditValid.style.color = "green";
        let profileEditSinError = errorsProfileEdit.indexOf("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errorsProfileEdit.splice(profileEditSinError);
        errorImagenEdit = true
        

    }
});







submitProfileEditValid.addEventListener('click', function (event) {
    for (let i = 0; i < errorsProfileEdit.length; i++) {
        if (errorsProfileEdit[i].length > 0 ) {
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

    if(!errorsProfileEdit[0]){
        error_fieldPeSend.style.display = 'none'

    }
   
})
