const form = document.querySelectorAll('.formcheckout');
const formCredit = document.querySelector('.credit');
const formCash = document.querySelector('.cash');

formCash.classList.add('hide');

formCredit.addEventListener('click', (e) => {
    switch (e.path[0].value) {
        case "efectivo":
            formCash.classList.remove('hide');
            formCredit.classList.add('hide');
            break;
    
        default:
            console.log('What the fuck did you search for?');
            break;
    }
});

formCash.addEventListener('click', (e) => {
    switch (e.path[0].value) {
        case "crédito":
            formCredit.classList.remove('hide');
            formCash.classList.add('hide');
            break;
    
        default:
            console.log('What the fuck did you search for?');
            break;
    }
});




