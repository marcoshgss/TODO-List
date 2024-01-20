// a lógica: ao clicar no olho, mostre a senha, depois volte ao estado inicial.

// Seleção de elementos
const btn = document.querySelector(".fa-eye");

// Eventos
btn.addEventListener('click', () => {
    const showPassword = document.querySelector("#senha");

    if (showPassword.getAttribute("type") == "password") {
        showPassword.setAttribute("type", "text")
    } else {
        showPassword.setAttribute("type", "password")
    }
})

function entrar() {
    const usuario = document.querySelector("#usuario");
    const userLabel = document.querySelector("#userLabel");

    const senha = document.querySelector("#senha");
    const senhaLabel = document.querySelector("#senhaLabel");

    const mensagemErro = document.querySelector("#mensagemErro");
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    console.log(listaUser)
}

