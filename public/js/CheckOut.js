const form = document.querySelectorAll('.formcheckout');
const formCredit = document.querySelector('.credit');
const formCash = document.querySelector('.cash');

formCash.classList.add('hide')

let formOnScreen = formCredit;

formOnScreen.addEventListener('click', (e) => {

    for (let i = 0; i < form.length; i++){

        if (e.path[0][i].selected == true){
            let optionSelected = e.path[0][i];
            switch (optionSelected.value) {
                case "efectivo":
                    formCredit.classList.add('hide')
                    formCash.classList.remove('hide');
                    formOnScreen = formCash;
                    break;

                case "crédito":
                    formCash.classList.add('hide')
                    formCredit.classList.remove('hide')
                    formOnScreen = formCredit;
                    break;
            
                default:
                    console.log('does not exists');
            }
            
            console.log(optionSelected.value);
        }
    }
    
});

    // formSelect.children[i].selected


// console.log(select.children[1].label);



