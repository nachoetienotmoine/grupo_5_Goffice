const body = document.querySelector('body');
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const aHref = document.querySelector("a")

userCardContainer.classList.add('hide')

let productos = []

fetch('/baseDeDatosInfo')
    .then(res => res.json())
    .then(data => {
        productos = data.map(producto => {
            
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const price = card.querySelector("[data-price]");
            const image = card.querySelector("[data-image]");
            const a = card.querySelector("a");
            header.textContent = producto.name;
            price.textContent = '$ ' + producto.price;
            image.src = "/images/" + producto.image;
            card.children[0].href  = "/detalle/" + producto.id;
            a.children[0].style.color = 'orangered';
            a.style.color = '#0b0126';
            userCardContainer.append(card);
            return {name: producto.name, price: producto.price, image: producto.image, element: card}
            
        });
});

searchInput.addEventListener('input', (e) => {
    userCardContainer.classList.remove('hide')
    const value = e.target.value.toLowerCase()
    productos.forEach(producto => {
        const isVisible =
        producto.name.toLowerCase().includes(value) 
        producto.element.classList.toggle("hide", !isVisible)
    })
});



body.addEventListener('click', (e) => {
    const input = e.path[0] == searchInput;
    const productCardContainer = e.path[2] == userCardContainer;
    if (input && !productCardContainer) {
        userCardContainer.classList.remove('hide')
        let card = document.querySelectorAll(".buscar_card");
        for (let i = 5; i < card.length; i++){
            card[i].classList.add('hide')
        }
    }
    if (!input && !productCardContainer){
        userCardContainer.classList.add('hide')
    }
    
})
