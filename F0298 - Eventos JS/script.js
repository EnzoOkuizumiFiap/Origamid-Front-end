/* Isso é um Método - uma função dentro de um objeto { } */
const curso = {
    nome: 'JavaScript',
    completar() { /* <- É uma função autodeclarada */
        console.log(this.nome + " Curso completo");
    },
}

curso.completar();





/* Eventos - Funções que serão executadas caso um Evento ocorra (Ex: Clique ou passar o mouse) */

const ativar = document.querySelector('.ativar');

/** @param {MouseEvent} event */
function ativarAoClick(event) {
    console.log('Clicou em: ', ativar);
    console.log(event.x);
}

ativar.addEventListener('click', ativarAoClick);




/* Agora sim usando Eventos */
const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar'); // <- classList é um objeto, com métodos como add
    /* o método toggle é bem interessante, add / remove */
}

botao.addEventListener('click', mostrar);





/* Testando window e pegando coordenadas do Mouse */
const larguraTela = window.innerWidth;

function coordenadaMouse (event) {
    const coordenadas = {
        x: event.x,
        y: event.y,
    };
    console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse)


function scroll (event) {
    console.log(window.scrollY);
}

window.addEventListener("scroll", scroll);