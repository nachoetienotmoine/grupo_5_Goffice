const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');

let errors = [];

function isEmpty(input){

    let alreadyChecked = false;

    for (let i = 0; i < errors.length; i++){
        errors[i] === 'Debes completar el nombre' ? alreadyChecked = true : "";
    }

    if (input === "" && !alreadyChecked){
        errors.push('Debes completar el nombre');
        return true;
    }else if (input != "" ){
        for (let i = 0; i < errors.length; i++){
            if (errors[i] === 'Debes completar el nombre'){
                errors.splice(0,1);
                return false;
            }
        }
    }else{
        return true;
    }   
}

first_Name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();


    if (isEmpty(inputValue) === true){
        error_field[0].innerHTML = errors[0];
        error_field[0].style.display = "block";
    }else{
        error_field[0].style.display = "none";
        first_Name.value = inputValue;
    }

    // if (inputValue.length <= 2){
    //     errors.push('El nombre debe contener al menos 2 caracteres');
    //     error_field[0].innerHTML = errors[0];
    //     error_field[0].style.display = "block";
    // }else {
    //     errors.splice(0);
    //     error_field[0].style.display = "none";
    // }

    console.log(errors.length, e.target.value);
    console.log(errors);
});




