const formR = document.querySelector('.register_form');
const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');
const last_name = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phoneNumber = document.querySelector('#phonenumber');

function Errors(input, message, errorField){
    this.input = input,
    this.message = message,
    this.errorField = errorField;
}

let errorsList = [];
let inputsSelected = [];

function isEmpty(input, field){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `Debes completar el ${fieldName}` ? alreadyChecked = true : "";
        }

    }

    if (input === "" && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `Debes completar el ${fieldName}`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input != ""){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `Debes completar el ${fieldName}`){
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

    if (input.length < rangeA || input.length >= rangeB && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} debe ser entre ${rangeA} y ${rangeB} caracteres`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length > rangeA || input.length <= rangeB){
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






formR.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstNameSelected = first_Name.classList.contains('Selected');
    let lastNameSelected = last_name.classList.contains('Selected');
    let emailSelected = email.classList.contains('Selected');
    let passwordSelected = password.classList.contains('Selected');
    let phoneNumberSelected = phoneNumber.classList.contains('Selected');

    if (errorsList.length > 0){
        console.log("there's errors inside the form");
    }else if (firstNameSelected && lastNameSelected && emailSelected && passwordSelected && phoneNumberSelected){
        console.log("no errors inside :D");
    }
});

first_Name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = first_Name;
    first_Name.classList.add('Selected');

    if (isEmpty(inputValue, field)){
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
        error_field[0].style.display = "block";
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
        error_field[0].style.display = "block";
    }else {
        error_field[0].style.display = "none";
        first_Name.value = inputValue;
    }
});

last_name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = last_name;
    last_name.classList.add('Selected');

    if (isEmpty(inputValue, field)){
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
        error_field[1].style.display = "block";
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
        error_field[1].style.display = "block";
        console.log(errorsList);
    }else {
        error_field[1].style.display = "none";
        last_name.value = inputValue;
    }
});

email.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = email;
    email.classList.add('Selected');

    if (isEmpty(inputValue, field)){
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
        error_field[2].style.display = "block";
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
        error_field[2].style.display = "block";
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

    if (isEmpty(inputValue, field)){
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
        error_field[3].style.display = "block";
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
        error_field[3].style.display = "block";
        console.log(errorsList);
    }else {
        error_field[3].style.display = "none";
        password.value = inputValue;
    }
});

phoneNumber.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = phoneNumber;
    phoneNumber.classList.add('Selected');

    if (isEmpty(inputValue, field)){
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
        error_field[4].style.display = "block";
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
        error_field[4].style.display = "block";
    }else{
        error_field[4].style.display = "none";
        phoneNumber.value = inputValue;
    }

});