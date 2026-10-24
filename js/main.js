const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Ao clicar, o JS adiciona/remove a classe 'active' que ativa o display: flex !important
        navLinks.classList.toggle('active');
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

if (formContato) {
    const inputs = Array.from(formContato.querySelectorAll('input'));

    function atualizarProgresso() {
        let camposPreenchidos = 0;
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                camposPreenchidos++;
            }
        });

        progressText.textContent = progressStates[camposPreenchidos].text;
        progressFill.style.width = progressStates[camposPreenchidos].width;
    }

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                atualizarProgresso();
                
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    formContato.querySelector('button').focus();
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
}