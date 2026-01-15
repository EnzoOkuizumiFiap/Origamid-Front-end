/* Mudando a cor e o fundo de acordo com a página que está VIA JAVASCRIPT */
const links = document.querySelectorAll('nav a');

function ativarLink(link) {
    const href = link.href;
    const url = document.location.href;

    if (url === href) {
        link.style.color = 'white';
        link.style.background = 'black';
    }
}

links.forEach(ativarLink);
