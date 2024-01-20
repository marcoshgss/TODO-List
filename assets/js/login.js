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

    listaUser.forEach((item) => {
        if (usuario.value == item.userCadastro && senha.value == item.senhaCadastro) {
            userValid = {
                nome: item.nomeCadastro,
                user: item.userCadastro,
                senha: item.senhaCadastro
            }
        }
    });

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = "../../index.html"
    
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        mensagemErro.setAttribute('style', 'display: block')
        mensagemErro.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }
}

