const navLoginButton = document.querySelector(".login-btn");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const goToRegisterForm = document.querySelector(".go-to-register-form");
const goToLoginForm = document.querySelector(".go-to-login-form");
const closeIcon = document.querySelectorAll(".close-icon");

navLoginButton.addEventListener("click", () => {
    loginForm.classList.add("active-login");
});

goToRegisterForm.addEventListener("click", () => {
    registerForm.classList.add("active");
    loginForm.classList.add("move-login-form");
});

closeIcon.forEach((close) =>
    close.addEventListener("click", () => {
        loginForm.classList.remove("active-login");
        loginForm.classList.remove("move-login-form");
        registerForm.classList.remove("active");
    })
);

goToLoginForm.addEventListener("click", () => {
    registerForm.classList.remove("active");
    loginForm.classList.remove("move-login-form");
});
