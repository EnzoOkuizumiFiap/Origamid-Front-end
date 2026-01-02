/**
 * Alguns tipos de dados no JavaScript:
 * String, Number, Object, Array, Boolean, Null/Undefined
*/

/* String */
const text = "JavaScript";
console.log(text);

/* Number */
let total = 0;

const compras = 30;
const imposto = 10;

total = compras + imposto;

const dobro = total * 2;
const dividir = total / 2;
const desconto = total - 20;

console.log(total);

/* Transformar string para Number */
const transformar = Number("20");

const soma = transformar + 20;

console.log(transformar);
console.log(soma);





/* Object (Objeto) - é uma forma de mantermos dados associados e organizados. Cria-se com chaves { }  */
/* Tudo é um Objeto... */

const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien"
}

const filme = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    diretor: "Peter Jackson"
}

console.log(livro);
console.log(livro.nome);
console.log(livro.autor);
console.log(2025 - livro.ano);


console.log(filme);
console.log('Livro: ' + livro.nome + ' Filme: ' + filme.nome);
console.log(filme.diretor.toUpperCase()); /*toUpperCase() é uma função */


/* Acessando uma propriedade no DOM */
const texto = document.querySelector('p');
console.log(texto.innerHTML);

