document.documentElement.classList.add('js-ativo');

const PASTA_IMAGENS = '../assets/images/';

const cursos = [
    // Primeira linha
    { classe: 'rectangle-parent',  icone: 'icone_curso_web_design_sem_fundo.png',          classeIcone: 'icone-curso-web-design-sem-fundo', alt: 'Ícone do curso de Web design',            titulo: 'Web design',          descricao: 'Aprenda a criar sites responsivos e modernos.' },
    { classe: 'rectangle-group',   icone: 'icone_curso_photoshop_sem_fundo.png',           classeIcone: 'icone-curso-photoshop-sem-fundo',  alt: 'Ícone do curso de Photoshop',             titulo: 'Photoshop',           descricao: 'Domine a edição e criação de imagens para o mercado.' },
    { classe: 'rectangle-parent5', icone: 'icone_curso_ux_design.png',                     classeIcone: 'icone-curso-ux-design',            alt: 'Ícone do curso de UX Design',             titulo: 'UX Design',           descricao: 'Aprenda a projetar experiências digitais intuitivas.' },
 
    // Segunda linha
    { classe: 'rectangle-container', icone: 'icone_curso_ceo.png',                         classeIcone: 'icone-curso-ceo',                  alt: 'Ícone do curso de CEO',                   titulo: 'CEO',                 descricao: 'Desenvolva sua visão de liderança e gestão para conduzir negócios.' },
    { classe: 'rectangle-parent2', icone: 'icone_curso_planejamento_estrategico.png',      classeIcone: 'icone-curso-decisao-estrategica',  alt: 'Ícone do curso de Decisão estratégica',   titulo: 'Decisão estratégica', descricao: 'Aprenda a analisar cenários e tomar decisões assertivas.' },
    { classe: 'rectangle-parent3', icone: 'icone_curso_ia_letras_v2.png',                  classeIcone: 'icone-curso-ia',                   alt: 'Ícone do curso de Inteligência Artificial', titulo: 'I.A',               descricao: 'Ferramentas de Inteligência Artificial aplicadas.' },
 
    // Terceira linha
    { classe: 'rectangle-parent4', icone: 'icone_curso_gestao_financeira_v2.png',          classeIcone: 'icone-curso-gestao-financeira-v2', alt: 'Ícone do curso de Gestão Financeira',     titulo: 'Gestão Financeira',   descricao: 'Domine o fluxo de caixa e planejamento financeiro.' },
    { classe: 'rectangle-parent6', icone: 'icone_curso_java_poligono_nova_paleta.png',     classeIcone: 'icone-curso-poo-em-java',          alt: 'Ícone do curso de POO em Java',           titulo: 'POO em Java',         descricao: 'Programação orientada a objetos com base prática.' },
    { classe: 'rectangle-parent7', icone: 'icone_curso_analise_de_dados_v3.png',           classeIcone: 'icone-curso-analise-de-dados',     alt: 'Ícone do curso de Análise de Dados',      titulo: 'Análise de Dados',    descricao: 'Desenvolva habilidade de transformar dados em insights.' }
];

    function criarCard(curso) {
    const card = document.createElement('article');
    card.className = curso.classe;
 
    const faixa = document.createElement('div');
    faixa.className = 'frame-child';
 
    const img = document.createElement('img');
    img.className = curso.classeIcone;
    img.src = PASTA_IMAGENS + curso.icone;
    img.alt = curso.alt;
 
    const titulo = document.createElement('h2');
    titulo.textContent = curso.titulo;
 
    const descricao = document.createElement('p');
    descricao.className = 'aprenda-a-criar';
    descricao.textContent = curso.descricao;
 
    card.append(faixa, img, titulo, descricao);
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
 
    const grade = document.querySelector('.cursos-grid');
    if (!grade) {
        console.warn('Elemento .cursos-grid não encontrado no HTML.');
        return;
    }
 
    if (grade.children.length === 0) {
        cursos.forEach((curso) => grade.appendChild(criarCard(curso)));
    }
 
    const cards = grade.querySelectorAll(':scope > *');
 
    if ('IntersectionObserver' in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (!entrada.isIntersecting) return;
 
                const card = entrada.target;
                card.classList.add('visivel');
                setTimeout(() => { card.style.transitionDelay = ''; }, 800);
                observador.unobserve(card);
            });
        }, { threshold: 0.15 });
 
        cards.forEach((card, indice) => {
            card.style.transitionDelay = `${(indice % 3) * 120}ms`;
            observador.observe(card);
        });
    } else {
        cards.forEach((card) => card.classList.add('visivel'));
    }
 
    grade.querySelectorAll('img').forEach((img) => {
        const avisar = () => {
            console.warn('Imagem não encontrada:', img.getAttribute('src'));
            img.style.display = 'none';
        };
 
        if (img.complete && img.naturalWidth === 0) {
            avisar();
        } else {
            img.addEventListener('error', avisar);
        }
    });
});