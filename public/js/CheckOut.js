const form = document.querySelectorAll('.formcheckout');
const formCredit = document.querySelector('.credit');
const formCash = document.querySelector('.cash');

formCash.classList.add('hide');

let formOnDisplay = formCredit;

formCredit.addEventListener('click', (e) => {

    let selectedValue;

    for (let i = 0; i < form.length ;i++){
        e.path[0][i].selected == true ? selectedValue = e.path[0][i] : "";
    }
    
    if (selectedValue.value == "efectivo"){
        formCredit.classList.add('hide');
        formCash.classList.remove('hide');
    }else if (selectedValue.value == "crédito"){
        formCash.classList.add('hide');
        formCredit.classList.remove('hide');
    }

});

formCash.addEventListener('click', (e) => {

    let selectedValue;

    for (let i = 0; i < form.length ;i++){
        e.path[0][i].selected == true ? selectedValue = e.path[0][i] : "";
    }
    
    if (selectedValue.value == "efectivo"){
        formCredit.classList.add('hide');
        formCash.classList.remove('hide');
    }else if (selectedValue.value == "crédito"){
        formCash.classList.add('hide');
        formCredit.classList.remove('hide');
    }

});



// formCredit.addEventListener('change', (e) => {
//     switch (e.path[0].value) {
//         case "efectivo":
//             formCredit.classList.add('hide');
//             formCash.classList.remove('hide');
//             break;
    
//         default:
//             console.log('What the fuck did you search for?');
//             break;
//     }
// });

// formCash.addEventListener('change', (e) => {
//     switch (e.path[0].value) {
//         case "crédito":
//             formCash.classList.add('hide');
//             formCredit.classList.remove('hide');
//             break;
    
//         default:
//             console.log('What the fuck did you search for?');
//             break;
//     }
// });




