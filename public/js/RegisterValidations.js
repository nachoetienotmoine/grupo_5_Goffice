const formR = document.querySelector('.register_form');
const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');
const last_name = document.querySelector('#lastname');
const email = document.querySelector('#email');

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

function islongEnough(input, field){
    let errorField = field.parentElement.nextElementSibling;
    let fieldName = field.name;

    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `El ${fieldName} debe contener al menos 2 caracteres` ? alreadyChecked = true : "";
        }

    }

    if (input.length <= 2 && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `El ${fieldName} debe contener al menos 2 caracteres`, errorField)
        };

        errorsList.push(input_Name);
        return true;
    }else if (input.length > 2){
        for (let i = 0; i < errorsList.length; i++){
            if (errorsList[i][fieldName]){
                if (errorsList[i][fieldName].message === `El ${field.name} debe contener al menos 2 caracteres`){
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

function notvalidEmail(input, field) {
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

    if (String(input).search (filter) != -1 && !alreadyChecked){
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

formR.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstNameSelected = first_Name.classList.contains('Selected');
    let lastNameSelected = last_name.classList.contains('Selected');
    let emailSelected = email.classList.contains('Selected');;

    if (errorsList.length > 0){
        console.log("there's errors inside the form");
    }else if (firstNameSelected && lastNameSelected && emailSelected){
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
        console.log(errorsList);
    }else{
        error_field[0].style.display = "none";
        first_Name.value = inputValue;
    }

    if (islongEnough(inputValue, field)){
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
        console.log(errorsList);
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
        console.log(errorsList);
    }else{
        error_field[1].style.display = "none";
        last_name.value = inputValue;
    }

    if (islongEnough(inputValue, field)){
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
        console.log(errorsList);
    }else{
        error_field[2].style.display = "none";
        email.value = inputValue;
    }
    console.log(notvalidEmail(inputValue, field));
    if (notvalidEmail(inputValue, field)){
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
        console.log(errorsList);
    }else {
        error_field[2].style.display = "none";
        email.value = inputValue;
    }



});