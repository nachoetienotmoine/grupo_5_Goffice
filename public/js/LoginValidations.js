

    let LoginEmailValidation = document.querySelector('#LoginEmailValidation');
    let LoginPasswordValidation = document.querySelector('.LoginPasswordValidation');
    let sendLoginForm = document.querySelector(".sendLoginForm")
    const error_fieldLoginPassword = document.querySelector('.error_fieldLoginPassword')
    const error_fieldLoginEmail = document.querySelector('.error_fieldLoginEmail')
    const errorSubmitLogin = document.querySelector('.errorSubmitLogin')
    async function oneUser(emailInput) {
        let user = await fetch('/baseDeDatosInfo/findOneEmail',
            { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userEmail: emailInput }) })
            .then(res => res.json()).then(data => { return data; });
        return user.email == emailInput;
    }
    let errorPassword = false;
    let errorEmail = false;
    LoginPasswordValidation.addEventListener('keyup', function () {
        if (LoginPasswordValidation.value == "") {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "No debes dejar este campo sin llenar";
            errorPassword = false;
        } else if (LoginPasswordValidation.value.length < 8) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Los caracteres deben superar los 8";
            errorPassword = false;
        } else if (!LoginPasswordValidation.value.match(/(?=.*?[a-z])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Debe contener una minuscula";
            errorPassword = false;
        } else if (!LoginPasswordValidation.value.match(/(?=.*?[0-9])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Debe contener un numero";
            errorPassword = false;

        }
        else if (!LoginPasswordValidation.value.match(/(?=.*?[A-Z])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Debe contener una mayuscula";
            errorPassword = false;
        } else if (!LoginPasswordValidation.value.match(/(?=.*?[.#?!@$%^&*-])/)) {
            error_fieldLoginPassword.style.display = "block"
            LoginPasswordValidation.style.borderColor = "red"
            error_fieldLoginPassword.innerHTML = "Debe contener un caracter especial (#?!@$%^&*-)";
            errorPassword = false;
        }
        else {
            error_fieldLoginPassword.style.display = "none"
            LoginPasswordValidation.style.borderColor = ""
            errorPassword = true;
        }
    }
    )
    LoginEmailValidation.addEventListener('keyup', function () {
        let fileExtensionLogin = LoginEmailValidation.value.split('@');
        let extensionLogin = fileExtensionLogin[1];
        let fileExtensionLogin1 = extensionLogin.split('.');
        let extensionLogin1 = fileExtensionLogin1[1];
        let allowedExtensions = ['dk', 'uk', 'es', 'com', 'ar'];
        let extensionMatchLogin = false;
        allowedExtensions.forEach(extensionALogin => {
            if (extensionALogin == extensionLogin1) {
                extensionMatchLogin = true;
            }
        })
        var matchEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        if (LoginEmailValidation.value == "") {
            error_fieldLoginEmail.style.display = "block"
            LoginEmailValidation.style.borderColor = "red"
            error_fieldLoginEmail.innerHTML = "No debes dejar este campo sin llenar";
            errorEmail = false;
        }
        else if (!LoginEmailValidation.value.match(matchEmail)) {
            error_fieldLoginEmail.style.display = "block"
            LoginEmailValidation.style.borderColor = "red"
            error_fieldLoginEmail.innerHTML = "Debe usar un formato valido de email";
            errorEmail = false;
        }
        else if (!extensionMatchLogin) {
            error_fieldLoginEmail.style.display = "block"
            LoginEmailValidation.style.borderColor = "red"
            error_fieldLoginEmail.innerHTML = "Debe contener un un dominio valido (['dk', 'uk', 'es', 'com' , 'ar'])";
            errorEmail = false;
        } else {
            error_fieldLoginEmail.style.display = "none"
            LoginEmailValidation.style.borderColor = ""
            errorEmail = true;
        }
        if (errorEmail) {
            oneUser(LoginEmailValidation.value).then(res => {
                if (!res) {
                    error_fieldLoginEmail.style.display = "block"
                    LoginEmailValidation.style.borderColor = "red"
                    error_fieldLoginEmail.innerHTML = "Este email no existe en nuestra base de datos";
                    errorEmail = false;
                } else {
                    error_fieldLoginEmail.style.display = "none"
                    LoginEmailValidation.style.borderColor = "green"
                    errorEmail = true;
                }
            });
        }
    }
    )
    sendLoginForm.addEventListener("click", function (e) {
        if (!errorPassword && !errorEmail) {
            errorSubmitLogin.style.display = "block",
                errorSubmitLogin.innerHTML = "Debe completar correctamente los campos, o actualizar los mismo";
            LoginPasswordValidation.style.borderColor = "red"
            LoginEmailValidation.style.borderColor = "red"
            e.preventDefault()
        }
        else if (!errorPassword) {
            errorSubmitLogin.style.display = "block",
                errorSubmitLogin.innerHTML = "Debe completar correctamente el campo password, o actualizar el mismo";
            LoginPasswordValidation.style.borderColor = "red"
            e.preventDefault()
        }
        else if (!errorEmail) {
            errorSubmitLogin.style.display = "block",
                errorSubmitLogin.innerHTML = "Debe completar correctamente el campo email, o actualizar el mismo";
            LoginEmailValidation.style.borderColor = "red"
            e.preventDefault()
        }
    })
