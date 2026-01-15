/* Arrays - [] representa uma lista de dados */
const lista = ["JavaScript", "HTML", "CSS", "PHP"];

console.log(lista);

const js = lista[0];
const html = lista[1];
const css = lista[2];

console.log(js);
console.log(html);
console.log(css);

console.log("\nTestando com loop For");
const body = document.querySelector("body");

/* Para não repetir o código, podemos criar um loop For */
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
    body.innerHTML += "<li>"+ lista[index] + "</li>";
}

console.log("\n");



/* forEach - Esse método recebe uma função que é executada para cada item da Array */
function adicionarBody(item) {
    body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);

/* Podemos simplificar mais */
lista.forEach(function (item, index){
    console.log(item, "no index", index);
})





/* querySelectorAll - seleciona todos os elementos que suprirem a condição do argumento 
e retorna um array-like (objeto que se parece com uma array) */

const links = document.querySelectorAll('nav a');
console.log(links); //<- Node List é um objeto, se parece com um array

links.forEach(function(item){
    const href = item.href;
    console.log(href); // Acessando cada link
});

console.log(links[links.length - 1]); // Pega o último elemento

console.log("\n");






/* Um Array possui diferentes métodos e propriedades */
//Os valores se chamam Item - JavaScript é um item do array

const lista2 = ["JavaScript", "HTML", "CSS"];

const ultimo = lista2.pop(); // Apaga o último
const primeiro = lista2.shift(); // Apaga o primeiro
// Podemos armazenar o item removido em uma variável.

lista.push("PHP"); // Adiciona um item novo

console.log(ultimo); 
console.log(primeiro);

console.log(lista2);

// Dica: Quadrado rosa é um método, retangulo azul é uma propriedade.
// Foreach é um método, pop() é uma propriedade.

console.log("\n")



/* Transformando um array-like para array - Array.from() */
const links2 = Array.from(document.querySelectorAll('nav a'));

links2.forEach(function(item){
    console.log(item.href);
});

const ultimoLink = links2.pop();
console.log(links2[item]);
