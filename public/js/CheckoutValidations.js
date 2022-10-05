const validationCheckoutCreditName = document.querySelector('.nameInputCheckout');
const validationCheckoutCreditPhonenumber = document.querySelector('.phonenumberInputCheckout');
const validationCheckoutCreditCodigoPostal = document.querySelector('.codigoPostalInputCheckout');
const validationCheckoutCreditAdress = document.querySelector('.adressInputCheckout');
const validationCheckoutCreditEmail = document.querySelector('.EmailInputCheckout');


const error_fieldCheckoutCreditName = document.querySelector('.error_fieldCheckoutCreditName');
const error_fieldCheckoutCreditPhonenumber = document.querySelector('.error_fieldCheckoutCreditPhonenumber');
const error_fieldCheckoutCreditCodigoPostal = document.querySelector('.error_fieldCheckoutCreditCodigoPostal');
const error_fieldCheckoutCreditAdress = document.querySelector('.error_fieldCheckoutCreditAdress');
const error_fieldCheckoutCreditEmail = document.querySelector('.error_fieldCheckoutCreditEmail');

const error_fieldCheckoutCreditMercadopago = document.querySelector('.error_fieldCheckoutCreditMercadopago');

error_fieldCheckoutCreditMercadopago
let mercadoPagoButton = document.querySelector('#mercadoPagoButton');
const forms = document.querySelectorAll('form');
const allProductsResume = document.querySelectorAll('.productoCheckout');

let errorNameCheckout = false;
let errorPhonenumberCheckout = false;
let errorCodigoPostalCheckout = false;
let errorAdressCheckout = false;
let errorEmailCheckout = false;

validationCheckoutCreditName.addEventListener('blur', () => {



    if (validationCheckoutCreditName.value == "") {
        error_fieldCheckoutCreditName.style.display = "block"
        error_fieldCheckoutCreditName.innerHTML = "Debe completar el siguiente campo"
        errorNameCheckout = false
    } else if (validationCheckoutCreditName.value.trim().length < 6) {
        error_fieldCheckoutCreditName.style.display = "block"
        error_fieldCheckoutCreditName.innerHTML = "El numero minimo de caracteres debe ser 6"
        errorNameCheckout = false
    }
    else {
        error_fieldCheckoutCreditName.style.display = "none"
        errorNameCheckout = true
    }


});

validationCheckoutCreditPhonenumber.addEventListener('blur', () => {


    if (validationCheckoutCreditPhonenumber.value == "") {
        error_fieldCheckoutCreditPhonenumber.style.display = "block"
        error_fieldCheckoutCreditPhonenumber.innerHTML = "Debe completar el siguiente campo"
        errorPhonenumberCheckout = false
    } else if (validationCheckoutCreditPhonenumber.value.trim().length > 18 || validationCheckoutCreditPhonenumber.value.trim().length < 6) {
        error_fieldCheckoutCreditPhonenumber.style.display = "block"
        error_fieldCheckoutCreditPhonenumber.innerHTML = "El numero de caracteres debe estar entre 6 y 18"
        errorPhonenumberCheckout = false
    }
    else {
        error_fieldCheckoutCreditPhonenumber.style.display = "none"
        errorPhonenumberCheckout = true
    }
});


validationCheckoutCreditCodigoPostal.addEventListener('blur', () => {



    if (validationCheckoutCreditCodigoPostal.value == "") {
        error_fieldCheckoutCreditCodigoPostal.style.display = "block"
        error_fieldCheckoutCreditCodigoPostal.innerHTML = "Debe completar el siguiente campo"
        errorCodigoPostalCheckout = false
    } else if (validationCheckoutCreditCodigoPostal.value.trim().length < 4) {
        error_fieldCheckoutCreditCodigoPostal.style.display = "block"
        error_fieldCheckoutCreditCodigoPostal.innerHTML = "El numero minimo de caracteres debe ser 4"
        errorCodigoPostalCheckout = false
    }
    else {
        error_fieldCheckoutCreditCodigoPostal.style.display = "none"
        errorCodigoPostalCheckout = true
    }


});
validationCheckoutCreditAdress.addEventListener('blur', () => {



    if (validationCheckoutCreditAdress.value == "") {
        error_fieldCheckoutCreditAdress.style.display = "block"
        error_fieldCheckoutCreditAdress.innerHTML = "Debe completar el siguiente campo"
        errorAdressCheckout = false

    } else if (validationCheckoutCreditAdress.value.trim().length < 8) {
        error_fieldCheckoutCreditAdress.style.display = "block"
        error_fieldCheckoutCreditAdress.innerHTML = "El numero minimo de caracteres debe ser 6"
        errorAdressCheckout = false
    }
    else {
        error_fieldCheckoutCreditAdress.style.display = "none"
        errorAdressCheckout = true
    }


})

validationCheckoutCreditEmail.addEventListener('blur', () => {

    const emailVerification = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (validationCheckoutCreditEmail.value == "") {
        error_fieldCheckoutCreditEmail.style.display = "block"
        error_fieldCheckoutCreditEmail.innerHTML = "Debe completar el siguiente campo"
        errorEmailCheckout = false

    } else if (!email.value.match(emailVerification)) {
        error_fieldCheckoutCreditEmail.style.display = "block"
        error_fieldCheckoutCreditEmail.innerHTML = "El caracter usado no es correcto"
        errorEmailCheckout = false
    }
    else {
        error_fieldCheckoutCreditEmail.style.display = "none"
        errorEmailCheckout = true
    }


})



mercadoPagoButton.addEventListener('click', function (event) {

    if (!errorAdressCheckout || !errorCodigoPostalCheckout || !errorNameCheckout || !errorPhonenumberCheckout || !errorEmailCheckout ) {
        error_fieldCheckoutCreditMercadopago.style.display = 'block'
        error_fieldCheckoutCreditMercadopago.innerHTML = "Debes completar las casillas correctamente y luego reenviar el formulario"
        event.preventDefault();
    }else{
        let AllProducts = [];
        allProductsResume.forEach(product => AllProducts.push(product.children[1].textContent.trim()));
        const visibleFormName = event.path[2].classList[1];
        let formOnDisplay;

        forms.forEach((form) => {form.classList.contains(visibleFormName) ? formOnDisplay = form : ""})

        fetch('/carrito/checkout', 
            {method:'POST',headers: {'Content-Type':'application/json'},body: JSON.stringify({products: AllProducts})})
    }})
  