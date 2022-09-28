const form = document.querySelectorAll('.formcheckout');
const formmercadopago = document.querySelector('.mercadopago');
const formCash = document.querySelector('.cash');
const formtarjeta = document.querySelector('.tarjeta');
const formTrans = document.querySelector('.trans');
const totalPrice = document.querySelectorAll('.preciofinal');
const selectMetodoPago = document.querySelector('#metodopago');
const multiplicand = document.querySelectorAll('.multiplicand');
const checkOutProduct = document.querySelectorAll('.productoCheckout');;

const TotalPriceCarrito = localStorage.getItem("totalPriceCarrito");
let productsAmount = localStorage.getItem("productsAmount");

formCash.classList.add('hide');
formtarjeta.classList.add('hide');
formTrans.classList.add('hide');

TotalPriceCarrito > 0 ? totalPrice[0].children[1].innerHTML = TotalPriceCarrito : "";

productsAmount = JSON.parse(productsAmount);
if (productsAmount.length > 0){
        checkOutProduct.forEach(product => {
                for(let i = 0; i < productsAmount.length; i++){
                        if(product.children[1].textContent.trim() === productsAmount[i]["productName"].product){
                                product.children[0].innerHTML = productsAmount[i]["productName"].amount + "x";
                        }
                }
        })
}


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


