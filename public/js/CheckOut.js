const form = document.querySelectorAll('.formcheckout');
const formmercadopago = document.querySelector('.mercadopago');
const formCash = document.querySelector('.cash');
const formtarjeta = document.querySelector('.tarjeta');
const formTrans = document.querySelector('.trans');

const selectMetodoPago = document.querySelector('#metodopago');


formCash.classList.add('hide');
formtarjeta.classList.add('hide');
formTrans.classList.add('hide');


selectMetodoPago.addEventListener('change', (e)=>{
    
    switch (e.target.value) {
        
            case "efectivo":
                formmercadopago.classList.add('hide');
                formCash.classList.remove('hide');
                formtarjeta.classList.add('hide');
                formTrans.classList.add('hide');
             
                break;
        
            case "credito":
                    formCash.classList.add('hide');
                    formmercadopago.classList.remove('hide');
                    formtarjeta.classList.add('hide');
                    formTrans.classList.add('hide');
                   
                    break;

            case "debito":
                    formCash.classList.add('hide');
                    formmercadopago.classList.add('hide');
                    formtarjeta.classList.remove('hide');
                    formTrans.classList.add('hide');
                    break;

            case "transferencia":
                    formCash.classList.add('hide');
                    formmercadopago.classList.add('hide');
                    formtarjeta.classList.add('hide');
                    formTrans.classList.remove('hide');
                   
                    break;
            
                
        }
    ;
})


