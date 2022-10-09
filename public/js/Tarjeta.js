const tarjeta = document.querySelector("#cardForm"),
    btnOpenForm = document.querySelector("#btn-open-close"),
    Form = document.querySelector("#creditForm");

    //* rotacion tarjeta
tarjeta.addEventListener("click" , () => {
    tarjeta.classList.toggle("active");
});
//* btn abrir form 
btnOpenForm.addEventListener("click", () => {
    btnOpenForm.classList.toggle("active");
    Form.classList.toggle("active");
});


//* select month dinamic 

for(let i = 1; i <= 12; i ++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    Form.selectMonth.appendChild(option);
}




//* select year dinamic 

const yearActual = new Date() .getFullYear();

for(let i = yearActual; i <= yearActual + 8; i ++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    Form.selectYear.appendChild(option);
    
}

//* input nuumber card

Form.inputNumber.addEventListener("KeyUp", (e) => {
    console.log(e)


})



 