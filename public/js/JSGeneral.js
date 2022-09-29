function scriptSrc(src){
    let tag = document.createElement('script');
    tag.src = src;
    tag.defer = true;
    let firstScriptTag = document.getElementsByTagName('head')[0].appendChild(tag);
}

if (location.href === 'http://localhost:3000/admin/productos'){
    let aButtons = document.querySelectorAll(".botonEdit");
    aButtons.forEach(aButton => {
        aButton.addEventListener('click', (e) => {
            let href = aButton.href;
            let hrefLength = href.length - 1;
            let id = href.slice(hrefLength,80);
            sessionStorage.setItem("id", id);
        });
    });
}

let id = sessionStorage.getItem("id");

switch (location.href) {
    case 'http://localhost:3000/':
        scriptSrc("/js/HeaderSearchBar.js");
        break;
    case 'http://localhost:3000/users/login':
        scriptSrc("/js/LoginValidations.js");
        scriptSrc("/js/HeaderSearchBar.js");
        break;
    case 'http://localhost:3000/users/registro':
        scriptSrc("/js/RegisterValidations.js");
        scriptSrc("/js/HeaderSearchBar.js");
        break;
    case 'http://localhost:3000/carrito':
        scriptSrc("/js/Carrito.js");
        scriptSrc("/js/HeaderSearchBar.js");
        break; 
    case 'http://localhost:3000/carrito/checkout':
        scriptSrc("/js/CheckOut.js");
        scriptSrc("/js/CheckoutValidations.js");
        scriptSrc("/js/HeaderSearchBar.js");
        break;
    case 'http://localhost:3000/users/profile/Edit':
        scriptSrc("/js/UserProfileEditValidations.js");
        scriptSrc("/js/HeaderSearchBar.js");
        break;
    case `http://localhost:3000/admin/productos/${id}/edit`:
            scriptSrc("/js/EditProductosValidations.js");
            scriptSrc("/js/HeaderSearchBar.js");
            break;
    case "http://localhost:3000/admin/productos/create":
            scriptSrc("/js/ProductosValidations.js");
            scriptSrc("/js/HeaderSearchBar.js");
            break;
}
