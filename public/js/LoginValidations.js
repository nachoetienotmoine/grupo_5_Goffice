
let formulario = document.querySelector("form.login_validation");

formulario.addEventListener("submit", function(e){

    let errors = [];

    let campoEmail = document.querySelector(".login-val");


    if (campoEmail.value == "") {
        errors.push("El campo Email tiene que estar completo")        
    } else if (campoEmail.value.length < 3) {
        errors.push("El campo Email tiene que ser mayor válido")
    }       

    let campoPassword = document.querySelector(".login-pass");


    if (campoPassword.value == "") {
        errors.push("El campo Password tiene que estar completo")        
    } else if (campoPassword.value.length < 3) {
        errors.push("El campo Password tiene que ser mayor a 8")
    }  
    
    if(errors.length > 0){
        e.preventDefault();
    }
    let ulErrores = document.querySelector("div.errors-front ul")
    for (let i = 0; i < errors.length; i++) {
        
        ulErrores.innerHTML += "<li>" + errors[i] + "</li>"
        
    }
})

