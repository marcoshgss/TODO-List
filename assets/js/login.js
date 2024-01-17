// a lógica: ao clicar no olho, mostre a senha, depois volte ao estado inicial.

// Seleção de elementos
const btn = document.querySelector(".fa-eye");

// Eventos
btn.addEventListener('click', () => {
    const showPassword = document.querySelector("#senha");

    if(showPassword.getAttribute("type") == "password") {
        showPassword.setAttribute("type", "text")
    } else {
        showPassword.setAttribute("type", "password")
    }
})