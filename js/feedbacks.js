// Dados dos depoimentos com Nome e Curso separados
const depoimentos = [
    {
        foto: "ativos/imagens/marina.png", 
        nomeAluno: "Marina Becker",
        nomeCurso: "UX Design",
        estrelas: "★★★★★",
        texto: "O curso me ajudou a entender melhor como criar experiências digitais intuitivas e agradáveis para os usuários. Também gostei da organização da plataforma e da qualidade do conteúdo!"
    },
    {
        foto: "ativos/imagens/marcello.png",
        nomeAluno: "Marcello Henrique",
        nomeCurso: "CEO",
        estrelas: "★★★★★",
        texto: "Tive uma visão muito interessante sobre liderança, gestão e tomada de decisões. Os conteúdos são objetivos e ajudaram a entender melhor as responsabilidades e os desafios de estar à frente de uma empresa."
    },
    {
        foto: "ativos/imagens/lucas.png",
        nomeAluno: "Lucas Oliveira",
        nomeCurso: "Web Design",
        estrelas: "★★★★☆",
        texto: "O curso foi muito completo e prático. Aprendi a criar páginas mais organizadas e funcionais, além de entender melhor a experiência do usuário. Os materiais e o suporte facilitaram bastante o aprendizado."
    },
    {
        foto: "ativos/imagens/aurora.png",
        nomeAluno: "Aurora Schnnider",
        nomeCurso: "Photoshop",
        estrelas: "★★★★★",
        texto: "As aulas são bem explicadas e as atividades ajudaram a colocar o conteúdo em prática. Hoje consigo utilizar várias ferramentas que antes pareciam complicadas."
    },
    {
        foto: "ativos/imagens/lais.png",
        nomeAluno: "Lais Matos",
        nomeCurso: "Gestão de finanças",
        estrelas: "★★★★★",
        texto: "Aprendi conceitos importantes sobre organização financeira, planejamento e controle de gastos. O conteúdo é apresentado de forma clara e as atividades ajudaram a aplicar os conhecimentos em situações práticas."
    },
    {
        foto: "ativos/imagens/igor.png",
        nomeAluno: "Igor Sousa",
        nomeCurso: "Planejamento Estratégico",
        estrelas: "★★★★★",
        texto: "Me ajudou a entender melhor como definir objetivos e criar estratégias para alcançá-los. As aulas são organizadas e apresentam ferramentas que podem ser aplicadas tanto em empresas quanto em projetos pessoais."
    },
    {
        foto: "ativos/imagens/josé.png",
        nomeAluno: "José Wilson",
        nomeCurso: "Programação em Java",
        estrelas: "★★★★★",
        texto: "O curso foi muito completo e prático. Aprendi a criar páginas mais organizadas e funcionais, além de entender melhor a experiência do usuário. Os materiais e o suporte facilitaram bastante o aprendizado."
    },
    {
        foto: "ativos/imagens/hayla.png",
        nomeAluno: "Hayla Bianca",
        nomeCurso: "Inteligêcia Artificial",
        estrelas: "★★★★☆",
        texto: "Apresentou conteúdos atuais de forma simples e prática. Aprendi sobre diferentes ferramentas e possibilidades de uso da IA, conhecimentos que considero muito importantes para o mercado de trabalho."
    },
    {
        foto: "ativos/imagens/nicolas.png",
        nomeAluno: "Nicolas Barreto",
        nomeCurso: "Análise de Dados",
        estrelas: "★★★★★",
        texto: "Gostei bastante das atividades práticas e da organização dos materiais, do atendimento pela plataforma e dos profissionais. Agora consigo  interpretar informações e transformá-las em resultados úteis."
    }
];

function carregarFeedbacks() {
    const container = document.getElementById('container-feedbacks');
    
    depoimentos.forEach(depoimento => {
       
        const card = document.createElement('div');
        card.className = 'card-feedback';
        
        card.innerHTML = `
            <img src="${depoimento.foto}" class="foto-aluno" alt="Foto de ${depoimento.nomeAluno}">
            
            <div class="conteudo-feedback">
                <div class="cabecalho-feedback">
                    <h3>${depoimento.nomeAluno} - <span class="curso-verde">${depoimento.nomeCurso}</span></h3>
                    <div class="estrelas">${depoimento.estrelas}</div>
                </div>
                <p>"${depoimento.texto}"</p>
            </div>
        `;
        
    
        container.appendChild(card);
    });
}

window.onload = carregarFeedbacks;