const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');

let errors = [];

function isEmpty(input){

    let alreadyChecked = false;

    for (let i = 0; i < errors.length; i++){
        errors[i] === input ? alreadyChecked = true : "";
    }

        if (input.value === "" && !alreadyChecked){
            errors.push('Debes completar el nombre');
            return true;
        }else if (input.value != ""){
            for (let i = 0; i < errors.length; i++){
                if (errors[i] === input){
                    errors.splice(0);
                    return false;
                }
            }
        }
}

first_Name.addEventListener('blur', (e) => {
    if (isEmpty(e.target) === true){
        error_field[0].innerHTML = errors[0];
        error_field[0].style.display = "block";
    }else{
        error_field[0].style.display = "none";
    }

});




