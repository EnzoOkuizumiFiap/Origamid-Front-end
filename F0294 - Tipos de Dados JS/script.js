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



/* Funções */

function logCurso() {
    const nome = 'JavaScript';
    console.log (nome);
}

logCurso();

function logCurso2(nome, horas) { //<-- Parâmetro
    console.log(nome, horas, "horas");
    return {
        nome,
        horas,
    };
}

logCurso2("JavaScript", "40"); //<-- Argumento
const retorno = logCurso2("HTML", "20");

console.log(retorno.nome);




/* Escopo Funções */

const nomeTeste = "JavaScript";

function logCurso3() {
    const horas = 40;

    const nomeTeste = "HTML";
    console.log(nomeTeste);

    return nomeTeste;
}

const nomedaFuncao = logCurso3();

// console.log(horas); -> Não acessa as variáveis da função...

console.log("Nome da função ", nomedaFuncao);
console.log("Nome ", nomeTeste);

