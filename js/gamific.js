
document.addEventListener("DOMContentLoaded", () => {
    const etapas = document.querySelectorAll(".etapa");

    const overlayExplicacao = document.getElementById(
        "explicacao-overlay"
    );

    const botaoFecharJornada = document.getElementById(
        "fechar-jornada"
    );

    const botaoFecharExplicacao = document.getElementById(
        "fechar-explicacao"
    );

    const botaoVoltar = document.getElementById(
        "voltar-jornada"
    );

    const numeroEtapa = document.getElementById("numero-etapa");
    const tituloEtapa = document.getElementById("titulo-etapa");
    const descricaoEtapa = document.getElementById("descricao-etapa");

    const conteudoEtapas = [
        {
            titulo: "Matrícula",
            descricao:
                "Você escolhe seu curso, preenche o formulário de cadastro " +
                "e dá o primeiro passo para começar sua jornada na Prisma Cursos."
        },
        {
            titulo: "Aulas híbridas",
            descricao:
                "Aulas online para estudar no seu ritmo e aulas presenciais " +
                "para trocar experiências, tirar dúvidas e aprender com outras pessoas."
        },
        {
            titulo: "Preparação",
            descricao:
                "Antes de ir para a prática, você revisa o que aprendeu, " +
                "desenvolve suas habilidades e se prepara para os desafios da sua área."
        },
        {
            titulo: "Prática",
            descricao:
                "Laboratórios e projetos reais ajudam você a colocar seus " +
                "conhecimentos em ação e construir experiência para o mercado de trabalho."
        },
        {
            titulo: "Primeira vaga",
            descricao:
                "Novos desafios, nova fase! Prepare seu currículo, valorize " +
                "suas habilidades e dê os próximos passos rumo à sua primeira oportunidade."
        }
    ];

    const etapasConcluidas = new Set();

    
function abrirExplicacao(indice) {
    const conteudo = conteudoEtapas[indice];

    if (!conteudo) {
        return;
    }

    numeroEtapa.textContent = `Etapa ${indice + 1} de 5`;
    tituloEtapa.textContent = conteudo.titulo;
    descricaoEtapa.textContent = conteudo.descricao;

    etapasConcluidas.add(indice);

    etapas.forEach((etapa, i) => {
        const concluida = etapasConcluidas.has(i);

        etapa.classList.toggle("selecionada", concluida);

        etapa.setAttribute(
            "aria-pressed",
            String(i === indice)
        );
    });

    overlayExplicacao.inert = false;
    overlayExplicacao.classList.add("aberto");
    overlayExplicacao.setAttribute("aria-hidden", "false");

    botaoFecharExplicacao.focus();
}


    function fecharExplicacao() {
        if (!overlayExplicacao.classList.contains("aberto")) {
            return;
        }

        overlayExplicacao.classList.remove("aberto");
        overlayExplicacao.setAttribute("aria-hidden", "true");
        overlayExplicacao.inert = true;

        const etapaSelecionada = document.querySelector(
            '.etapa[aria-pressed="true"]'
        );

        if (etapaSelecionada) {
            etapaSelecionada.focus();
        }
    }

    etapas.forEach((etapa) => {
        etapa.addEventListener("click", () => {
            const indice = Number(etapa.dataset.etapa);

            abrirExplicacao(indice);
        });
    });

    botaoFecharExplicacao.addEventListener(
        "click",
        fecharExplicacao
    );

    botaoVoltar.addEventListener(
        "click",
        fecharExplicacao
    );

    overlayExplicacao.addEventListener("click", (evento) => {
        if (evento.target === overlayExplicacao) {
            fecharExplicacao();
        }
    });

    botaoFecharJornada.addEventListener("click", () => {
        window.location.href = "inicio.html";
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key !== "Escape") {
            return;
        }

        if (overlayExplicacao.classList.contains("aberto")) {
            fecharExplicacao();
        } else {
            window.location.href = "inicio.html";
        }
    });
});
