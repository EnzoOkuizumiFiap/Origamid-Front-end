/* Condicionais */
const elemento = document.querySelector("p");
console.log(Boolean(elemento));

if (elemento || document.querySelector(body)) {
    console.log("teste");
}

/* Operadores de Comparação */
'JavaScript' === 'Javascript'; // false
'20' === 20; // false
30 !== 20; // false

document.querySelector(".texto") !== null; // false

// Comparar números

10 > 5; // true
20 < 10; // false
10 >= 10; // true
20 <= 30; // true




const texto = elemento.innerHTML;

if (texto.toUpperCase === "html") {
    console.log("Executando código");
}


if (10 >= 10) {
    console.log("teste número");
}