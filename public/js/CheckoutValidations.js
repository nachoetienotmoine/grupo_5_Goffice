const validationCheckoutCreditName = document.querySelector('.nameInputCheckout');
const validationCheckoutCreditPhonenumber = document.querySelector('.phonenumberInputCheckout');
const validationCheckoutCreditCodigoPostal = document.querySelector('.codigoPostalInputCheckout');
const validationCheckoutCreditAdress = document.querySelector('.adressInputCheckout');



const error_fieldCheckoutCreditName= document.querySelector('.error_fieldCheckoutCreditName');
const error_fieldCheckoutCreditPhonenumber= document.querySelector('.error_fieldCheckoutCreditPhonenumber');
const error_fieldCheckoutCreditCodigoPostal= document.querySelector('.error_fieldCheckoutCreditCodigoPostal');
const error_fieldCheckoutCreditAdress= document.querySelector('.error_fieldCheckoutCreditAdress');






validationCheckoutCreditName.addEventListener('blur', ()=>{
        
    
   
    if(validationCheckoutCreditName.value == ""){
        error_fieldCheckoutCreditName.style.display = "block"
        error_fieldCheckoutCreditName.innerHTML = "Debe completar el siguiente campo"

    }else if(validationCheckoutCreditName.value.trim().length < 6){
        error_fieldCheckoutCreditName.style.display = "block"
        error_fieldCheckoutCreditName.innerHTML = "El numero minimo de caracteres debe ser 6"
    }
    else{
        error_fieldCheckoutCreditName.style.display = "none"
    }
    

});

validationCheckoutCreditPhonenumber.addEventListener('blur', ()=>{
        
    
    if(validationCheckoutCreditPhonenumber.value == ""){
        error_fieldCheckoutCreditPhonenumber.style.display = "block"
        error_fieldCheckoutCreditPhonenumber.innerHTML = "Debe completar el siguiente campo"

}else if(  validationCheckoutCreditPhonenumber.value.trim().length > 18 || validationCheckoutCreditPhonenumber.value.trim().length < 6 ){
    error_fieldCheckoutCreditPhonenumber.style.display = "block"
    error_fieldCheckoutCreditPhonenumber.innerHTML = "El numero de caracteres debe estar entre 6 y 18"
}
else{
    error_fieldCheckoutCreditPhonenumber.style.display = "none"
}
});


validationCheckoutCreditCodigoPostal.addEventListener('blur', ()=>{
        
    
   
    if(validationCheckoutCreditCodigoPostal.value == ""){
        error_fieldCheckoutCreditCodigoPostal.style.display = "block"
        error_fieldCheckoutCreditCodigoPostal.innerHTML = "Debe completar el siguiente campo"

    }else if(validationCheckoutCreditCodigoPostal.value.trim().length < 4){
        error_fieldCheckoutCreditCodigoPostal.style.display = "block"
        error_fieldCheckoutCreditCodigoPostal.innerHTML = "El numero minimo de caracteres debe ser 4"
    }
    else{
        error_fieldCheckoutCreditCodigoPostal.style.display = "none"
    }
    

});
validationCheckoutCreditAdress.addEventListener('blur', ()=>{
        
    
   
    if(validationCheckoutCreditAdress.value == ""){
        error_fieldCheckoutCreditAdress.style.display = "block"
        error_fieldCheckoutCreditAdress.innerHTML = "Debe completar el siguiente campo"

    }else if(validationCheckoutCreditAdress.value.trim().length < 8){
        error_fieldCheckoutCreditAdress.style.display = "block"
        error_fieldCheckoutCreditAdress.innerHTML = "El numero minimo de caracteres debe ser 6"
    }
    else{
        error_fieldCheckoutCreditAdress.style.display = "none"
    }
    

})