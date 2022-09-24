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

function islongEnough(input, field, longSet){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `El ${fieldName} debe contener al menos ${longSet} caracteres` ? alreadyChecked = true : "";
        }

    }

    if (input.length <= 2 && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} debe contener al menos ${longSet} caracteres`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length > 2){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `El ${field.name} debe contener al menos ${longSet} caracteres`){
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

function notValidEmail(input, field) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    // return String(input).search (filter) != -1;

    ////*//////*/////

    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `El ${fieldName} debe contener un formato valido` ? alreadyChecked = true : "";
        }

    }

    if (String(input).search (filter) == -1 && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} debe contener un formato valido`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (String(input).search (filter) != -1){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `El ${field.name} debe contener un formato valido`){
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

async function userAlreadyExists(inputValue, field){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    let alreadyChecked = false;
    let user = await oneUser(inputValue);

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `El ${fieldName} ya existe` ? alreadyChecked = true : "";
        }
    }

    if (user === inputValue && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} ya existe`, errorField)
        };
        errorsList.push(input_Name);
        return true;
    }else if (user != inputValue){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `El ${fieldName} ya existe`){
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

function isNotBetween(input, field, rangeA, rangeB){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `El ${fieldName} debe ser entre ${rangeA} y ${rangeB} caracteres` ? alreadyChecked = true : "";
        }

    }

    if (input.length < rangeA || input.length > rangeB && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} debe ser entre ${rangeA} y ${rangeB} caracteres`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length >= rangeA && input.length <= rangeB){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `El ${fieldName} debe ser entre ${rangeA} y ${rangeB} caracteres`){
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

function onlyNumeric(input, field){
    let inputValue = input;
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;
    let alreadyChecked = false;
    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `${fieldName} debe contener un nimusolsjklsf` ? alreadyChecked = true : "";
        }
    }
    if (inputValue.match(/(?=.*?[a-z])/) && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `${fieldName} debe contener un nimusolsjklsf`, errorField)
        };
    
        errorsList.push(input_Name);
        return true;
    }else if (!inputValue.match(/(?=.*?[a-z])/)){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `${fieldName} debe contener un nimusolsjklsf`){
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
    e.preventDefault();
    let firstNameSelected = first_Name.classList.contains('Selected');
    let lastNameSelected = last_name.classList.contains('Selected');
    let emailSelected = email.classList.contains('Selected');
    let passwordSelected = password.classList.contains('Selected');
    let phoneNumberSelected = phoneNumber.classList.contains('Selected');
    let imageSelected = image.classList.contains('Selected');
    let genderSelected = gender.classList.contains('Selected');

    if (errorsList.length > 0){
        console.log("there's errors inside the form");
    }else if (errorsList.length = 0 && firstNameSelected && lastNameSelected && emailSelected && passwordSelected && phoneNumberSelected && imageSelected && genderSelected){
        console.log("no errors inside :D");
    }
    console.log(errorsList);
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

    if (islongEnough(inputValue, field, 2)){
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

    if (islongEnough(inputValue, field, 2)){
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

    if (notValidEmail(inputValue, field)){
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

    if (userAlreadyExists(inputValue, field)){
        userAlreadyExists(inputValue, field)
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

    if (islongEnough(inputValue, field, 8)){
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

    if (onlyNumeric(inputValue, field)){
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

    if (isNotBetween(inputValue, field, 6, 18)){
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

    if (isNotBetween(inputValue, field, 4, 6)){
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
