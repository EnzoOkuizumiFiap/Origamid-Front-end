console.log("Olá, Mundo!");

const nome = "JavaScript"; // é uma constante, não altera o seu valor

let nome2 = "JavaScript"; // é uma variável mutável, podemos alterar o seu valor
nome2 = "teste";

console.log(nome);
console.log(nome2);

//Selecionando um elemento do DOM via querySelector
const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');
const removendo = document.querySelector(".removendo a");

console.log(nav);
console.log(produtos);

console.log(produtos.innerHTML);

//Podemos remover um elemento
removendo.remove();

//Podemos usar CSS com style e alterar os estilos
nav.style.backgroundColor = "gray";
nav.style.padding = "1rem";

//Adiciona uma Class ao elemento nav
nav.classList.add("ativo");

