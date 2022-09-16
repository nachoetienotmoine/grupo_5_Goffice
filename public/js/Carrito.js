const quantityLess = document.querySelector('.cantidadMenos');
const quantityMore = document.querySelectorAll('.cantidadMas');
const quantityNumber = document.querySelectorAll('.cantidad');
const productAddedName = document.querySelectorAll('.nombreProductoAgregado');
const productAddedPrice = document.querySelectorAll('.precioProductoAgregado');

// quantityLess.addEventListener('click', (e) => {
//     e.preventDefault();
//     let numberValue = quantityNumber.value;
//     quantityNumber.value = --numberValue;
//     console.log('less!');
// });

for(let i = 0; i < quantityMore.length; i++){
    quantityMore[i].addEventListener('click', (e) => {
        e.preventDefault();
        let numberValue = quantityNumber[i].value;
        quantityNumber[i].value = ++numberValue;

        let productElement = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        let productName = productElement.firstElementChild.textContent.trim();
        
        for (let i = 0; i < productAddedName.length; i++){
            if (productName == productAddedName[i].textContent.trim()){
                let price = [];
                console.log(price);
                let gettingRidOfDolarSign = [];

                price.push(productAddedPrice[i].textContent);
                gettingRidOfDolarSign.push(price[0].slice(2,price[0].length));
                
                price = parseInt(gettingRidOfDolarSign)*2;
                productAddedPrice[i].textContent = "$"+price;
            }
        }


    
        console.log('more!');
    });
}
