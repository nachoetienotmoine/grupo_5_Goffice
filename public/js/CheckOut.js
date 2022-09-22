const form = document.querySelectorAll('.formcheckout');
const formCredit = document.querySelector('.credit');
const formCash = document.querySelector('.cash');
const formDebit = document.querySelector('.debit');
const formTrans = document.querySelector('.trans');

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


