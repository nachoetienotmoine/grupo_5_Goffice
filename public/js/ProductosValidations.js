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
let errorImage = false;

validationName.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim() == "") {
        error_fieldPname.style.display = "block"
        validationName.style.borderColor = "red"
        error_fieldPname.innerHTML = "No debes dejar este campo sin llenar";
        errorName = false;

    } else if (inputValue.trim().length < 6) {
        error_fieldPname.style.display = "block"
        validationName.style.borderColor = "red"
        error_fieldPname.innerHTML = "El campo debe tener mas de 6 letras";
        errorName = false;
    }
    else {
        error_fieldPname.style.display = "none";
        validationName.style.borderColor = "green"
        errorName = true;
    }
});

validationDescription.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim().length < 20) {
        error_fieldPdescription.style.display = "block"
        validationDescription.style.borderColor = "red"
        error_fieldPdescription.innerHTML = "El campo debe tener al menos 20 caracteres";
        errorDescription = false;
    }
    else {
        error_fieldPdescription.style.display = "none";
        validationDescription.style.borderColor = "green";
        errorDescription = true;
    }
});

validationImage.addEventListener('change', function () {

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
        error_fieldPimage.style.display = "block"
        validationImage.style.borderColor = "red"
        error_fieldPimage.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        validationImage.style.color = "red"
        errorImage = false;
    } else {
        error_fieldPimage.style.display = "none";
        validationImage.style.borderColor = "green";
        validationImage.style.color = "green"
        errorImage = true;
    }
});



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
        validationPrice.style.borderColor = "green";
       
        errorPrice = true;
    }
});

SendProductsForm.addEventListener('click', function (event) {

    if (!errorDescription && !errorName && !errorPrice && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME , DESCRIPTION , IMAGE y PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationDescription.style.borderColor = "red"
        validationImage.style.color = "red"
        validationName.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorDescription && !errorName && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME , IMAGE y DESCRIPTION correctamente y luego reenviar el formulario"
        validationDescription.style.borderColor = "red"
        validationImage.style.color = "red"
        validationName.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorDescription && !errorName && !errorPrice) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME , PRICE y DESCRIPTION correctamente y luego reenviar el formulario"
        validationDescription.style.borderColor = "red"
        validationPrice.style.borderColor = "red"
        validationName.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorDescription && !errorPrice && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de DESCRIPTION , IMAGE y PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationDescription.style.borderColor = "red"
        validationImage.style.color = "red"
        event.preventDefault();
    }
    else if (!errorPrice && !errorName && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME , IMAGE y PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationName.style.borderColor = "red"
        validationImage.style.color = "red"
        event.preventDefault();
    }
    else if (!errorPrice && !errorDescription) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de PRICE y DESCRIPTION correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationDescription.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorImage && !errorPrice) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de IMAGE y PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationImage.style.color = "red"
        event.preventDefault();
    }
    else if (!errorName && !errorPrice) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME y PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        validationName.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorName && !errorDescription) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME y DESCRIPTION correctamente y luego reenviar el formulario"
        validationName.style.borderColor = "red"
        validationDescription.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorName && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de NAME y IMAGE correctamente y luego reenviar el formulario"
        validationName.style.borderColor = "red"
        validationImage.style.color = "red"
        event.preventDefault();
    }
    else if (!errorDescription && !errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar las casilla de DESCRIPTION y IMAGE correctamente y luego reenviar el formulario"
        validationImage.style.color = "red"
        validationDescription.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorName) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla NAME correctamente y luego reenviar el formulario"
        validationName.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorDescription) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla DESCRIPTION correctamente y luego reenviar el formulario"
        validationDescription.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorPrice) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla PRICE correctamente y luego reenviar el formulario"
        validationPrice.style.borderColor = "red"
        event.preventDefault();
    }
    else if (!errorImage) {
        error_fieldPSend.style.display = 'block'
        error_fieldPSend.innerHTML = "Debes completar la casilla IMAGE correctamente y luego reenviar el formulario"
        validationImage.style.color = "red"
        event.preventDefault();
    }
})
