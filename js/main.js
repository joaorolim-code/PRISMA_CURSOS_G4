console.log("o js tá carregando...");

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function fecharMenu() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {
        const menuAberto = navLinks.classList.toggle('active');

        menuToggle.setAttribute('aria-expanded', String(menuAberto));

        menuToggle.setAttribute(
            'aria-label',
            menuAberto ? 'Fechar menu' : 'Abrir menu'
        );
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    // Fecha o menu se a tela passar para o tamanho de computador.
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });
}

const formContato = document.getElementById('formContato');
const progressText = document.querySelector('.progress-section p');
const progressFill = document.querySelector('.progress-bar-fill');

const progressStates = [
    { text: "Vamos ver até onde você chega!", width: "25%" },
    { text: "Está indo bem!", width: "50%" },
    { text: "Muito bom!", width: "75%" },
    { text: "Continue! Quase lá...", width: "90%" },
    { text: "Parabéns! Bem-vindo ao seu Futuro!", width: "100%" }
];

if (formContato && progressText && progressFill) {

    const inputs = Array.from(formContato.querySelectorAll('input'));

    function atualizarProgresso() {
        let camposPreenchidos = 0;

        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                camposPreenchidos++;
            }
        });

        const indice = Math.min(
            camposPreenchidos,
            progressStates.length - 1
        );

        progressText.textContent = progressStates[indice].text;
        progressFill.style.width = progressStates[indice].width;
    }

    inputs.forEach((input, index) => {

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                atualizarProgresso();

                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    const botaoEnviar = formContato.querySelector(
                        'button[type="submit"], button:not([type])'
                    );

                    if (botaoEnviar) {
                        botaoEnviar.focus();
                    }
                }
            }
        });

        input.addEventListener('input', atualizarProgresso);
    });

    formContato.addEventListener('submit', function(event) {
        event.preventDefault();

        progressText.textContent = progressStates[4].text;
        progressFill.style.width = progressStates[4].width;

        setTimeout(() => {
            alert('Mensagem enviada com sucesso!');

            formContato.reset();
            atualizarProgresso();
        }, 1000);
    });

    atualizarProgresso();
}