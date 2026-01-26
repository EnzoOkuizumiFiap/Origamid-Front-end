const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event) {
    const principal = document.querySelector("#imagem-principal");
    const clicado = event.currentTarget;
    principal.src = clicado.src;
    principal.alt = clicado.alt;
}

function galeriaClique(imagem) {
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);