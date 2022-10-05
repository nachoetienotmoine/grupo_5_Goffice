const formR = document.querySelector('.register_form');
const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');
const last_name = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phoneNumber = document.querySelector('#phonenumber');
const image = document.querySelector('#file');
const gender = document.querySelector('#gender');

function Errors(input, message, errorField){
    this.input = input,
    this.message = message,
    this.errorField = errorField;
}

let errorsList = [];
let inputsSelected = [];

function wasChecked(fieldName, fieldMessage){
    let alreadyChecked = false;
    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === fieldMessage ? alreadyChecked = true : "";
        }
    }
    return alreadyChecked;
}

function isEmpty(input, field, fieldMessage){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    if (input === "" && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input != ""){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }   
}

function islongEnough(input, field, longSet, fieldMessage){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    if (input.length <= longSet && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length > longSet){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }   
}

function notValidEmail(input, field, fieldMessage) {
    let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    if (String(input).search (filter) == -1 && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (String(input).search (filter) != -1){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }
}

async function oneUser(emailInput){
    let user = await fetch('/baseDeDatosInfo/findOneEmail', 
    {method:'POST',headers: {'Content-Type':'application/json'},body: JSON.stringify({userEmail: emailInput})})
    .then(res => res.json()).then(data => {return data;});

    return user.email;
}

async function userAlreadyExists(inputValue, field, fieldMessage){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    let user = await oneUser(inputValue);

    if (user === inputValue && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
        errorsList.push(input_Name);
        return true;
    }else if (user != inputValue){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }
    else {
        return true;
    }

}

function isNotBetween(input, field, fieldMessage, rangeA, rangeB){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    if (input.length < rangeA || input.length > rangeB && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length >= rangeA && input.length <= rangeB){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }   
}

function onlyNumeric(input, field, fieldMessage){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    
    if (!inputValue.match(/\d/) && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (inputValue.match(/\d/)){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }  

}

function onlyUpperCase(input, field, fieldMessage){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    
    if (!inputValue.match(/(?=.*?[A-Z])/) && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (inputValue.match(/(?=.*?[A-Z])/)){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }  

}

function onlyLowerCase(input, field, fieldMessage){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    
    if (!inputValue.match(/(?=.*?[a-z])/) && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (inputValue.match(/(?=.*?[a-z])/)){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }  

}

function onlySpecialCharacters(input, field, fieldMessage){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    
    if (!inputValue.match(/(?=.*?[.#?!@$%^&*-])/) && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (inputValue.match(/(?=.*?[.#?!@$%^&*-])/)){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }  

}

function domainAvailable(input, field, fieldMessage){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    let fileExtension = inputValue.split('.');
    let extension = fileExtension[1];
    let allowedExtensions = ['dk', 'uk', 'es', 'com', 'ar' , 'gmail'];
    let extensionMatch = false;


    allowedExtensions.forEach(inputValue => {
        if (inputValue === extension) {
            extensionMatch = true;
        }
    });
    
    if (!extensionMatch && !wasChecked(fieldName, fieldMessage)){
        let input_Name = {
            [fieldName]: new Errors (field, fieldMessage, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (extensionMatch){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === fieldMessage){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                      });
                    return false;
                }
            }
        }
    }else{
        return true;
    }  

}






formR.addEventListener('submit', (e) => {
    
    let firstNameSelected = first_Name.classList.contains('Selected');
    let lastNameSelected = last_name.classList.contains('Selected');
    let emailSelected = email.classList.contains('Selected');
    let passwordSelected = password.classList.contains('Selected');
    let phoneNumberSelected = phoneNumber.classList.contains('Selected');
    let imageSelected = image.classList.contains('Selected');
    let genderSelected = gender.classList.contains('Selected');

    if (errorsList.length > 0){
        e.preventDefault();
    }else if (errorsList.length <= 0 && firstNameSelected && lastNameSelected && emailSelected && passwordSelected && phoneNumberSelected && imageSelected && genderSelected){
        e.defaultPrevented;
    }else{
        e.preventDefault();
        error_field[6].innerHTML = "Completa los campos del formulario 💅💅✨🔥";
        return error_field[6].style.display = "block";
    }
});

first_Name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = first_Name;
    first_Name.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar el nombre")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[0].innerHTML = errorMessage;
        return error_field[0].style.display = "block";
    }else{
        error_field[0].style.display = "none";
        first_Name.value = inputValue;
    }

    if (islongEnough(inputValue, field, 2, "La contraseña debe contener al menos 2 caracteres")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[0].innerHTML = errorMessage;
        return error_field[0].style.display = "block";
    }else {
        error_field[0].style.display = "none";
        return first_Name.value = inputValue;
    }
});

last_name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = last_name;
    last_name.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar el apellido")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[1].innerHTML = errorMessage;
        return error_field[1].style.display = "block";
    }else{
        error_field[1].style.display = "none";
        last_name.value = inputValue;
    }

    if (islongEnough(inputValue, field, 2, "La contraseña debe contener al menos 2 caracteres")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[1].innerHTML = errorMessage;
        return error_field[1].style.display = "block";
    }else {
        error_field[1].style.display = "none";
        last_name.value = inputValue;
    }
});

