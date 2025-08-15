// pegar o valor do campo de email
// verificar se o email nao e vazio e se o email e valido
// se verdadeiro entao habilitar o botao de recuperar senha
//se falso entao desabilitar o botao de recuperar senha

function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErrros();
}

function onChangePassword() {
    togglePasswordErros();
    toggleButtonDisable();

}

// Função para validar o formato do email
// Retorna true se o email for válido, false caso contrário
    
function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        }
        return validateEmail(email);
    }

function toggleEmailErrros() {
        const email = document.getElementById('email').value;
        if (!email) {
            document.getElementById('email-required-error').style.display = "block";
    } else {
            document.getElementById('email-required-error').style.display = "none";
        }
    
    if (validateEmail(email)){
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
}

function togglePasswordErros(){
    const password = document.getElementById('password').value;
    if (!password){
        document.getElementById('password-required-error').style.display = "block";
    } else {
        document.getElementById('password-required-error').style.display = "none";
    }
}

function toggleButtonDisable(){
         console.log('validateFields chamada');
         const emailValid = isEmailValid();
         document.getElementById('recover-password-button').disabled = !emailValid;
    
         const password = isPasswordValid();
         document.getElementById('login-button').disabled = !emailValid || !password;
    }

// Função para validar o formato da senha

function isPasswordValid() {
        const password = document.getElementById("password").value;
        if(!password){
            return false;
        }
        return true;
    }

function validateEmail(email) {
         return /\S+@\S+\.\S+/.test(email);
    }