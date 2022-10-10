const tarjeta = document.querySelector("#cardForm");
const  btnOpenForm = document.querySelector("#btn-open-close");
const Form = document.querySelector("#creditForm");
const numberI = document.querySelector("#inputNumber");
const nameI = document.querySelector("#inputName");
const crNumber = document.querySelector("#cardForm .numberCard");
const crName = document.querySelector("#cardForm .name");
const logoBrand = document.querySelector("#logoBrand1");
const sign = document.querySelector("#cardForm .sign p")
const expirateMonth = document.querySelector("#cardForm #expiration .month");
const expirateYear = document.querySelector("#cardForm #expiration .year");
const ccv = document.querySelector("#cardForm .ccv");

const showfront = () => {
    if(tarjeta.classList.contains("active")){
        tarjeta.classList.remove("active");
    }
}    

    //* rotation card
tarjeta.addEventListener("click" , () => {
    tarjeta.classList.toggle("active");
});
//* btn open form 
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

numberI.addEventListener("keyup", (e) => {
   let valueInput = e.target.value;


   numberI.value = valueInput
   // delete space 
      .replace(/\s/g, "")
    //delete letras
    .replace(/\D/g, "")
    //add space 
    .replace(/([0-9]{4})/g, "$1 ")
    //delete last space
    .trim();

    crNumber.textContent = valueInput;

    if(valueInput == ""){
        crNumber.textContent = "#### #### #### ####";
        logoBrand.innerHTML = " ";
    }


    if(valueInput[0] == 4){
        logoBrand.innerHTML = " ";
        const imagen = document.createElement("img");
        imagen.src = "images/visa.png";
        logoBrand.appendChild(imagen);
    }
    else if (valueInput[0] == 5) {
        logoBrand.innerHTML = " ";
        const imagen = document.createElement("img");
        imagen.src = "images/mastercard.png";
        logoBrand.appendChild(imagen);

    }


showfront();

})



 //input name

 nameI.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;

    nameI.value = valueInput
    .replace(/[0-9]/g, "")

    crName.textContent = valueInput;
    sign.textContent = valueInput;

    if(valueInput == ""){
        crName.textContent = "Jhon Doe";
    }

});


// select month

Form.selectMonth.addEventListener("change", (e) => {
    expirateMonth.textContent = e.target.value;
    showfront();
})

// select year

Form.selectYear.addEventListener("change", (e) => {
    expirateYear.textContent = e.target.value.slice(2);
    showfront();
})


//ccv

Form.inputCCV.addEventListener("keyup", () =>{
    if (!tarjeta.classList.contains("active")){
        tarjeta.classList.toggle("active")
    }

    Form.inputCCV.value = Form.inputCCV.value
    .replace(/\D/g, "")
    .replace(/\s/g, "");

    ccv.textContent = Form.inputCCV.value;
});