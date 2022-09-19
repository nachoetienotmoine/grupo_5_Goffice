const quantityLess = document.querySelectorAll('.cantidadMenos');
const quantityMore = document.querySelectorAll('.cantidadMas');
const quantityNumber = document.querySelectorAll('.cantidad');
const productAddedName = document.querySelectorAll('.nombreProductoAgregado');
const productAddedPrice = document.querySelectorAll('.precioProductoAgregado');
const preciocarrito = document.querySelectorAll('.PrecioenCarrito')
const preciototal = document.querySelectorAll('.totalprice')


for(let i = 0; i < quantityLess.length; i++){
    quantityLess[i].addEventListener('click', (e) => {
        e.preventDefault();

        let numberValue = quantityNumber[i].value;

        let productElement = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        let productName = productElement.firstElementChild.textContent.trim();

        async function oneProduct(){
            let product = await fetch('/baseDeDatosInfo/findOne', 
            {method:'POST',headers: {'Content-Type':'application/json'},body: JSON.stringify({product: productName})})
            .then(res => res.json()).then(data => {return data;});

            return product;
        }

        oneProduct().then(res => {
            if (numberValue > 1){
                quantityNumber[i].value = --numberValue;
                for (let i = 0; i < productAddedName.length; i++){
                    if (productName == productAddedName[i].textContent.trim()){
                        let price = [];
                        let gettingRidOfDolarSign = [];
                        let originalPrice = res.price;

                        price.push(preciocarrito[i].textContent);
                        gettingRidOfDolarSign.push(price[0].trimStart().slice(1,price[0].length));
        
                        gettingRidOfDolarSign = parseInt(gettingRidOfDolarSign);
                        price = (gettingRidOfDolarSign * numberValue) - originalPrice + originalPrice;
                        productAddedPrice[i].innerHTML = "$" + price;

                        let precio = preciototal[0].textContent;
                        precio = parseInt(precio);
                        preciototal[0].innerHTML = ( precio - gettingRidOfDolarSign)
                    }
                }
            }
        }
        )
    
        console.log('less!');
    });
}

for(let i = 0; i < quantityMore.length; i++){
    quantityMore[i].addEventListener('click', (e) => {
        e.preventDefault();

        let numberValue = quantityNumber[i].value;

        let productElement = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        let productName = productElement.firstElementChild.textContent.trim();

        async function oneProduct(){
            let product = await fetch('/baseDeDatosInfo/findOne', 
            {method:'POST',headers: {'Content-Type':'application/json'},body: JSON.stringify({product: productName})})
            .then(res => res.json()).then(data => {return data;});

            return product;
        }

        oneProduct().then(res => {
            if (numberValue < res.stock){
                quantityNumber[i].value = ++numberValue;
                for (let i = 0; i < productAddedName.length; i++){
                    if (productName == productAddedName[i].textContent.trim()){
                        let price = [];
                        let gettingRidOfDolarSign = [];
                        
        
                        price.push(preciocarrito[i].textContent);
                        gettingRidOfDolarSign.push(price[0].trimStart().slice(1,price[0].length));
                        gettingRidOfDolarSign = parseInt(gettingRidOfDolarSign);
                        priceTotalItem = gettingRidOfDolarSign * numberValue;
                        productAddedPrice[i].innerHTML = "$" + priceTotalItem;

                        let precio = preciototal[0].textContent;
                        precio = parseInt(precio);
                        preciototal[0].innerHTML = (precio + gettingRidOfDolarSign)
                    }
                }
            }
        }
        )
    
        console.log('more!');
    });
}

