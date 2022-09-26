const form = document.querySelectorAll('.formcheckout');
const formmercadopago = document.querySelector('.mercadopago');
const formCash = document.querySelector('.cash');
const formtarjeta = document.querySelector('.tarjeta');
const formTrans = document.querySelector('.trans');
const totalPrice = document.querySelectorAll('.preciofinal');
const selectMetodoPago = document.querySelector('#metodopago');

const TotalPriceCarrito = localStorage.getItem("totalPriceCarrito");
const productsAmount = localStorage.getItem("productsAmount");

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
        
            case "mercado pago":
                    formCash.classList.add('hide');
                    formmercadopago.classList.remove('hide');
                    formtarjeta.classList.add('hide');
                    formTrans.classList.add('hide');
                   
                    break;

            case "tarjeta":
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


