const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');

let errors = [];

function isEmpty(input){

    let alreadyChecked = false;

    for (let i = 0; i < errors.length; i++){
        errors[i] === 'Debes completar el nombre' ? alreadyChecked = true : "";
    }
    console.log(alreadyChecked);

    if (input.value === "" && !alreadyChecked){
        errors.push('Debes completar el nombre');
        return true;
    }else if (input.value != "" ){
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
    if (isEmpty(e.target) === true){
        error_field[0].innerHTML = errors[0];
        error_field[0].style.display = "block";
    }else{
        error_field[0].style.display = "none";
        
    }

    // if (e.target.value.length <= 2){
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




