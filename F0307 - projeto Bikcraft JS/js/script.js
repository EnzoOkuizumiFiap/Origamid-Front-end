/* ativar links do menu */
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);
/* Fim ativar links do menu */


/* Ativar itens do orçamento */
const parametros = new URLSearchParams(location.search); //É uma classe

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);
/* Fim Ativar itens do orçamento */


/* Perguntas Frequentes */
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
/* Fim Perguntas Frequentes */


/* Galeria de Bikes */
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

// Passo 3: Construir a lógica para funcionar a transição das imagens na galeria
function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches; //Verificar se o site está acima de 1000px
    
    if(media) { //Caso sim, ele ativa o prepend, que muda os elementos de acordo com o que você clicou
        galeriaContainer.prepend(img);
    }
}
// Passo 2: fazer uma função e addEventListener (Para escutar o click do mouse)
function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}
// Passo 1: fazer um forEach
galeria.forEach(eventosGaleria);


/* Animação */
if(window.SimpleAnime) {
    new SimpleAnime();
}