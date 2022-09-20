const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');
const last_name = document.querySelector('#lastname');

let errors = [];

function isEmpty(input, name){

    let alreadyChecked = false;
    for (let i = 0; i < errors.length; i++){
        errors[i] === `Debes completar el ${name.name}` ? alreadyChecked = true : "";

    }

    if (input === "" && !alreadyChecked){
        errors.push(`Debes completar el ${name.name}`);
        return true;
    }else if (input != ""){
        for (let i = 0; i < errors.length; i++){
            if (errors[i] === `Debes completar el ${name.name}`){
                errors.splice(0,errors.length);
                return false;
            }
        }
    }else{
        return true;
    }   
}

function islongEnough(input,name){
    let lengthAlreadyChecked = false;
    for (let i = 0; i < errors.length; i++){   
        errors[i] === `El ${name.name} debe contener al menos 2 caracteres` ? lengthAlreadyChecked = true : "";
    }

    if (input.length < 2 && !lengthAlreadyChecked){
        errors.push(`El ${name.name} debe contener al menos 2 caracteres`);
        return true;
    }else if (input.length > 2){
        for (let i = 0; i < errors.length; i++){
            if (errors[i] === `El ${name.name} debe contener al menos 2 caracteres`){
                errors.splice(0,errors.length);
                return false;
            }
        }
    }else {
        return true;
    }
}

first_Name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();

    if (isEmpty(inputValue, first_Name) === true){
        error_field[0].innerHTML = errors[0];
        error_field[0].style.display = "block";
    }else{
        error_field[0].style.display = "none";
        first_Name.value = inputValue;
    }

    if (islongEnough(inputValue,first_Name)){
        error_field[0].innerHTML = errors[0];
        error_field[0].style.display = "block";
    }else {
        errors.splice(0);
        error_field[0].style.display = "none";
    }

    console.log(errors.length, e.target.value);
    console.log(errors);
});

last_name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();

    if (isEmpty(inputValue, last_name) === true){
        error_field[1].innerHTML = errors[0];
        error_field[1].style.display = "block";
    }else{
        error_field[1].style.display = "none";
        last_name.value = inputValue;
    }

    if (islongEnough(inputValue,last_name)){
        error_field[1].innerHTML = errors[0];
        error_field[1].style.display = "block";
    }else {
        errors.splice(0);
        error_field[1].style.display = "none";
    }

    console.log(errors.length, e.target.value);
    console.log(errors);
});




