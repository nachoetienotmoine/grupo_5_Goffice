const form = document.querySelectorAll('.formcheckout');
const formCredit = document.querySelector('.credit');
const formCash = document.querySelector('.cash');
const formDebit = document.querySelector('.debit');
const formTrans = document.querySelector('.trans')
const selectMetodoPago = document.querySelector('#metodopago');
formCash.classList.add('hide');
formDebit.classList.add('hide');

formTrans.classList.add('hide');


selectMetodoPago.addEventListener('change', (e)=>{
    
    switch (e.target.value) {
        
            case "efectivo":
                formCredit.classList.add('hide');
                formCash.classList.remove('hide');
                formDebit.classList.add('hide');
                formTrans.classList.add('hide');
             
                break;
        
            case "credito":
                    formCash.classList.add('hide');
                    formCredit.classList.remove('hide');
                    formDebit.classList.add('hide');
                    formTrans.classList.add('hide');
                   
                    break;

            case "debito":
                    formCash.classList.add('hide');
                    formCredit.classList.add('hide');
                    formDebit.classList.remove('hide');
                    formTrans.classList.add('hide');
                    break;

            case "transferencia":
                    formCash.classList.add('hide');
                    formCredit.classList.add('hide');
                    formDebit.classList.add('hide');
                    formTrans.classList.remove('hide');
                   
                    break;
            
                
        }
    ;
})



// formCredit.addEventListener('click', (e) => {

//     let selectedValue;

//     for (let i = 0; i < form.length ;i++){
//         e.path[0][i].selected == true ? selectedValue = e.path[0][i] : "";
//     }
    
//     if (selectedValue.value == "efectivo"){
//         formCredit.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCash.classList.remove('hide');
//     }else if (selectedValue.value == "crédito"){
//         formCash.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCredit.classList.remove('hide');
//     }else {
//         formCash.classList.add('hide');
//         formCredit.classList.add('hide');
//         formDebit.classList.remove('hide');
//     }
// console.log(selectedValue)
// });

// formCash.addEventListener('click', (e) => {

//     let selectedValue;

//     for (let i = 0; i < form.length ;i++){
//         e.path[0][i].selected == true ? selectedValue = e.path[0][i] : "";
//     }
    
//     if (selectedValue.value == "efectivo"){
//         formCredit.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCash.classList.remove('hide');
//     }else if (selectedValue.value == "crédito"){
//         formCash.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCredit.classList.remove('hide');
//     }else {
//         formCash.classList.add('hide');
//         formCredit.classList.add('hide');
//         formDebit.classList.remove('hide');
//     }
//     console.log(selectedValue)
// });

// formDebit.addEventListener('click', (e) => {

//     let selectedValue;

//     for (let i = 0; i < form.length ;i++){
//         e.path[0][i].selected == true ? selectedValue = e.path[0][i] : "";
//     }
    
//     if (selectedValue.value == "efectivo"){
//         formCredit.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCash.classList.remove('hide');
//     }else if (selectedValue.value == "crédito"){
//         formCash.classList.add('hide');
//         formDebit.classList.add('hide');
//         formCredit.classList.remove('hide');
//     }else {
//         formCash.classList.add('hide');
//         formCredit.classList.add('hide');
//         formDebit.classList.remove('hide');
//     }

// });



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




