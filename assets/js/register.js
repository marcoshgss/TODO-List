// Seleção de elementos

const btn = document.querySelector("#verSenha");
const btnConfirme = document.querySelector("#verConfirmSenha");
// Eventos

btn.addEventListener('click', () => {
    const showPassword = document.querySelector("#senha");

    if (showPassword.getAttribute("type") == "password") {
        showPassword.setAttribute("type", "text");
    } else {
        showPassword.setAttribute("type", "password");
    };
});

btnConfirme.addEventListener('click', () => {
    const showPasswordconfirm = document.querySelector("#confirmSenha");

    if (showPasswordconfirm.getAttribute("type") == "password") {
        showPasswordconfirm.setAttribute("type", "text");
    } else {
        showPasswordconfirm.setAttribute("type", "password");
    };
});