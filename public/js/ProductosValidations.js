const error_fieldPname = document.querySelector('.error_fieldPname');
const error_fieldPdescription = document.querySelector('.error_fieldPdescription');
const error_fieldPimage = document.querySelector('.error_fieldPimage');
const error_fieldPprice = document.querySelector('.error_fieldPprice');
const error_fieldPSend = document.querySelector('.error_fieldPSend');


let validationName = document.querySelector('.namePV');
let validationDescription = document.querySelector('.descriptionPV');
let validationImage = document.querySelector('.imagePV');
let validationPrice = document.querySelector('.pricePV');

let SendProductsForm = document.querySelector('#SendProductsForm');

let errorName = false;
let errorDescription = false;
let errorPrice = false;

validationName.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim() == "") {
        error_fieldPname.style.display = "block"
        validationName.style.borderColor = "red"
        error_fieldPname.innerHTML = "NO debes dejar este campo sin llenar";
        errorName = false;

    } else if (inputValue.trim().length < 2) {
        error_fieldPname.style.display = "block"
        validationName.style.borderColor = "red"
        error_fieldPname.innerHTML = "Debe teenr mas de 2 letras";
        errorName = false;
    }
    else {
        error_fieldPname.style.display = "none";
        validationName.style.borderColor = ""
        errorName = true;
    }
});

validationDescription.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim().length < 20) {
        error_fieldPdescription.style.display = "block"
        validationDescription.style.borderColor = "red"
        error_fieldPdescription.innerHTML = "Debe tener al menos 20 caracteres";
        errorDescription = false;
    }
    else {
        error_fieldPdescription.style.display = "none";
        validationDescription.style.borderColor = "";
        errorDescription = true;
    }
});

// validationImage.addEventListener('blur', function () {

//     let inputValue = this.value;
//    if(inputValue.){
//     error_fieldPimage.style.display = "block"
//         validationImage.style.borderColor = "red"
//         error_fieldPimage.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)"
//     }
//     else{
//         error_fieldPimage.style.display = "none";
//         validationImage.style.borderColor = ""
//     }
// })

validationPrice.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim().length < 4) {
        error_fieldPprice.style.display = "block"
        validationPrice.style.borderColor = "red"
        error_fieldPprice.innerHTML = "Debe tener un precio mayor a 4 digitos";
        errorPrice = false;
    }
    else {
        error_fieldPprice.style.display = "none";
        validationPrice.style.borderColor = "";
        errorPrice = true;
    }
});

SendProductsForm.addEventListener('click', function (event) {

    if (!errorDescription && !errorName && !errorPrice) {
        error_fieldPSend.style.display = 'block'

        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME , DESCRIPTION y PRICE correctamente"
       
        event.preventDefault();


    }
    else if(!errorDescription && !errorName){
        error_fieldPSend.style.display = 'block'

        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME y DESCRIPTION correctamente"
       
        event.preventDefault();
    }
    else if(!errorPrice && !errorName){
        error_fieldPSend.style.display = 'block'

        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME y PRICE correctamente"
       
        event.preventDefault();
    }
    else if(!errorPrice && !errorDescription){
        error_fieldPSend.style.display = 'block'

        error_fieldPSend.innerHTML = "Debes completar las casilla de PRICE y DESCRIPTION correctamente"
       
        event.preventDefault();
    }
    else if(!errorName){
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla NAME correctamente"
    
        event.preventDefault();
    }
    else if(!errorDescription){
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla DESCRIPTION correctamente"
       
        event.preventDefault();
    }
    else if(!errorPrice){
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla PRICE correctamente"
       
        event.preventDefault();
    }
   
})
