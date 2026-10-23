const depoimentos = [
    {
        foto: "../assets/images/marina.png",
        nomeAluno: "Marina Becker",
        nomeCurso: "UX Design",
        nota: 5,
        texto: "O curso me ajudou a entender melhor como criar experiências digitais intuitivas e agradáveis para os usuários. Também gostei da organização da plataforma e da qualidade do conteúdo!"
    },
    {
        foto: "../assets/images/marcello.png",
        nomeAluno: "Marcello Henrique",
        nomeCurso: "CEO",
        nota: 5,
        texto: "Tive uma visão muito interessante sobre liderança, gestão e tomada de decisões. Os conteúdos são objetivos e ajudaram a entender melhor as responsabilidades e os desafios de estar à frente de uma empresa."
    },
    {
        foto: "../assets/images/lucas.png",
        nomeAluno: "Lucas Oliveira",
        nomeCurso: "Web Design",
        nota: 4,
        texto: "O curso foi muito completo e prático. Aprendi a criar páginas mais organizadas e funcionais, além de entender melhor a experiência do usuário. Os materiais e o suporte facilitaram bastante o aprendizado."
    },
    {
        foto: "../assets/images/aurora.png",
        nomeAluno: "Aurora Schnnider",
        nomeCurso: "Photoshop",
        nota: 5,
        texto: "As aulas são bem explicadas e as atividades ajudaram a colocar o conteúdo em prática. Hoje consigo utilizar várias ferramentas que antes pareciam complicadas."
    },
    {
        foto: "../assets/images/lais.png",
        nomeAluno: "Lais Matos",
        nomeCurso: "Gestão de Finanças",
        nota: 5,
        texto: "Aprendi conceitos importantes sobre organização financeira, planejamento e controle de gastos. O conteúdo é apresentado de forma clara e as atividades ajudaram a aplicar os conhecimentos em situações práticas."
    },
    {
        foto: "../assets/images/igor.png",
        nomeAluno: "Igor Sousa",
        nomeCurso: "Planejamento Estratégico",
        nota: 5,
        texto: "O curso me ajudou a entender melhor como definir objetivos e criar estratégias para alcançá-los. As aulas são organizadas e apresentam ferramentas que podem ser aplicadas tanto em empresas quanto em projetos pessoais."
    },
    {
        foto: "../assets/images/josé.png",
        nomeAluno: "José Wilson",
        nomeCurso: "Programação em Java",
        nota: 5,
        texto: "As aulas tornaram os conceitos de programação mais fáceis de entender. Os exercícios práticos me ajudaram a desenvolver a lógica e a criar meus primeiros projetos em Java com mais confiança."
    },
    {
        foto: "../assets/images/hayla.png",
        nomeAluno: "Hayla Bianca",
        nomeCurso: "Inteligência Artificial",
        nota: 4,
        texto: "O curso apresentou conteúdos atuais de forma simples e prática. Aprendi sobre diferentes ferramentas e possibilidades de uso da IA, conhecimentos que considero muito importantes para o mercado de trabalho."
    },
    {
        foto: "../assets/images/nicolas.png",
        nomeAluno: "Nicolas Barreto",
        nomeCurso: "Análise de Dados",
        nota: 5,
        texto: "Gostei bastante das atividades práticas, da organização dos materiais, do atendimento pela plataforma e dos profissionais. Agora consigo interpretar informações e transformá-las em resultados úteis."
    }
];

function criarEstrelas(nota) {
    const estrelas = document.createElement("span");
    estrelas.className = "estrelas";
    estrelas.setAttribute("role", "img");
    estrelas.setAttribute("aria-label", nota + " de 5 estrelas");

    const simbolos = document.createElement("span");
    simbolos.setAttribute("aria-hidden", "true");
    simbolos.textContent = "★".repeat(nota) + "☆".repeat(5 - nota);
    estrelas.appendChild(simbolos);

    return estrelas;
}

function criarCardFeedback(depoimento) {
    const card = document.createElement("article");
    card.className = "card-feedback";

    const foto = document.createElement("img");
    foto.className = "foto-aluno";
    foto.src = depoimento.foto;
    foto.alt = "Retrato de " + depoimento.nomeAluno;
    foto.width = 220;
    foto.height = 220;
    foto.loading = "lazy";

    const conteudo = document.createElement("div");
    conteudo.className = "conteudo-feedback";

    const cabecalho = document.createElement("div");
    cabecalho.className = "cabecalho-feedback";

    const titulo = document.createElement("h2");
    titulo.className = "nome-aluno";
    titulo.append(depoimento.nomeAluno + " — ");

    const curso = document.createElement("span");
    curso.className = "curso-verde";
    curso.textContent = depoimento.nomeCurso;
    titulo.appendChild(curso);

    const texto = document.createElement("blockquote");
    texto.className = "texto-feedback";
    texto.textContent = depoimento.texto;

    cabecalho.append(titulo, criarEstrelas(depoimento.nota));
    conteudo.append(cabecalho, texto);
    card.append(foto, conteudo);

    return card;
}

function carregarFeedbacks() {
    const container = document.getElementById("container-feedbacks");

    if (!container) {
        return;
    }

    const fragmento = document.createDocumentFragment();
    depoimentos.forEach((depoimento) => {
        fragmento.appendChild(criarCardFeedback(depoimento));
    });

    container.replaceChildren(fragmento);
}

carregarFeedbacks();
