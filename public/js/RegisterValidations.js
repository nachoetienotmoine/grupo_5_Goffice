const error_field = document.querySelectorAll('.error_field')
const first_Name = document.querySelector('#name');
const last_name = document.querySelector('#lastname');

function Errors(input, message, errorField){
    this.input = input,
    this.message = message,
    this.errorField = errorField;
}

let errorsList = [];

function isEmpty(input, field){

    let fieldName = field.name;

    let alreadyChecked = false;

    for (let i = 0; i < errorsList.length; i++){
        if (errorsList[i][fieldName]){
            errorsList[i][fieldName].message === `Debes completar el ${fieldName}` ? alreadyChecked = true : "";
        }

    }

    if (input === "" && !alreadyChecked){
        let input_Name = {
            [fieldName]: new Errors (field, `Debes completar el ${field.name}`, error_field[0])
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
                    console.log(errorsList);
                    return false;
                }
            }
        }
    }else{
        return true;
    }   
}

// function islongEnough(input,name){
//     let lengthAlreadyChecked = false;
//     for (let i = 0; i < errors.length; i++){   
//         errors[i] === `El ${name.name} debe contener al menos 2 caracteres` ? lengthAlreadyChecked = true : "";
//     }

//     if (input.length < 2 && !lengthAlreadyChecked){
//         errors.push(`El ${name.name} debe contener al menos 2 caracteres`);
//         return true;
//     }else if (input.length > 2){
//         for (let i = 0; i < errors.length; i++){
//             if (errors[i] === `El ${name.name} debe contener al menos 2 caracteres`){
//                 errors.splice(1,1);
//                 return false;
//             }
//         }
//     }else {
//         return true;
//     }
// }

first_Name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = first_Name;

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

    // if (islongEnough(inputValue)){
    //     error_field[0].innerHTML = errors[0];
    //     error_field[0].style.display = "block";
    // }else {
    //     error_field[0].style.display = "none";
    // }
});

last_name.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();
    let field = last_name;

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
});