email.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = email;
    email.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar el email")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[2].innerHTML = errorMessage;
        return error_field[2].style.display = "block";
    }else{
        error_field[2].style.display = "none";
        email.value = inputValue;
    }

    if (notValidEmail(inputValue, field, "El email no está en un formato valido")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[2].innerHTML = errorMessage;
        return error_field[2].style.display = "block";
    }else {
        error_field[2].style.display = "none";
        email.value = inputValue;
    }

    if (userAlreadyExists(inputValue, field, "El email ya existe")){
        userAlreadyExists(inputValue, field, "El email ya existe")
        .then(res => {
            if (res){
                let errorMessage;
                let fieldName = field.name;
        
                for ( let i = 0; i < errorsList.length; i++){
                    if (errorsList[i][fieldName]){
                        if (errorsList[i][fieldName].input.name == fieldName){
                            errorMessage = errorsList[i][fieldName].message;
                        }
                    }
                }
        
                error_field[2].innerHTML = errorMessage;
                error_field[2].style.display = "block";
            }
    });
    }else{
        error_field[2].style.display = "none";
        email.value = inputValue;
    }

    if (domainAvailable(inputValue, field, "Debe contener un dominio valido 'dk', 'uk', 'es', 'com' , 'ar'")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[2].innerHTML = errorMessage;
        return error_field[2].style.display = "block";
    }else {
        error_field[2].style.display = "none";
        email.value = inputValue;
    }
    

});

password.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = password;
    password.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar la contraseña")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else{
        error_field[3].style.display = "none";
        password.value = inputValue;
    }

    if (islongEnough(inputValue, field, 8, "La contraseña debe contener al menos 8 caracteres")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else {
        error_field[3].style.display = "none";
        password.value = inputValue;
    }

    if (onlyNumeric(inputValue, field, "Debe contener un valor numérico")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else{
        error_field[3].style.display = "none";
        password.value = inputValue;
    }

    if (onlyUpperCase(inputValue, field, "Debe contener una mayúscula")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else{
        error_field[3].style.display = "none";
        password.value = inputValue;
    }

    if (onlySpecialCharacters(inputValue, field, "Debe contener un caracter especial ( #, ?, !, @, $, %, ^, &, *, -, )")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else{
        error_field[3].style.display = "none";
        password.value = inputValue;
    }

    if (onlyLowerCase(inputValue, field, "Debe contener una minúscula")){
        let errorMessage;
        let fieldName = field.name;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[3].innerHTML = errorMessage;
        return error_field[3].style.display = "block";
    }else{
        error_field[3].style.display = "none";
        password.value = inputValue;
    }
});

phoneNumber.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = phoneNumber;
    phoneNumber.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar con un número de teléfono")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }
        
        error_field[4].innerHTML = errorMessage;
        return error_field[4].style.display = "block";
    }else{
        error_field[4].style.display = "none";
        phoneNumber.value = inputValue;
    }

    if (isNotBetween(inputValue, field, "El número de teléfono debe ser entre 6 y 18 caracteres", 6, 18)){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[4].innerHTML = errorMessage;
        return error_field[4].style.display = "block";
    }else{
        error_field[4].style.display = "none";
        phoneNumber.value = inputValue;
    }
});

image.addEventListener('change', (e) => {
    let field = image;
    let inputValue = e.target.value.trim();
    let fileExtension = inputValue.split('.');
    let extension = fileExtension[1];
    let allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    let extensionMatch = false;
    image.classList.add('Selected');

    allowedExtensions.forEach(extensionA => {
        if (extensionA === extension) {
            extensionMatch = true;
        }
    });

    if (!extensionMatch){
        let errorField = field.parentElement.nextElementSibling;
        let fieldName = field.name;

        let input_Name = {
            [fieldName]: new Errors (field, `Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)`, errorField)
        };
        errorsList.push(input_Name);

        error_field[5].innerHTML = "Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)";
        error_field[5].style.display = "block";
    }else{
        let fieldName = field.name;
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `Debe ingresar una imagen en formato : (JPG, JPEG, PNG, GIF)`){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                    });
                    error_field[5].style.display = "none";
                    return false;
                }
            }
        }

        error_field[5].style.display = "none";
    }
});

gender.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = gender;
    let allowedGenders = ['male', 'female', 'secret'];
    let isAllowedGender = false;
    gender.classList.add('Selected');

    if (isEmpty(inputValue, field, "debes completar el campo")){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[6].innerHTML = errorMessage;
        return error_field[6].style.display = "block";
    }else{
        error_field[6].style.display = "none";
        gender.value = inputValue;
    }

    if (isNotBetween(inputValue, field, "El genero debe contener entre 4 y 6 caracteres", 4, 6)){
        let fieldName = field.name;
        let errorMessage;

        for ( let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].input.name == fieldName){
                    errorMessage = errorsList[i][fieldName].message;
                }
            }
        }

        error_field[6].innerHTML = errorMessage;
        return error_field[6].style.display = "block";
    }else{
        error_field[6].style.display = "none";
        gender.value = inputValue;
    }

    allowedGenders.forEach(genre => {
        if (genre == inputValue) {
            isAllowedGender = true;
        }
    });

    if (!isAllowedGender){
        let errorField = field.parentElement.nextElementSibling;
        let fieldName = field.name;

        let input_Name = {
            [fieldName]: new Errors (field, `los ${fieldName} aceptados son: male, female, secret`, errorField)
        };
        errorsList.push(input_Name);

        error_field[6].innerHTML = `los ${fieldName} aceptados son: male, female, secret`;
        return error_field[6].style.display = "block";
    }else{
        let fieldName = field.name;
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `los ${fieldName} aceptados son: male, female, secret`){
                    Object.keys(errorsList).map(function(i) {
                        errorsList.splice(i,1);
                    });
                    error_field[6].style.display = "none";
                    return false;
                }
            }
        }

        error_field[6].style.display = "none";
    }
});
