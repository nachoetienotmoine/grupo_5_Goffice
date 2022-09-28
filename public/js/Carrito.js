const quantityLess = document.querySelectorAll('.cantidadMenos');
const quantityMore = document.querySelectorAll('.cantidadMas');
const quantityNumber = document.querySelectorAll('.cantidad');
const productAddedName = document.querySelectorAll('.nombreProductoAgregado');
const productAddedPrice = document.querySelectorAll('.precioProductoAgregado');
const preciocarrito = document.querySelectorAll('.PrecioenCarrito');
const preciototal = document.querySelectorAll('.totalprice');
const linkHrefCheckOut = document.querySelector('.hrefcheckout');

let totalPriceValue = 0;
let products = [];
let productsParsedJson;

function ProductAmount(product, amount){
    this.product = product,
    this.amount = amount
}

linkHrefCheckOut.addEventListener('click', (e) => {
    localStorage.setItem('totalPriceCarrito', totalPriceValue);
    productsParsedJson = JSON.stringify(products)
    localStorage.setItem('productsAmount', productsParsedJson);
});

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

                        totalPriceValue = precio - gettingRidOfDolarSign;

                        let input_Name = productAddedName[i].textContent.trim();
                        let productNumberValue = numberValue;


                        let alreadyChecked = false;
                        let fieldName = input_Name;
                        for (let i = 0; i < products.length; i++){
                            if(products[i]["productName"]){
                                products[i]["productName"].product === fieldName ? alreadyChecked = true : ""; 
                            }
                        }   

                        if (!alreadyChecked){
                            fieldName = {
                                ["productName"]: new ProductAmount (input_Name, numberValue)
                            };
                            products.push(input_Name);
                        }else{
                            for (let i = 0; i < products.length; i++){
                                if(products[i]["productName"].product == fieldName){
                                    products[i]["productName"].amount = numberValue;
                                }
                            }
                        }
                    }
                }
            }
        }
        )
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
                        preciototal[0].innerHTML = (precio + gettingRidOfDolarSign);
                        
                        totalPriceValue = precio + gettingRidOfDolarSign;
                        console.log(totalPriceValue);

                        let input_Name = productAddedName[i].textContent.trim();


                        let alreadyChecked = false;
                        let fieldName = input_Name;
                        for (let i = 0; i < products.length; i++){
                            if(products[i]["productName"]){
                                products[i]["productName"].product === fieldName ? alreadyChecked = true : ""; 
                            }
                        }   

                        if (!alreadyChecked){
                            input_Name = {
                                ["productName"]: new ProductAmount (input_Name, numberValue)
                            };
                            products.push(input_Name);
                        }else{
                            for (let i = 0; i < products.length; i++){
                                if(products[i]["productName"].product == fieldName){
                                    products[i]["productName"].amount = numberValue;
                                }
                            }
                        }
                    }
                }
            }
        }
        )
    });
}
