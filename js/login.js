import { USER_LOGIN_URL } from './settings/api';
import { logInUser } from './utils/loginUser';
import { validateEmail } from './utils/validation';
import { saveUser, saveToken } from './utils/storage';

const logInForm = document.querySelector('#login-form');

const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const emailErrorNotValid = document.querySelector('#emailErrorNotValid');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

const generalErrorMessage = document.querySelector('#general-error-message');

if (logInForm) {
    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isEmail = false;
        if (email.value.trim().length > 0) {
            emailError.classList.add('hidden');
            isEmail = true;
        } else {
            emailError.classList.remove('hidden');
        }

        let isValidEmail = false;
        if (email.value.trim().length && validateEmail(email.value) === true) {
            emailErrorNotValid.classList.add('hidden');
            isValidEmail = true;
        } else if (
            email.value.trim().length &&
            validateEmail(email.value) !== true
        ) {
            emailErrorNotValid.classList.remove('hidden');
        }

        let isPassword = false;

        if (password.value.trim().length >= 8) {
            passwordError.classList.add('hidden');
            isPassword = true;
        } else {
            passwordError.classList.remove('hidden');
        }

        const isFormValid = isEmail && isValidEmail && isPassword;

        if (isFormValid) {
            console.log('Validation SUCCEEDED!!  🥳');
            const userData = {
                email: email.value,
                password: password.value,
            };

            const LOGIN_USER_URL_ENDPOINT = `${USER_LOGIN_URL}`;

            logInUser(LOGIN_USER_URL_ENDPOINT, userData)
                .then((user) => {
                    saveToken(user.accessToken);

                    const userToSave = {
                        name: user.name,
                        email: user.email,
                    };
                    saveUser(userToSave);
                    location.href = '/index.html';
                })
                .catch((err) => {
                    generalErrorMessage.innerHTML = err;
                });
        } else {
            console.log('Validation FAILED!! 💩');
        }
    });
}
