const botaoMenu = document.getElementById('botao-menu');
const menuNavegacao = document.getElementById('menu-navegacao');

botaoMenu.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
});