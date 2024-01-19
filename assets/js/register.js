// Seleção de elementos

const btn = document.querySelector("#verSenha");
const btnConfirme = document.querySelector("#verConfirmSenha");

const nome = document.querySelector("#nome");
const labelNome = document.querySelector("#labelNome");
let validNome = false

const usuario = document.querySelector("#usuario");
const labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false

const senha = document.querySelector("#senha");
const labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

const confirmSenha = document.querySelector("#confirmSenha");
const labelConfirmeSenha = document.querySelector("#labelConfirmeSenha");
let validConfirmSenha = false;

// Funções
function cadastrar(){
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
        alert("Cadastro feito!")
    } else {
        alert("Tá tudo vazio!!!")
    }
}

// Eventos
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome * Insira no mínimo 4 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome '
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário * Insira no mínimo 5 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha * Insira no mínimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value != senha.value) {
        labelConfirmeSenha.setAttribute('style', 'color: red');
        labelConfirmeSenha.innerHTML = 'Confirmar Senha * As senhas não conferem';
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false
    } else {
        labelConfirmeSenha.setAttribute('style', 'color: green');
        labelConfirmeSenha.innerHTML = 'Confirmar Senha';
        confirmSenha.setAttribute('style', 'border-color: green');
        validConfirmSenha = true
    }
})

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
