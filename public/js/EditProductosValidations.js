const error_fieldPeName = document.querySelector('.error_fieldPeName');
const error_fieldPeDescription = document.querySelector('.error_fieldPeDescription');
const error_fieldPeImage = document.querySelector('.error_fieldPeImage');
const error_fieldPePrice = document.querySelector('.error_fieldPePrice');
const error_fieldPeSend = document.querySelector('.error_fieldPeSend');

let validationEditName = document.querySelector('.nameEditPV');
let validationEditDescription = document.querySelector('.descriptionEditPV');
let validationEditImage = document.querySelector('.imageEditPV');
let validationEditPrice = document.querySelector('.priceEditPV');

let SendProductsEditForm = document.querySelector('#SendProductsEditForm');
let errors = [];
let errorImagenEdit = false ;
validationEditDescription.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim().length < 20) {
        error_fieldPeDescription.style.display = "block"
        validationEditDescription.style.borderColor = "red"
        error_fieldPeDescription.innerHTML = "El campo debe tener al menos 20 caracteres";
        errors.push("El campo debe tener al menos 20 caracteres")

    }
    else {
        error_fieldPeDescription.style.display = "none";
        validationEditDescription.style.borderColor = "";
        let SinErrors = errors.indexOf("El campo debe tener al menos 20 caracteres")
        errors.splice(SinErrors)

    }
});

validationEditPrice.addEventListener('blur', function () {

    let inputValue = this.value;
    if (inputValue.trim().length < 4) {
        error_fieldPePrice.style.display = "block"
        validationEditPrice.style.borderColor = "red"
        error_fieldPePrice.innerHTML = "Debe tener un precio mayor a 4 digitos";
        errors.push("Debe tener un precio mayor a 4 digitos")
    }
    else {
        error_fieldPePrice.style.display = "none";
        validationEditPrice.style.borderColor = "";
        let SinErrors = errors.indexOf("Debe tener un precio mayor a 4 digitos")
        errors.splice(SinErrors)



    }
});

validationEditName.addEventListener('blur', function () {


    let inputValue = this.value;
    if (inputValue.trim().length < 4) {
        error_fieldPeName.style.display = "block"
        validationEditName.style.borderColor = "red"
        error_fieldPeName.innerHTML = "El campo debe tener mas de 6 letras";
        errors.push("El campo debe tener mas de 6 letras")
    }
    else {
        error_fieldPeName.style.display = "none";
        validationEditName.style.borderColor = "";
        let SinErrors = errors.indexOf("El campo debe tener mas de 6 letras")
        errors.splice(SinErrors)

    let inputValue = this.value;
    if (inputValue.trim().length < 4) {
        error_fieldPeName.style.display = "block"
        validationEditName.style.borderColor = "red"
        error_fieldPeName.innerHTML = "El campo debe tener mas de 4 letras";
        errors.push("El campo debe tener mas de 4 letras")
    }
    else if (inputValue.trim().length > 19) {
        error_fieldPeName.style.display = "block"
        validationEditName.style.borderColor = "red"
        error_fieldPeName.innerHTML = "El campo debe tener mas de 19 letras";
        errors.push("El campo debe tener mas de 19 letras")
    }
    else {
        error_fieldPeName.style.display = "none";
        validationEditName.style.borderColor = "";
        let SinErrors = errors.indexOf("El campo debe tener mas de 4 letras" || "El campo debe tener mas de 19 letras")
        errors.splice(SinErrors)



    }
    }
});

validationEditImage.addEventListener('change', function () {

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
        error_fieldPeImage.style.display = "block"
        validationEditImage.style.color = "red";
        error_fieldPeImage.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        errors.push("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errorImagenEdit = false

   } else {
        error_fieldPeImage.style.display = "none";
        validationEditImage.style.color = "green";
        let SinErrors = errors.indexOf("Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)");
        errors.splice(SinErrors);
        errorImagenEdit = true

    }
});





SendProductsEditForm.addEventListener('click', function (event) {
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].length > 0 ) {
            error_fieldPeSend.style.display = 'block'
            error_fieldPeSend.innerHTML = "Debes completar las casillas correctamente , y luego volver a enviar el formulario"
            event.preventDefault();
        }

    }
 if(!errorImagenEdit){
        
        validationEditImage.style.color = "red";
        validationEditImage.style.fontSize = "large";
        error_fieldPeImage.style.display ="block" 
        error_fieldPeImage.innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        event.preventDefault();
    }

    if(!errors[0]){
        error_fieldPeSend.style.display = 'none'

    }
   
})