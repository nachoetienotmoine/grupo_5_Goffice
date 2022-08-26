const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

userCardContainer.classList.add('hide')

let users = []

searchInput.addEventListener('click', () => {
    userCardContainer.classList.remove('hide')
})

searchInput.addEventListener('blur', () => {
    userCardContainer.classList.add('hide')
})

searchInput.addEventListener('input', (e) => {
    console.log(users);
    userCardContainer.classList.remove('hide')
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        console.log(user);
        const isVisible =
        user.name.toLowerCase().includes(value) 
        user.element.classList.toggle("hide", !isVisible)
    })
});


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//     users = data.map(user => {

//             const card = userCardTemplate.content.cloneNode(true).children[0];
//             const header = card.querySelector("[data-header]");
//             const body = card.querySelector("[data-body]");
//             header.textContent = user.name;
//             body.textContent = user.email;
//             userCardContainer.append(card);
//             return {name: user.name, email: user.email, element: card}
//         });
// });


fetch('/baseDeDatosInfo')
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            console.log(user);
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const price = card.querySelector("[data-price]");
            header.textContent = user.name;
            price.textContent = user.price;
            userCardContainer.append(card);
            return {name: user.name, price: user.price, element: card}
            
        });
});




