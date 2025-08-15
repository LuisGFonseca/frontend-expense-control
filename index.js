function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErrros();
}

function onChangePassword() {
    togglePasswordErros();
    toggleButtonDisable();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrros() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErros() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisable() {
    console.log('validateFields chamada');
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const password = isPasswordValid();
    form.loginButton().disabled = !emailValid || !password;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),
    loginButton: () => document.getElementById('login-button')
};